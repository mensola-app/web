import React from 'react';

export default async function TermsOfServicePage(props: { params: Promise<{ lang: string }> }) {
  const { lang } = await props.params;

  if (lang === 'tr') {
    return (
      <div className="container" style={{ paddingTop: 120, paddingBottom: 80, maxWidth: 800 }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 'bold' }}>Kullanım Koşulları</h1>
        
        <p style={{ marginBottom: '1rem' }}><strong>Yürürlük Tarihi:</strong> 30 Ağustos 2026</p>
        <p style={{ marginBottom: '1rem' }}><strong>Uygulama:</strong> mensola ("Uygulama", "Hizmet")</p>
        <p style={{ marginBottom: '1rem' }}><strong>Hizmet Sağlayıcı:</strong> mensola ("biz", "bize")</p>
        
        <p style={{ marginBottom: '1rem' }}>Lütfen mensola mobil uygulamasını kullanmadan önce bu Kullanım Koşullarını ("Koşullar") dikkatlice okuyunuz. Uygulamaya erişerek veya kullanarak bu Koşullara bağlı kalmayı kabul etmiş sayılırsınız.</p>

        <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>1. Koşulların Kabulü</h3>
        <p style={{ marginBottom: '1rem' }}>Bir hesap oluşturarak veya Uygulamayı kullanarak en az 13 yaşında olduğunuzu ve bu Koşullar ile Gizlilik Politikasına uymayı kabul ettiğinizi beyan edersiniz.</p>

        <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>2. Kullanıcı Hesapları</h3>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc' }}>
          <li>Hesap bilgilerinizin ve şifrenizin gizliliğini korumak sizin sorumluluğunuzdadır.</li>
          <li>Kayıt sırasında doğru ve güncel bilgiler sağlamayı kabul edersiniz.</li>
          <li>Bu Koşulları ihlal eden, taciz veya kötüye kullanım içeren hesapları askıya alma veya sonlandırma hakkımız saklıdır.</li>
        </ul>

        <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>3. Kullanıcı İçeriği ve Davranış Kuralları</h3>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc' }}>
          <li>Kullanıcılar özel listeler, raf düzenleri, incelemeler ve profil bilgileri ("Kullanıcı İçeriği") oluşturabilir ve paylaşabilir.</li>
          <li>Oluşturduğunuz içeriğin mülkiyeti size aittir; ancak Uygulama içinde barındırılması ve gösterilmesi için mensola'ya münhasır olmayan bir kullanım hakkı vermiş olursunuz.</li>
          <li><strong>Yasaklanmış Eylemler:</strong> Yasa dışı, hakaret içeren, telif haklarını ihlal eden, nefret söylemi barındıran veya diğer kullanıcıları taciz eden içeriklerin paylaşılması kesinlikle yasaktır.</li>
          <li>Kullanıcı içeriklerinden doğabilecek hukuki sorumluluk tamamen içeriği yükleyen kullanıcıya aittir.</li>
        </ul>

        <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>4. Fikri Mülkiyet</h3>
        <p style={{ marginBottom: '1rem' }}>mensola markası, arayüz tasarımları, logolar ve yazılım kodları Hizmet Sağlayıcının mülkiyetindedir. Uygulama içinde listelenen üçüncü taraf film, müzik, afiş ve albüm kapaklarına ait haklar ilgili telif sahiplerine aittir.</p>

        <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>5. Hesap Silme ve Fesih</h3>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc' }}>
          <li>Hesabınızı dilediğiniz zaman uygulama içi <strong>Settings &gt; Account Actions &gt; Delete Account</strong> bölümünden veya <strong>contact@mensola.app</strong> üzerinden silebilirsiniz.</li>
          <li>Kuralları ihlal eden hesapların erişimini önceden bildirimde bulunmaksızın kısıtlama veya sonlandırma hakkımız saklıdır.</li>
        </ul>

        <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>6. Sorumluluk Reddi</h3>
        <p style={{ marginBottom: '1rem' }}>Uygulama <strong>"OLDUĞU GİBİ"</strong> (AS IS) esasıyla sunulmaktadır. Kesintisiz çalışma, sıfır hata veya üçüncü taraf veri kaynaklarının mutlak doğruluğu konusunda garanti verilmez.</p>

        <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>7. İletişim</h3>
        <p style={{ marginBottom: '1rem' }}>Kullanım Koşulları ile ilgili sorularınız için:</p>
        <p><strong>E-posta:</strong> <a href="mailto:contact@mensola.app" style={{ color: 'var(--blue-400)', textDecoration: 'underline' }}>contact@mensola.app</a></p>
      </div>
    );
  }

  return (
    <div className="container" style={{ paddingTop: 120, paddingBottom: 80, maxWidth: 800 }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 'bold' }}>Terms of Service</h1>
      
      <p style={{ marginBottom: '1rem' }}><strong>Effective Date:</strong> August 30, 2026</p>
      <p style={{ marginBottom: '1rem' }}><strong>Application:</strong> mensola ("Application", "Service")</p>
      <p style={{ marginBottom: '1rem' }}><strong>Service Provider:</strong> mensola ("we", "us", "our")</p>
      
      <p style={{ marginBottom: '1rem' }}>Please read these Terms of Service ("Terms") carefully before using the mensola mobile application. By accessing or using the Application, you agree to be bound by these Terms.</p>

      <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>1. Acceptance of Terms</h3>
      <p style={{ marginBottom: '1rem' }}>By creating an account or using the Application, you confirm that you are at least 13 years old (or the legal age required in your country) and agree to comply with these Terms and our Privacy Policy.</p>

      <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>2. User Accounts</h3>
      <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc' }}>
        <li>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</li>
        <li>You agree to provide accurate and complete information during registration.</li>
        <li>We reserve the right to suspend or terminate accounts that violate these Terms, engage in abusive behavior, or attempt to compromise application security.</li>
      </ul>

      <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>3. User-Generated Content and Conduct</h3>
      <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc' }}>
        <li>Users may create and share content, including custom lists, shelf arrangements, reviews, usernames, and profile images ("User Content").</li>
        <li>You retain ownership of your User Content. However, you grant mensola a non-exclusive, royalty-free license to host, display, and distribute this content within the Application.</li>
        <li><strong>Prohibited Conduct:</strong> You agree not to upload or share content that is illegal, defamatory, harassing, abusive, infringing on third-party intellectual property, or promoting hate speech.</li>
        <li>We do not actively endorse User Content and assume no liability for content posted by users. We reserve the right to remove any content that violates these Terms without prior notice.</li>
      </ul>

      <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>4. Intellectual Property</h3>
      <p style={{ marginBottom: '1rem' }}>All design assets, user interfaces, branding, software code, and visual identities of mensola are the exclusive property of the Service Provider. Third-party metadata, posters, album art, or API data displayed within the Application belong to their respective copyright holders.</p>

      <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>5. Account Termination and Deletion</h3>
      <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc' }}>
        <li>You may delete your account and associated data at any time directly via <strong>Settings &gt; Account Actions &gt; Delete Account</strong> or by contacting <strong>contact@mensola.app</strong>.</li>
        <li>We reserve the right to terminate or restrict access to the Service immediately, without prior notice, for conduct that violates these Terms or harms other users or the platform.</li>
      </ul>

      <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>6. Disclaimer of Warranties</h3>
      <p style={{ marginBottom: '1rem' }}>The Application is provided on an <strong>"AS IS"</strong> and <strong>"AS AVAILABLE"</strong> basis. We make no warranties, expressed or implied, regarding uptime, accuracy of third-party metadata, or uninterrupted service.</p>

      <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>7. Limitation of Liability</h3>
      <p style={{ marginBottom: '1rem' }}>To the maximum extent permitted by applicable law, the Service Provider shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use of or inability to use the Service.</p>

      <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>8. Changes to Terms</h3>
      <p style={{ marginBottom: '1rem' }}>We reserve the right to modify these Terms at any time. Continued use of the Application after updates constitutes acceptance of the new Terms.</p>

      <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>9. Contact Us</h3>
      <p style={{ marginBottom: '1rem' }}>For questions regarding these Terms of Service, please contact:</p>
      <p><strong>Email:</strong> <a href="mailto:contact@mensola.app" style={{ color: 'var(--blue-400)', textDecoration: 'underline' }}>contact@mensola.app</a></p>
    </div>
  );
}
