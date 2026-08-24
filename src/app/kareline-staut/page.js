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
      <section style={{ backgroundColor: "var(--surface)", padding: "5rem 0 0" }}>
        <div className="container" style={{ maxWidth: 960 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "var(--space-12)", alignItems: "flex-start" }}>
            {/* Photo */}
            <div style={{ position: "sticky", top: "90px" }}>
              <div style={{ aspectRatio: "3/4", background: "var(--ice)", borderRadius: "var(--radius-xl)", border: "1.5px solid var(--border)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.75rem", color: "var(--text-muted)", fontSize: "0.8rem", textAlign: "center", padding: "2rem", marginBottom: "1.5rem" }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--border)" strokeWidth="1.5" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                Fotografia profissional<br />Kareline Staut
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <span className="eyebrow">OAB/XX 000.000</span>
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--full">
                  Solicitar análise
                </a>
              </div>
            </div>

            {/* Content */}
            <div style={{ paddingBottom: "5rem" }}>
              <span className="eyebrow">Fundadora da LexAero</span>
              <h1 itemProp="name" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", margin: "0.5rem 0 0.75rem" }}>Kareline Staut</h1>
              <p style={{ fontSize: "1rem", color: "var(--text-muted)", marginBottom: "2.5rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <span>Mestra em Direito</span> · <span>Advogada</span> · <span>Direito do Passageiro Aéreo</span>
              </p>

              <section aria-labelledby="bio-heading" style={{ marginBottom: "3rem" }}>
                <h2 id="bio-heading" style={{ fontSize: "1.2rem", borderBottom: "1px solid var(--border)", paddingBottom: "0.75rem", marginBottom: "1.25rem" }}>Resumo profissional</h2>
                <p style={{ marginBottom: "1rem" }}>
                  Kareline Staut é advogada e Mestra em Direito, com atuação inteiramente dedicada ao <strong>Direito do Passageiro Aéreo e Direito do Consumidor</strong>. É a fundadora e principal responsável técnica da LexAero, boutique jurídica criada com o propósito de oferecer análise jurídica individualizada para conflitos envolvendo transporte aéreo.
                </p>
                <p>
                  Sua trajetória combina formação acadêmica aprofundada com prática orientada ao passageiro — transformando problemas complexos em orientações jurídicas claras e fundamentadas.
                </p>
              </section>

              <section aria-labelledby="formacao-heading" style={{ marginBottom: "3rem" }}>
                <h2 id="formacao-heading" style={{ fontSize: "1.2rem", borderBottom: "1px solid var(--border)", paddingBottom: "0.75rem", marginBottom: "1.25rem" }}>Formação acadêmica</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {[
                    { grau: "Mestrado em Direito", inst: "[Instituição — preencher]", ano: "[Ano]", obs: "Dissertação: [Tema — preencher]" },
                    { grau: "Especialização em Direito do Consumidor", inst: "[Instituição — preencher]", ano: "[Ano]" },
                    { grau: "Graduação em Direito", inst: "[Instituição — preencher]", ano: "[Ano]" },
                  ].map((item) => (
                    <div key={item.grau} style={{ paddingLeft: "1rem", borderLeft: "2px solid var(--border)" }}>
                      <h3 style={{ fontSize: "1rem", marginBottom: "0.25rem" }}>{item.grau}</h3>
                      <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", margin: 0 }}>{item.inst} · {item.ano}</p>
                      {item.obs && <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", margin: "0.2rem 0 0", fontStyle: "italic" }}>{item.obs}</p>}
                    </div>
                  ))}
                </div>
              </section>

              <section aria-labelledby="filosofia-heading" style={{ marginBottom: "3rem" }}>
                <h2 id="filosofia-heading" style={{ fontSize: "1.2rem", borderBottom: "1px solid var(--border)", paddingBottom: "0.75rem", marginBottom: "1.25rem" }}>Filosofia de atuação</h2>
                <blockquote style={{ padding: "1.5rem", borderLeft: "3px solid var(--primary)", background: "var(--ice)", borderRadius: "0 var(--radius-md) var(--radius-md) 0", fontStyle: "italic", color: "var(--text-sub)", lineHeight: 1.75 }}>
                  "O passageiro não é apenas um localizador no sistema da companhia aérea. Cada situação tem particularidades que precisam ser compreendidas antes de qualquer análise jurídica. A advocacia responsável exige ouvir, entender e aplicar o direito com rigor e cuidado."
                </blockquote>
              </section>

              <section aria-labelledby="publicacoes-heading" style={{ marginBottom: "3rem" }}>
                <h2 id="publicacoes-heading" style={{ fontSize: "1.2rem", borderBottom: "1px solid var(--border)", paddingBottom: "0.75rem", marginBottom: "1.25rem" }}>Publicações e artigos</h2>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {[
                    { title: "A responsabilidade civil no transporte aéreo: análise atual (2025)", href: "/central-de-direitos" },
                    { title: "Convenção de Montreal vs. CDC: critérios de aplicação (2024)", href: "/central-de-direitos" },
                    { title: "Assistência material: obrigação absoluta ou relativa? (2023)", href: "/central-de-direitos" },
                  ].map((pub) => (
                    <li key={pub.title}>
                      <Link href={pub.href} style={{ fontSize: "0.9rem", color: "var(--accent)", textDecoration: "underline" }}>
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
