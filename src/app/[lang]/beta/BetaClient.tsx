"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "../../../components/LanguageSwitcher";

interface FormData {
  firstName: string;
  email: string;
  platform: "android" | "ios";
}

const initialForm: FormData = {
  firstName: "",
  email: "",
  platform: "android",
};

export default function BetaClient({ dict, dictNav, lang }: { dict: any; dictNav: any; lang: string }) {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePlatformSelect = (platform: "android" | "ios") => {
    setForm((prev) => ({ ...prev, platform }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((res) => setTimeout(res, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const isValid = form.email.trim() && form.platform;

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container navbar-inner">
          <Link href={`/${lang}`} className="navbar-logo">
            <Image src="/icon.png" alt="Mensola" width={36} height={36} />
            <span>mensola</span>
            <span className="navbar-badge">{dictNav.beta}</span>
          </Link>
          <LanguageSwitcher currentLang={lang} />
        </div>
      </nav>

      {/* Background */}
      <div className="apply-page-bg">
        <div className="apply-page-orb apply-page-orb-1" />
        <div className="apply-page-orb apply-page-orb-2" />
      </div>

      <main className="apply-page">
        <div className="container">
          <div className="apply-content">
            {/* Header */}
            <div className="apply-header">
              <Link href={`/${lang}`} className="apply-back">
                {dict.back}
              </Link>
              <h1 className="apply-title">
                {dict.title1} <span className="gradient-text">{dict.title2}</span>
              </h1>
              <p className="apply-subtitle">
                {dict.subtitle}
              </p>
            </div>

            {submitted ? (
              /* Success State */
              <div className="success-state">
                <div className="success-icon">🎉</div>
                <h2 className="success-title">
                  {dict.successTitle1} <span className="gradient-text">{dict.successTitle2}</span>
                </h2>
                <p className="success-subtitle">
                  {dict.successSubtitle1}{" "}
                  <strong style={{ color: "var(--text-primary)" }}>
                    {form.email}
                  </strong>{" "}
                  {dict.successSubtitle2}
                </p>
                <Link href={`/${lang}`} className="btn-primary" style={{ marginTop: 8 }}>
                  {dict.successBtn}
                </Link>
              </div>
            ) : (
              /* Form */
              <form className="apply-form" onSubmit={handleSubmit}>
                {/* First Name */}
                <div className="form-field">
                  <label className="form-label" htmlFor="firstName">
                    {dict.formFirstName} <span>{dict.formOptional}</span>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    className="form-input"
                    placeholder={dict.formPlaceholderName}
                    value={form.firstName}
                    onChange={handleChange}
                  />
                </div>

                {/* Email */}
                <div className="form-field">
                  <label className="form-label" htmlFor="email">
                    {dict.formEmail} <span style={{ color: "var(--blue-500)" }}>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-input"
                    placeholder={dict.formPlaceholderEmail}
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Platform / Device */}
                <div className="form-field">
                  <label className="form-label">
                    {dict.formPlatform} <span style={{ color: "var(--blue-500)" }}>*</span>
                  </label>
                  <div className="platform-chips">
                    <button
                      type="button"
                      className={`platform-chip ${form.platform === "android" ? "active" : ""}`}
                      onClick={() => handlePlatformSelect("android")}
                    >
                      <div className="chip-content">
                        {/* Android SVG */}
                        <svg className="chip-icon-svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.6,9.48l1.84-3.18c0.16-0.31,0.04-0.69-0.26-0.85c-0.31-0.16-0.69-0.04-0.85,0.26L16.42,9 c-1.31-0.6-2.8-0.96-4.42-0.96S8.88,8.4,7.58,9L5.66,5.71C5.5,5.4,5.13,5.29,4.82,5.45C4.51,5.61,4.4,5.99,4.56,6.3l1.84,3.18 C4.35,11.23,3,13.96,3,17h18C21,13.96,19.65,11.23,17.6,9.48z M7.25,14.5c-0.62,0-1.12-0.5-1.12-1.12c0-0.62,0.5-1.12,1.12-1.12 c0.62,0,1.12,0.5,1.12,1.12C8.38,14,7.87,14.5,7.25,14.5z M16.75,14.5c-0.62,0-1.12-0.5-1.12-1.12c0-0.62,0.5-1.12,1.12-1.12 c0.62,0,1.12,0.5,1.12,1.12C17.88,14,17.37,14.5,16.75,14.5z" />
                        </svg>
                        <span className="chip-text">{dict.chipAndroid}</span>
                      </div>
                      <span className="chip-badge active-badge">{dict.badgeLive}</span>
                    </button>
                    
                    <button
                      type="button"
                      className={`platform-chip ${form.platform === "ios" ? "active" : ""}`}
                      onClick={() => handlePlatformSelect("ios")}
                    >
                      <div className="chip-content">
                        {/* Apple SVG */}
                        <svg className="chip-icon-svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12.1537 10.2312C12.1246 8.04944 13.9312 6.95359 14.0157 6.89868C12.9818 5.37894 11.4054 5.14728 10.8659 5.0933C9.48914 4.95473 8.16335 5.91899 7.45663 5.91899C6.73602 5.91899 5.65934 5.12781 4.51684 5.15858C3.01373 5.1878 1.61908 5.99222 0.841532 7.35165C-0.741029 10.1278 0.435773 14.2384 1.98634 16.485C2.7402 17.5752 3.63378 18.8105 4.81033 18.7565C5.93926 18.6987 6.37568 18.0165 7.72124 18.0165C9.05286 18.0165 9.44754 18.7565 10.6327 18.7258C11.854 18.6987 12.6315 17.5982 13.3854 16.485C14.261 15.2023 14.6191 13.9482 14.6468 13.8827C14.6148 13.8711 12.1813 12.9463 12.1537 10.2312ZM9.8519 3.41164C10.4682 2.66442 10.8872 1.63604 10.7738 0.617188C9.88214 0.655716 8.78443 1.21811 8.14081 1.96144C7.57077 2.61081 7.07085 3.66699 7.20165 4.66497C8.19632 4.74205 9.21528 4.17551 9.8519 3.41164Z" />
                        </svg>
                        <span className="chip-text">{dict.chipIos}</span>
                      </div>
                      <span className="chip-badge soon-badge">{dict.badgeSoon}</span>
                    </button>
                  </div>
                </div>

                {/* Submit Area */}
                <div className="form-submit-area" style={{ marginTop: '2rem' }}>
                  <p className="form-note">
                    {dict.note}
                  </p>
                  <button
                    id="beta-submit-btn"
                    type="submit"
                    className="form-submit-btn"
                    disabled={!isValid || loading}
                  >
                    {loading ? (
                      <>
                        <span style={{ display: "inline-block", animation: "spin 1s linear infinite" }}>⏳</span>
                        {dict.btnLoading}
                      </>
                    ) : (
                      <>{dict.btnSubmit}</>
                    )}
                  </button>
                  <p className="form-privacy">
                    {dict.privacy}
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .platform-chips {
          display: flex;
          gap: 16px;
          margin-top: 8px;
        }

        .platform-chip {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 20px 16px;
          background: var(--bg-card);
          border: 2px solid var(--border);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 0.25s ease;
          position: relative;
          overflow: hidden;
        }

        .platform-chip:hover {
          background: var(--bg-card-hover);
          border-color: rgba(74, 158, 255, 0.3);
          transform: translateY(-2px);
        }

        .platform-chip.active {
          background: rgba(74, 158, 255, 0.08);
          border-color: var(--blue-500);
          box-shadow: 0 4px 20px rgba(74, 158, 255, 0.15);
        }

        .chip-content {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .chip-icon-svg {
          width: 28px;
          height: 28px;
          color: var(--text-primary);
        }

        .chip-text {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .chip-badge {
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 4px 10px;
          border-radius: 100px;
        }

        .active-badge {
          background: rgba(46, 213, 115, 0.15);
          color: #2ed573;
          border: 1px solid rgba(46, 213, 115, 0.3);
        }

        .soon-badge {
          background: rgba(255, 171, 0, 0.15);
          color: #ffab00;
          border: 1px solid rgba(255, 171, 0, 0.3);
        }

        .form-note {
          font-size: 0.85rem;
          color: var(--text-secondary);
          text-align: center;
          margin-bottom: 16px;
          padding: 12px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: var(--radius-sm);
          border: 1px solid var(--border);
        }

        .form-label span {
          color: var(--text-muted);
          font-weight: normal;
          font-size: 0.8rem;
          margin-left: 4px;
        }

        @media (max-width: 600px) {
          .platform-chips {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}
