"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";

interface Props {
  lang: string;
}

export default function DeleteAccountClient({ lang }: Props) {
  const isTr = lang === "tr";

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [reason, setReason] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !confirmed) return;

    const subject = encodeURIComponent(
      isTr ? `Hesap Silme Talebi - mensola (${username || email})` : `Account Deletion Request - mensola (${username || email})`
    );

    const bodyText = isTr
      ? `Merhaba mensola Destek Ekibi,\n\nAşağıdaki hesap ve ilişkili tüm verilerin kalıcı olarak silinmesini talep ediyorum:\n\nKayıtlı E-posta: ${email}\nKullanıcı Adı: ${username || "Belirtilmedi"}\nSilme Nedeni: ${reason || "Belirtilmedi"}\n\nHesap silme işleminin geri alınamaz olduğunu ve profilim, puanlarım, incelemelerim ve listelerim dahil tüm verilerimin silineceğini anlıyorum.\n\nTeşekkürler.`
      : `Hello mensola Support Team,\n\nI request the permanent deletion of my account and all associated personal data:\n\nRegistered Email: ${email}\nUsername: ${username || "Not specified"}\nReason for Deletion: ${reason || "Not specified"}\n\nI understand that this action is irreversible and all my data, including profile, ratings, reviews, and watchlists, will be permanently deleted.\n\nThank you.`;

    const mailtoUrl = `mailto:contact@mensola.app?subject=${subject}&body=${encodeURIComponent(bodyText)}`;

    // Open mail client
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <div className="deletion-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container navbar-inner">
          <Link href={`/${lang}`} className="navbar-logo">
            <Image src="/icon.png" alt="mensola" width={36} height={36} />
            <span>mensola</span>
            <span className="navbar-badge">Beta</span>
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Link href={`/${lang}`} className="btn-secondary" style={{ padding: "8px 16px", fontSize: "0.85rem" }}>
              {isTr ? "← Ana Sayfa" : "← Home"}
            </Link>
            <LanguageSwitcher currentLang={lang} />
          </div>
        </div>
      </nav>

      {/* Atmospheric Background Glows */}
      <div className="deletion-bg">
        <div className="deletion-orb deletion-orb-1" />
        <div className="deletion-orb deletion-orb-2" />
      </div>

      <main className="deletion-main">
        <div className="deletion-container">
          {/* Header */}
          <div className="deletion-header">
            <div className="deletion-badge">
              <span className="deletion-badge-dot" />
              {isTr ? "Hesap ve Veri Güvenliği" : "Account & Data Safety"}
            </div>
            <h1 className="deletion-title">
              {isTr ? "Hesap ve Veri" : "Account & Data"}{" "}
              <span className="gradient-text">{isTr ? "Silme Talebi" : "Deletion"}</span>
            </h1>
            <p className="deletion-subtitle">
              {isTr
                ? "Bu sayfa, mensola (mensola.app) mobil uygulaması kullanıcılarının hesaplarını ve ilişkili kişisel verilerini nasıl silebileceklerini Google Play Hesap Silme Politikası gerekliliklerine uygun şekilde açıklamaktadır."
                : "This page explains how users of the mensola (mensola.app) mobile app can delete their account and associated personal data in full compliance with Google Play's Account Deletion Policy."}
            </p>

            {/* App & Developer Verification Box */}
            <div className="app-identity-banner">
              <Image src="/icon.png" alt="mensola" width={44} height={44} style={{ borderRadius: 10 }} />
              <div className="app-identity-info">
                <span className="app-identity-name">mensola</span>
                <span className="app-identity-meta">
                  Domain: <strong>mensola.app</strong> • Support: <strong>contact@mensola.app</strong>
                </span>
              </div>
            </div>
          </div>

          {/* Section 1: In-App Deletion */}
          <section className="deletion-section">
            <div className="section-title-wrap">
              <span className="section-number">1</span>
              <div>
                <h2 className="section-title">
                  {isTr ? "Uygulama İçinden Hesap Silme (Önerilen)" : "In-App Account Deletion (Recommended)"}
                </h2>
                <p className="section-desc">
                  {isTr
                    ? "Uygulama yüklü ve hesabınıza erişiminiz varsa en hızlı yöntem uygulama içi ayarlardan silmektir:"
                    : "If you have the app installed, this is the quickest and immediate way to delete your account:"}
                </p>
              </div>
            </div>

            <div className="steps-grid">
              <div className="step-card">
                <div className="step-badge">1</div>
                <h3 className="step-heading">{isTr ? "Uygulamayı Açın" : "Open mensola App"}</h3>
                <p className="step-text">
                  {isTr
                    ? "Cihazınızda mensola uygulamasını açın ve oturum açtığınızdan emin olun."
                    : "Launch the mensola app on your mobile device."}
                </p>
              </div>

              <div className="step-card">
                <div className="step-badge">2</div>
                <h3 className="step-heading">{isTr ? "Ayarlara Gidin" : "Go to Settings"}</h3>
                <p className="step-text">
                  {isTr
                    ? "Profil sekmesine geçip sağ üstteki ⚙️ Ayarlar simgesine dokunun."
                    : "Navigate to your Profile tab and tap the ⚙️ Settings icon."}
                </p>
              </div>

              <div className="step-card">
                <div className="step-badge">3</div>
                <h3 className="step-heading">{isTr ? "Hesabı Sil'i Seçin" : "Select 'Delete Account'"}</h3>
                <p className="step-text">
                  {isTr
                    ? "Ayarlar menüsünün en altına kaydırın ve 'Hesabı Sil' butonuna dokunun."
                    : "Scroll to the bottom of the Settings screen and choose 'Delete Account'."}
                </p>
              </div>

              <div className="step-card">
                <div className="step-badge">4</div>
                <h3 className="step-heading">{isTr ? "Silmeyi Onaylayın" : "Confirm Deletion"}</h3>
                <p className="step-text">
                  {isTr
                    ? "Açılan onay penceresinde işlemi onaylayın. Hesabınız anında kalıcı olarak silinir."
                    : "Read the confirmation prompt and confirm. Your account and data are erased immediately."}
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Web / Email Request */}
          <section className="deletion-section">
            <div className="section-title-wrap">
              <span className="section-number">2</span>
              <div>
                <h2 className="section-title">
                  {isTr ? "Web / E-posta ile Silme Talebi" : "Web / Email Deletion Request"}
                </h2>
                <p className="section-desc">
                  {isTr
                    ? "Uygulamayı zaten cihazınızdan kaldırdıysanız veya hesabınıza giriş yapamıyorsanız aşağıdaki formu kullanarak veya doğrudan e-posta göndererek silme talebi oluşturabilirsiniz."
                    : "If you have already uninstalled the app or cannot log in, you can request account deletion using the form below or by emailing our support team."}
                </p>
              </div>
            </div>

            <div className="deletion-card">
              <form onSubmit={handleSubmit} className="deletion-form">
                <div className="form-group">
                  <label htmlFor="del-email" className="form-label">
                    {isTr ? "Kayıtlı E-posta Adresiniz *" : "Registered Email Address *"}
                  </label>
                  <input
                    id="del-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={isTr ? "örn: ahmet@example.com" : "e.g. user@example.com"}
                    className="form-input"
                  />
                  <span className="form-hint">
                    {isTr
                      ? "Hesabınızın bağlı olduğu e-posta adresini giriniz."
                      : "The email address associated with your mensola account."}
                  </span>
                </div>

                <div className="form-group">
                  <label htmlFor="del-username" className="form-label">
                    {isTr ? "Kullanıcı Adınız (Varsa)" : "Username (Optional)"}
                  </label>
                  <input
                    id="del-username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder={isTr ? "örn: ahmetk" : "e.g. johndoe"}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="del-reason" className="form-label">
                    {isTr ? "Ayrılma Nedeni (İsteğe Bağlı)" : "Reason for Deletion (Optional)"}
                  </label>
                  <textarea
                    id="del-reason"
                    rows={3}
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder={
                      isTr
                        ? "Uygulamayı neden silmek istediğinizi kısaca belirtebilirsiniz..."
                        : "Let us know why you are deleting your account..."
                    }
                    className="form-textarea"
                  />
                </div>

                <div className="form-group-checkbox">
                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      checked={confirmed}
                      onChange={(e) => setConfirmed(e.target.checked)}
                      required
                    />
                    <span className="checkbox-text">
                      {isTr
                        ? "Hesabımın, profilimin, incelemelerimin ve tüm kayıtlı verilerimin kalıcı ve geri alınamaz şekilde silineceğini anlıyorum ve onaylıyorum."
                        : "I understand that my account, profile, reviews, and all associated personal data will be permanently and irreversibly erased."}
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!email || !confirmed}
                  className="btn-primary form-submit-btn"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  ✉️ {isTr ? "Silme Talebini E-posta ile Gönder" : "Submit Deletion Request via Email"}
                </button>
              </form>

              {submitted && (
                <div className="form-success-banner">
                  <span>✅</span>
                  <div>
                    <strong>{isTr ? "Silme talebiniz hazırlandı!" : "Deletion request prepared!"}</strong>
                    <p style={{ marginTop: 4 }}>
                      {isTr
                        ? "E-posta uygulamanız açılmadıysa talebinizi doğrudan contact@mensola.app adresine 'Hesap Silme Talebi' başlığı ile iletebilirsiniz."
                        : "If your email client did not open automatically, please send your request directly to contact@mensola.app with subject 'Account Deletion Request'."}
                    </p>
                  </div>
                </div>
              )}

              <div className="direct-email-box">
                <span className="direct-email-title">
                  {isTr ? "Veya doğrudan e-posta gönderin:" : "Or send an email directly:"}
                </span>
                <a href="mailto:contact@mensola.app?subject=Account%20Deletion%20Request%20-%20mensola" className="direct-email-link">
                  contact@mensola.app
                </a>
                <span className="direct-email-subject">
                  {isTr ? "Konu: Hesap Silme Talebi" : "Subject: Account Deletion Request"}
                </span>
              </div>
            </div>
          </section>

          {/* Section 3: Data Handling & Retention Policy */}
          <section className="deletion-section">
            <div className="section-title-wrap">
              <span className="section-number">3</span>
              <div>
                <h2 className="section-title">
                  {isTr ? "Veri İşleme ve Saklama Politikası" : "Data Handling & Retention Policy"}
                </h2>
                <p className="section-desc">
                  {isTr
                    ? "Hesabınız silindiğinde hangi verilerin silindiği ve saklama koşulları aşağıda açıkça listelenmiştir:"
                    : "The specific data types that are deleted and our retention timelines are detailed below:"}
                </p>
              </div>
            </div>

            <div className="data-policy-grid">
              {/* Deleted Data Card */}
              <div className="policy-card">
                <div className="policy-card-header">
                  <span className="policy-badge delete-badge">🗑️ {isTr ? "Kalıcı Olarak Silinen Veriler" : "Permanently Deleted Data"}</span>
                </div>
                <ul className="policy-list">
                  <li>
                    <strong>{isTr ? "Kimlik ve Profil Bilgileri:" : "Profile & Identity Data:"}</strong>{" "}
                    {isTr
                      ? "Ad, soyad, kullanıcı adı, profil fotoğrafı (avatar) ve biyografi metni."
                      : "Full name, username, bio, and avatar photo."}
                  </li>
                  <li>
                    <strong>{isTr ? "Giriş ve Hesap Bilgileri:" : "Authentication Credentials:"}</strong>{" "}
                    {isTr
                      ? "Kayıtlı e-posta adresi, şifrelenmiş parola ve aktif oturum anahtarları."
                      : "Registered email address, hashed password, and authentication tokens."}
                  </li>
                  <li>
                    <strong>{isTr ? "Kültür ve Takip Kayıtları:" : "Culture & Activity Logs:"}</strong>{" "}
                    {isTr
                      ? "İzleme listeleri (watchlists), favori filmler, favori müzikler ve özel listeler."
                      : "Watchlists, favorite movies, tracks, albums, and custom user lists."}
                  </li>
                  <li>
                    <strong>{isTr ? "Kullanıcı Etkileşimleri:" : "User-Generated Content:"}</strong>{" "}
                    {isTr
                      ? "Yazdığınız tüm incelemeler, yorumlar, yıldız puanları ve beğeniler."
                      : "All written reviews, comments, star ratings, and likes."}
                  </li>
                  <li>
                    <strong>{isTr ? "Sosyal Bağlantılar:" : "Social Connections:"}</strong>{" "}
                    {isTr
                      ? "Takipçi listeniz, takip ettikleriniz ve bekleyen takip istekleriniz."
                      : "Followers, following lists, and pending follow requests."}
                  </li>
                </ul>
              </div>

              {/* Retention Policy Card */}
              <div className="policy-card">
                <div className="policy-card-header">
                  <span className="policy-badge retention-badge">⏱️ {isTr ? "Saklama ve Süreç Politikası" : "Retention & Timeline"}</span>
                </div>
                <ul className="policy-list">
                  <li>
                    <strong>{isTr ? "Anında Erişim Kısıtlaması:" : "Immediate Processing:"}</strong>{" "}
                    {isTr
                      ? "Hesap silindiği anda profiliniz ve tüm içerikleriniz diğer kullanıcılara ve arama sonuçlarına derhal kapatılır."
                      : "Upon deletion, your account and profile are immediately removed from public view and search results."}
                  </li>
                  <li>
                    <strong>{isTr ? "Yedeklerden Temizleme (Azami 30 Gün):" : "Backup Purging (Max 30 Days):"}</strong>{" "}
                    {isTr
                      ? "Veritabanından kalıcı silme işlemi derhal gerçekleşir. Sistem güvenliği için tutulan yedekler en geç 30 gün içerisinde tamamen üzerine yazılarak temizlenir."
                      : "Primary database records are deleted immediately. System backup archives are purged within a maximum of 30 days."}
                  </li>
                  <li>
                    <strong>{isTr ? "Kişisel Veri Tutulmaz:" : "No Residual Personal Data:"}</strong>{" "}
                    {isTr
                      ? "Silme işlemi sonrasında hiçbir kişisel veriniz saklanmaz, satılmaz veya üçüncü taraflarla paylaşılmaz."
                      : "No personal data is retained, sold, or shared with third parties after account deletion."}
                  </li>
                  <li>
                    <strong>{isTr ? "Yasal Yükümlülükler:" : "Legal Compliance:"}</strong>{" "}
                    {isTr
                      ? "Yalnızca yürürlükteki kanunların (mali veya siber güvenlik mevzuatı) zorunlu kıldığı anonim işlem logları yasal süre boyunca muhafaza edilir."
                      : "Only non-personal, anonymized security/transaction logs required by applicable law are kept for statutory periods."}
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact and Legal Footer */}
          <div className="deletion-footer-card">
            <h3 className="footer-card-title">{isTr ? "Sorularınız mı var?" : "Have Questions?"}</h3>
            <p className="footer-card-desc">
              {isTr
                ? "Hesap silme süreci veya veri gizliliğinizle ilgili herhangi bir sorunuz olursa lütfen bizimle iletişime geçmekten çekinmeyin."
                : "If you have any questions about the deletion process or your data privacy, please reach out to our team."}
            </p>
            <a href="mailto:contact@mensola.app" className="btn-secondary" style={{ marginTop: 16 }}>
              ✉️ contact@mensola.app
            </a>
          </div>

          <div className="deletion-links-bottom">
            <Link href={`/${lang}/privacy-policy`}>{isTr ? "Gizlilik Politikası" : "Privacy Policy"}</Link>
            <span>•</span>
            <Link href={`/${lang}/terms`}>{isTr ? "Kullanım Koşulları" : "Terms of Service"}</Link>
            <span>•</span>
            <Link href={`/${lang}`}>{isTr ? "mensola Ana Sayfa" : "mensola Home"}</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
