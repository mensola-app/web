import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'tr'];
const defaultLocale = 'en';

const exemptPaths = ['/movie-lists', '/playlists', '/users', '/.well-known'];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Check if pathname is an exempted preview route (no locale prefix required)
  if (exemptPaths.some((prefix) => pathname.startsWith(prefix))) {
    return;
  }

  // 2. Check if pathname matches a potential short link code (e.g. /5nWaZ or /tr/5nWaZ or /en/5nWaZ)
  const shortCodeMatch = pathname.match(/^(?:\/(en|tr))?\/([1-9a-zA-HJ-NP-Za-km-z]{5,8})$/);
  if (shortCodeMatch) {
    const explicitLang = shortCodeMatch[1];
    const code = shortCodeMatch[2];
    let base = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;
    if (!base) {
      base = process.env.NODE_ENV === 'production' ? 'https://api.mensola.app' : 'http://localhost:3457';
    }
    base = base.replace(/\/$/, "");

    const candidateUrls = [
      `${base}/api/short-links/${code}`,
      `${base}/short-links/${code}`,
      `${base}/v1/short-links/${code}`,
    ];

    for (const candidate of candidateUrls) {
      try {
        const res = await fetch(candidate, {
          next: { revalidate: 60 },
          signal: AbortSignal.timeout(4000),
        });
        if (res.ok) {
          const json = await res.json();
          const payload = json.data || json;
          if (payload?.targetType && payload?.targetId) {
            const route =
              payload.targetType === "movie_list"
                ? "movie-lists"
                : payload.targetType === "user"
                  ? "users"
                  : "playlists";
            const destUrl = new URL(`/${route}/${payload.targetId}`, request.url);
            request.nextUrl.searchParams.forEach((value, key) => {
              destUrl.searchParams.set(key, value);
            });
            if (explicitLang) {
              destUrl.searchParams.set("lang", explicitLang);
            }
            return NextResponse.redirect(destUrl, 302);
          }
        }
      } catch (err) {
        // Continue to next candidate
      }
    }
  }

  // 3. Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // 4. Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

function getLocale(request: NextRequest): string {
  const acceptLang = request.headers.get('accept-language');
  if (acceptLang && acceptLang.includes('tr')) {
    return 'tr';
  }
  return defaultLocale;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next) and well-known
    '/((?!_next|icon.png|favicon.ico|.well-known).*)',
  ],
};
