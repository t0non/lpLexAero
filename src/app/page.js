import Link from "next/link";
import Testimonials from "@/components/Testimonials";

export const metadata = {
  title: "LexAero | Voo Atrasado ou Cancelado? Conheça Seus Direitos",
  description: "Boutique jurídica especializada em Direito do Passageiro Aéreo. Análise individualizada para problemas com voos e bagagem.",
};

const PROBLEMS = [
  {
    title: "Voo atrasado",
    desc: "Atrasos superiores a 4 horas podem gerar direitos ao passageiro. Avaliamos a documentação do seu voo e orientamos os próximos passos.",
    href: "/voo-atrasado",
    icon: (<img src="/icone-voo-atrasado.png" alt="Voo atrasado" style={{ width: '56px', height: '56px', objectFit: 'contain', marginLeft: '-6px', marginTop: '-6px' }} />),
  },
  {
    title: "Voo cancelado",
    desc: "Cancelamentos sem assistência adequada podem ensejar medidas. Entenda o que a companhia deveria ter feito e como proceder.",
    href: "/voo-cancelado",
    icon: (<img src="/icone-voo-cancelado.png" alt="Voo cancelado" style={{ width: '56px', height: '56px', objectFit: 'contain', marginLeft: '-6px', marginTop: '-6px' }} />),
  },
  {
    title: "Overbooking",
    desc: "Embarque negado por excesso de passageiros? Verificamos sua elegibilidade a reparação e medidas cabíveis.",
    href: "/overbooking",
    icon: (<img src="/icone-overbooking.png" alt="Overbooking" style={{ width: '56px', height: '56px', objectFit: 'contain', marginLeft: '-6px', marginTop: '-6px' }} />),
  },
  {
    title: "Extravio ou dano de bagagem",
    desc: "Orientamos a abertura de protocolos, prazos e medidas legais caso sua bagagem seja perdida ou chegue danificada.",
    href: "/bagagem",
    icon: (<img src="/icone-bagagem.png" alt="Bagagem" style={{ width: '56px', height: '56px', objectFit: 'contain', marginLeft: '-6px', marginTop: '-6px' }} />),
  },
  {
    title: "Conexão perdida / Reacomodação",
    desc: "Acompanhe seus direitos a assistência material e opções oferecidas pela companhia ao perder uma conexão.",
    href: "/conexao-perdida",
    icon: (<img src="/icone-perda-conexao.png" alt="Conexão perdida" style={{ width: '56px', height: '56px', objectFit: 'contain', marginLeft: '-6px', marginTop: '-6px' }} />),
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
  { tag: "Atraso", title: "Voo atrasado: quais são os direitos do passageiro?", href: "/voo-atrasado" },
  { tag: "Cancelamento", title: "Voo cancelado: reacomodação, reembolso e reparação", href: "/voo-cancelado" },
  { tag: "Conexão", title: "Perdi minha conexão por atraso. O que fazer?", href: "/conexao-perdida" },
  { tag: "Bagagem", title: "Bagagem extraviada: documentos e próximos passos", href: "/bagagem" },
  { tag: "Assistência", title: "O que é assistência material e quando é obrigatória?", href: "/assistencia-material" },
  { tag: "Reembolso", title: "Como funciona o reembolso de passagem aérea?", href: "/reembolso" },
];

export default function Home() {
  return (
    <>
      {/* ── HERO: Founder-Led ─────────────────────────── */}
      <section className="hero" aria-label="Hero principal">
        <div className="container">
          <div className="hero__inner">

            <div className="hero__left">
              <span className="hero__eyebrow">PROBLEMA COM VOO?</span>
              <h1 className="hero__headline">
                Você pode ter direito a<br />
                <span style={{ color: 'var(--lex-gold)' }}>até R$ 10 mil</span> em indenização.
              </h1>
              <p className="hero__sub">
                Atraso, cancelamento, conexão perdida, overbooking ou problema com bagagem? Verifique sua situação em poucos minutos.
              </p>
              
              <div className="hero__ctas">
                <Link href="/diagnostico" className="btn btn--primary">
                  Verificar grátis
                  <span className="btn__icon-circle" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1281 1920" preserveAspectRatio="xMidYMid meet" version="1.0">
                      <defs>
                        <clipPath id="49a6d28ac2">
                          <path d="M 100 386 L 1182 386 L 1182 1465.921875 L 100 1465.921875 Z M 100 386 " clipRule="nonzero"/>
                        </clipPath>
                      </defs>
                      <g clipPath="url(#49a6d28ac2)">
                        <path fill="currentColor" d="M 1170.144531 397.558594 C 1129.84375 357.300781 969.78125 435.792969 916.152344 489.46875 L 777.460938 628.160156 L 174.851562 521.820312 C 170.257812 520.992188 165.523438 522.460938 162.214844 525.769531 L 104.957031 583.078125 C 101.691406 586.339844 100.175781 590.980469 100.910156 595.53125 C 101.648438 600.082031 104.496094 603.988281 108.632812 606.054688 L 580.222656 841.847656 L 380.5 1097.40625 L 203.484375 1066.15625 C 198.84375 1065.421875 194.15625 1066.796875 190.847656 1070.109375 L 147.878906 1113.074219 C 144.707031 1116.246094 143.144531 1120.796875 143.789062 1125.253906 C 144.523438 1129.804688 147.1875 1133.710938 151.1875 1135.777344 L 296.957031 1214.269531 L 259.730469 1288.667969 C 256.976562 1294.183594 258.078125 1300.847656 262.445312 1305.167969 C 265.246094 1307.925781 268.878906 1309.304688 272.597656 1309.304688 C 274.757812 1309.304688 276.964844 1308.84375 278.988281 1307.832031 L 353.386719 1270.609375 L 431.878906 1416.378906 C 434.039062 1420.328125 437.945312 1423.085938 442.402344 1423.824219 C 443.09375 1423.914062 443.734375 1423.914062 444.472656 1423.914062 C 448.238281 1423.914062 451.871094 1422.488281 454.628906 1419.777344 L 497.59375 1376.765625 C 500.902344 1373.457031 502.375 1368.769531 501.59375 1364.21875 L 470.34375 1187.109375 L 725.898438 987.386719 L 961.695312 1458.976562 C 963.761719 1463.113281 967.714844 1465.964844 972.21875 1466.699219 C 973 1466.835938 973.734375 1466.882812 974.605469 1466.882812 C 978.375 1466.882812 981.914062 1465.410156 984.671875 1462.699219 L 1042.023438 1405.394531 C 1045.238281 1402.085938 1046.800781 1397.398438 1045.976562 1392.757812 L 939.636719 790.148438 L 1078.328125 651.457031 C 1132.003906 597.828125 1210.449219 437.859375 1170.144531 397.558594 Z M 1170.144531 397.558594 " fillOpacity="1" fillRule="nonzero"/>
                      </g>
                    </svg>
                  </span>
                </Link>
                <Link href="/central-de-direitos" className="btn btn--ghost-white">
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

      {/* ── TRUST STRIP ──────────────────────────────── */}
      <div className="trust-strip" role="list" aria-label="Diferenciais">
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

      {/* ── O QUE ACONTECEU — FUNDO IVORY ─────────────── */}
      <section className="section bg-ivory" aria-labelledby="problems-heading">
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
                <h3 className="card__title">{p.title}</h3>
                <p className="card__desc">{p.desc}</p>
                <span className="card__arrow">
                  Conhecer direitos
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIAGNÓSTICO CTA — FUNDO BRANCO + KARELINE ───── */}
      <section className="section bg-dark" aria-labelledby="diag-heading" style={{ overflow: "hidden" }}>
        <div className="container">
          <div className="diag-cta-section">
            <div className="diag-cta__photo-wrap">
              <img
                src="/kareline-diagnostico-apresentacao.png"
                alt="Kareline apresentando o diagnóstico"
                className="diag-cta__photo"
                loading="lazy"
              />
            </div>
            <div className="diag-cta__content">
              <span className="eyebrow">Ferramenta de Análise</span>
              <h2 id="diag-heading" style={{ marginTop: "0.5rem" }}>Entenda melhor sua situação</h2>
              <p style={{ marginTop: "0.75rem", marginBottom: "2.5rem" }}>
                Responda algumas perguntas sobre o que aconteceu durante sua viagem. As informações ajudam a compreender melhor o ocorrido antes de uma análise jurídica individualizada.
              </p>
              
              <div className="diag-cta__steps">
                <div className="diag-cta__step"><span>1</span> Analise seu caso em 2 minutos</div>
                <div className="diag-cta__step"><span>2</span> Nós cuidamos do trabalho</div>
                <div className="diag-cta__step"><span>3</span> Você recebe o dinheiro na sua conta</div>
              </div>

              <Link href="/diagnostico" className="btn btn--primary btn--lg">
                Verificar grátis
                <span className="btn__icon-circle" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1281 1920" preserveAspectRatio="xMidYMid meet" version="1.0">
                    <defs><clipPath id="49a6d28ac2"><path d="M 100 386 L 1182 386 L 1182 1465.921875 L 100 1465.921875 Z M 100 386 " clipRule="nonzero"/></clipPath></defs>
                    <g clipPath="url(#49a6d28ac2)"><path fill="currentColor" d="M 1170.144531 397.558594 C 1129.84375 357.300781 969.78125 435.792969 916.152344 489.46875 L 777.460938 628.160156 L 174.851562 521.820312 C 170.257812 520.992188 165.523438 522.460938 162.214844 525.769531 L 104.957031 583.078125 C 101.691406 586.339844 100.175781 590.980469 100.910156 595.53125 C 101.648438 600.082031 104.496094 603.988281 108.632812 606.054688 L 580.222656 841.847656 L 380.5 1097.40625 L 203.484375 1066.15625 C 198.84375 1065.421875 194.15625 1066.796875 190.847656 1070.109375 L 147.878906 1113.074219 C 144.707031 1116.246094 143.144531 1120.796875 143.789062 1125.253906 C 144.523438 1129.804688 147.1875 1133.710938 151.1875 1135.777344 L 296.957031 1214.269531 L 259.730469 1288.667969 C 256.976562 1294.183594 258.078125 1300.847656 262.445312 1305.167969 C 265.246094 1307.925781 268.878906 1309.304688 272.597656 1309.304688 C 274.757812 1309.304688 276.964844 1308.84375 278.988281 1307.832031 L 353.386719 1270.609375 L 431.878906 1416.378906 C 434.039062 1420.328125 437.945312 1423.085938 442.402344 1423.824219 C 443.09375 1423.914062 443.734375 1423.914062 444.472656 1423.914062 C 448.238281 1423.914062 451.871094 1422.488281 454.628906 1419.777344 L 497.59375 1376.765625 C 500.902344 1373.457031 502.375 1368.769531 501.59375 1364.21875 L 470.34375 1187.109375 L 725.898438 987.386719 L 961.695312 1458.976562 C 963.761719 1463.113281 967.714844 1465.964844 972.21875 1466.699219 C 973 1466.835938 973.734375 1466.882812 974.605469 1466.882812 C 978.375 1466.882812 981.914062 1465.410156 984.671875 1462.699219 L 1042.023438 1405.394531 C 1045.238281 1402.085938 1046.800781 1397.398438 1045.976562 1392.757812 L 939.636719 790.148438 L 1078.328125 651.457031 C 1132.003906 597.828125 1210.449219 437.859375 1170.144531 397.558594 Z M 1170.144531 397.558594 " fillOpacity="1" fillRule="nonzero"/></g>
                  </svg>
                </span>
              </Link>
              <p style={{ marginTop: "1rem", fontSize: "0.78rem", color: "var(--lex-text-muted)" }}>
                Informativo e preliminar. Não constitui parecer jurídico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMO FUNCIONA — FUNDO IVORY ──────────────── */}
      <section className="section bg-ivory" aria-labelledby="how-heading">
        <div className="container">
          <div className="text-center" style={{ maxWidth: 520, margin: "0 auto 4rem" }}>
            <span className="eyebrow">Processo</span>
            <h2 id="how-heading" style={{ marginTop: "0.5rem" }}>Da situação à análise jurídica</h2>
          </div>
          <div className="steps-grid">
            {[
              { n: "01", title: "Conte o que aconteceu", desc: "Responda algumas perguntas sobre sua viagem e o problema enfrentado pelo diagnóstico preliminar." },
              { n: "02", title: "A LexAero analisa sua situação", desc: "As circunstâncias, documentos e normas aplicáveis são avaliados de forma individualizada, com base na legislação vigente." },
              { n: "03", title: "Receba orientação sobre os próximos passos", desc: "Após a análise, você recebe informações sobre os procedimentos recomendados e seus direitos." },
            ].map((s) => (
              <div key={s.n} className="step">
                <div className="step__number" aria-hidden="true">{s.n}</div>
                <h3 className="step__title">{s.title}</h3>
                <p className="step__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KARELINE — FUNDO ESCURO CINEMATOGRÁFICO ────── */}
      <section className="section bg-dark" aria-labelledby="kareline-heading">
        <div className="container">
          <div className="kareline-section">

            {/* Foto editorial integrada ao fundo escuro */}
            <div className="kareline__photo-editorial">
              <img
                src="/kareline-founder-autoridade-vermelho.png"
                alt="Kareline Staut, advogada especialista em Direito do Passageiro Aéreo e fundadora da LexAero"
                loading="lazy"
                style={{ maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 100%)" }}
              />
            </div>

            {/* Conteúdo — sobre fundo escuro */}
            <div>
              <span className="eyebrow">À frente da LexAero</span>
              <h2 id="kareline-heading" style={{ marginTop: "0.5rem", marginBottom: "1rem", color: "var(--lex-white)" }}>
                Direito aéreo tratado com profundidade.
              </h2>
              <p style={{ fontSize: "0.82rem", fontWeight: 500, color: "var(--lex-gold-dark)", marginBottom: "1.5rem", letterSpacing: "0.04em" }}>
                Mestra em Direito • Advogada • Direito do Consumidor e Passageiro Aéreo
              </p>
              <p style={{ marginBottom: "1.25rem", lineHeight: 1.75, color: "var(--lex-text-dark-muted)" }}>
                A LexAero foi fundada por Kareline Staut com o propósito de tornar o Direito do Passageiro Aéreo mais compreensível, acessível e estrategicamente analisado.
              </p>
              <p style={{ marginBottom: "2rem", lineHeight: 1.75, color: "var(--lex-text-dark-muted)" }}>
                Sua atuação combina conhecimento jurídico, análise individualizada e clareza na comunicação para compreender as particularidades de cada situação envolvendo transporte aéreo.
              </p>

              {/* Credenciais — em card escuro */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem", padding: "1.25rem", background: "var(--lex-graphite)", border: "1px solid var(--lex-border-dark)", borderLeft: "2px solid var(--lex-gold)", borderRadius: "var(--radius-lg)" }}>
                {[
                  {
                    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
                    text: "Mestra em Direito",
                  },
                  {
                    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
                    text: "Advogada — OAB/XX 000.000",
                  },
                  {
                    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
                    text: "Especialização em Direito do Passageiro Aéreo",
                  },
                ].map((c) => (
                  <div key={c.text} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.875rem", color: "var(--lex-text-dark-muted)" }}>
                    <span style={{ color: "var(--lex-gold)", flexShrink: 0 }}>{c.icon}</span>
                    {c.text}
                  </div>
                ))}
              </div>

              <Link href="/kareline-staut" className="btn btn--ghost-gold">
                Conheça Kareline Staut
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── METODOLOGIA / ANÁLISE INDIVIDUALIZADA ───────── */}
      <section className="section bg-dark" aria-labelledby="diff-heading">
        <div className="container">
          <div className="metodologia-section">
            <div className="metodologia__content">
              <span className="eyebrow">ANÁLISE INDIVIDUALIZADA</span>
              <h2 id="diff-heading" style={{ marginTop: "0.5rem", marginBottom: "1.25rem" }}>Cada viagem tem circunstâncias diferentes.</h2>
              <p style={{ marginBottom: "1.5rem" }}>
                Um atraso, cancelamento ou problema de bagagem não pode ser analisado apenas por uma regra genérica. Uma análise técnica e profunda considera elementos fundamentais para cada caso.
              </p>
              
              <div className="differentials-grid" style={{ marginBottom: "2rem" }}>
                {[
                  { title: "Documentos e provas", desc: "Bilhetes, e-mails, protocolos e fotografias." },
                  { title: "Circunstâncias da viagem", desc: "Motivo do atraso, conexões perdidas, tempo de espera." },
                  { title: "Assistência prestada", desc: "Fornecimento de alimentação, transporte e hospedagem." },
                  { title: "Base jurídica", desc: "Resoluções da ANAC, CDC e jurisprudência aplicável." },
                ].map((d) => (
                  <div key={d.title} className="differential">
                    <div className="differential__icon" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </div>
                    <div>
                      <h4 className="differential__title">{d.title}</h4>
                      <p className="differential__desc">{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/diagnostico" className="btn btn--primary">
                Analisar minha situação
              </Link>
            </div>
            
            <div className="metodologia__photo-wrap">
              <img 
                src="/kareline-metodologia-seriedade.png" 
                alt="Kareline Staut — Análise técnica e individualizada" 
                className="metodologia__photo"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── DOCUMENTOS — FUNDO IVORY ────────────────────── */}
      <section className="section bg-ivory" aria-labelledby="docs-heading">
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="text-center" style={{ marginBottom: "3rem" }}>
            <span className="eyebrow">Guia Rápido</span>
            <h2 id="docs-heading" style={{ marginTop: "0.5rem" }}>Teve um problema com seu voo? Guarde estas informações.</h2>
            <p style={{ marginTop: "0.75rem" }}>
              Documentar o ocorrido é essencial para qualquer análise jurídica posterior.
            </p>
          </div>
          <div className="checklist" style={{ marginBottom: "2.5rem" }}>
            {[
              "Cartão de embarque",
              "Comprovante da reserva",
              "E-mails e mensagens",
              "Protocolos de atendimento",
              "Declaração de atraso/cancelamento",
              "Comprovantes de gastos extras",
              "Fotografias do painel",
              "Comprovantes de compromissos afetados",
            ].map((item) => (
              <div key={item} className="checklist__item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {item}
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/diagnostico" className="btn btn--primary">
              Analisar minha situação
            </Link>
          </div>
        </div>
      </section>

      {/* ── CENTRAL DE DIREITOS — FUNDO BRANCO + KARELINE ── */}
      <section className="section bg-dark" aria-labelledby="content-heading" style={{ overflow: "hidden" }}>
        <div className="container">
          <div className="central-direitos-section">
            <div className="central-direitos__photo-wrap">
              <img 
                src="/kareline-central-direitos-apontando.png" 
                alt="Kareline apresentando a Central de Direitos" 
                className="central-direitos__photo"
                loading="lazy"
              />
            </div>
            
            <div className="central-direitos__content">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
                <div>
                  <span className="eyebrow">Conteúdo</span>
                  <h2 id="content-heading" style={{ marginTop: "0.5rem", marginBottom: 0 }}>Central de Direitos do Passageiro</h2>
                </div>
              </div>
              <div className="content-grid-vertical">
                {CONTENT_CARDS.map((c) => (
                  <Link key={c.href} href={c.href} className="content-card-row">
                    <span className="content-card-row__tag">{c.tag}</span>
                    <h3 className="content-card-row__title">{c.title}</h3>
                    <span className="content-card-row__arrow">
                      Ler guia
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
              
              <div style={{ marginTop: "2rem" }}>
                <Link href="/central-de-direitos" className="btn btn--secondary btn--sm">
                  Ver Central Completa
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
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

      {/* ── CTA FINAL — FUNDO PRETO ────────────────────── */}
      <section className="section bg-dark" aria-labelledby="cta-heading">
        <div className="container">
          <div className="cta-banner" style={{ border: "none", borderTop: "1px solid var(--lex-gold)", borderRadius: 0, background: "transparent" }}>
            <h2 id="cta-heading" className="cta-banner__title" style={{ color: "var(--lex-white)" }}>
              Teve um problema durante sua viagem?
            </h2>
            <p className="cta-banner__sub" style={{ color: "var(--lex-text-dark-muted)" }}>
              Conte o que aconteceu e veja quais informações podem ser relevantes para uma análise jurídica da sua situação.
            </p>
            <div className="cta-banner__btns">
              <Link href="/diagnostico" className="btn btn--primary btn--lg">
                Iniciar diagnóstico
              </Link>
              <a
                href={`https://wa.me/5511999999999?text=${encodeURIComponent("Olá, encontrei a LexAero e gostaria de orientação sobre uma situação envolvendo minha viagem.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost-white btn--lg"
              >
                Falar com a LexAero
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
