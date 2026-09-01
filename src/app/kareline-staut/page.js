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

       <section style={{ backgroundColor: "var(--lex-black)", padding: "5rem 0", color: "var(--lex-white)", minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <style dangerouslySetInnerHTML={{__html: `
          .kareline-hero-container {
            display: grid;
            grid-template-columns: 1fr 1.2fr;
            align-items: center;
            gap: 4rem;
            max-width: 1100px;
          }
          .kareline-hero-photo {
            position: relative;
            width: 100%;
          }
          .kareline-hero-content {
            display: flex;
            flex-direction: column;
          }
          .kareline-hero-header {
            text-align: left;
            margin-bottom: 2rem;
          }
          .kareline-hero-tags {
            justify-content: flex-start;
          }
          .kareline-hero-bio {
            text-align: left;
          }
          @media (max-width: 768px) {
            .kareline-hero-container {
              display: flex;
              flex-direction: column;
              gap: 2rem;
            }
            .kareline-hero-content {
              display: contents;
            }
            .kareline-hero-header {
              order: 1;
              text-align: center;
              margin-bottom: 0;
            }
            .kareline-hero-photo {
              order: 2;
            }
            .kareline-hero-bio {
              order: 3;
              text-align: center;
            }
            .kareline-hero-tags {
              justify-content: center;
            }
            .kareline-btn {
              margin: 2rem auto 0 auto;
            }
          }
        `}} />
        <div className="container kareline-hero-container">
          
          <div className="kareline-hero-photo">
            <img src="/kareline-hero-confianca.png" alt="Kareline Staut" style={{ width: "100%", height: "auto", display: "block", maxWidth: "450px", margin: "0 auto" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to top, var(--lex-black), transparent)", pointerEvents: "none" }}></div>
          </div>

          <div className="kareline-hero-content">
            <div className="kareline-hero-header">
              <span className="eyebrow" style={{ color: "var(--lex-gold-dark)", display: "block", marginBottom: "0.5rem" }}>Fundadora da LexAero</span>
              <h1 itemProp="name" style={{ fontSize: "clamp(2rem, 3.5vw, 2.5rem)", margin: "0 0 0.5rem", color: "var(--lex-white)" }}>Kareline Staut</h1>
            </div>

            <div className="kareline-hero-bio">
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <p style={{ lineHeight: 1.6, color: "var(--lex-text-dark-muted)", fontSize: "0.95rem", margin: 0, fontWeight: 300 }}>
                  Kareline Staut é <strong style={{ color: "var(--lex-white)", fontWeight: 500 }}>Mestra em Direito</strong>, especialista em <strong style={{ color: "var(--lex-white)", fontWeight: 500 }}>Direito do Consumidor e Direito do Passageiro Aéreo</strong>, com anos de experiência na defesa intransigente dos viajantes frente aos abusos das companhias aéreas.
                </p>
                <p style={{ lineHeight: 1.6, color: "var(--lex-text-dark-muted)", fontSize: "0.95rem", margin: 0, fontWeight: 300 }}>
                  Reconhecida por sua atuação estratégica e combativa em casos de <strong style={{ color: "var(--lex-white)", fontWeight: 500 }}>atrasos, cancelamentos, overbooking, avarias e extravio de bagagem</strong>, Kareline alia rigor técnico a resultados expressivos nos tribunais.
                </p>
                <p style={{ lineHeight: 1.6, color: "var(--lex-text-dark-muted)", fontSize: "0.95rem", margin: 0, fontWeight: 300 }}>
                  Ao longo de sua trajetória, construiu uma reputação sólida como profissional que une <strong style={{ color: "var(--lex-white)", fontWeight: 500 }}>profundo conhecimento jurídico e comunicação clara</strong>, transformando a complexidade da lei em soluções práticas e indenizações justas para quem enfrenta problemas em suas viagens.
                </p>
                <p style={{ lineHeight: 1.6, color: "var(--lex-text-dark-muted)", fontSize: "0.95rem", margin: 0, fontWeight: 300 }}>
                  Sob sua liderança, a LexAero ostenta uma <strong style={{ color: "var(--lex-white)", fontWeight: 500 }}>taxa de sucesso superior a 90%</strong>, garantindo que o seu direito seja tratado com a máxima seriedade, agilidade e eficiência. Com <strong style={{ color: "var(--lex-white)", fontWeight: 500 }}>indenizações significativas e precedentes relevantes conquistados</strong>, fortalece a cada dia a proteção dos passageiros no Brasil.
                </p>
              </div>
              
              <a href="https://wa.me/553183259594" target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--lg kareline-btn" style={{ marginTop: "2rem" }}>
                Solicitar análise
                <span className="btn__icon-circle" aria-hidden="true">
                  <img src="/aviao.svg" width="20" height="20" alt="" aria-hidden="true" />
                </span>
              </a>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
}
