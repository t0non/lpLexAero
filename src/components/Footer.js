import Link from "next/link";

const FOOTER_LINKS = {
  "Direitos do Passageiro": [
    { label: "Voo Atrasado", href: "/voo-atrasado" },
    { label: "Voo Cancelado", href: "/voo-cancelado" },
    { label: "Perda de Conexão", href: "/conexao-perdida" },
    { label: "Overbooking", href: "/overbooking" },
    { label: "Extravio de Bagagem", href: "/bagagem" },
    { label: "Outros Problemas", href: "/outros-problemas" },
  ],
  "Institucional": [
    { label: "Kareline Staut", href: "/kareline-staut" },
    { label: "Conteúdos", href: "/blog" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer" style={{ borderTop: "1px solid var(--lex-border-dark)" }}>
      <div className="container">
        <div className="footer__grid">
          
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
          </div>

          {/* Col 2 & 3: Links */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <p className="footer__col-title" style={{ color: "var(--lex-white)", fontWeight: 600, fontSize: "0.9rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>{section}</p>
              <ul className="footer__links" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="footer__link" style={{ color: "var(--lex-text-dark-muted)", fontSize: "0.95rem", textDecoration: "none", transition: "color 0.2s" }}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Col 4: Contato & SEO */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p className="footer__col-title" style={{ color: "var(--lex-white)", fontWeight: 600, fontSize: "0.9rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>Fale Conosco</p>
            <div style={{ color: "var(--lex-text-dark-muted)", fontSize: "0.95rem", lineHeight: 1.6, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <span>Av. Paulista, 1000 - Bela Vista<br />São Paulo - SP, 01310-100</span>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                <span>(31) 8325-9594</span>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                <span>contato@lexaero.com.br</span>
              </div>
            </div>
            
            <div style={{ marginTop: "0.5rem" }}>
              <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--lex-white)", fontWeight: 500, display: "flex", alignItems: "center", gap: "0.5rem" }}>
                Kareline Staut — OAB/SP 000.000
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
