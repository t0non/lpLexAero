"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import SmartFloatingCTA from "./SmartFloatingCTA";

const NAV_LINKS = [
  { label: "Direito do Passageiro", href: "/direito-do-passageiro-aereo" },
  { label: "Problemas com Voo", href: "/direito-do-passageiro-aereo" },
  { label: "Central de Direitos", href: "/central-de-direitos" },
  { label: "Kareline Staut", href: "/kareline-staut" },
  { label: "Sobre", href: "/sobre" },
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
      <header className="site-header">
        <div className="container header__inner">
          <Link href="/" className="header__logo" onClick={() => setMobileOpen(false)}>
            <img 
              src="/logo_lexaero_dark.png" 
              alt="LexAero Logo" 
              style={{ height: "44px", width: "auto", objectFit: "contain" }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="header__nav" aria-label="Navegação principal">
            {NAV_LINKS.map((l) => (
              <Link key={l.href + l.label} href={l.href} className="header__link">
                {l.label}
              </Link>
            ))}
            <Link href="/diagnostico" className="btn btn--primary header__cta">
              Analisar meu caso
              <span className="btn__icon-circle" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1281 1920" preserveAspectRatio="xMidYMid meet" version="1.0">
                  <defs>
                    <clipPath id="49a6d28ac2">
                      <path d="M 100 386 L 1182 386 L 1182 1465.921875 L 100 1465.921875 Z M 100 386 " clipRule="nonzero"/>
              Análise Gratuita
            </Link>
          </nav>

          {/* Container Mobile Actions (Idioma + Hambúrguer) */}
          <div className="header__actions" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginLeft: 'auto' }}>
            
            {/* Language Switcher */}
            <div className="header__lang-switcher" style={{ position: "relative" }} onMouseEnter={(e) => e.currentTarget.lastChild.style.display = 'flex'} onMouseLeave={(e) => e.currentTarget.lastChild.style.display = 'none'}>
              <button className="header__lang-btn" style={{ cursor: 'pointer', fontSize: '1.2rem', padding: '4px 8px', background: 'transparent', border: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <img src="/bandeira_brasil.webp" alt="Bandeira do Brasil" style={{ width: '22px', height: '15px', objectFit: 'cover', borderRadius: '3px', display: 'block' }} />
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
              </button>
              <div style={{ position: "absolute", top: "100%", right: 0, display: "none", flexDirection: "column", background: "var(--lex-white)", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", borderRadius: "8px", overflow: "hidden", zIndex: 10, minWidth: "80px" }}>
                <button onClick={() => changeLanguage('pt')} style={{ cursor: 'pointer', fontSize: '1rem', padding: '8px 16px', background: 'transparent', border: 'none', display: 'flex', alignItems: 'center', gap: '8px', textAlign: 'left', width: '100%' }} onMouseOver={(e)=>e.currentTarget.style.background='#f5f5f5'} onMouseOut={(e)=>e.currentTarget.style.background='transparent'}>
                  <img src="/bandeira_brasil.webp" alt="Bandeira do Brasil" style={{ width: '22px', height: '15px', objectFit: 'cover', borderRadius: '3px' }} /> PT
                </button>
                <button onClick={() => changeLanguage('en')} style={{ cursor: 'pointer', fontSize: '1rem', padding: '8px 16px', background: 'transparent', border: 'none', display: 'flex', alignItems: 'center', gap: '8px', textAlign: 'left', width: '100%' }} onMouseOver={(e)=>e.currentTarget.style.background='#f5f5f5'} onMouseOut={(e)=>e.currentTarget.style.background='transparent'}>
                  <img src="/eua.svg" alt="Bandeira dos EUA" style={{ width: '22px', height: '15px', objectFit: 'cover', borderRadius: '3px' }} /> EN
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
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.7l-1.2 3.3c-.1.5.1 1.1.6 1.4l5.4 3.1-4 4-2.8-.7c-.4-.1-.8.1-1 .5l-.9 1.4c-.2.4 0 .9.4 1.1l4.4 2.2 2.2 4.4c.2.4.7.6 1.1.4l1.4-.9c.4-.2.6-.6.5-1l-.7-2.8 4-4 3.1 5.4c.3.5.9.7 1.4.6l3.3-1.2c.5-.2.8-.6.7-1.1z"/>
              </svg>
            </span>
          </Link>
        </div>
        <div style={{ marginTop: "1rem", display: "flex", justifyContent: "center", gap: "1rem" }}>
            <button onClick={() => changeLanguage('pt')} aria-label="Português" style={{ cursor: 'pointer', fontSize: '2rem', background: 'transparent', border: 'none' }}>
              🇧🇷
            </button>
            <button onClick={() => changeLanguage('en')} aria-label="English" style={{ cursor: 'pointer', fontSize: '2rem', background: 'transparent', border: 'none' }}>
              🇺🇸
            </button>
        </div>

      </nav>

      <SmartFloatingCTA />
    </>
  );
}
