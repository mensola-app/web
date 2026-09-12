"use client";

import { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export type PreviewTargetType = "movie_list" | "playlist" | "user";

export interface PreviewCardProps {
  targetType: PreviewTargetType;
  targetId: string;
  title: string;
  subtitle?: string;
  description?: string;
  image?: string | null;
  creator?: {
    name?: string | null;
    username?: string | null;
    avatar?: string | null;
  } | null;
  badgeText?: string;
  initialLang?: "tr" | "en";
}

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.enescdev.mensola";

const i18nTexts = {
  tr: {
    movieList: "Film Listesi",
    playlist: "Çalma Listesi",
    user: "Kullanıcı Profili",
    openInApp: "Uygulamada Aç",
    redirecting: "Uygulamaya yönlendiriliyorsunuz...",
    downloadPlayStore: "Google Play'den İndir",
    copyright: "© 2026 Mensola. Tüm hakları saklıdır.",
    defaultMovieListDesc: "Mensola uygulamasında bu film listesini ve daha fazlasını keşfedin.",
    defaultPlaylistDesc: "Mensola uygulamasında bu çalma listesini ve daha fazlasını dinleyin.",
    defaultUserDesc: "Mensola profilini, listelerini ve kültürel zevklerini keşfedin.",
  },
  en: {
    movieList: "Movie List",
    playlist: "Playlist",
    user: "User Profile",
    openInApp: "Open in App",
    redirecting: "Redirecting to the app...",
    downloadPlayStore: "Get it on Google Play",
    copyright: "© 2026 Mensola. All rights reserved.",
    defaultMovieListDesc: "Explore this movie list and more cultural recommendations on Mensola.",
    defaultPlaylistDesc: "Listen to this playlist and more cultural recommendations on Mensola.",
    defaultUserDesc: "Explore profile, lists, and cultural taste on Mensola.",
  },
};

export default function PreviewCard({
  targetType,
  targetId,
  title,
  subtitle,
  description,
  image,
  creator,
  badgeText,
  initialLang = "tr",
}: PreviewCardProps) {
  const [activeLang, setActiveLang] = useState<"tr" | "en">(initialLang);
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    // 1. Check URL query parameters (?lang=tr or ?lang=en)
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const urlLang = searchParams.get("lang");
      if (urlLang === "tr" || urlLang === "en") {
        setActiveLang(urlLang);
        try {
          localStorage.setItem("mensola_preview_lang", urlLang);
          document.cookie = `mensola_preview_lang=${urlLang}; path=/; max-age=31536000; SameSite=Lax`;
        } catch {}
        return;
      }
    }

    // 2. Check saved language preference in localStorage
    try {
      const savedLang = localStorage.getItem("mensola_preview_lang") as "tr" | "en";
      if (savedLang === "tr" || savedLang === "en") {
        setActiveLang(savedLang);
        return;
      }
    } catch {
      // ignore
    }

    // 3. Otherwise detect from browser navigator
    if (typeof navigator !== "undefined" && navigator.language) {
      if (navigator.language.startsWith("tr")) {
        setActiveLang("tr");
      } else {
        setActiveLang("en");
      }
    }
  }, []);

  const handleLanguageChange = (newLang: "tr" | "en") => {
    setActiveLang(newLang);
    try {
      localStorage.setItem("mensola_preview_lang", newLang);
      document.cookie = `mensola_preview_lang=${newLang}; path=/; max-age=31536000; SameSite=Lax`;
      document.documentElement.lang = newLang;

      // Update URL query parameter without page reload
      if (typeof window !== "undefined") {
        const url = new URL(window.location.href);
        url.searchParams.set("lang", newLang);
        window.history.replaceState(null, "", url.toString());
      }
    } catch {
      // ignore
    }
  };

  const t = i18nTexts[activeLang] || i18nTexts.tr;
  const fallbackDesc =
    targetType === "movie_list"
      ? t.defaultMovieListDesc
      : targetType === "playlist"
        ? t.defaultPlaylistDesc
        : t.defaultUserDesc;
  const displayDescription = description || fallbackDesc;

  const getTargetRoute = useCallback(() => {
    return targetType === "movie_list"
      ? "movie-lists"
      : targetType === "user"
        ? "users"
        : "playlists";
  }, [targetType]);

  // Compute deep link matching mobile Expo Router scheme
  const getDeepLinkUrl = useCallback(() => {
    return `mensola://${getTargetRoute()}/${targetId}`;
  }, [getTargetRoute, targetId]);

  // Compute Android Intent URL (opens app natively or falls back to Play Store)
  const getIntentUrl = useCallback(() => {
    return `intent://${getTargetRoute()}/${targetId}#Intent;scheme=mensola;package=com.enescdev.mensola;S.browser_fallback_url=${encodeURIComponent(PLAY_STORE_URL)};end`;
  }, [getTargetRoute, targetId]);

  // Deep link opening and fallback logic
  const handleOpenApp = useCallback((isManual = false) => {
    if (typeof window === "undefined") return;

    setIsRedirecting(true);
    const userAgent = navigator.userAgent || "";
    const isAndroid = /Android/i.test(userAgent);
    const startTime = Date.now();

    if (isAndroid) {
      // Android Intent URL: Chrome / Samsung Internet launches app without blocking
      const intentUrl = getIntentUrl();
      window.location.href = intentUrl;
    } else {
      // Desktop / other environments
      const deepLinkUrl = getDeepLinkUrl();
      window.location.href = deepLinkUrl;
    }

    // Fallback: If app does not open within 1.8s and user remains on web page
    const timer = setTimeout(() => {
      setIsRedirecting(false);
      if (!document.hidden && Date.now() - startTime < 3500) {
        if (isManual && !isAndroid) {
          window.location.href = PLAY_STORE_URL;
        }
      }
    }, 1800);

    // Cancel fallback redirect if app successfully launches and sends page to background
    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearTimeout(timer);
        setIsRedirecting(false);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange, { once: true });
    window.addEventListener("pagehide", () => clearTimeout(timer), { once: true });
  }, [getDeepLinkUrl, getIntentUrl]);

  // Auto-trigger app redirect on page load
  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      // Allow disabling auto-redirect via query param (e.g. ?noredirect=1 for bot/preview)
      if (searchParams.get("noredirect") === "1" || searchParams.get("preview") === "1") {
        return;
      }
    }

    const timer = setTimeout(() => {
      handleOpenApp(false);
    }, 250);

    return () => clearTimeout(timer);
  }, [handleOpenApp]);

  const defaultBadge =
    targetType === "movie_list"
      ? t.movieList
      : targetType === "playlist"
        ? t.playlist
        : t.user;

  return (
    <div className="preview-page">
      {/* Background ambient glow orbs */}
      <div className="teaser-bg">
        <div className="teaser-orb teaser-orb-1" />
        <div className="teaser-orb teaser-orb-2" />
        <div className="teaser-orb teaser-orb-3" />
      </div>

      {/* Top Navbar */}
      <nav className="navbar" style={{ position: "relative", zIndex: 10 }}>
        <div className="container navbar-inner" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/" className="navbar-logo">
            <Image src="/icon.png" alt="Mensola" width={34} height={34} priority />
            <span>mensola</span>
            <span className="navbar-badge">Beta</span>
          </Link>

          {/* Interactive Language Switcher */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.85rem", background: "rgba(255,255,255,0.03)", padding: "2px 4px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.08)" }}>
            <button
              type="button"
              onClick={() => handleLanguageChange("tr")}
              aria-label="Türkçe"
              style={{
                background: activeLang === "tr" ? "rgba(74, 158, 255, 0.15)" : "transparent",
                border: activeLang === "tr" ? "1px solid rgba(74, 158, 255, 0.3)" : "1px solid transparent",
                borderRadius: "6px",
                color: activeLang === "tr" ? "var(--blue-400)" : "var(--text-muted)",
                fontWeight: activeLang === "tr" ? "700" : "500",
                cursor: "pointer",
                padding: "3px 8px",
                transition: "all 0.2s ease",
              }}
            >
              TR
            </button>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
            <button
              type="button"
              onClick={() => handleLanguageChange("en")}
              aria-label="English"
              style={{
                background: activeLang === "en" ? "rgba(74, 158, 255, 0.15)" : "transparent",
                border: activeLang === "en" ? "1px solid rgba(74, 158, 255, 0.3)" : "1px solid transparent",
                borderRadius: "6px",
                color: activeLang === "en" ? "var(--blue-400)" : "var(--text-muted)",
                fontWeight: activeLang === "en" ? "700" : "500",
                cursor: "pointer",
                padding: "3px 8px",
                transition: "all 0.2s ease",
              }}
            >
              EN
            </button>
          </div>
        </div>
      </nav>

      {/* Main Centered Preview Card */}
      <main className="preview-main">
        <div className="preview-container">
          <div className="preview-card">
            {/* Type Badge */}
            <div className="preview-badge">
              <span className="teaser-badge-dot" />
              {badgeText || defaultBadge}
            </div>

            {/* Visual Content: Avatar or Cover */}
            {targetType === "user" ? (
              <div className="preview-avatar-wrap">
                <div className="preview-avatar-glow" />
                {image ? (
                  <img
                    src={image}
                    alt={title}
                    className="preview-avatar-img"
                  />
                ) : (
                  <div className="preview-avatar-fallback">
                    {title ? title.charAt(0).toUpperCase() : "M"}
                  </div>
                )}
              </div>
            ) : (
              <div className="preview-cover-wrap">
                {image ? (
                  <img
                    src={image}
                    alt={title}
                    className="preview-cover-img"
                  />
                ) : (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      color: "var(--blue-400)",
                    }}
                  >
                    {targetType === "movie_list" ? (
                      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                        <line x1="7" y1="2" x2="7" y2="22" />
                        <line x1="17" y1="2" x2="17" y2="22" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <line x1="2" y1="7" x2="7" y2="7" />
                        <line x1="2" y1="17" x2="7" y2="17" />
                        <line x1="17" y1="17" x2="22" y2="17" />
                        <line x1="17" y1="7" x2="22" y2="7" />
                      </svg>
                    ) : (
                      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M9 18V5l12-2v13" />
                        <circle cx="6" cy="18" r="3" />
                        <circle cx="18" cy="16" r="3" />
                      </svg>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Title */}
            <h1 className="preview-title">{title}</h1>

            {/* Subtitle / @username */}
            {subtitle && <p className="preview-subtitle">{subtitle}</p>}

            {/* Description */}
            {displayDescription && <p className="preview-desc">{displayDescription}</p>}

            {/* Creator Pill (for MovieList and Playlist) */}
            {creator && (creator.name || creator.username) && (
              <div className="preview-creator-pill">
                {creator.avatar ? (
                  <img
                    src={creator.avatar}
                    alt={creator.name || creator.username || ""}
                    className="preview-creator-avatar"
                  />
                ) : (
                  <div className="preview-creator-avatar" style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", color: "#fff" }}>
                    {(creator.name || creator.username || "M").charAt(0).toUpperCase()}
                  </div>
                )}
                <span className="preview-creator-name">
                  {creator.name || creator.username}
                </span>
                {creator.username && (
                  <span className="preview-creator-handle">@{creator.username}</span>
                )}
              </div>
            )}

            {/* Redirecting Banner / Visual Feedback */}
            {isRedirecting && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "8px 14px",
                  borderRadius: "20px",
                  backgroundColor: "rgba(74, 158, 255, 0.12)",
                  border: "1px solid rgba(74, 158, 255, 0.25)",
                  color: "var(--blue-400)",
                  fontSize: "0.85rem",
                  fontWeight: "500",
                  marginBottom: "16px",
                  boxShadow: "0 0 15px rgba(74, 158, 255, 0.15)",
                }}
              >
                <div
                  style={{
                    width: "14px",
                    height: "14px",
                    border: "2px solid rgba(74, 158, 255, 0.3)",
                    borderTopColor: "var(--blue-400)",
                    borderRadius: "50%",
                    animation: "spin 0.8s linear infinite",
                  }}
                />
                <span>{t.redirecting}</span>
              </div>
            )}

            {/* Action Buttons */}
            <div className="preview-actions">
              {/* Primary "Uygulamada Aç" Button */}
              <button
                type="button"
                className="btn-open-app"
                onClick={() => handleOpenApp(true)}
                id="btn-open-in-app"
              >
                <Image src="/icon.png" alt="Mensola" width={22} height={22} />
                <span>{t.openInApp}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              {/* Secondary Google Play Store fallback link */}
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="preview-playstore-btn"
                id="btn-google-play"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                  <path d="M3.609 1.814L13.793 12 3.61 22.186A2.22 2.22 0 0 1 3 20.615V3.385c0-.6.22-1.164.609-1.571z" fill="#00D3FF" />
                  <path d="M17.207 8.586l-3.414 3.414 3.414 3.414 3.84-2.186c1.096-.624 1.096-1.632 0-2.256l-3.84-2.386z" fill="#FFCE00" />
                  <path d="M3.609 1.814l10.184 10.186 3.414-3.414L6.155.334c-.81-.46-1.85-.29-2.546.48z" fill="#00F076" />
                  <path d="M13.793 12L3.609 22.186c.696.77 1.736.94 2.546.48l11.052-6.252-3.414-3.414z" fill="#FF3A44" />
                </svg>
                <span>{t.downloadPlayStore}</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="preview-footer">
        <p>{t.copyright}</p>
      </footer>
    </div>
  );
}
