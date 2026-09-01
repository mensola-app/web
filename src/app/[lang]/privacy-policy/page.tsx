import React from 'react';

export default async function PrivacyPolicyPage(props: { params: Promise<{ lang: string }> }) {
  const { lang } = await props.params;

  if (lang === 'tr') {
    return (
      <div className="container" style={{ paddingTop: 120, paddingBottom: 80, maxWidth: 800 }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 'bold' }}>Gizlilik Politikası</h1>
        <p style={{ marginBottom: '1rem' }}>Bu gizlilik politikası, <strong>mensola</strong> mobil uygulaması ve mensola tarafından sunulan ilgili hizmetler (birlikte "Uygulama" olarak anılacaktır) için geçerlidir. mensola işbu metinde "Hizmet Sağlayıcı" olarak anılacaktır.</p>

        <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>Bilgi Toplama ve Kullanımı</h3>
        <p style={{ marginBottom: '1rem' }}>Uygulama indirildiğinde ve kullanıldığında belirli bilgileri toplayabilir:</p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc' }}>
          <li>Cihazınızın İnternet Protokolü (IP) adresi</li>
          <li>İşletim sistemi ve cihaz modeli</li>
          <li>Uygulama kullanım istatistikleri, etkileşimler ve zaman damgaları</li>
        </ul>
        <p style={{ marginBottom: '1rem' }}>Gelişmiş bir kullanıcı deneyimi ve temel sosyal özelliklerin sunulabilmesi amacıyla Hizmet Sağlayıcı aşağıdaki kişisel verileri talep edebilir:</p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc' }}>
          <li>E-posta adresi ve kullanıcı adı</li>
          <li>Profil fotoğrafı</li>
          <li>Kullanıcı tarafından oluşturulan içerikler (favoriler, özel listeler, raf düzenleri, incelemeler ve takip ilişkileri)</li>
        </ul>

        <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>Çerezler ve Takip Teknolojileri</h3>
        <p style={{ marginBottom: '1rem' }}>Uygulama veya entegre edilen üçüncü taraf SDK'lar, temel işlevleri ve hizmet sunumunu desteklemek amacıyla çerezler veya benzeri takip teknolojilerini kullanabilir. Yürürlükteki mevzuatın zorunlu kıldığı durumlarda zorunlu olmayan takip teknolojileri için önceden açık rıza alınır.</p>

        <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>Üçüncü Taraf Servisleri ve SDK'lar</h3>
        <p style={{ marginBottom: '1rem' }}>Uygulama, temel işlevselliği sağlamak ve platform standartlarına uymak amacıyla üçüncü taraf hizmetleri kullanır. Bu hizmetler verileri kendi gizlilik politikalarına uygun şekilde işler:</p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc' }}>
          <li><a href="https://policies.google.com/privacy" style={{ color: 'var(--blue-400)', textDecoration: 'underline' }}>Google Play Services</a></li>
          <li><a href="https://expo.dev/privacy" style={{ color: 'var(--blue-400)', textDecoration: 'underline' }}>Expo</a></li>
        </ul>
        <p style={{ marginBottom: '1rem' }}>Hizmet Sağlayıcı kişisel verilerinizi üçüncü taraflara satmaz. Yalnızca altyapı ve performans iyileştirmesi amacıyla anonimleştirilmiş veya toplu veriler güvenilir iş ortaklarıyla paylaşılabilir.</p>

        <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>Hesap ve Veri Silme (Haklarınız)</h3>
        <p style={{ marginBottom: '1rem' }}>Kişisel verileriniz üzerinde tam kontrole sahipsiniz. GDPR, KVKK ve ilgili veri koruma mevzuatları kapsamında verilerinize erişme, düzeltme, dışa aktarma veya tamamen silinmesini talep etme hakkınız bulunmaktadır.</p>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc' }}>
          <li><strong>Uygulama İçi Silme:</strong> Hesabınızı ve ilişkili tüm kişisel verilerinizi doğrudan <strong>Ayarlar &gt; Hesap İşlemleri &gt; Hesabı Sil</strong> adımlarını izleyerek kalıcı olarak silebilirsiniz.</li>
          <li><strong>Doğrudan Talep:</strong> Ayrıca <strong>contact@mensola.app</strong> adresine e-posta göndererek verilerinizin silinmesini talep edebilirsiniz. Talep üzerine verileriniz yasal saklama yükümlülükleri saklı kalmak kaydıyla veritabanından kalıcı olarak temizlenir.</li>
        </ul>

        <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>Veri Saklama Süresi</h3>
        <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc' }}>
          <li><strong>Kullanıcı Verileri:</strong> Hesabınız aktif olduğu sürece saklanır.</li>
          <li><strong>Silinen Hesaplar:</strong> Silme talebinin ardından en geç 30 gün içinde sistemden kalıcı olarak kaldırılır.</li>
          <li><strong>Anonim Veriler:</strong> Kişiyle ilişkilendirilemeyecek şekilde yalnızca istatistiki amaçlarla saklanabilir.</li>
        </ul>

        <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>Çocukların Gizliliği</h3>
        <p style={{ marginBottom: '1rem' }}>Uygulama 13 yaşın (veya bulunduğunuz ülkedeki yasal yaş sınırının) altındaki çocuklara yönelik değildir. 13 yaş altındaki bir çocuğun kişisel veri paylaştığı tespit edilirse bu veriler derhal sunuculardan silinir.</p>

        <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>Değişiklikler</h3>
        <p style={{ marginBottom: '1rem' }}>Bu Gizlilik Politikası zaman zaman güncellenebilir. Önemli değişiklikler yürürlük tarihi belirtilerek yayınlanır.</p>

        <p style={{ marginBottom: '1rem' }}><strong>Yürürlük Tarihi:</strong> 30 Ağustos 2026</p>

        <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>İletişim</h3>
        <p style={{ marginBottom: '1rem' }}><strong>E-posta:</strong> <a href="mailto:contact@mensola.app" style={{ color: 'var(--blue-400)', textDecoration: 'underline' }}>contact@mensola.app</a></p>
      </div>
    );
  }

  return (
    <div className="container" style={{ paddingTop: 120, paddingBottom: 80, maxWidth: 800 }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 'bold' }}>Privacy Policy</h1>
      <p style={{ marginBottom: '1rem' }}>This privacy policy applies to the <strong>mensola</strong> app for mobile devices, together with any related services operated by mensola (collectively, the "Application"). mensola is hereby referred to as the "Service Provider".</p>

      <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>Information Collection and Use</h3>
      <p style={{ marginBottom: '1rem' }}>The Application collects information when you download and use it. This information may include:</p>
      <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc' }}>
        <li>Your device's Internet Protocol (IP) address</li>
        <li>Operating system and device model</li>
        <li>Application usage statistics, interactions, and timestamps</li>
      </ul>
      <p style={{ marginBottom: '1rem' }}>For an enhanced user experience and core social functionality, the Service Provider may require you to provide certain personally identifiable information, including but not limited to:</p>
      <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc' }}>
        <li>Email address and username</li>
        <li>Profile picture</li>
        <li>User-generated content, such as favorites, lists, reviews, and social interactions (follows)</li>
      </ul>

      <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>Cookies and Tracking Technologies</h3>
      <p style={{ marginBottom: '1rem' }}>The Application or its third-party SDKs may use cookies, pixels, and similar technologies to support functionality and service delivery. Where required by applicable law, consent will be obtained prior to deploying non-essential tracking technologies.</p>

      <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>Third-Party Services and SDKs</h3>
      <p style={{ marginBottom: '1rem' }}>The Application integrates third-party services to ensure core functionality, updates, and platform compliance. Each service handles data in accordance with its own Privacy Policy:</p>
      <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc' }}>
        <li><a href="https://policies.google.com/privacy" style={{ color: 'var(--blue-400)', textDecoration: 'underline' }}>Google Play Services</a></li>
        <li><a href="https://expo.dev/privacy" style={{ color: 'var(--blue-400)', textDecoration: 'underline' }}>Expo</a></li>
      </ul>
      <p style={{ marginBottom: '1rem' }}>The Service Provider does not sell your personal data. Aggregated or anonymized data may periodically be shared with trusted service providers to improve performance and infrastructure.</p>

      <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>Account and Data Deletion (Your Rights)</h3>
      <p style={{ marginBottom: '1rem' }}>You have full control over your personal information. Under GDPR, CCPA/CPRA, and applicable data privacy regulations, you have the right to access, rectify, export, or permanently delete your data.</p>
      <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc' }}>
        <li><strong>In-App Deletion:</strong> You can permanently delete your account and all associated personal data directly within the Application via <strong>Settings &gt; Account Actions &gt; Delete Account</strong>.</li>
        <li><strong>Direct Request:</strong> You may also request complete data deletion by emailing <strong>contact@mensola.app</strong>. Upon request, all personal data will be purged from active databases without undue delay, subject to standard legal retention obligations.</li>
      </ul>

      <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>Data Retention Policy</h3>
      <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc' }}>
        <li><strong>User Provided Data:</strong> Retained for the duration of your active account lifecycle.</li>
        <li><strong>Deleted Accounts:</strong> Permanently removed within 30 days of an account deletion request.</li>
        <li><strong>Aggregated / Anonymized Data:</strong> May be retained indefinitely for analytics as it cannot identify any individual.</li>
      </ul>

      <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>International Data Transfers</h3>
      <p style={{ marginBottom: '1rem' }}>Personal data may be transferred and processed in servers located outside your country of residence, including outside the European Economic Area (EEA). All international data transfers rely on Standard Contractual Clauses (SCCs) or legally recognized adequacy mechanisms.</p>

      <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>Children’s Privacy</h3>
      <p style={{ marginBottom: '1rem' }}>The Application is not directed to children under 13 years of age (or the minimum legal age in your jurisdiction). The Service Provider does not knowingly collect personal information from children. If it is discovered that a child under 13 has provided personal data, it will be immediately removed from the servers.</p>

      <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>Security</h3>
      <p style={{ marginBottom: '1rem' }}>The Service Provider maintains physical, electronic, and procedural safeguards to protect your personal data against unauthorized access, alteration, or disclosure.</p>

      <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>Changes to This Policy</h3>
      <p style={{ marginBottom: '1rem' }}>The Service Provider may update this Privacy Policy periodically. Material updates will be reflected with a revised effective date.</p>
      
      <p style={{ marginBottom: '1rem' }}><strong>Effective Date:</strong> August 30, 2026</p>

      <h3 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>Contact Us</h3>
      <p style={{ marginBottom: '1rem' }}>If you have any questions or concerns regarding this Privacy Policy or your data rights, contact:</p>
      <p><strong>Email:</strong> <a href="mailto:contact@mensola.app" style={{ color: 'var(--blue-400)', textDecoration: 'underline' }}>contact@mensola.app</a></p>
    </div>
  );
}
