import Link from "next/link";
import Testimonials from "@/components/Testimonials";
import StepsWrapper from "@/components/StepsWrapper";
import AnimatedNumber from "@/components/AnimatedNumber";
import AnimatedPlane from "@/components/AnimatedPlane";
import LeadCaptureForm from "@/components/LeadCaptureForm";


export default function ServiceTemplate({ serviceData }) {
  const { hero, faqs, diagnosticValue, conversion } = serviceData;
  const diagUrl = `/diagnostico?problema=${encodeURIComponent(diagnosticValue)}`;
  const formattedHeadline = hero.headline.replace('até R$ 10 mil', '<span style="color: var(--lex-gold)">até R$ 10 mil</span>');

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero" aria-label="Hero principal" style={{ position: 'relative' }}>
        <AnimatedPlane />
        <div className="container">
          <div className="hero__inner">

            <div className="hero__left">
              <span className="hero__eyebrow">PROBLEMA COM VOO?</span>
              <h1 className="hero__headline" dangerouslySetInnerHTML={{ __html: formattedHeadline }} />
              <p className="hero__sub">{hero.subheadline}</p>

              <div className="hero__ctas">
                <Link href={diagUrl} className="btn btn--primary">
                  Verificar grátis em 2 minutos
                  <span className="btn__icon-circle" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1281 1920" preserveAspectRatio="xMidYMid meet" version="1.0">
                      <defs>
                        <clipPath id="49a6d28ac2">
                          <path d="M 100 386 L 1182 386 L 1182 1465.921875 L 100 1465.921875 Z M 100 386 " clipRule="nonzero" />
                        </clipPath>
                      </defs>
                      <g clipPath="url(#49a6d28ac2)">
                        <path fill="currentColor" d="M 1170.144531 397.558594 C 1129.84375 357.300781 969.78125 435.792969 916.152344 489.46875 L 777.460938 628.160156 L 174.851562 521.820312 C 170.257812 520.992188 165.523438 522.460938 162.214844 525.769531 L 104.957031 583.078125 C 101.691406 586.339844 100.175781 590.980469 100.910156 595.53125 C 101.648438 600.082031 104.496094 603.988281 108.632812 606.054688 L 580.222656 841.847656 L 380.5 1097.40625 L 203.484375 1066.15625 C 198.84375 1065.421875 194.15625 1066.796875 190.847656 1070.109375 L 147.878906 1113.074219 C 144.707031 1116.246094 143.144531 1120.796875 143.789062 1125.253906 C 144.523438 1129.804688 147.1875 1133.710938 151.1875 1135.777344 L 296.957031 1214.269531 L 259.730469 1288.667969 C 256.976562 1294.183594 258.078125 1300.847656 262.445312 1305.167969 C 265.246094 1307.925781 268.878906 1309.304688 272.597656 1309.304688 C 274.757812 1309.304688 276.964844 1308.84375 278.988281 1307.832031 L 353.386719 1270.609375 L 431.878906 1416.378906 C 434.039062 1420.328125 437.945312 1423.085938 442.402344 1423.824219 C 443.09375 1423.914062 443.734375 1423.914062 444.472656 1423.914062 C 448.238281 1423.914062 451.871094 1422.488281 454.628906 1419.777344 L 497.59375 1376.765625 C 500.902344 1373.457031 502.375 1368.769531 501.59375 1364.21875 L 470.34375 1187.109375 L 725.898438 987.386719 L 961.695312 1458.976562 C 963.761719 1463.113281 967.714844 1465.964844 972.21875 1466.699219 C 973 1466.835938 973.734375 1466.882812 974.605469 1466.882812 C 978.375 1466.882812 981.914062 1465.410156 984.671875 1462.699219 L 1042.023438 1405.394531 C 1045.238281 1402.085938 1046.800781 1397.398438 1045.976562 1392.757812 L 939.636719 790.148438 L 1078.328125 651.457031 C 1132.003906 597.828125 1210.449219 437.859375 1170.144531 397.558594 Z M 1170.144531 397.558594 " fillOpacity="1" fillRule="nonzero" />
                      </g>
                    </svg>
                  </span>
                </Link>
              </div>

              <div className="hero__trust">
                <div className="hero__trust-item">
                  <img src="/bandeira_brasil.webp" alt="Bandeira do Brasil" style={{ width: '16px', height: '11px', objectFit: 'cover', borderRadius: '2px' }} />
                  Atendimento em todo o Brasil
                </div>
                <div className="hero__trust-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e74c3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="13" r="8" />
                    <path d="M12 9v4l2 2" />
                    <line x1="10" x2="14" y1="2" y2="2" />
                  </svg>
                  Verificação em até 2 minutos
                </div>
              </div>
            </div>

            {/* Direita — Foto da Kareline Staut */}
            <div className="hero__photo-wrap" aria-hidden="true">
              <img
                src="/kareline-hero-confianca.png"
                alt="Kareline Staut — Fundadora da LexAero, advogada especialista em Direito do Passageiro Aéreo"
                className="hero__photo"
                loading="eager"
              />

            </div>

          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ── */}
      <Testimonials />

      {/* ── COMO FUNCIONA ── */}
      <section className="section bg-ivory" aria-labelledby="how-heading">
        <div className="container">
          <div className="text-center" style={{ maxWidth: 600, margin: "0 auto 4rem" }}>
            <span className="eyebrow">Processo Simplificado</span>
            <h2 id="how-heading" style={{ marginTop: "0.5rem" }}>Como buscar seus direitos sem dor de cabeça</h2>
          </div>
          <StepsWrapper>
            <div className="steps-container">
              <div className="steps-line-bg" />
              <div className="steps-line-fill" />
              <div className="steps-grid">
                {[
                  { n: "01", icon: "/analise2.png", title: "Analise seu caso em 2 minutos", desc: "Use nosso diagnóstico online para nos contar o problema do seu voo. É rápido, intuitivo e 100% gratuito." },
                  { n: "02", icon: "/avaliação2.png", title: "Nossa equipe avalia a situação", desc: "Especialistas analisam os detalhes do seu caso e as infrações da companhia aérea para traçar a melhor estratégia jurídica." },
                  { n: "03", icon: "/burocracia3.png", title: "Nós assumimos a burocracia", desc: "Você recebe todas as orientações para exigir a compensação que merece, sem ter que lidar com o estresse das aéreas." },
            ].map((s) => (
              <div key={s.n} className="step" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ marginBottom: "var(--space-5)", display: "flex", alignItems: "center", minHeight: "40px" }}>
                  {s.icon ? (
                    <img src={s.icon} alt="" style={{ height: "72px", width: "auto", objectFit: "contain", display: "block" }} />
                  ) : (
                    <div className="step__number" style={{ marginBottom: 0 }}>{s.n}</div>
                  )}
                </div>
                <h3 className="step__title">{s.title}</h3>
                <p className="step__desc">{s.desc}</p>
              </div>
            ))}
              </div>
            </div>
          </StepsWrapper>
        </div>
      </section>

      {/* ── NÚMEROS ── */}
      <section className="section bg-graphite" aria-labelledby="numbers-heading">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "3rem" }}>
            <h2 id="numbers-heading" style={{ color: "var(--lex-white)" }}>Conheça nossos números!</h2>
            <p style={{ color: "var(--lex-text-dark-muted)", marginTop: "0.5rem" }}>
              Estamos mudando o acesso aos direitos no Brasil:
            </p>
          </div>
          <div className="numbers-grid">
            {/* Card 1 */}
            <div className="number-card">
              <span className="eyebrow" style={{ color: "var(--lex-gold)", marginBottom: "1.5rem", display: "inline-block" }}>Resultados</span>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--lex-gold)" strokeWidth="1.5" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <path d="M5 19L19 5M19 5v10M19 5H9" />
                </svg>
                <span style={{ fontSize: "3.25rem", fontWeight: 600, color: "var(--lex-white)", lineHeight: 1, letterSpacing: "-0.02em" }}>
                  <AnimatedNumber value="90" suffix="%" />
                </span>
              </div>
              <p style={{ fontWeight: 400, color: "var(--lex-white)", fontSize: "1.1rem", marginBottom: "3rem", lineHeight: 1.4 }}>90 a cada 100 clientes <strong style={{ color: "var(--lex-gold)" }}>ganham.</strong></p>
              <p style={{ color: "var(--lex-white)", opacity: 0.8, fontSize: "0.95rem", lineHeight: 1.6, marginTop: "auto" }}>
                Contamos com advogados especialistas e, juntos, já vencemos mais de 90% dos casos finalizados!
              </p>
            </div>
            {/* Card 2 */}
            <div className="number-card">
              <span className="eyebrow" style={{ color: "var(--lex-gold)", marginBottom: "1.5rem", display: "inline-block" }}>Justiça</span>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--lex-gold)" strokeWidth="1.5" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <path d="M5 19L19 5M19 5v10M19 5H9" />
                </svg>
                <span style={{ fontSize: "3.25rem", fontWeight: 600, color: "var(--lex-white)", lineHeight: 1, letterSpacing: "-0.02em" }}>
                  <AnimatedNumber value="150" prefix="+ R$" suffix="M" />
                </span>
              </div>
              <p style={{ fontWeight: 400, color: "var(--lex-white)", fontSize: "1.1rem", marginBottom: "3rem", lineHeight: 1.4 }}>Mais de R$ 150 milhões <strong style={{ color: "var(--lex-gold)" }}>recuperados.</strong></p>
              <p style={{ color: "var(--lex-white)", opacity: 0.8, fontSize: "0.95rem", lineHeight: 1.6, marginTop: "auto" }}>
                Seus direitos garantidos sem dor de cabeça. E o melhor: você só paga se ganhar.
              </p>
            </div>
            {/* Card 3 */}
            <div className="number-card">
              <span className="eyebrow" style={{ color: "var(--lex-gold)", marginBottom: "1.5rem", display: "inline-block" }}>Confiança</span>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--lex-gold)" strokeWidth="1.5" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <path d="M5 19L19 5M19 5v10M19 5H9" />
                </svg>
                <span style={{ fontSize: "3.25rem", fontWeight: 600, color: "var(--lex-white)", lineHeight: 1, letterSpacing: "-0.02em" }}>
                  <AnimatedNumber value="30" prefix="+" suffix="K" />
                </span>
              </div>
              <p style={{ fontWeight: 400, color: "var(--lex-white)", fontSize: "1.1rem", marginBottom: "3rem", lineHeight: 1.4 }}>Milhares de pessoas <strong style={{ color: "var(--lex-gold)" }}>já confiaram.</strong></p>
              <p style={{ color: "var(--lex-white)", opacity: 0.8, fontSize: "0.95rem", lineHeight: 1.6, marginTop: "auto" }}>
                Clientes satisfeitos e confiantes que fizeram a escolha certa ao buscar seus direitos.
              </p>
            </div>
          </div>
          <div style={{ marginTop: "3rem", textAlign: "center" }}>
            <Link href={diagUrl} className="btn btn--primary btn--lg" style={{ display: "inline-flex", padding: "1rem 2rem", fontSize: "1.05rem", fontWeight: "bold", borderRadius: "9999px", alignItems: "center", gap: "0.5rem", whiteSpace: "nowrap" }}>
              Confira se seu caso é elegível!
              <span className="btn__icon-circle" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 1281 1920" preserveAspectRatio="xMidYMid meet" version="1.0" style={{ width: '26px', height: '26px' }}>
                  <defs><clipPath id="aviao-elegivel"><path d="M 100 386 L 1182 386 L 1182 1465.921875 L 100 1465.921875 Z M 100 386 " clipRule="nonzero" /></clipPath></defs>
                  <g clipPath="url(#aviao-elegivel)"><path fill="currentColor" d="M 1170.144531 397.558594 C 1129.84375 357.300781 969.78125 435.792969 916.152344 489.46875 L 777.460938 628.160156 L 174.851562 521.820312 C 170.257812 520.992188 165.523438 522.460938 162.214844 525.769531 L 104.957031 583.078125 C 101.691406 586.339844 100.175781 590.980469 100.910156 595.53125 C 101.648438 600.082031 104.496094 603.988281 108.632812 606.054688 L 580.222656 841.847656 L 380.5 1097.40625 L 203.484375 1066.15625 C 198.84375 1065.421875 194.15625 1066.796875 190.847656 1070.109375 L 147.878906 1113.074219 C 144.707031 1116.246094 143.144531 1120.796875 143.789062 1125.253906 C 144.523438 1129.804688 147.1875 1133.710938 151.1875 1135.777344 L 296.957031 1214.269531 L 259.730469 1288.667969 C 256.976562 1294.183594 258.078125 1300.847656 262.445312 1305.167969 C 265.246094 1307.925781 268.878906 1309.304688 272.597656 1309.304688 C 274.757812 1309.304688 276.964844 1308.84375 278.988281 1307.832031 L 353.386719 1270.609375 L 431.878906 1416.378906 C 434.039062 1420.328125 437.945312 1423.085938 442.402344 1423.824219 C 443.09375 1423.914062 443.734375 1423.914062 444.472656 1423.914062 C 448.238281 1423.914062 451.871094 1422.488281 454.628906 1419.777344 L 497.59375 1376.765625 C 500.902344 1373.457031 502.375 1368.769531 501.59375 1364.21875 L 470.34375 1187.109375 L 725.898438 987.386719 L 961.695312 1458.976562 C 963.761719 1463.113281 967.714844 1465.964844 972.21875 1466.699219 C 973 1466.835938 973.734375 1466.882812 974.605469 1466.882812 C 978.375 1466.882812 981.914062 1465.410156 984.671875 1462.699219 L 1042.023438 1405.394531 C 1045.238281 1402.085938 1046.800781 1397.398438 1045.976562 1392.757812 L 939.636719 790.148438 L 1078.328125 651.457031 C 1132.003906 597.828125 1210.449219 437.859375 1170.144531 397.558594 Z M 1170.144531 397.558594 " fillOpacity="1" fillRule="nonzero" /></g>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── KARELINE ── */}
      <section className="section bg-dark" aria-labelledby="kareline-heading" style={{ paddingBottom: "2rem" }}>
        <div className="container">
          <div className="kareline-section">
            {/* Foto editorial */}
            <div className="kareline__mobile-header">
              <span className="eyebrow" style={{ color: "var(--lex-gold)" }}>À FRENTE DA LEXAERO</span>
              <h2 id="kareline-heading-mobile" style={{ marginTop: "0.5rem" }}>
                Quem irá cuidar do seu <span style={{ color: "var(--lex-gold)" }}>processo?</span>
              </h2>
            </div>
            <div className="kareline__photo-editorial">
              <img
                src="/kareline-founder-autoridade-vermelho.png"
                alt="Kareline Staut, advogada especialista em Direito do Passageiro Aéreo e fundadora da LexAero"
                className="kareline-editorial-img"
                loading="lazy"
              />
              <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "25%", background: "linear-gradient(to top, var(--lex-black) 0%, transparent 100%)", pointerEvents: "none" }}></div>
            </div>

            {/* Conteúdo */}
            <div className="kareline__content" style={{ position: "relative" }}>
              <div className="kareline__desktop-header" style={{ position: "relative", zIndex: 2, textAlign: "left" }}>
                <h2 id="kareline-heading" style={{ marginTop: "0.5rem", marginBottom: "1.5rem", whiteSpace: "nowrap" }}>
                  Quem irá cuidar do seu <span style={{ color: "var(--lex-gold)" }}>processo?</span>
                </h2>
              </div>
              
              <div style={{ textAlign: "left", position: "relative", zIndex: 2, display: "flex", flexDirection: "column", gap: "1rem" }}>
                <p style={{ lineHeight: 1.7, color: "var(--lex-text-dark-muted)", fontSize: "1.05rem", margin: 0 }}>
                  Kareline Staut é <strong style={{ color: "var(--lex-white)", fontWeight: 600 }}>Mestra em Direito</strong>, especialista em <strong style={{ color: "var(--lex-white)", fontWeight: 600 }}>Direito do Consumidor e Direito do Passageiro Aéreo</strong>, com mais de 7 anos de experiência na defesa dos viajantes frente às companhias aéreas.
                </p>
                <p style={{ lineHeight: 1.7, color: "var(--lex-text-dark-muted)", fontSize: "1.05rem", margin: 0 }}>
                  Reconhecida por sua atuação estratégica em casos de <strong style={{ color: "var(--lex-white)", fontWeight: 600 }}>atrasos, cancelamentos, overbooking, avarias e extravio de bagagem</strong>, alia rigor técnico a resultados expressivos nos tribunais.
                </p>
                <p style={{ lineHeight: 1.7, color: "var(--lex-text-dark-muted)", fontSize: "1.05rem", margin: 0 }}>
                  Ao longo de sua trajetória, construiu reputação sólida como profissional que une <strong style={{ color: "var(--lex-white)", fontWeight: 600 }}>profundo conhecimento jurídico e comunicação clara</strong>, transformando a lei em soluções práticas para quem enfrenta problemas em suas viagens.
                </p>
                <p style={{ lineHeight: 1.7, color: "var(--lex-text-dark-muted)", fontSize: "1.05rem", margin: 0 }}>
                  Com <strong style={{ color: "var(--lex-white)", fontWeight: 600 }}>indenizações significativas e precedentes relevantes conquistados</strong>, fortalece a cada caso a proteção dos passageiros no Brasil.
                </p>
              </div>

              <div className="kareline-btn-wrap">
                <Link href="/diagnostico" className="btn btn--primary btn--lg" style={{ color: "var(--lex-black)", display: "inline-flex" }}>
                  Analisar meu caso gratuitamente
                  <span className="btn__icon-circle" aria-hidden="true" style={{ background: "#ffffff", color: "var(--lex-gold)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1281 1920" preserveAspectRatio="xMidYMid meet" version="1.0" style={{ width: '20px', height: '20px' }}>
                      <defs><clipPath id="aviao-kareline"><path d="M 100 386 L 1182 386 L 1182 1465.921875 L 100 1465.921875 Z M 100 386 " clipRule="nonzero" /></clipPath></defs>
                      <g clipPath="url(#aviao-kareline)"><path fill="currentColor" d="M 1170.144531 397.558594 C 1129.84375 357.300781 969.78125 435.792969 916.152344 489.46875 L 777.460938 628.160156 L 174.851562 521.820312 C 170.257812 520.992188 165.523438 522.460938 162.214844 525.769531 L 104.957031 583.078125 C 101.691406 586.339844 100.175781 590.980469 100.910156 595.53125 C 101.648438 600.082031 104.496094 603.988281 108.632812 606.054688 L 580.222656 841.847656 L 380.5 1097.40625 L 203.484375 1066.15625 C 198.84375 1065.421875 194.15625 1066.796875 190.847656 1070.109375 L 147.878906 1113.074219 C 144.707031 1116.246094 143.144531 1120.796875 143.789062 1125.253906 C 144.523438 1129.804688 147.1875 1133.710938 151.1875 1135.777344 L 296.957031 1214.269531 L 259.730469 1288.667969 C 256.976562 1294.183594 258.078125 1300.847656 262.445312 1305.167969 C 265.246094 1307.925781 268.878906 1309.304688 272.597656 1309.304688 C 274.757812 1309.304688 276.964844 1308.84375 278.988281 1307.832031 L 353.386719 1270.609375 L 431.878906 1416.378906 C 434.039062 1420.328125 437.945312 1423.085938 442.402344 1423.824219 C 443.09375 1423.914062 443.734375 1423.914062 444.472656 1423.914062 C 448.238281 1423.914062 451.871094 1422.488281 454.628906 1419.777344 L 497.59375 1376.765625 C 500.902344 1373.457031 502.375 1368.769531 501.59375 1364.21875 L 470.34375 1187.109375 L 725.898438 987.386719 L 961.695312 1458.976562 C 963.761719 1463.113281 967.714844 1465.964844 972.21875 1466.699219 C 973 1466.835938 973.734375 1466.882812 974.605469 1466.882812 C 978.375 1466.882812 981.914062 1465.410156 984.671875 1462.699219 L 1042.023438 1405.394531 C 1045.238281 1402.085938 1046.800781 1397.398438 1045.976562 1392.757812 L 939.636719 790.148438 L 1078.328125 651.457031 C 1132.003906 597.828125 1210.449219 437.859375 1170.144531 397.558594 Z M 1170.144531 397.558594 " fillOpacity="1" fillRule="nonzero" /></g>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPTURA DE LEADS ── */}
      <section className="section bg-dark" aria-labelledby="diff-heading" style={{ paddingTop: "3rem" }}>
        <div className="container">
          <div className="metodologia-section">
            {/* Texto — mobile: order 1 */}
            <div className="metodologia__text" style={{ textAlign: "center" }}>
              <span className="eyebrow">FALE COM UM ESPECIALISTA</span>
              <h2 id="diff-heading" className="nowrap-desktop" style={{ marginTop: "0.5rem", marginBottom: "1.25rem", fontWeight: 600 }}>
                {conversion?.leadCaptureTitle || <>Não deixe seus direitos para depois. <span style={{ color: "var(--lex-gold)" }}>Resolva em 2 minutos.</span></>}
              </h2>
              <p style={{ marginBottom: 0, fontSize: "0.875rem", lineHeight: "1.5" }}>
                {conversion?.leadCaptureSub || "Preencha o formulário abaixo para que nossa equipe avalie as circunstâncias do seu caso e entre em contato rapidamente."}
              </p>
            </div>

            {/* Foto — mobile: order 2 */}
            <div className="metodologia__photo-wrap" style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", position: "relative" }}>
              <img
                src="/kareline-metodologia-seriedade.png"
                alt="Kareline Staut — Análise técnica e individualizada"
                className="metodologia__photo"
                loading="lazy"
                style={{ width: "100%", maxWidth: "550px", objectFit: "contain", objectPosition: "bottom center", transform: "scale(1.15)", transformOrigin: "bottom center" }}
              />
              <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "40%", background: "linear-gradient(to top, var(--lex-black) 0%, transparent 100%)", pointerEvents: "none" }}></div>
            </div>

            {/* Formulário — mobile: order 3 */}
            <div className="metodologia__form">
              <LeadCaptureForm />
            </div>
          </div>
        </div>
      </section>


      {/* ── FAQ ── */}
      <section className="section bg-ivory" aria-labelledby="faq-heading">
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="text-center" style={{ marginBottom: "3rem" }}>
            <span className="eyebrow">Dúvidas</span>
            <h2 id="faq-heading" style={{ marginTop: "0.5rem" }}>Perguntas frequentes</h2>
          </div>
          <div className="faq-list" itemScope itemType="https://schema.org/FAQPage">
            {faqs.map((faq) => (
              <div key={faq.q} className="faq-item" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <details>
                  <summary className="faq-question">
                    <span itemProp="name">{faq.q}</span>
                    <span className="faq__icon" aria-hidden="true">+</span>
                  </summary>
                  <div className="faq-answer" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <span itemProp="text" dangerouslySetInnerHTML={{ __html: faq.a }} />
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="section" aria-labelledby="cta-heading" style={{ background: "var(--lex-gold)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="cta-banner" style={{ background: "transparent", border: "none", padding: 0 }}>
            <h2 id="cta-heading" className="cta-banner__title" style={{ color: "var(--lex-black)", maxWidth: 800, margin: "0 auto var(--space-8)", fontWeight: 300 }}>
              {conversion?.finalCtaTitle || "Quer buscar seus direitos por problema com voo sem sair de casa? É só verificar grátis!"}
            </h2>
            <div className="cta-banner__btns">
              <Link href={diagUrl} className="btn btn--primary btn--lg" style={{ background: "var(--lex-black)", color: "var(--lex-white)", border: "none", borderRadius: "9999px" }}>
                {conversion?.finalCtaBtn || "Verificar grátis"}
                <span className="btn__icon-circle" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 1281 1920" preserveAspectRatio="xMidYMid meet" version="1.0" style={{ width: '26px', height: '26px' }}>
                    <defs><clipPath id="aviao-cta"><path d="M 100 386 L 1182 386 L 1182 1465.921875 L 100 1465.921875 Z M 100 386 " clipRule="nonzero" /></clipPath></defs>
                    <g clipPath="url(#aviao-cta)"><path fill="currentColor" d="M 1170.144531 397.558594 C 1129.84375 357.300781 969.78125 435.792969 916.152344 489.46875 L 777.460938 628.160156 L 174.851562 521.820312 C 170.257812 520.992188 165.523438 522.460938 162.214844 525.769531 L 104.957031 583.078125 C 101.691406 586.339844 100.175781 590.980469 100.910156 595.53125 C 101.648438 600.082031 104.496094 603.988281 108.632812 606.054688 L 580.222656 841.847656 L 380.5 1097.40625 L 203.484375 1066.15625 C 198.84375 1065.421875 194.15625 1066.796875 190.847656 1070.109375 L 147.878906 1113.074219 C 144.707031 1116.246094 143.144531 1120.796875 143.789062 1125.253906 C 144.523438 1129.804688 147.1875 1133.710938 151.1875 1135.777344 L 296.957031 1214.269531 L 259.730469 1288.667969 C 256.976562 1294.183594 258.078125 1300.847656 262.445312 1305.167969 C 265.246094 1307.925781 268.878906 1309.304688 272.597656 1309.304688 C 274.757812 1309.304688 276.964844 1308.84375 278.988281 1307.832031 L 353.386719 1270.609375 L 431.878906 1416.378906 C 434.039062 1420.328125 437.945312 1423.085938 442.402344 1423.824219 C 443.09375 1423.914062 443.734375 1423.914062 444.472656 1423.914062 C 448.238281 1423.914062 451.871094 1422.488281 454.628906 1419.777344 L 497.59375 1376.765625 C 500.902344 1373.457031 502.375 1368.769531 501.59375 1364.21875 L 470.34375 1187.109375 L 725.898438 987.386719 L 961.695312 1458.976562 C 963.761719 1463.113281 967.714844 1465.964844 972.21875 1466.699219 C 973 1466.835938 973.734375 1466.882812 974.605469 1466.882812 C 978.375 1466.882812 981.914062 1465.410156 984.671875 1462.699219 L 1042.023438 1405.394531 C 1045.238281 1402.085938 1046.800781 1397.398438 1045.976562 1392.757812 L 939.636719 790.148438 L 1078.328125 651.457031 C 1132.003906 597.828125 1210.449219 437.859375 1170.144531 397.558594 Z M 1170.144531 397.558594 " fillOpacity="1" fillRule="nonzero" /></g>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
