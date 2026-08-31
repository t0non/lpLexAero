"use client";
import { useState, useEffect } from "react";
import Link from "next/link";


const NAV_LINKS = [
  { label: "Áreas de Atuação", href: "/#servicos" },
  { label: "A Especialista", href: "/kareline-staut" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const changeLanguage = (langCode) => {
    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event('change'));
    }
  };


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400); // Mostra a barra após 400px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Utility Bar */}
      <div style={{ background: "var(--lex-graphite)", color: "var(--lex-text-dark-muted)", fontSize: "0.8rem", padding: "0.4rem 0" }} className="topbar-desktop">
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--lex-gold)" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Atendimento 100% online para todo o Brasil
            </span>
          </div>
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            <a href="mailto:contato@lexaero.com.br" style={{ display: "flex", alignItems: "center", gap: "0.4rem", transition: "color 0.2s" }} onMouseOver={(e)=>e.currentTarget.style.color="var(--lex-gold)"} onMouseOut={(e)=>e.currentTarget.style.color="var(--lex-text-dark-muted)"}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--lex-gold)" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              contato@lexaero.com.br
            </a>
            <a href="https://wa.me/553183259594" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.4rem", transition: "color 0.2s" }} onMouseOver={(e)=>e.currentTarget.style.color="var(--lex-gold)"} onMouseOut={(e)=>e.currentTarget.style.color="var(--lex-text-dark-muted)"}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--lex-gold)" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              (31) 8325-9594
            </a>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container header__inner">
          <Link href="/" className="header__logo" onClick={() => setMobileOpen(false)}>
            <img 
              src="/logo_lexaero_dark.png" 
              alt="LexAero Logo" 
              className="logo-desktop"
              style={{ height: "54px", width: "auto", objectFit: "contain", transform: "translateY(2px)" }}
            />
            <img 
              src="/logo_lexaero.png" 
              alt="LexAero Logo Branca" 
              className="logo-mobile"
              style={{ height: "48px", width: "auto", objectFit: "contain" }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="header__nav" aria-label="Navegação principal">
            {NAV_LINKS.map((l) => (
              <Link key={l.href + l.label} href={l.href} className="header__link">
                {l.label}
              </Link>
            ))}
            <Link href="/diagnostico" className="btn btn--primary header__cta" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '0.65rem 1.5rem', borderRadius: '9999px', fontSize: '0.95rem', fontWeight: 600, boxShadow: '0 4px 12px rgba(252,189,38,0.25)', border: 'none' }}>
              Analisar meu caso
              <span className="btn__icon-circle" aria-hidden="true" style={{ background: 'var(--lex-white)', color: 'var(--lex-gold)', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                <img src="/aviao.svg" alt="" style={{ width: '1em', height: '1em', objectFit: 'contain' }} />
              </span>
            </Link>
          </nav>

          {/* Container Mobile Actions (Idioma + Hambúrguer) */}
          <div className="header__actions" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginLeft: 'auto' }}>
            
            {/* Language Switcher */}
            <div className="header__lang-switcher" style={{ position: "relative" }} onMouseEnter={(e) => e.currentTarget.lastChild.style.display = 'flex'} onMouseLeave={(e) => e.currentTarget.lastChild.style.display = 'none'}>
              <button className="header__lang-btn" style={{ cursor: 'pointer', padding: '6px 10px', background: 'var(--lex-bg)', border: '1px solid var(--lex-border-light)', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '6px', transition: 'all 0.2s' }}>
                <img src="/bandeira_brasil.webp" alt="Bandeira do Brasil" style={{ width: '20px', height: '14px', objectFit: 'cover', borderRadius: '2px', display: 'block' }} />
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}><path d="M6 9l6 6 6-6"/></svg>
              </button>
              <div style={{ position: "absolute", top: "100%", right: 0, display: "none", flexDirection: "column", background: "var(--lex-white)", boxShadow: "0 8px 24px rgba(0,0,0,0.12)", border: "1px solid var(--lex-border-light)", borderRadius: "12px", overflow: "hidden", zIndex: 10, minWidth: "100px", marginTop: "8px" }}>
                <button onClick={() => changeLanguage('pt')} style={{ cursor: 'pointer', fontSize: '0.9rem', fontWeight: 500, padding: '10px 16px', background: 'transparent', border: 'none', display: 'flex', alignItems: 'center', gap: '10px', textAlign: 'left', width: '100%', color: 'var(--lex-text)' }} onMouseOver={(e)=>e.currentTarget.style.background='#f8f9fa'} onMouseOut={(e)=>e.currentTarget.style.background='transparent'}>
                  <img src="/bandeira_brasil.webp" alt="Bandeira do Brasil" style={{ width: '20px', height: '14px', objectFit: 'cover', borderRadius: '2px' }} /> PT-BR
                </button>
                <div style={{ height: '1px', background: 'var(--lex-border-light)', margin: '0 8px' }}></div>
                <button onClick={() => changeLanguage('en')} style={{ cursor: 'pointer', fontSize: '0.9rem', fontWeight: 500, padding: '10px 16px', background: 'transparent', border: 'none', display: 'flex', alignItems: 'center', gap: '10px', textAlign: 'left', width: '100%', color: 'var(--lex-text)' }} onMouseOver={(e)=>e.currentTarget.style.background='#f8f9fa'} onMouseOut={(e)=>e.currentTarget.style.background='transparent'}>
                  <img src="/eua.svg" alt="Bandeira dos EUA" style={{ width: '20px', height: '14px', objectFit: 'cover', borderRadius: '2px' }} /> EN-US
                </button>
              </div>
            </div>

            {/* Mobile Toggle */}
            <button 
              className={`header__mobile-toggle ${mobileOpen ? 'open' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Abrir menu"
              aria-expanded={mobileOpen}
              style={{ marginLeft: 0 }}
            >
              <span className="header__bar"></span>
              <span className="header__bar"></span>
              <span className="header__bar"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Menu Mobile */}
      <nav className={`header__mobile-nav ${mobileOpen ? 'open' : ''}`} aria-hidden={!mobileOpen}>
        {NAV_LINKS.map((l) => (
          <Link key={l.href + l.label + "-mobile"} href={l.href} className="header__mobile-link" onClick={() => setMobileOpen(false)}>
            {l.label}
          </Link>
        ))}
        <div style={{ marginTop: "1rem" }}>
          <Link href="/diagnostico" className="btn btn--primary btn--full" onClick={() => setMobileOpen(false)}>
            Analisar meu caso
            <span className="btn__icon-circle" aria-hidden="true">
              <img src="/aviao.svg" alt="" style={{ width: '1.2em', height: '1.2em', objectFit: 'contain' }} />
            </span>
          </Link>
        </div>
        <div style={{ marginTop: "1rem", display: "flex", justifyContent: "center", gap: "1rem" }}>
            <button onClick={() => changeLanguage('pt')} aria-label="Português" style={{ cursor: 'pointer', background: 'transparent', border: 'none' }}>
              <img src="/bandeira_brasil.webp" alt="Bandeira do Brasil" style={{ width: '28px', height: '19px', objectFit: 'cover', borderRadius: '3px', display: 'block' }} />
            </button>
            <button onClick={() => changeLanguage('en')} aria-label="English" style={{ cursor: 'pointer', background: 'transparent', border: 'none' }}>
              <img src="/eua.svg" alt="Bandeira dos EUA" style={{ width: '28px', height: '19px', objectFit: 'cover', borderRadius: '3px', display: 'block' }} />
            </button>
        </div>

      </nav>
    </>
  );
}
