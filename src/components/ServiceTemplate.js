import Link from "next/link";
import Testimonials from "@/components/Testimonials";

export default function ServiceTemplate({ serviceData }) {
  const { hero, rights, documents, faqs, diagnosticValue } = serviceData;

  const diagUrl = `/diagnostico?problema=${encodeURIComponent(diagnosticValue)}`;

  return (
    <>
      {/* ── HERO ─────────────────────────── */}
      <section className="hero" aria-label="Hero principal">
        <div className="container">
          <div className="hero__inner">
            <div className="hero__left">
              <span className="hero__eyebrow">DIREITO DO PASSAGEIRO AÉREO</span>
              <h1 className="hero__headline" dangerouslySetInnerHTML={{ __html: hero.headline.replace('até R$ 10 mil', '<span style="color: var(--lex-gold)">até R$ 10 mil</span>') }} />
              <p className="hero__sub">{hero.subheadline}</p>
              
              <div className="hero__ctas">
                <Link href={diagUrl} className="btn btn--primary">
                  Verificar grátis
                  <span className="btn__icon-circle" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1281 1920" fill="currentColor">
                      <path d="M 1170.144531 397.558594 C 1129.84375 357.300781 969.78125 435.792969 916.152344 489.46875 L 777.460938 628.160156 L 174.851562 521.820312 C 170.257812 520.992188 165.523438 522.460938 162.214844 525.769531 L 104.957031 583.078125 C 101.691406 586.339844 100.175781 590.980469 100.910156 595.53125 C 101.648438 600.082031 104.496094 603.988281 108.632812 606.054688 L 580.222656 841.847656 L 380.5 1097.40625 L 203.484375 1066.15625 C 198.84375 1065.421875 194.15625 1066.796875 190.847656 1070.109375 L 147.878906 1113.074219 C 144.707031 1116.246094 143.144531 1120.796875 143.789062 1125.253906 C 144.523438 1129.804688 147.1875 1133.710938 151.1875 1135.777344 L 296.957031 1214.269531 L 259.730469 1288.667969 C 256.976562 1294.183594 258.078125 1300.847656 262.445312 1305.167969 C 265.246094 1307.925781 268.878906 1309.304688 272.597656 1309.304688 C 274.757812 1309.304688 276.964844 1308.84375 278.988281 1307.832031 L 353.386719 1270.609375 L 431.878906 1416.378906 C 434.039062 1420.328125 437.945312 1423.085938 442.402344 1423.824219 C 443.09375 1423.914062 443.734375 1423.914062 444.472656 1423.914062 C 448.238281 1423.914062 451.871094 1422.488281 454.628906 1419.777344 L 497.59375 1376.765625 C 500.902344 1373.457031 502.375 1368.769531 501.59375 1364.21875 L 470.34375 1187.109375 L 725.898438 987.386719 L 961.695312 1458.976562 C 963.761719 1463.113281 967.714844 1465.964844 972.21875 1466.699219 C 973 1466.835938 973.734375 1466.882812 974.605469 1466.882812 C 978.375 1466.882812 981.914062 1465.410156 984.671875 1462.699219 L 1042.023438 1405.394531 C 1045.238281 1402.085938 1046.800781 1397.398438 1045.976562 1392.757812 L 939.636719 790.148438 L 1078.328125 651.457031 C 1132.003906 597.828125 1210.449219 437.859375 1170.144531 397.558594 Z" />
                    </svg>
                  </span>
                </Link>
                <Link href="#como-funciona" className="btn btn--ghost-white">
                  Conhecer meus direitos
                </Link>
              </div>

              <div className="hero__trust">
                <div className="hero__trust-item">
                  <img src="/bandeira_brasil.webp" alt="Bandeira do Brasil" style={{ width: '16px', height: '11px', objectFit: 'cover', borderRadius: '2px' }} />
                  Atendimento em todo o Brasil
                </div>
                <div className="hero__trust-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--lex-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="13" r="8" />
                    <path d="M12 9v4l2 2" />
                    <line x1="10" x2="14" y1="2" y2="2" />
                  </svg>
                  Verificação em até 6 minutos
                </div>
              </div>
            </div>

            <div className="hero__photo-wrap" aria-hidden="true">
              <img
                src="/kareline-hero-confianca.png"
                alt="Kareline Staut"
                className="hero__photo"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ──────────────────────────────── */}
      <div className="trust-strip" role="list">
        <div className="trust-strip__inner">
          {[
            "Atendimento em todo o Brasil",
            "Análise individualizada do caso",
            "Especialização em Direito Aéreo",
            "Atendimento 100% digital",
          ].map((text) => (
            <div key={text} className="trust-strip__item" role="listitem">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* ── QUANDO POSSO TER DIREITO ──────────────────────────────── */}
      <section className="section bg-ivory">
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="text-center" style={{ marginBottom: "3rem" }}>
            <span className="eyebrow">Atenção</span>
            <h2 style={{ marginTop: "0.5rem" }}>{rights.title}</h2>
            <p style={{ marginTop: "0.75rem" }}>
              Analise se o seu caso se enquadra em alguma das situações abaixo.
            </p>
          </div>
          
          <div className="checklist" style={{ marginBottom: "2.5rem" }}>
            {rights.items.map((item) => (
              <div key={item} className="checklist__item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {item}
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href={diagUrl} className="btn btn--primary">
              Verificar meu caso →
            </Link>
          </div>
        </div>
      </section>

      {/* ── COMO FUNCIONA (METODOLOGIA) ───────────────────────── */}
      <section id="como-funciona" className="section bg-white" aria-labelledby="method-heading">
        <div className="container">
          <div className="metodologia-section">
            <div className="metodologia__content">
              <span className="eyebrow">Etapas</span>
              <h2 id="method-heading" style={{ marginTop: "0.5rem", marginBottom: "2rem" }}>Como funciona a verificação?</h2>
              
              <div className="differentials-grid" style={{ marginBottom: "2rem" }}>
                {[
                  {
                    title: "1. Conte o que aconteceu",
                    desc: "Responda algumas perguntas rápidas sobre o voo para compreendermos a situação inicial.",
                    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
                  },
                  {
                    title: "2. Analisamos gratuitamente",
                    desc: "Nossa equipe verifica se existem elementos para buscar a reparação ou indenização.",
                    icon: "M22 12h-4l-3 9L9 3l-3 9H2",
                  },
                  {
                    title: "3. Orientação especializada",
                    desc: "Caso seja possível prosseguir, explicamos os próximos passos de forma clara e transparente.",
                    icon: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
                  }
                ].map((d, i) => (
                  <div key={i} className="differential">
                    <div className="differential__icon" aria-hidden="true">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d={d.icon} />
                      </svg>
                    </div>
                    <div>
                      <h4 className="differential__title">{d.title}</h4>
                      <p className="differential__desc">{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="metodologia__photo-wrap">
              <img 
                src="/kareline-metodologia-seriedade.png" 
                alt="Kareline Staut - Análise técnica e individualizada" 
                className="metodologia__photo"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── DOCUMENTOS ────────────────────────────────────────── */}
      <section className="section bg-ivory">
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="text-center" style={{ marginBottom: "3rem" }}>
            <span className="eyebrow">Documentação</span>
            <h2 style={{ marginTop: "0.5rem" }}>O que você pode precisar</h2>
            <p style={{ marginTop: "0.75rem" }}>
              Reunir essas informações facilita muito o processo, mas não se preocupe se não tiver tudo em mãos agora.
            </p>
          </div>
          
          <div className="checklist" style={{ marginBottom: "2.5rem" }}>
            {documents.map((doc) => (
              <div key={doc} className="checklist__item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {doc}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ── DEPOIMENTOS ──────────────────────────────────────── */}
      <Testimonials />

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="section bg-white" aria-labelledby="faq-heading">
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="text-center" style={{ marginBottom: "3rem" }}>
            <span className="eyebrow">Dúvidas</span>
            <h2 id="faq-heading" style={{ marginTop: "0.5rem" }}>Perguntas Frequentes</h2>
          </div>
          <div className="faq-list" itemScope itemType="https://schema.org/FAQPage">
            {faqs.map((faq) => (
              <div key={faq.q} className="faq-item" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <details>
                  <summary>
                    <span itemProp="name">{faq.q}</span>
                    <span className="faq__icon" aria-hidden="true">+</span>
                  </summary>
                  <div className="faq__answer" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <span itemProp="text" dangerouslySetInnerHTML={{ __html: faq.a }} />
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ───────────────────────────────────────── */}
      <section className="section bg-dark" aria-labelledby="cta-heading">
        <div className="container">
          <div className="cta-banner" style={{ border: "none", borderTop: "1px solid var(--lex-gold)", borderRadius: 0, background: "transparent" }}>
            <h2 id="cta-heading" className="cta-banner__title" style={{ color: "var(--lex-white)" }}>
              Não sabe se tem direito?
            </h2>
            <p className="cta-banner__sub" style={{ color: "var(--lex-text-dark-muted)" }}>
              Verifique seu caso gratuitamente em poucos minutos.
            </p>
            <div className="cta-banner__btns">
              <Link href={diagUrl} className="btn btn--primary btn--lg">
                Verificar meu caso →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
