"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";

interface TeaserDict {
  badge: string;
  appName: string;
  appCategory: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix: string;
  subtitle: string;
  playTop: string;
  playBottom: string;
  playNotice: string;
  playNoticeBtn: string;
  btnBeta: string;
  btnHome: string;
  pills: string[];
  modalTitle: string;
  modalDesc: string;
  modalClose: string;
  modalAction: string;
  footerCopy: string;
  footerPrivacy: string;
  footerTerms: string;
}

interface NavDict {
  beta: string;
  apply: string;
}

interface Props {
  dict: TeaserDict;
  dictNav: NavDict;
  lang: string;
}

export default function SharedContentLanding({ dict, dictNav, lang }: Props) {
  const [showModal, setShowModal] = useState(false);
  const [bannerAlert, setBannerAlert] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    };
    if (showModal) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showModal]);

  const handlePlayClick = () => {
    setShowModal(true);
    setBannerAlert(true);
  };

  return (
    <div className="teaser-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container navbar-inner">
          <Link href={`/${lang}`} className="navbar-logo">
            <Image src="/icon.png" alt="Mensola" width={36} height={36} />
            <span>mensola</span>
            <span className="navbar-badge">{dictNav.beta}</span>
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Link href={`/${lang}/beta`} className="btn-primary" style={{ padding: "8px 16px", fontSize: "0.82rem" }}>
              {dictNav.apply}
            </Link>
            <LanguageSwitcher currentLang={lang} />
          </div>
        </div>
      </nav>

      {/* Atmospheric Background Orbs */}
      <div className="teaser-bg">
        <div className="teaser-orb teaser-orb-1" />
        <div className="teaser-orb teaser-orb-2" />
        <div className="teaser-orb teaser-orb-3" />
      </div>

      {/* Main Landing / Preview Card */}
      <main className="teaser-main">
        <div className="teaser-container">
          <div className="teaser-card">
            {/* Top Status Badge */}
            <div className="teaser-badge">
              <span className="teaser-badge-dot" />
              {dict.badge}
            </div>

            {/* App Icon */}
            <div className="teaser-app-icon-wrap">
              <div className="teaser-app-icon-glow" />
              <Image
                src="/icon.png"
                alt="Mensola App"
                width={80}
                height={80}
                className="teaser-app-icon"
                priority
              />
            </div>

            {/* App Brand Tag */}
            <div className="teaser-brand-meta">
              <h2 className="teaser-app-name">{dict.appName}</h2>
              <span className="teaser-app-category">{dict.appCategory}</span>
            </div>

            <div className="teaser-divider" />

            {/* Headline & Subtitle */}
            <h1 className="teaser-title">
              {dict.titlePrefix}{" "}
              <span className="gradient-text">{dict.titleHighlight}</span>{" "}
              {dict.titleSuffix}
            </h1>

            <p className="teaser-subtitle">{dict.subtitle}</p>

            {/* Feature Pills */}
            <div className="teaser-pills">
              {dict.pills.map((pill, i) => (
                <span key={i} className="teaser-pill">
                  {pill}
                </span>
              ))}
            </div>

            {/* Status notice if Google Play was clicked */}
            {bannerAlert && (
              <div className="teaser-status-banner">
                <span className="teaser-status-icon">ℹ️</span>
                <div className="teaser-status-text">
                  <p>{dict.playNotice}</p>
                </div>
                <Link href={`/${lang}/beta`} className="teaser-status-link">
                  {dict.playNoticeBtn}
                </Link>
              </div>
            )}

            {/* Actions Area */}
            <div className="teaser-actions">
              {/* Google Play Store Badge Button */}
              <button
                type="button"
                className="google-play-btn"
                onClick={handlePlayClick}
                aria-label="Google Play Store"
                id="google-play-badge"
              >
                <div className="google-play-icon">
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
                    <path
                      d="M3.609 1.814L13.793 12 3.61 22.186A2.22 2.22 0 0 1 3 20.615V3.385c0-.6.22-1.164.609-1.571z"
                      fill="#00D3FF"
                    />
                    <path
                      d="M17.207 8.586l-3.414 3.414 3.414 3.414 3.84-2.186c1.096-.624 1.096-1.632 0-2.256l-3.84-2.386z"
                      fill="#FFCE00"
                    />
                    <path
                      d="M3.609 1.814l10.184 10.186 3.414-3.414L6.155.334c-.81-.46-1.85-.29-2.546.48z"
                      fill="#00F076"
                    />
                    <path
                      d="M13.793 12L3.609 22.186c.696.77 1.736.94 2.546.48l11.052-6.252-3.414-3.414z"
                      fill="#FF3A44"
                    />
                  </svg>
                </div>
                <div className="google-play-text">
                  <span className="google-play-top">{dict.playTop}</span>
                  <span className="google-play-brand">{dict.playBottom}</span>
                </div>
              </button>

              {/* Secondary CTA: Closed Beta Application */}
              <Link href={`/${lang}/beta`} className="btn-primary teaser-btn-beta">
                {dict.btnBeta}
              </Link>

              {/* Back to Home Link */}
              <Link href={`/${lang}`} className="teaser-home-link">
                ← {dict.btnHome}
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Info Modal */}
      {showModal && (
        <div
          className="teaser-modal-overlay"
          onClick={() => setShowModal(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="teaser-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="teaser-modal-header-icon">
              <span style={{ fontSize: "2rem" }}>🚀</span>
            </div>
            <h3 className="teaser-modal-title">{dict.modalTitle}</h3>
            <p className="teaser-modal-desc">{dict.modalDesc}</p>
            <div className="teaser-modal-actions">
              <Link
                href={`/${lang}/beta`}
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
                onClick={() => setShowModal(false)}
              >
                {dict.modalAction}
              </Link>
              <button
                type="button"
                className="btn-secondary"
                style={{ width: "100%", justifyContent: "center" }}
                onClick={() => setShowModal(false)}
              >
                {dict.modalClose}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="teaser-footer">
        <div className="container teaser-footer-inner">
          <p>© 2026 {dict.footerCopy}</p>
          <div className="teaser-footer-links">
            <Link href={`/${lang}/privacy-policy`}>{dict.footerPrivacy}</Link>
            <span>•</span>
            <Link href={`/${lang}/terms`}>{dict.footerTerms}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
