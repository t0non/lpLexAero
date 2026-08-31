import Link from "next/link";
import Testimonials from "@/components/Testimonials";
import StepsWrapper from "@/components/StepsWrapper";
import AnimatedNumber from "@/components/AnimatedNumber";
import AnimatedPlane from "@/components/AnimatedPlane";
import { blogPosts } from "@/data/blogData";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import DiagnosticForm from "@/components/DiagnosticForm";

export const metadata = {
  title: "LexAero | Voo Atrasado ou Cancelado? Conheça Seus Direitos",
  description: "Boutique jurídica especializada em Direito do Passageiro Aéreo. Análise individualizada para problemas com voos e bagagem.",
};

const PROBLEMS = [
  {
    title: "Voo atrasado",
    desc: "Atrasos superiores a 4 horas podem gerar direitos ao passageiro. Avaliamos a documentação do seu voo e orientamos os próximos passos.",
    href: "/voo-atrasado",
    icon: (<img src="/icone-voo-atrasado.png" alt="Voo atrasado" style={{ width: '64px', height: '64px', objectFit: 'contain', marginLeft: '-6px', marginTop: '-6px' }} />),
  },
  {
    title: "Voo cancelado",
    desc: "Cancelamentos sem assistência adequada podem ensejar medidas. Entenda o que a companhia deveria ter feito e como proceder.",
    href: "/voo-cancelado",
    icon: (<img src="/icone-voo-cancelado.png" alt="Voo cancelado" style={{ width: '64px', height: '64px', objectFit: 'contain', marginLeft: '-6px', marginTop: '-6px' }} />),
  },
  {
    title: "Overbooking",
    desc: "Embarque negado por excesso de passageiros? Verificamos sua elegibilidade a reparação e medidas cabíveis.",
    href: "/overbooking",
    icon: (<img src="/icone-overbooking.png" alt="Overbooking" style={{ width: '64px', height: '64px', objectFit: 'contain', marginLeft: '-6px', marginTop: '-6px' }} />),
  },
  {
    title: "Extravio ou dano de bagagem",
    desc: "Orientamos a abertura de protocolos, prazos e medidas legais caso sua bagagem seja perdida ou chegue danificada.",
    href: "/bagagem",
    icon: (<img src="/icone-bagagem.png" alt="Bagagem" style={{ width: '64px', height: '64px', objectFit: 'contain', marginLeft: '-6px', marginTop: '-6px' }} />),
  },
  {
    title: "Conexão perdida / Reacomodação",
    desc: "Acompanhe seus direitos a assistência material e opções oferecidas pela companhia ao perder uma conexão.",
    href: "/conexao-perdida",
    icon: (<img src="/icone-perda-conexao.png" alt="Conexão perdida" style={{ width: '64px', height: '64px', objectFit: 'contain', marginLeft: '-6px', marginTop: '-6px' }} />),
  },
];

const FAQS = [
  {
    q: "Quais problemas com voos podem gerar direitos ao passageiro?",
    a: "Atrasos superiores a certas horas, cancelamentos, overbooking (preterição de embarque), extravio ou dano de bagagem e ausência de assistência material são as situações mais comuns. A análise de cada caso considera as circunstâncias específicas, os documentos disponíveis e a legislação aplicável.",
  },
  {
    q: "O que devo guardar após um problema com voo?",
    a: "Guarde o cartão de embarque, o comprovante de reserva, e-mails e mensagens da companhia, protocolos de atendimento, declaração de atraso ou cancelamento, comprovantes de gastos extras e fotografias do painel de chegadas e partidas.",
  },
  {
    q: "O que acontece quando perco uma conexão por atraso?",
    a: 'Quando os trechos fazem parte do mesmo bilhete (localizador único), a companhia responsável pelo voo que atrasou deve garantir a chegada ao destino final e fornecer assistência material. A situação pode ser diferente quando os bilhetes foram adquiridos separadamente.',
  },
  {
    q: "Como funciona a assistência material?",
    a: "A Resolução nº 400 da ANAC determina que a companhia deve oferecer, progressivamente: comunicação a partir de 1 hora de atraso, alimentação a partir de 2 horas, e acomodação e transporte a partir de 4 horas — ou na interrupção da viagem com pernoite.",
  },
  {
    q: "O atendimento da LexAero é realizado online?",
    a: "Sim. A LexAero possui estrutura para atendimento digital e análise de situações envolvendo passageiros de qualquer parte do Brasil.",
  },
  {
    q: "Como funciona o diagnóstico preliminar?",
    a: "O diagnóstico é uma ferramenta informativa. Você responde perguntas sobre sua situação e, ao final, pode solicitar uma análise jurídica individualizada. Não constitui parecer jurídico.",
  },
];

const CONTENT_CARDS = [
  { tag: "Atraso", title: "Atraso de voo", desc: "Saiba seus direitos em casos de atraso.", href: "/voo-atrasado", icon: <img src="/icone-voo-atrasado.png" alt="" style={{ width: '36px', height: '36px', objectFit: 'contain' }} /> },
  { tag: "Cancelamento", title: "Voo cancelado", desc: "Entenda quando cabe indenização.", href: "/voo-cancelado", icon: <img src="/icone-voo-cancelado.png" alt="" style={{ width: '36px', height: '36px', objectFit: 'contain' }} /> },
  { tag: "Overbooking", title: "Overbooking", desc: "Embarque negado por excesso de passageiros.", href: "/overbooking", icon: <img src="/icone-overbooking.png" alt="" style={{ width: '36px', height: '36px', objectFit: 'contain' }} /> },
  { tag: "Bagagem", title: "Extravio de bagagem", desc: "Conheça seus direitos sobre bagagem.", href: "/bagagem", icon: <img src="/icone-bagagem.png" alt="" style={{ width: '36px', height: '36px', objectFit: 'contain' }} /> },
  { tag: "Conexão", title: "Conexão perdida", desc: "Veja o que fazer em voos com conexão.", href: "/conexao-perdida", icon: <img src="/icone-perda-conexao.png" alt="" style={{ width: '36px', height: '36px', objectFit: 'contain' }} /> },
];

export default function Home() {
  return (
    <>
      {/* ── HERO: Founder-Led ─────────────────────────── */}
      <section className="hero" aria-label="Hero principal" style={{ position: 'relative' }}>
        <AnimatedPlane />
        <div className="container">
          <div className="hero__inner">

            <div className="hero__left">
              <span className="hero__eyebrow">PROBLEMA COM VOO?</span>
              <h1 className="hero__headline">
                Você pode ter direito a <span className="hero-mobile-nowrap"><span style={{ color: 'var(--lex-gold)' }}>até R$ 10 mil</span> em indenização.</span>
              </h1>
              <p className="hero__sub">
                Atraso, cancelamento, conexão perdida, overbooking ou problema com bagagem?
              </p>

              <div className="hero__ctas">
                <Link href="/diagnostico" className="btn btn--primary">
                  Verificar grátis em 2 minutos
                  <span className="btn__icon-circle" aria-hidden="true"><img src="/aviao.svg" width="20" height="20" alt="" aria-hidden="true" style={{filter:"brightness(0) invert(1)"}}/></span>
                </Link>
              </div>

              <div className="hero__trust">
                <div className="hero__trust-item">
                  <img src="/bandeira_brasil.webp" alt="Bandeira do Brasil" style={{ width: '16px', height: '11px', objectFit: 'cover', borderRadius: '2px' }} />
                  Atendimento em todo o Brasil
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

      {/* ── DEPOIMENTOS (SOCIAL PROOF RÁPIDO) ──────────────────────────────── */}
      <Testimonials />



      {/* ── O QUE ACONTECEU — FUNDO BRANCO ─────────────── */}
      <section className="section" style={{ backgroundColor: '#ffffff' }} aria-labelledby="problems-heading">
        <div className="container">
          <div className="text-center" style={{ maxWidth: 600, margin: "0 auto 3rem" }}>
            <h2 id="problems-heading">O que aconteceu durante sua viagem?</h2>
            <p style={{ marginTop: "0.75rem" }}>
              Conheça informações relacionadas à situação enfrentada no seu voo.
            </p>
          </div>
          <div className="problems-grid">
            {PROBLEMS.map((p) => (
              <Link key={p.href + p.title} href={p.href} className="card card--problem">
                <div className="card__icon" aria-hidden="true">{p.icon}</div>
                <h3 className="card__title" style={{ fontSize: '1.4rem' }}>{p.title}</h3>
                <p className="card__desc" style={{ fontSize: '1rem' }}>{p.desc}</p>
                <span className="btn btn--primary btn--sm" style={{ marginTop: 'auto', alignSelf: 'center', fontSize: '1rem', padding: '0.85rem 1.7rem' }}>
                  Conhecer direitos
                  <span className="btn__icon-circle" aria-hidden="true"><img src="/aviao.svg" width="20" height="20" alt="" aria-hidden="true" style={{filter:"brightness(0) invert(1)"}}/></span>
                </span>
              </Link>
            ))}
            {/* CTA Extra Card (preenche o slot 6) */}
            <div className="card" style={{ background: 'var(--lex-gold-bg)', borderColor: 'var(--lex-gold)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 'var(--space-6) var(--space-4)' }}>
              <div style={{ marginBottom: 'var(--space-3)' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--lex-gold-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <h3 className="card__title" style={{ fontSize: '1.25rem', color: 'var(--lex-gold-dark)', marginBottom: '0.5rem', fontWeight: 600 }}>O direito é seu!</h3>
              <p className="card__desc" style={{ fontSize: '15px', color: 'var(--lex-text)', marginBottom: '1.5rem', fontWeight: 500, lineHeight: 1.4 }}>
                Não deixe para depois. Reivindique o que é seu por direito e resolva seu problema com a companhia aérea hoje mesmo.
              </p>
              <Link href="/diagnostico" className="btn btn--primary btn--sm" style={{ marginTop: 'auto', alignSelf: 'center', fontSize: '1rem', padding: '0.85rem 1.7rem' }}>
                Analisar meu caso
                <span className="btn__icon-circle" aria-hidden="true"><img src="/aviao.svg" width="20" height="20" alt="" aria-hidden="true" style={{filter:"brightness(0) invert(1)"}}/></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIAGNÓSTICO CTA — VIDEO BACKGROUND PREMIUM ───── */}
      <section className="section video-cta-section" aria-labelledby="diag-heading" style={{ position: "relative", overflow: "hidden", minHeight: "700px", display: "flex", alignItems: "center", padding: "var(--space-12) 0" }}>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="diag-video-bg"
          style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
        >
          <source src="/video_aviao.mp4" type="video/mp4" />
        </video>
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(10, 15, 25, 0.45)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "3rem", justifyContent: "space-between" }}>
            
            {/* Coluna Esquerda: Conteúdo */}
            <div style={{ flex: "1 1 450px", maxWidth: "550px" }}>
              <span className="eyebrow" style={{ color: "var(--lex-gold)", fontSize: "0.75rem", letterSpacing: "0.15em", fontWeight: 600, display: "block", marginBottom: "0.75rem" }}>
                FERRAMENTA DE ANÁLISE
              </span>
              <h2 id="diag-heading" style={{ color: "var(--lex-white)", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 600, lineHeight: 1.2, marginBottom: 0 }}>
                Descubra em 2 minutos se o seu caso pode gerar indenização
              </h2>
            </div>

            {/* Coluna Direita: Diagnóstico Embutido */}
            <div style={{ flex: "1 1 380px", maxWidth: "480px", width: "100%", margin: "0 auto" }}>
              <div style={{ 
                background: "rgba(15, 20, 35, 0.85)", 
                borderRadius: "20px", 
                padding: "2rem", 
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                border: "1px solid rgba(252, 189, 38, 0.2)",
                backdropFilter: "blur(10px)"
              }}>
                <DiagnosticForm isEmbedded={true} />
              </div>
            </div>

          </div>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          .diag-video-bg {
            object-position: 35% center !important;
          }
          @media (min-width: 992px) {
            .diag-video-bg {
              object-position: 75% center !important;
            }
          }
          .diag-option-card:hover {
            border-color: var(--lex-gold) !important;
            background: var(--lex-gold-bg) !important;
          }
          .diag-radio:checked + .diag-option-card {
            border-color: var(--lex-gold) !important;
            background: var(--lex-gold-bg) !important;
          }
          .diag-radio:checked + .diag-option-card .diag-radio-inner {
            border-color: var(--lex-gold) !important;
          }
          .diag-radio:checked + .diag-option-card .diag-radio-inner::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 8px;
            height: 8px;
            background-color: var(--lex-gold);
            border-radius: 50%;
          }
        `}} />
      </section>

      {/* ── COMO FUNCIONA — FUNDO IVORY ──────────────── */}
      <section className="section bg-ivory" aria-labelledby="how-heading">
        <div className="container">
          <div className="text-center" style={{ maxWidth: 600, margin: "0 auto 4rem" }}>
            <span className="eyebrow">Processo Simplificado</span>
            <h2 id="how-heading" style={{ marginTop: "0.5rem" }}>Como buscar seus direitos sem dor de cabeça</h2>
          </div>
          <StepsWrapper>
            <div className="steps-container">

              <div className="steps-grid">
                {[
                  { n: "01", icon: "/analise2.png", title: "Analise seu caso em 2 minutos", desc: "Use nosso diagnóstico online para nos contar o problema do seu voo. É rápido, intuitivo e 100% gratuito." },
                  { n: "02", icon: "/avaliação2.png", title: "Nossa equipe avalia a situação", desc: "Especialistas analisam os detalhes do seu caso e as infrações da companhia aérea para traçar a melhor estratégia jurídica." },
                  { n: "03", icon: "/burocracia3.png", title: "Nós assumimos a burocracia", desc: "Você recebe todas as orientações para exigir a compensação que merece, sem ter que lidar com o estresse das aéreas." },
            ].map((s) => (
              <div key={s.n} className="step" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ marginBottom: "var(--space-5)", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "40px" }}>
                  {s.icon ? (
                    <img src={s.icon} alt="" style={{ height: "100px", width: "auto", objectFit: "contain", display: "block" }} />
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

          <div style={{ display: "flex", justifyContent: "center", marginTop: "4rem" }}>
            <Link href="/diagnostico" className="btn btn--primary btn--lg">
              Analisar meu caso grátis
              <span className="btn__icon-circle" aria-hidden="true"><img src="/aviao.svg" width="20" height="20" alt="" aria-hidden="true" style={{filter:"brightness(0) invert(1)"}}/></span>
            </Link>
          </div>

        </div>
      </section>

      
      {/* ── QUANTO VOU PAGAR (Pricing) — FUNDO BRANCO ──────────────── */}
      <section className="section bg-white" aria-labelledby="pricing-heading">
        <div className="container">
          <div className="pricing-grid">
            <div className="pricing__content" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <h2 id="pricing-heading">Quanto vou pagar para buscar meus direitos?</h2>
              <p>Trabalhamos para o seu sucesso! Se não conseguirmos que sua <strong style={{color: "var(--lex-gold-dark)"}}>indenização por danos morais</strong> por problema com voo seja paga, não cobramos nada pelo nosso serviço.</p>
              <p>Sem pegadinhas! Se a indenização entrar na sua conta, você paga 35% do valor recebido para a LexAero e fica com 65%.</p>
              <Link href="/diagnostico" className="btn btn--primary btn--lg" style={{ marginTop: "1rem" }}>
                Descubra seu direito agora
                <span className="btn__icon-circle" aria-hidden="true"><img src="/aviao.svg" width="20" height="20" alt="" aria-hidden="true" style={{filter:"brightness(0) invert(1)"}}/></span>
              </Link>
            </div>
            
            <div className="pricing__visual">
              <div className="pricing__chart-wrapper">
                <img 
                  src="/grafico.png" 
                  alt="Gráfico de honorários: 65% para você, 35% para a LexAero"
                  className="pricing-donut-img" 
                  style={{ width: "100%", maxWidth: "400px", height: "auto", display: "block", margin: "0 auto" }} 
                />
              </div>
              
              <div className="pricing__legend">
                <div className="legend-item">
                  <span className="legend-dot dot-gold"></span>
                  <p>Você recebe sua indenização, <strong>sem burocracia</strong></p>
                </div>
                <div className="legend-item">
                  <span className="legend-dot dot-graphite"></span>
                  <p>A LexAero fica com 35% após a resolução do caso</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NÚMEROS (SOCIAL PROOF) — FUNDO ESCURO ──────── */}
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
            <Link href="/diagnostico" className="btn btn--primary btn--lg" style={{ display: "inline-flex", padding: "1rem 2rem", fontSize: "1.05rem", fontWeight: "bold", borderRadius: "9999px", alignItems: "center", gap: "0.5rem", whiteSpace: "nowrap" }}>
              Confira se seu caso é elegível!
              <span className="btn__icon-circle" aria-hidden="true">
                <img src="/aviao.svg" alt="" style={{ width: '1.2em', height: '1.2em', objectFit: 'contain' }} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── KARELINE — FUNDO ESCURO CINEMATOGRÁFICO ────── */}
      <section className="section bg-dark" aria-labelledby="kareline-heading" style={{ paddingTop: "4rem", paddingBottom: "2rem" }}>
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
                <p style={{ lineHeight: 1.7, color: "var(--lex-text-dark-muted)", fontSize: "1.05rem", margin: 0 }}>
                  Nosso escritório possui uma <strong style={{ color: "var(--lex-white)", fontWeight: 600 }}>taxa de sucesso superior a 90%</strong>, garantindo que o seu direito seja tratado com a máxima seriedade, agilidade e eficiência.
                </p>
              </div>

              <div className="kareline-btn-wrap">
                <Link href="/diagnostico" className="btn btn--primary btn--lg" style={{ color: "var(--lex-black)", display: "inline-flex" }}>
                  Analisar meu caso gratuitamente
                  <span className="btn__icon-circle" aria-hidden="true" style={{ background: "#ffffff", color: "var(--lex-gold)" }}>
                    <img src="/aviao.svg" alt="" style={{ width: '1.2em', height: '1.2em', objectFit: 'contain' }} />
                  </span>
                </Link>
              </div>
            </div>
</div>
        </div>
      </section>

      {/* ── CAPTURA DE LEADS (Substitui Metodologia) ───────── */}
      <section className="section bg-dark" aria-labelledby="diff-heading" style={{ paddingTop: "3rem" }}>
        <div className="container">
          <div className="metodologia-section">
            {/* Texto */}
            <div className="metodologia__text" style={{ textAlign: "center" }}>
              <span className="eyebrow">FALE COM UM ESPECIALISTA</span>
              <h2 id="diff-heading" className="nowrap-desktop" style={{ marginTop: "0.5rem", marginBottom: "1.25rem", fontWeight: 600 }}>
                Não deixe seus direitos para depois.{" "}
                <span style={{ color: "var(--lex-gold)" }}>Resolva em 2 minutos.</span>
              </h2>
              <p style={{ marginBottom: 0, fontSize: "0.875rem", lineHeight: "1.5" }}>
                Preencha o formulário abaixo para que nossa equipe avalie as circunstâncias do seu caso e entre em contato rapidamente.
              </p>
            </div>

            {/* Foto */}
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

            {/* Formulário */}
            <div className="metodologia__form">
              <LeadCaptureForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-dark">
          {/* ── 5 MOTIVOS ── */}
          <div className="benefits-card" style={{ marginTop: "3rem" }}>
            <div className="benefits-card__content">
              <h2 style={{ color: "var(--lex-white)", marginBottom: "1.5rem", fontSize: "3rem", fontWeight: 600, lineHeight: 1.1 }}>Nós cuidamos de tudo para você!</h2>
              <p style={{ color: "var(--lex-text-dark-muted)", marginBottom: "2rem", lineHeight: 1.7, fontSize: "1.05rem" }}>
                Escolher a LexAero é garantir que seus direitos por problemas com voo sejam respeitados sem estresse e sem burocracia.
              </p>
              <h3 style={{ color: "var(--lex-white)", fontSize: "2.2rem", marginBottom: "1.5rem", fontWeight: 600 }}>5 motivos para <br /> escolher a <span style={{ color: "var(--lex-gold)", fontWeight: 800 }}>LexAero</span>:</h3>
              <ul className="benefits-list">
                {[
                  "Avaliação grátis em até 2 minutos;",
                  "Sem custo inicial e só paga se ganhar;",
                  "Somos transparentes. Você acompanha tudo em tempo real;",
                  "Especialistas em cancelamento, atraso, overbooking e bagagem;",
                  "Confiança comprovada: dezenas de clientes satisfeitos em todo Brasil."
                ].map((motivo, i) => (
                  <li key={i} className="benefits-list-item">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="var(--lex-gold)" stroke="var(--lex-graphite)" strokeWidth="2" aria-hidden="true" style={{ flexShrink: 0, marginTop: "5px" }}>
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="9 12 11 14 15 10" />
                    </svg>
                    {motivo}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: "1.5rem" }}>
                <Link href="/diagnostico" className="btn btn--primary btn--full" style={{ whiteSpace: "nowrap", fontSize: "clamp(0.85rem, 4vw, 1rem)", padding: "0.875rem 1rem" }}>
                  Verificar grátis em 2 minutos
                  <span className="btn__icon-circle" aria-hidden="true"><img src="/aviao.svg" width="20" height="20" alt="" aria-hidden="true" style={{filter:"brightness(0) invert(1)"}}/></span>
                </Link>
              </div>
            </div>
            <div className="benefits-card__image-wrap">
              <img src="/img_hero2.png" alt="LexAero" className="benefits-card__image" />
              <div className="benefits-card__caption">
                <p>
                  <strong>Avalie seu caso grátis</strong> agora mesmo e descubra se você tem direito a uma <strong>indenização por problema com voo</strong>.
                </p>
              </div>
            </div>
          </div>
      </section>



      {/* ── CENTRAL DE DIREITOS — PREMIUM REDESIGN ── */}
      <section className="section bg-dark central-direitos-section-premium" aria-labelledby="content-heading">
        <div className="container central-direitos-container">
          
          {/* Esquerda: Conteúdo Header e Imagem */}
          <div className="central-direitos-image-col">
            <div className="central-direitos-header">
              <span className="eyebrow-premium">ENTENDA O SEU CASO</span>
              <h2 id="content-heading" className="central-direitos-title">Qual foi o problema com o seu voo?</h2>
              {/* <p className="central-direitos-desc">
                Entenda seus direitos e saiba como agir em casos de atraso, cancelamento, bagagem extraviada e outros problemas com o voo.
              </p> */}
            </div>
            
            <div className="central-direitos-glow"></div>
            <img
              src="/kareline-central-direitos-apontando.png"
              alt="Kareline apresentando a Central de Direitos"
              className="central-direitos-photo-premium"
              loading="lazy"
            />
          </div>

          {/* Direita: Apenas os Cards */}
          <div className="central-direitos-content-col">

            <div className="content-cards-premium-grid">
              {CONTENT_CARDS.map((c) => (
                <Link key={c.href} href={c.href} className="content-card-premium">
                  <div className="content-card-premium__icon">
                    {c.icon}
                  </div>
                  <div className="content-card-premium__text">
                    <h3 className="content-card-premium__title">{c.title}</h3>
                  </div>
                  <div className="content-card-premium__cta">
                    <span>Ler guia</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" className="card-arrow-icon">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="central-direitos-footer-cta">
              <Link href="/central-de-direitos" className="btn btn--secondary btn--md" style={{ color: "var(--lex-gold)" }}>
                Ver todos os problemas
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── FAQ — FUNDO IVORY ────────────────────────────── */}
      <section className="section bg-ivory" aria-labelledby="faq-heading">
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="text-center" style={{ marginBottom: "3rem" }}>
            <span className="eyebrow">Dúvidas</span>
            <h2 id="faq-heading" style={{ marginTop: "0.5rem" }}>Perguntas frequentes</h2>
          </div>
          <div className="faq-list" itemScope itemType="https://schema.org/FAQPage">
            {FAQS.map((faq) => (
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

      {/* ── BLOG PREVIEW ──────────────────────────────── */}
      <section className="section bg-ivory" aria-labelledby="blog-heading">
        <div className="container">
          <div className="text-center" style={{ maxWidth: 600, margin: "0 auto 0" }}>
            <span className="eyebrow">CONTEÚDO GRATUITO</span>
            <h2 id="blog-heading" style={{ marginTop: "0.5rem" }}>Conhecimento que protege você</h2>
            <p style={{ color: "var(--lex-text-muted)", marginTop: "0.5rem" }}>Artigos escritos por especialistas para você entender seus direitos antes, durante e depois de qualquer problema com voo.</p>
          </div>
          <div className="blog-preview-grid">
            {blogPosts.map((post) => (
              <article key={post.slug} className="blog-card">
                <div className="blog-card__image-wrap" style={{ height: 180, position: 'relative' }}>
                  <img src={post.coverImage} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span className="blog-card__category" style={{ position: 'absolute', top: 16, left: 16, zIndex: 1 }}>{post.category}</span>
                </div>
                <div className="blog-card__body">
                  <div className="blog-card__meta">
                    <span>{post.date}</span>
                    <span className="blog-card__dot">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="blog-card__title">{post.title}</h3>
                  <p className="blog-card__summary">{post.summary}</p>
                  <Link href={`/blog/${post.slug}`} className="blog-card__link">
                    Ler artigo completo
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/blog" className="btn btn--secondary btn--lg">
              Ver todos os artigos
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL — FUNDO DOURADO ────────────────────── */}
      <section className="section" aria-labelledby="cta-heading" style={{ background: "var(--lex-gold)", padding: "var(--space-20) 0" }}>
        <div className="container">
          <div className="cta-banner" style={{ background: "transparent", border: "none", padding: 0 }}>
            <h2 id="cta-heading" className="cta-banner__title" style={{ color: "var(--lex-black)", maxWidth: 800, margin: "0 auto var(--space-8)", fontWeight: 300 }}>
              Quer buscar seus direitos por problema com voo sem sair de casa? É só verificar grátis!
            </h2>
            <div className="cta-banner__btns">
              <Link href="/diagnostico" className="btn btn--primary btn--lg" style={{ background: "var(--lex-black)", color: "var(--lex-white)", border: "none", borderRadius: "9999px" }}>
                Verificar grátis
                <span className="btn__icon-circle" aria-hidden="true">
                  <img src="/aviao.svg" alt="" style={{ width: '1.2em', height: '1.2em', objectFit: 'contain' }} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
