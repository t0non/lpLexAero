import Link from "next/link";

const FOOTER_LINKS = {
  "Direito do Passageiro": [
    { label: "Voo Atrasado", href: "/direito-do-passageiro-aereo/voo-atrasado" },
    { label: "Voo Cancelado", href: "/direito-do-passageiro-aereo/voo-cancelado" },
    { label: "Perda de Conexão", href: "/direito-do-passageiro-aereo/perda-de-conexao" },
    { label: "Overbooking", href: "/direito-do-passageiro-aereo/overbooking" },
    { label: "Extravio de Bagagem", href: "/direito-do-passageiro-aereo/extravio-de-bagagem" },
  ],
  "Institucional": [
    { label: "Kareline Staut", href: "/kareline-staut" },
    { label: "Sobre a LexAero", href: "/sobre" },
    { label: "Central de Direitos", href: "/central-de-direitos" },
    { label: "Legislação e Jurisprudência", href: "/legislacao" },
    { label: "Contato", href: "/contato" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer" style={{ borderTop: "1px solid var(--lex-border-dark)" }}>
      <div className="container">
        <div className="footer__grid" style={{ paddingBottom: "3rem", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.5fr", gap: "3rem" }}>
          
          {/* Col 1: Brand & Desc */}
          <div className="footer__brand" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <Link href="/" className="footer__logo">
              <img 
                src="/logo_lexaero.png" 
                alt="LexAero Logo" 
                style={{ height: "48px", width: "auto", objectFit: "contain" }}
              />
            </Link>
            <p className="footer__tagline" style={{ color: "var(--lex-text-dark-muted)", fontSize: "0.95rem", lineHeight: 1.7 }}>
              Boutique jurídica premium especializada em Direito do Passageiro Aéreo. Liderada pela advogada Kareline Staut, transformamos problemas com voos em direitos garantidos.
            </p>
            <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
              <a href="#" style={{ color: "var(--lex-gold)", background: "var(--lex-graphite)", padding: "0.5rem", borderRadius: "50%", display: "flex" }} aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" style={{ color: "var(--lex-gold)", background: "var(--lex-graphite)", padding: "0.5rem", borderRadius: "50%", display: "flex" }} aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" style={{ color: "var(--lex-gold)", background: "var(--lex-graphite)", padding: "0.5rem", borderRadius: "50%", display: "flex" }} aria-label="WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </a>
            </div>
          </div>

          {/* Col 2 & 3: Links */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <p className="footer__col-title" style={{ color: "var(--lex-white)", fontWeight: 600, fontSize: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>{section}</p>
              <ul className="footer__links" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="footer__link" style={{ color: "var(--lex-text-dark-muted)", textDecoration: "none", transition: "color 0.2s" }}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Col 4: Contato & SEO */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p className="footer__col-title" style={{ color: "var(--lex-white)", fontWeight: 600, fontSize: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>Fale Conosco</p>
            <div style={{ color: "var(--lex-text-dark-muted)", fontSize: "0.95rem", lineHeight: 1.6, display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--lex-gold)" strokeWidth="2" style={{ marginTop: "2px", flexShrink: 0 }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>Av. Paulista, 1000 - Bela Vista<br />São Paulo - SP, 01310-100</span>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--lex-gold)" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span>(11) 99999-9999</span>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--lex-gold)" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span>contato@lexaero.com.br</span>
              </div>
            </div>
            
            <div style={{ marginTop: "1rem", padding: "1rem", background: "var(--lex-graphite)", borderRadius: "var(--radius-md)", border: "1px solid var(--lex-border-dark)" }}>
              <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--lex-gold-dark)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                Kareline Staut - OAB/SP 000.000
              </p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "var(--lex-border-dark)", margin: "0 0 2rem 0" }}></div>

        {/* Bottom */}
        <div className="footer__bottom" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>
          <p style={{ margin: 0, color: "var(--lex-text-dark-muted)", fontSize: "0.9rem" }}>
            © {year} LexAero. Todos os direitos reservados.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.9rem" }}>
            <Link href="/privacidade" style={{ color: "var(--lex-text-dark-muted)", textDecoration: "none" }}>Política de Privacidade</Link>
            <Link href="/termos" style={{ color: "var(--lex-text-dark-muted)", textDecoration: "none" }}>Termos de Uso</Link>
          </div>
        </div>
        <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
          <p style={{ margin: 0, color: "var(--lex-text-dark-muted)", fontSize: "0.8rem", lineHeight: 1.6, opacity: 0.7 }}>
            As informações deste site são de natureza geral e não constituem parecer jurídico, consultoria ou promessa de resultado. Este site não é afiliado às companhias aéreas citadas em nossos artigos educacionais.
          </p>
        </div>
      </div>
    </footer>
  );
}
