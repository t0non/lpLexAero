import Link from "next/link";

const FOOTER_LINKS = {
  "Direito do Passageiro": [
    { label: "Voo Atrasado", href: "/direito-do-passageiro-aereo/voo-atrasado" },
    { label: "Voo Cancelado", href: "/direito-do-passageiro-aereo/voo-cancelado" },
    { label: "Perda de Conexão", href: "/direito-do-passageiro-aereo/perda-de-conexao" },
    { label: "Overbooking", href: "/direito-do-passageiro-aereo/overbooking" },
    { label: "Extravio de Bagagem", href: "/direito-do-passageiro-aereo/extravio-de-bagagem" },
    { label: "Assistência Material", href: "/direito-do-passageiro-aereo/assistencia-material" },
    { label: "Reembolso", href: "/direito-do-passageiro-aereo/reembolso" },
  ],
  "Conteúdo": [
    { label: "Central de Direitos", href: "/central-de-direitos" },
    { label: "Legislação", href: "/legislacao" },
    { label: "Jurisprudência", href: "/jurisprudencia" },
  ],
  "LexAero": [
    { label: "Kareline Staut", href: "/kareline-staut" },
    { label: "Sobre a LexAero", href: "/sobre" },
    { label: "Diagnóstico", href: "/diagnostico" },
    { label: "Contato", href: "/contato" },
    { label: "Política de Privacidade", href: "/privacidade" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <Link href="/" className="footer__logo">
              Lex<span>Aero</span>
            </Link>
            <p className="footer__tagline">
              Boutique jurídica especializada em Direito do Passageiro Aéreo, liderada pela advogada Kareline Staut.
            </p>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <p className="footer__col-title">{section}</p>
              <ul className="footer__links">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="footer__link">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <p>© {year} LexAero. Todos os direitos reservados.</p>
          <p style={{ maxWidth: "480px", textAlign: "right", lineHeight: 1.5 }}>
            As informações deste site são de natureza geral e não constituem parecer jurídico, consultoria ou promessa de resultado.
          </p>
        </div>
      </div>
    </footer>
  );
}
