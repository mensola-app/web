"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const router = useRouter();
  const pathname = usePathname();
  
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const switchLanguage = (lang: string) => {
    if (!pathname) return;
    
    // Replace the current locale in the path with the new one
    const pathSegments = pathname.split('/').filter(Boolean);
    // Usually pathSegments[0] is the current lang
    if (pathSegments[0] === currentLang) {
      pathSegments[0] = lang;
    } else {
      // Just in case, prepend it if it's missing somehow
      pathSegments.unshift(lang);
    }
    
    const newPath = `/${pathSegments.join('/')}`;
    router.push(newPath);
  };

  if (!mounted) return null;

  return (
    <div className="language-switcher" style={{ display: 'flex', gap: '8px', alignItems: 'center', marginLeft: '16px' }}>
      <button 
        onClick={() => switchLanguage('en')}
        style={{
          background: 'none',
          border: 'none',
          color: currentLang === 'en' ? 'var(--text-primary)' : 'var(--text-muted)',
          cursor: 'pointer',
          fontWeight: currentLang === 'en' ? 'bold' : 'normal',
          fontSize: '0.85rem'
        }}
      >
        EN
      </button>
      <span style={{ color: 'var(--border)', fontSize: '0.85rem' }}>|</span>
      <button 
        onClick={() => switchLanguage('tr')}
        style={{
          background: 'none',
          border: 'none',
          color: currentLang === 'tr' ? 'var(--text-primary)' : 'var(--text-muted)',
          cursor: 'pointer',
          fontWeight: currentLang === 'tr' ? 'bold' : 'normal',
          fontSize: '0.85rem'
        }}
      >
        TR
      </button>
    </div>
  );
}
