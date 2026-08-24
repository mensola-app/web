"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  platform: string;
  interests: string[];
  experience: string;
  motivation: string;
}

const initialForm: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  platform: "",
  interests: [],
  experience: "",
  motivation: "",
};

export default function BetaPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheckbox = (value: string) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(value)
        ? prev.interests.filter((i) => i !== value)
        : [...prev.interests, value],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((res) => setTimeout(res, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const isValid =
    form.firstName.trim() &&
    form.lastName.trim() &&
    form.email.trim() &&
    form.platform &&
    form.interests.length > 0 &&
    form.motivation.trim().length >= 20;

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container navbar-inner">
          <Link href="/" className="navbar-logo">
            <Image src="/icon.png" alt="Mensola" width={36} height={36} />
            <span>mensola</span>
            <span className="navbar-badge">Beta</span>
          </Link>
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
              <Link href="/" className="apply-back">
                ← Ana Sayfaya Dön
              </Link>
              <h1 className="apply-title">
                Kapalı Beta&apos;ya{" "}
                <span className="gradient-text">Başvur</span>
              </h1>
              <p className="apply-subtitle">
                Mensola&apos;yı herkesten önce deneyimlemek için başvurunu yap.
                Kabul edilen kullanıcılara e-posta ile bildirim yapılacak.
                Kontenjan sınırlıdır.
              </p>
            </div>

            {submitted ? (
              /* Success State */
              <div className="success-state">
                <div className="success-icon">🎉</div>
                <h2 className="success-title">
                  Başvurun{" "}
                  <span className="gradient-text">Alındı!</span>
                </h2>
                <p className="success-subtitle">
                  Beta başvurun başarıyla iletildi. Kabul edilen kullanıcılara{" "}
                  <strong style={{ color: "var(--text-primary)" }}>
                    {form.email}
                  </strong>{" "}
                  adresine e-posta ile bildirim yapılacak. Takipte kal! 🚀
                </p>
                <Link href="/" className="btn-primary" style={{ marginTop: 8 }}>
                  Ana Sayfaya Dön
                </Link>
              </div>
            ) : (
              /* Form */
              <form className="apply-form" onSubmit={handleSubmit}>
                {/* Name Row */}
                <div className="form-row">
                  <div className="form-field">
                    <label className="form-label" htmlFor="firstName">
                      Ad <span>*</span>
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      className="form-input"
                      placeholder="Adın"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label className="form-label" htmlFor="lastName">
                      Soyad <span>*</span>
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      className="form-input"
                      placeholder="Soyadın"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="form-field">
                  <label className="form-label" htmlFor="email">
                    E-posta Adresi <span>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-input"
                    placeholder="ornek@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Platform */}
                <div className="form-field">
                  <label className="form-label" htmlFor="platform">
                    Hangi platformu kullanıyorsunuz? <span>*</span>
                  </label>
                  <select
                    id="platform"
                    name="platform"
                    className="form-select"
                    value={form.platform}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Seçiniz...</option>
                    <option value="android">📱 Android</option>
                    <option value="ios">🍎 iOS (iPhone/iPad)</option>
                    <option value="both">📱 Her İkisi de</option>
                  </select>
                </div>

                {/* Interests */}
                <div className="form-field">
                  <label className="form-label">
                    Hangi içerik türlerini takip edersiniz? <span>*</span>
                  </label>
                  <div className="checkbox-group">
                    {[
                      { value: "music", label: "🎵 Müzik" },
                      { value: "movies", label: "🎬 Film & Dizi" },
                      { value: "books", label: "📚 Kitap" },
                    ].map((opt) => (
                      <label className="checkbox-option" key={opt.value}>
                        <input
                          type="checkbox"
                          checked={form.interests.includes(opt.value)}
                          onChange={() => handleCheckbox(opt.value)}
                        />
                        <span className="checkbox-custom" />
                        <span className="checkbox-label">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div className="form-field">
                  <label className="form-label" htmlFor="experience">
                    Benzer uygulamaları kullandınız mı?
                  </label>
                  <div className="radio-group">
                    {[
                      { value: "none", label: "Hayır, ilk kez" },
                      { value: "lastfm", label: "Last.fm" },
                      { value: "letterboxd", label: "Letterboxd" },
                      { value: "goodreads", label: "Goodreads" },
                      { value: "other", label: "Diğer" },
                    ].map((opt) => (
                      <label className="radio-option" key={opt.value}>
                        <input
                          type="radio"
                          name="experience"
                          value={opt.value}
                          checked={form.experience === opt.value}
                          onChange={handleChange}
                        />
                        <span className="radio-custom" />
                        <span className="radio-label">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Motivation */}
                <div className="form-field">
                  <label className="form-label" htmlFor="motivation">
                    Neden beta testçisi olmak istiyorsunuz? <span>*</span>
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    className="form-textarea"
                    placeholder="Kısaca anlat — en az 20 karakter (örn: Müzik dinleme alışkanlıklarımı takip etmek istiyorum...)"
                    value={form.motivation}
                    onChange={handleChange}
                    required
                    minLength={20}
                  />
                </div>

                {/* Submit */}
                <div className="form-submit-area">
                  <button
                    id="beta-submit-btn"
                    type="submit"
                    className="form-submit-btn"
                    disabled={!isValid || loading}
                  >
                    {loading ? (
                      <>
                        <span style={{ display: "inline-block", animation: "spin 1s linear infinite" }}>⏳</span>
                        Gönderiliyor...
                      </>
                    ) : (
                      <>🚀 Beta Başvurusunu Gönder</>
                    )}
                  </button>
                  <p className="form-privacy">
                    Bilgileriniz yalnızca beta test sürecinde kullanılacak ve üçüncü taraflarla paylaşılmayacaktır.
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
      `}</style>
    </>
  );
}
