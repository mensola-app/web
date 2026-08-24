import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* ─── Navbar ─── */}
      <nav className="navbar">
        <div className="container navbar-inner">
          <Link href="/" className="navbar-logo">
            <Image src="/icon.png" alt="Mensola" width={36} height={36} />
            <span>mensola</span>
            <span className="navbar-badge">Beta</span>
          </Link>
          <Link href="/beta" className="btn-primary">
            Beta&apos;ya Başvur →
          </Link>
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
              Kapalı Beta — Sınırlı Kontenjan
            </div>
            <h1 className="hero-title">
              Kültürünü{" "}
              <span className="gradient-text">Keşfet,</span>
              <br />
              Paylaş ve Takip Et
            </h1>
            <p className="hero-subtitle">
              Mensola ile dinlediğin müziği, izlediğin filmleri ve okuduğun kitapları
              tek bir yerde topla. Beğenilerini keşfet, arkadaşlarınla paylaş.
            </p>
            <div className="hero-actions">
              <Link href="/beta" className="btn-primary btn-large">
                🚀 Kapalı Beta&apos;ya Katıl
              </Link>
              <a href="#features" className="btn-secondary btn-large">
                Daha Fazla Öğren
              </a>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-number">3-in-1</div>
                <div className="hero-stat-label">Müzik · Film · Kitap</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">100%</div>
                <div className="hero-stat-label">Ücretsiz Beta</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">iOS &amp; Android</div>
                <div className="hero-stat-label">Çoklu Platform</div>
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
                  <div className="mock-title">Keşfet</div>
                  <div className="mock-subtitle-sm">Arama</div>
                </div>
                <div className="mock-search">
                  <svg className="mock-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                  </svg>
                  <span className="mock-search-text">Sanatçı, film, kitap...</span>
                </div>
                <div className="mock-pills">
                  <div className="mock-pill active">🎵 Müzik</div>
                  <div className="mock-pill inactive">🎬 Film</div>
                  <div className="mock-pill inactive">📚 Kitap</div>
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
                  <div className="mock-title">Mensola</div>
                  <div className="mock-subtitle-sm">Ana Sayfa</div>
                </div>
                <div className="mock-pills">
                  <div className="mock-pill active">🎵 Müzik</div>
                  <div className="mock-pill inactive">🎬 Film</div>
                  <div className="mock-pill inactive">📚 Kitap</div>
                </div>
                <div className="mock-cards">
                  {[
                    { color: "linear-gradient(135deg,#667eea,#764ba2)", name: "Lofi Beats", artist: "Various Artists", likes: "24" },
                    { color: "linear-gradient(135deg,#f093fb,#f5576c)", name: "Dark Side of Moon", artist: "Pink Floyd", likes: "89" },
                    { color: "linear-gradient(135deg,#4facfe,#00f2fe)", name: "Kid A", artist: "Radiohead", likes: "142" },
                    { color: "linear-gradient(135deg,#43e97b,#38f9d7)", name: "Random Access Memories", artist: "Daft Punk", likes: "67" },
                    { color: "linear-gradient(135deg,#fa709a,#fee140)", name: "In Rainbows", artist: "Radiohead", likes: "211" },
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
                      <div className="mock-profile-stat-lbl">Takipçi</div>
                    </div>
                    <div className="mock-profile-stat">
                      <div className="mock-profile-stat-num">183</div>
                      <div className="mock-profile-stat-lbl">Takip</div>
                    </div>
                  </div>
                </div>
                <div className="mock-category-row">
                  <div className="mock-category">
                    <div className="mock-cat-icon">🎵</div>
                    <div className="mock-cat-count">1.2k</div>
                    <div className="mock-cat-label">Parça</div>
                  </div>
                  <div className="mock-category">
                    <div className="mock-cat-icon">🎬</div>
                    <div className="mock-cat-count">342</div>
                    <div className="mock-cat-label">Film</div>
                  </div>
                  <div className="mock-category">
                    <div className="mock-cat-icon">📚</div>
                    <div className="mock-cat-count">89</div>
                    <div className="mock-cat-label">Kitap</div>
                  </div>
                </div>
                <div className="mock-cards">
                  {[
                    { color: "linear-gradient(135deg,#4facfe,#00f2fe)", name: "Son Dinlenenler", artist: "Playlist" },
                    { color: "linear-gradient(135deg,#fa709a,#fee140)", name: "Favori Filmler", artist: "Film Listesi" },
                    { color: "linear-gradient(135deg,#43e97b,#38f9d7)", name: "Okunacaklar", artist: "Kitap Listesi" },
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
            <div className="section-eyebrow">Özellikler</div>
            <h2 className="section-title">
              Her şey tek bir{" "}
              <span className="gradient-text">platformda</span>
            </h2>
            <p className="section-subtitle">
              Mensola, kültürel tüketim alışkanlıklarını düzenler ve sosyal bir deneyime dönüştürür.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">🎵</div>
              <h3 className="feature-title">Müzik Takibi</h3>
              <p className="feature-description">
                Dinlediğin parçaları, albümleri ve sanatçıları kaydet. Playlist&apos;ler oluştur
                ve müzik geçmişini takip et.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">🎬</div>
              <h3 className="feature-title">Film &amp; Dizi Listesi</h3>
              <p className="feature-description">
                İzlediğin filmleri ve dizileri listele, puanla ve yorumla. &quot;İzlenecekler&quot;
                listeni oluştur, arkadaşlarının önerilerine göz at.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">✍️</div>
              <h3 className="feature-title">Günlük &amp; Etkileşim</h3>
              <p className="feature-description">
                İzlediklerin ve dinlediklerin üzerine düşüncelerini paylaş,
                arkadaşlarınla tartış. Her içerik bir sohbetin başlangıcı.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">🤝</div>
              <h3 className="feature-title">Ortak Zevkler &amp; Takip</h3>
              <p className="feature-description">
                Arkadaşlarının ne izleyip ne dinlediğini anlık akışta gör.
                Ortak beğenileri keşfet, kültür köprüsü kur.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">👤</div>
              <h3 className="feature-title">Sosyal Profil</h3>
              <p className="feature-description">
                Beğenilerini ve aktivitelerini sergile. Takipçilerine kendi
                kültürel dünyayı göster.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">📋</div>
              <h3 className="feature-title">Özel Listeler</h3>
              <p className="feature-description">
                Favori filmlerinden ve şarkılarından oluşan özel koleksiyonlar
                oluştur. Listelerini paylaş, başkalarının listelerini keşfet.
              </p>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="coming-soon-section">
            <div className="coming-soon-header">
              <span className="coming-soon-badge">🛠️ Yakında Geliyor</span>
              <p className="coming-soon-subtitle">Şu an geliştirme aşamasında olan özellikler</p>
            </div>
            <div className="coming-soon-grid">
              <div className="coming-soon-card">
                <span className="coming-soon-icon">📚</span>
                <div className="coming-soon-info">
                  <div className="coming-soon-title">Kitap Rafı</div>
                  <div className="coming-soon-desc">Okuduğun kitapları dijital rafına ekle, okuma hedefleri belirle.</div>
                </div>
              </div>
              <div className="coming-soon-card">
                <span className="coming-soon-icon">🔍</span>
                <div className="coming-soon-info">
                  <div className="coming-soon-title">Akıllı Keşif</div>
                  <div className="coming-soon-desc">Zevklerine göre kişiselleştirilmiş içerik önerileri.</div>
                </div>
              </div>
              <div className="coming-soon-card">
                <span className="coming-soon-icon">📊</span>
                <div className="coming-soon-info">
                  <div className="coming-soon-title">Kişisel İstatistikler</div>
                  <div className="coming-soon-desc">Dinleme ve izleme alışkanlıklarının detaylı analizleri.</div>
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
            <div className="section-eyebrow">Nasıl Çalışır?</div>
            <h2 className="section-title">
              Üç adımda{" "}
              <span className="gradient-text">başla</span>
            </h2>
            <p className="section-subtitle">
              Mensola&apos;yı kullanmak son derece basit. Hesabını oluştur, beğenilerini ekle, keşfet.
            </p>
          </div>

          <div className="steps-grid">
            <div className="steps-connector" />
            <div className="step-item">
              <div className="step-number">1</div>
              <h3 className="step-title">Hesap Oluştur</h3>
              <p className="step-desc">
                Birkaç saniyede kaydol. Profil fotoğrafını ekle,
                kısa bir bio yaz ve hazırsın.
              </p>
            </div>
            <div className="step-item">
              <div className="step-number">2</div>
              <h3 className="step-title">Kütüphaneni Doldur</h3>
              <p className="step-desc">
                Sevdiğin müzikleri, filmleri ve kitapları ekle.
                Mevcut platformlardan içe aktarma yakında geliyor.
              </p>
            </div>
            <div className="step-item">
              <div className="step-number">3</div>
              <h3 className="step-title">Keşfet & Paylaş</h3>
              <p className="step-desc">
                Arkadaşlarını takip et, onların beğenilerini gör,
                yeni içerikler keşfet ve kendi zevklerini paylaş.
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
              <span>🔒</span> Kapalı Beta
            </div>
            <h2 className="beta-cta-title">
              İlk kullananlar{" "}
              <span className="gradient-text">arasında</span>
              <br />
              yer al
            </h2>
            <p className="beta-cta-subtitle">
              Mensola kapalı beta testine kabul edilen kullanıcılar, uygulamayı
              herkesten önce deneyimleyecek ve geliştirme sürecine katkıda bulunacak.
              Kontenjan sınırlıdır.
            </p>
            <Link href="/beta" className="btn-primary btn-large">
              🚀 Beta Başvurusunu Yap
            </Link>
            <p className="beta-cta-note">
              ✓ Ücretsiz &nbsp;&nbsp; ✓ Android &amp; iOS &nbsp;&nbsp; ✓ Erken erişim
            </p>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <Link href="/" className="footer-logo">
              <Image src="/icon.png" alt="Mensola" width={28} height={28} />
              <span>mensola</span>
            </Link>
            <p className="footer-copy">
              © {new Date().getFullYear()} Mensola. Tüm hakları saklıdır.
            </p>
            <div className="footer-links">
              <Link href="/beta" className="footer-link">Beta Başvurusu</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
