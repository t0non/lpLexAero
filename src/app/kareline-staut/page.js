import Link from "next/link";

export const metadata = {
  title: "Kareline Staut | Advogada Especialista em Direito do Passageiro Aéreo",
  description:
    "Conheça a trajetória, formação e filosofia de atuação de Kareline Staut, Mestra em Direito e fundadora da LexAero — boutique jurídica especializada em Direito do Passageiro Aéreo.",
};

export default function KarelinePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Kareline Staut",
            "jobTitle": "Advogada",
            "description": "Mestra em Direito, especialista em Direito do Passageiro Aéreo e Direito do Consumidor. Fundadora da LexAero.",
            "url": "https://www.lexaero.com.br/kareline-staut",
            "worksFor": {
              "@type": "LegalService",
              "name": "LexAero",
              "url": "https://www.lexaero.com.br",
            },
            "knowsAbout": ["Direito do Passageiro Aéreo","Direito do Consumidor","Transporte Aéreo"],
            "alumniOf": { "@type": "CollegeOrUniversity", "name": "[Instituição — preencher]" },
          }),
        }}
      />

      {/* Hero */}
      <section style={{ backgroundColor: "var(--lex-black)", padding: "5rem 0 0", color: "var(--lex-white)" }}>
        <div className="container" style={{ maxWidth: 960 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "var(--space-12)", alignItems: "flex-start" }} className="kareline-grid">
            {/* Photo */}
            <div style={{ position: "sticky", top: "90px" }}>
              <div style={{ position: "relative", marginBottom: "1.5rem" }}>
                <img src="/kareline-central-direitos-apontando.png" alt="Kareline Staut" style={{ width: "100%", height: "auto", display: "block" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to top, var(--lex-black), transparent)", pointerEvents: "none" }}></div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <span className="eyebrow" style={{ color: "var(--lex-gold-dark)" }}>OAB/XX 000.000</span>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--full">
                  Solicitar análise
                </a>
              </div>
            </div>

            {/* Content */}
            <div style={{ paddingBottom: "5rem" }}>
              <span className="eyebrow" style={{ color: "var(--lex-gold-dark)" }}>Fundadora da LexAero</span>
              <h1 itemProp="name" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", margin: "0.5rem 0 0.75rem", color: "var(--lex-white)" }}>Kareline Staut</h1>
              <p style={{ fontSize: "1rem", color: "var(--lex-text-dark-muted)", marginBottom: "2.5rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <span>Mestra em Direito</span> · <span>Advogada</span> · <span>Direito do Passageiro Aéreo</span>
              </p>

              <section aria-labelledby="bio-heading" style={{ marginBottom: "3rem" }}>
                <h2 id="bio-heading" style={{ fontSize: "1.2rem", borderBottom: "1px solid var(--lex-graphite)", paddingBottom: "0.75rem", marginBottom: "1.25rem", color: "var(--lex-white)" }}>Resumo profissional</h2>
                <p style={{ marginBottom: "1rem", color: "var(--lex-text-dark-muted)" }}>
                  Kareline Staut é advogada e Mestra em Direito, com atuação inteiramente dedicada ao <strong>Direito do Passageiro Aéreo e Direito do Consumidor</strong>. É a fundadora e principal responsável técnica da LexAero, boutique jurídica criada com o propósito de oferecer análise jurídica individualizada para conflitos envolvendo transporte aéreo.
                </p>
                <p style={{ color: "var(--lex-text-dark-muted)" }}>
                  Sua trajetória combina formação acadêmica aprofundada com prática orientada ao passageiro — transformando problemas complexos em orientações jurídicas claras e fundamentadas.
                </p>
              </section>

              <section aria-labelledby="formacao-heading" style={{ marginBottom: "3rem" }}>
                <h2 id="formacao-heading" style={{ fontSize: "1.2rem", borderBottom: "1px solid var(--lex-graphite)", paddingBottom: "0.75rem", marginBottom: "1.25rem", color: "var(--lex-white)" }}>Formação acadêmica</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {[
                    { grau: "Mestrado em Direito", inst: "[Instituição — preencher]", ano: "[Ano]", obs: "Dissertação: [Tema — preencher]" },
                    { grau: "Especialização em Direito do Consumidor", inst: "[Instituição — preencher]", ano: "[Ano]" },
                    { grau: "Graduação em Direito", inst: "[Instituição — preencher]", ano: "[Ano]" },
                  ].map((item) => (
                    <div key={item.grau} style={{ paddingLeft: "1rem", borderLeft: "2px solid var(--lex-graphite)" }}>
                      <h3 style={{ fontSize: "1rem", marginBottom: "0.25rem", color: "var(--lex-white)" }}>{item.grau}</h3>
                      <p style={{ fontSize: "0.875rem", color: "var(--lex-text-dark-muted)", margin: 0 }}>{item.inst} · {item.ano}</p>
                      {item.obs && <p style={{ fontSize: "0.8rem", color: "var(--lex-text-dark-muted)", margin: "0.2rem 0 0", fontStyle: "italic" }}>{item.obs}</p>}
                    </div>
                  ))}
                </div>
              </section>

              <section aria-labelledby="filosofia-heading" style={{ marginBottom: "3rem" }}>
                <h2 id="filosofia-heading" style={{ fontSize: "1.2rem", borderBottom: "1px solid var(--lex-graphite)", paddingBottom: "0.75rem", marginBottom: "1.25rem", color: "var(--lex-white)" }}>Filosofia de atuação</h2>
                <blockquote style={{ padding: "1.5rem", borderLeft: "3px solid var(--lex-gold)", background: "var(--lex-graphite)", borderRadius: "0 var(--radius-md) var(--radius-md) 0", fontStyle: "italic", color: "var(--lex-white)", lineHeight: 1.75 }}>
                  "O passageiro não é apenas um localizador no sistema da companhia aérea. Cada situação tem particularidades que precisam ser compreendidas antes de qualquer análise jurídica. A advocacia responsável exige ouvir, entender e aplicar o direito com rigor e cuidado."
                </blockquote>
              </section>

              <section aria-labelledby="publicacoes-heading" style={{ marginBottom: "3rem" }}>
                <h2 id="publicacoes-heading" style={{ fontSize: "1.2rem", borderBottom: "1px solid var(--lex-graphite)", paddingBottom: "0.75rem", marginBottom: "1.25rem", color: "var(--lex-white)" }}>Publicações e artigos</h2>
                <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {[
                    { title: "A responsabilidade civil no transporte aéreo: análise atual (2026)", href: "/central-de-direitos" },
                    { title: "Convenção de Montreal vs. CDC: critérios de aplicação (2026)", href: "/central-de-direitos" },
                    { title: "Assistência material: obrigação absoluta ou relativa? (2023)", href: "/central-de-direitos" },
                  ].map((pub) => (
                    <li key={pub.title}>
                      <Link href={pub.href} style={{ fontSize: "0.9rem", color: "var(--lex-gold-dark)", textDecoration: "underline" }}>
                        {pub.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
