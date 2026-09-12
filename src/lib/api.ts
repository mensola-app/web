import { headers, cookies } from "next/headers";

export async function getServerLang(queryLang?: string): Promise<"tr" | "en"> {
    if (queryLang === "tr" || queryLang === "en") {
        return queryLang;
    }

    try {
        const cookieStore = await cookies();
        const savedCookie = cookieStore.get("mensola_preview_lang")?.value || cookieStore.get("mensola_lang")?.value;
        if (savedCookie === "tr" || savedCookie === "en") {
            return savedCookie;
        }
    } catch {
        // fallback
    }

    try {
        const headerList = await headers();
        const acceptLang = headerList.get("accept-language");
        if (acceptLang) {
            const lower = acceptLang.toLowerCase();
            const trIndex = lower.indexOf("tr");
            const enIndex = lower.indexOf("en");

            if (trIndex !== -1 && (enIndex === -1 || trIndex < enIndex)) {
                return "tr";
            }
            if (enIndex !== -1 && (trIndex === -1 || enIndex < trIndex)) {
                return "en";
            }
            if (trIndex === -1 && enIndex === -1) {
                return "en";
            }
        }
    } catch {
        // fallback
    }
    return "tr";
}


const getBaseApiUrl = () => {
    let url = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;
    if (!url) {
        url = process.env.NODE_ENV === "production" ? "https://api.mensola.app" : "http://localhost:3457";
    }
    return url.replace(/\/$/, "");
};

const getV1ApiUrl = () => {
    const base = getBaseApiUrl();
    return base.endsWith("/v1") ? base : `${base}/v1`;
};

export interface MovieListData {
    id: string;
    title: string;
    description?: string | null;
    image?: string | null;
    owners?: Array<{
        id: string;
        username: string;
        fullname?: string | null;
        avatar?: string | null;
    }>;
}

export interface PlaylistData {
    id: string;
    title: string;
    description?: string | null;
    image?: string | null;
    creator?: {
        id: string;
        username: string;
        fullname?: string | null;
        avatar?: string | null;
    };
    owners?: Array<{
        id: string;
        username: string;
        fullname?: string | null;
        avatar?: string | null;
    }>;
    songCount?: number;
}

export interface UserProfileData {
    id: string;
    username: string;
    fullname?: string | null;
    bio?: string | null;
    avatar?: string | null;
}

export async function fetchMovieList(id: string): Promise<MovieListData | null> {
    try {
        const v1Url = getV1ApiUrl();
        const res = await fetch(`${v1Url}/movies/lists/${id}`, {
            next: { revalidate: 60 },
            signal: AbortSignal.timeout(5000),
        });
        if (!res.ok) return null;
        const json = await res.json();
        return json.data || null;
    } catch (err) {
        console.error("fetchMovieList error:", err);
        return null;
    }
}

export async function fetchPlaylist(id: string): Promise<PlaylistData | null> {
    try {
        const v1Url = getV1ApiUrl();
        const res = await fetch(`${v1Url}/playlists/${id}`, {
            next: { revalidate: 60 },
            signal: AbortSignal.timeout(5000),
        });
        if (!res.ok) return null;
        const json = await res.json();
        return json.data || null;
    } catch (err) {
        console.error("fetchPlaylist error:", err);
        return null;
    }
}

export async function fetchUser(id: string): Promise<UserProfileData | null> {
    try {
        const v1Url = getV1ApiUrl();
        const res = await fetch(`${v1Url}/users/${id}`, {
            next: { revalidate: 60 },
            signal: AbortSignal.timeout(5000),
        });
        if (!res.ok) return null;
        const json = await res.json();
        return json.data?.profile || json.data || null;
    } catch (err) {
        console.error("fetchUser error:", err);
        return null;
    }
}

export async function resolveShortLink(code: string): Promise<{ targetType: "movie_list" | "playlist" | "user"; targetId: string } | null> {
    const base = getBaseApiUrl();
    const candidateUrls = [
        `${base}/api/short-links/${code}`,
        `${base}/short-links/${code}`,
        `${getV1ApiUrl()}/short-links/${code}`,
    ];

    for (const url of candidateUrls) {
        try {
            const res = await fetch(url, {
                next: { revalidate: 60 },
                signal: AbortSignal.timeout(4000),
            });
            if (res.ok) {
                const json = await res.json();
                const payload = json.data || json;
                if (payload?.targetType && payload?.targetId) {
                    return {
                        targetType: payload.targetType,
                        targetId: payload.targetId,
                    };
                }
            }
        } catch (err) {
            // Try next candidate url
        }
    }

    return null;
}
