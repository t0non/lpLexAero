"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Problemas com Voo", href: "/#problems-heading" },
  { label: "Como Funciona", href: "/#how-heading" },
  { label: "Honorários", href: "/#pricing-heading" },
  { label: "A Especialista", href: "/kareline-staut" },
  { label: "Dúvidas", href: "/#faq-heading" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("pt");
  const [dropdownPos, setDropdownPos] = useState({ top: 72, right: 16 });
  const langBtnRef = useRef(null);

  const openDropdown = (e) => {
    e.stopPropagation();
    if (langBtnRef.current) {
      const rect = langBtnRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + 8,
        right: window.innerWidth - rect.right,
      });
    }
    setLangDropdownOpen((v) => !v);
  };

  const changeLanguage = (langCode) => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event("change"));
    }
    setCurrentLang(langCode);
    setLangDropdownOpen(false);
  };

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    if (!langDropdownOpen) return;
    const close = () => setLangDropdownOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [langDropdownOpen]);

  return (
    <>
      <header className="site-header">
        <div className="container header__inner">
          {/* Logo */}
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
          </nav>

          {/* Actions: Idioma + Hambúrguer */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginLeft: "auto" }}>

            {/* Language Button */}
            <button
              ref={langBtnRef}
              onClick={openDropdown}
              aria-label="Selecionar idioma"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                cursor: "pointer",
                background: "transparent",
                border: "none",
                padding: "4px 6px",
                borderRadius: "4px",
              }}
            >
              <img
                src={currentLang === "pt" ? "/bandeira_brasil.webp" : "/eua.svg"}
                alt={currentLang === "pt" ? "Brasil" : "EUA"}
                style={{ width: "24px", height: "16px", objectFit: "cover", borderRadius: "2px", display: "block" }}
              />
              <svg
                width="10" height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#555"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ transform: langDropdownOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {/* Mobile Toggle */}
            <button
              className={`header__mobile-toggle ${mobileOpen ? "open" : ""}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Abrir menu"
              aria-expanded={mobileOpen}
            >
              <span className="header__bar"></span>
              <span className="header__bar"></span>
              <span className="header__bar"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Dropdown — renderizado fora do header via position:fixed para nunca ser cortado */}
      {langDropdownOpen && (
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            position: "fixed",
            top: dropdownPos.top,
            right: dropdownPos.right,
            background: "#fff",
            border: "1px solid #e5e5e5",
            borderRadius: "10px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
            padding: "6px",
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            zIndex: 9999,
            minWidth: "90px",
          }}
        >
          {currentLang !== "pt" && (
            <button
              onClick={() => changeLanguage("pt")}
              style={{ display: "flex", alignItems: "center", gap: "8px", padding: "7px 12px", background: "transparent", border: "none", cursor: "pointer", width: "100%", borderRadius: "6px" }}
              onMouseOver={(e) => (e.currentTarget.style.background = "#f5f5f5")}
              onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <img src="/bandeira_brasil.webp" alt="Brasil" style={{ width: "22px", height: "15px", objectFit: "cover", borderRadius: "2px" }} />
              <span style={{ fontSize: "0.85rem", color: "#111", fontWeight: 500 }}>PT</span>
            </button>
          )}
          {currentLang !== "en" && (
            <button
              onClick={() => changeLanguage("en")}
              style={{ display: "flex", alignItems: "center", gap: "8px", padding: "7px 12px", background: "transparent", border: "none", cursor: "pointer", width: "100%", borderRadius: "6px" }}
              onMouseOver={(e) => (e.currentTarget.style.background = "#f5f5f5")}
              onMouseOut={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <img src="/eua.svg" alt="EUA" style={{ width: "22px", height: "15px", objectFit: "cover", borderRadius: "2px" }} />
              <span style={{ fontSize: "0.85rem", color: "#111", fontWeight: 500 }}>EN</span>
            </button>
          )}
        </div>
      )}

      {/* Menu Mobile */}
      <nav className={`header__mobile-nav ${mobileOpen ? "open" : ""}`} aria-hidden={!mobileOpen}>
        {NAV_LINKS.map((l) => (
          <Link
            key={l.href + l.label + "-mobile"}
            href={l.href}
            className="header__mobile-link"
            onClick={() => setMobileOpen(false)}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
