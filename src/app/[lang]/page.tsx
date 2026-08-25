import Link from "next/link";
import Image from "next/image";
import { getDictionary, Locale } from "../../i18n";
import LanguageSwitcher from "../../components/LanguageSwitcher";

export default async function HomePage(props: { params: Promise<{ lang: string }> }) {
  const { lang: paramLang } = await props.params;
  const lang = paramLang as Locale;
  const dict = await getDictionary(lang);

  return (
    <>
      {/* ─── Navbar ─── */}
      <nav className="navbar">
        <div className="container navbar-inner">
          <Link href={`/${lang}`} className="navbar-logo">
            <Image src="/icon.png" alt="Mensola" width={36} height={36} />
            <span>mensola</span>
            <span className="navbar-badge">{dict.nav.beta}</span>
          </Link>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link href={`/${lang}/beta`} className="btn-primary">
              {dict.nav.apply}
            </Link>
            <LanguageSwitcher currentLang={lang} />
          </div>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-orb hero-orb-3" />
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              {dict.home.heroEyebrow}
            </div>
            <h1 className="hero-title">
              {dict.home.heroTitle1}{" "}
              <span className="gradient-text">{dict.home.heroTitle2}</span>
            </h1>
            <p className="hero-subtitle">
              {dict.home.heroSubtitle}
            </p>
            <div className="hero-actions">
              <Link href={`/${lang}/beta`} className="btn-primary btn-large">
                {dict.home.heroBtnPrimary}
              </Link>
              <a href="#features" className="btn-secondary btn-large">
                {dict.home.heroBtnSecondary}
              </a>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-number">{dict.home.stat1Num}</div>
                <div className="hero-stat-label">{dict.home.stat1Lbl}</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">{dict.home.stat2Num}</div>
                <div className="hero-stat-label">{dict.home.stat2Lbl}</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">{dict.home.stat3Num}</div>
                <div className="hero-stat-label">{dict.home.stat3Lbl}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Mockup ─── */}
      <section className="mockup-section">
        <div className="container">
          <div className="mockup-wrapper">
            <div className="mockup-glow" />
            <div className="mockup-screens">
              {/* Left screen - Search */}
              <div className="mockup-screen side left">
                <div className="mock-header">
                  <div className="mock-title">{dict.home.mockTitleDiscover}</div>
                  <div className="mock-subtitle-sm">{dict.home.mockSubtitleSearch}</div>
                </div>
                <div className="mock-search">
                  <svg className="mock-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                  </svg>
                  <span className="mock-search-text">{dict.home.mockSearch}</span>
                </div>
                <div className="mock-pills">
                  <div className="mock-pill active">{dict.home.mockPills[0]}</div>
                  <div className="mock-pill inactive">{dict.home.mockPills[1]}</div>
                  <div className="mock-pill inactive">{dict.home.mockPills[2]}</div>
                </div>
                <div className="mock-cards">
                  {[
                    { color: "#1a1a3e", name: "Weezer", artist: "Alternative Rock" },
                    { color: "#3e1a1a", name: "Radiohead", artist: "Art Rock" },
                    { color: "#1a3e1a", name: "Tame Impala", artist: "Psychedelic Pop" },
                    { color: "#2e1a3e", name: "Arctic Monkeys", artist: "Indie Rock" },
                  ].map((item, i) => (
                    <div className="mock-card" key={i}>
                      <div className="mock-card-art" style={{ background: item.color }} />
                      <div className="mock-card-info">
                        <div className="mock-card-name">{item.name}</div>
                        <div className="mock-card-artist">{item.artist}</div>
                      </div>
                      <div className="mock-card-actions">
                        <div className="mock-action-btn">♥</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Center screen - Home Feed */}
              <div className="mockup-screen main">
                <div className="mock-header">
                  <div className="mock-title">{dict.home.mockTitleHome}</div>
                  <div className="mock-subtitle-sm">{dict.home.mockSubtitleHome}</div>
                </div>
                <div className="mock-pills">
                  <div className="mock-pill active">{dict.home.mockPills[0]}</div>
                  <div className="mock-pill inactive">{dict.home.mockPills[1]}</div>
                  <div className="mock-pill inactive">{dict.home.mockPills[2]}</div>
                </div>
                <div className="mock-cards">
                  {[
                    { color: "linear-gradient(135deg,#667eea,#764ba2)", name: "Lofi Beats", artist: "Various Artists" },
                    { color: "linear-gradient(135deg,#f093fb,#f5576c)", name: "Dark Side of Moon", artist: "Pink Floyd" },
                    { color: "linear-gradient(135deg,#4facfe,#00f2fe)", name: "Kid A", artist: "Radiohead" },
                    { color: "linear-gradient(135deg,#43e97b,#38f9d7)", name: "Random Access Memories", artist: "Daft Punk" },
                    { color: "linear-gradient(135deg,#fa709a,#fee140)", name: "In Rainbows", artist: "Radiohead" },
                  ].map((item, i) => (
                    <div className="mock-card" key={i}>
                      <div className="mock-card-art" style={{ background: item.color }} />
                      <div className="mock-card-info">
                        <div className="mock-card-name">{item.name}</div>
                        <div className="mock-card-artist">{item.artist}</div>
                      </div>
                      <div className="mock-card-actions">
                        <div className="mock-action-btn">♥</div>
                        <div className="mock-action-btn">💬</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right screen - Profile */}
              <div className="mockup-screen side right">
                <div className="mock-profile-header">
                  <div className="mock-avatar">A</div>
                  <div className="mock-profile-name">@ahmet</div>
                  <div className="mock-profile-stats">
                    <div className="mock-profile-stat">
                      <div className="mock-profile-stat-num">247</div>
                      <div className="mock-profile-stat-lbl">{dict.home.mockStatFollowers}</div>
                    </div>
                    <div className="mock-profile-stat">
                      <div className="mock-profile-stat-num">183</div>
                      <div className="mock-profile-stat-lbl">{dict.home.mockStatFollowing}</div>
                    </div>
                  </div>
                </div>
                <div className="mock-category-row">
                  <div className="mock-category">
                    <div className="mock-cat-icon">🎵</div>
                    <div className="mock-cat-count">1.2k</div>
                    <div className="mock-cat-label">{dict.home.mockCatTrack}</div>
                  </div>
                  <div className="mock-category">
                    <div className="mock-cat-icon">🎬</div>
                    <div className="mock-cat-count">342</div>
                    <div className="mock-cat-label">{dict.home.mockCatMovie}</div>
                  </div>
                  <div className="mock-category">
                    <div className="mock-cat-icon">📚</div>
                    <div className="mock-cat-count">89</div>
                    <div className="mock-cat-label">{dict.home.mockCatBook}</div>
                  </div>
                </div>
                <div className="mock-cards">
                  {[
                    { color: "linear-gradient(135deg,#4facfe,#00f2fe)", name: dict.home.mockList1, artist: dict.home.mockList1Desc },
                    { color: "linear-gradient(135deg,#fa709a,#fee140)", name: dict.home.mockList2, artist: dict.home.mockList2Desc },
                    { color: "linear-gradient(135deg,#43e97b,#38f9d7)", name: dict.home.mockList3, artist: dict.home.mockList3Desc },
                  ].map((item, i) => (
                    <div className="mock-card" key={i}>
                      <div className="mock-card-art" style={{ background: item.color }} />
                      <div className="mock-card-info">
                        <div className="mock-card-name">{item.name}</div>
                        <div className="mock-card-artist">{item.artist}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section className="features" id="features">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">{dict.home.featuresEyebrow}</div>
            <h2 className="section-title">
              {dict.home.featuresTitle1}{" "}
              <span className="gradient-text">{dict.home.featuresTitle2}</span>
            </h2>
            <p className="section-subtitle">
              {dict.home.featuresSubtitle}
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">🎵</div>
              <h3 className="feature-title">{dict.home.feat1Title}</h3>
              <p className="feature-description">
                {dict.home.feat1Desc}
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">🎬</div>
              <h3 className="feature-title">{dict.home.feat2Title}</h3>
              <p className="feature-description">
                {dict.home.feat2Desc}
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">✍️</div>
              <h3 className="feature-title">{dict.home.feat3Title}</h3>
              <p className="feature-description">
                {dict.home.feat3Desc}
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">🤝</div>
              <h3 className="feature-title">{dict.home.feat4Title}</h3>
              <p className="feature-description">
                {dict.home.feat4Desc}
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">👤</div>
              <h3 className="feature-title">{dict.home.feat5Title}</h3>
              <p className="feature-description">
                {dict.home.feat5Desc}
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">📋</div>
              <h3 className="feature-title">{dict.home.feat6Title}</h3>
              <p className="feature-description">
                {dict.home.feat6Desc}
              </p>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="coming-soon-section">
            <div className="coming-soon-header">
              <span className="coming-soon-badge">{dict.home.soonBadge}</span>
              <p className="coming-soon-subtitle">{dict.home.soonSubtitle}</p>
            </div>
            <div className="coming-soon-grid">
              <div className="coming-soon-card">
                <span className="coming-soon-icon">📚</span>
                <div className="coming-soon-info">
                  <div className="coming-soon-title">{dict.home.soon1Title}</div>
                  <div className="coming-soon-desc">{dict.home.soon1Desc}</div>
                </div>
              </div>
              <div className="coming-soon-card">
                <span className="coming-soon-icon">🔍</span>
                <div className="coming-soon-info">
                  <div className="coming-soon-title">{dict.home.soon2Title}</div>
                  <div className="coming-soon-desc">{dict.home.soon2Desc}</div>
                </div>
              </div>
              <div className="coming-soon-card">
                <span className="coming-soon-icon">📊</span>
                <div className="coming-soon-info">
                  <div className="coming-soon-title">{dict.home.soon3Title}</div>
                  <div className="coming-soon-desc">{dict.home.soon3Desc}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── How it Works ─── */}
      <section className="how-it-works" id="how">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">{dict.home.howEyebrow}</div>
            <h2 className="section-title">
              {dict.home.howTitle1}{" "}
              <span className="gradient-text">{dict.home.howTitle2}</span>
            </h2>
            <p className="section-subtitle">
              {dict.home.howSubtitle}
            </p>
          </div>

          <div className="steps-grid">
            <div className="steps-connector" />
            <div className="step-item">
              <div className="step-number">1</div>
              <h3 className="step-title">{dict.home.step1Title}</h3>
              <p className="step-desc">
                {dict.home.step1Desc}
              </p>
            </div>
            <div className="step-item">
              <div className="step-number">2</div>
              <h3 className="step-title">{dict.home.step2Title}</h3>
              <p className="step-desc">
                {dict.home.step2Desc}
              </p>
            </div>
            <div className="step-item">
              <div className="step-number">3</div>
              <h3 className="step-title">{dict.home.step3Title}</h3>
              <p className="step-desc">
                {dict.home.step3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Beta CTA ─── */}
      <section className="beta-cta" id="beta">
        <div className="container">
          <div className="beta-cta-card">
            <div className="beta-badge">
              <span>🔒</span> {dict.home.betaBadge.replace('🔒 ', '')}
            </div>
            <h2 className="beta-cta-title">
              {dict.home.betaTitle1}{" "}
              <span className="gradient-text">{dict.home.betaTitle2}</span>
            </h2>
            <p className="beta-cta-subtitle">
              {dict.home.betaSubtitle}
            </p>
            <Link href={`/${lang}/beta`} className="btn-primary btn-large">
              {dict.home.betaBtn}
            </Link>
            <p className="beta-cta-note">
              {dict.home.betaNote}
            </p>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <Link href={`/${lang}`} className="footer-logo">
              <Image src="/icon.png" alt="Mensola" width={28} height={28} />
              <span>mensola</span>
            </Link>
            <p className="footer-copy">
              © {new Date().getFullYear()} {dict.footer.copy}
            </p>
            <div className="footer-links">
              <Link href={`/${lang}/beta`} className="footer-link">{dict.footer.betaApply}</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
