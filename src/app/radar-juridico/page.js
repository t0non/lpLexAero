import Link from "next/link";

export const metadata = {
  title: "Radar Jurídico | LexAero",
  description:
    "Informação técnica, jurisprudência e parâmetros para fortalecer seus direitos como passageiro aéreo.",
};

// Ícones SVG minimalistas
const ICONS = {
  scale: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>,
  check: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  user: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  chart: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="4" height="12" x="15" y="8" rx="1"/><rect width="4" height="16" x="5" y="4" rx="1"/><line x1="2" x2="22" y1="20" y2="20"/></svg>,
  calendar: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>,
  alert: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>,
  file: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>,
  clock: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  money: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/><path d="M12 12h.01"/></svg>,
  building: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="12" x="4" y="8"/><path d="M2 22h20"/><path d="M12 2v6"/><path d="m2 8 10-6 10 6"/></svg>,
  message: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>,
  food: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>,
  plane: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.7l-1.2 3.3c-.2.5.1 1.1.6 1.4l5.5 3.1-3.9 3.9-2.3-.8c-.4-.1-.9.1-1.1.5l-1.3 2.1c-.2.4 0 .9.3 1.2l4.6 2.4 2.4 4.6c.3.3.8.5 1.2.3l2.1-1.3c.4-.2.6-.7.5-1.1l-.8-2.3 3.9-3.9 3.1 5.5c.3.5.9.8 1.4.6l3.3-1.2c.5-.2.8-.6.7-1.1Z"/></svg>,
  refresh: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>,
  document: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>,
  shield: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
};

export default function RadarJuridicoPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-dark" style={{ 
        padding: "4rem 1.5rem 5rem",
        backgroundImage: "linear-gradient(rgba(10, 15, 25, 0.75), rgba(10, 15, 25, 0.95)), url('/bg_radar_abstract.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}>
        <div className="container">
          {/* Breadcrumb */}
          <nav style={{ fontSize: "0.85rem", marginBottom: "2rem", color: "#a0a0a0", display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <Link href="/" style={{ color: "#a0a0a0", textDecoration: "none" }}>Início</Link>
            <span>›</span>
            <span style={{ color: "var(--lex-gold)" }}>Radar Jurídico</span>
          </nav>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "3rem", alignItems: "flex-start", justifyContent: "space-between" }}>
            {/* Left: title + features */}
            <div style={{ flex: "1 1 min(100%, 500px)" }}>
              <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: "1rem", lineHeight: 1.1, color: "#fff" }}>
                RADAR <span style={{ color: "var(--lex-gold)" }}>JURÍDICO</span>
              </h1>
              <p style={{ fontSize: "1.1rem", color: "#c5c5c5", maxWidth: 500, marginBottom: "2.5rem", lineHeight: 1.6 }}>
                Informação técnica, jurisprudência e parâmetros para fortalecer seus direitos como passageiro.
              </p>

              {/* Feature grid */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
                {[
                  { icon: ICONS.scale, label: "Base legal atualizada" },
                  { icon: ICONS.check, label: "Jurisprudência dos tribunais" },
                  { icon: ICONS.user, label: "Direitos do passageiro" },
                  { icon: ICONS.chart, label: "Parâmetros de indenização" },
                ].map(({ icon, label }) => (
                  <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", minWidth: 120 }}>
                    <span style={{ color: "var(--lex-gold)" }}>{icon}</span>
                    <span style={{ fontSize: "0.85rem", color: "#c5c5c5", textAlign: "center", lineHeight: 1.4 }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: updated badge */}
            <div style={{
              background: "#1a1a2e",
              border: "1px solid #333",
              borderRadius: 16,
              padding: "1.5rem 2rem",
              minWidth: 260,
              maxWidth: 300,
            }}>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#888", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
                CONTEÚDO ATUALIZADO
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                <span style={{ color: "var(--lex-gold)" }}>{ICONS.calendar}</span>
                <span style={{ fontSize: "1.35rem", fontWeight: 800, color: "#fff" }}>Setembro de 2026</span>
              </div>
              <p style={{ fontSize: "0.85rem", color: "#999", margin: 0, lineHeight: 1.6 }}>
                Monitoramos decisões e normas para manter você sempre informado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ALERT STF ── */}
      <div style={{ background: "#fffbea", borderTop: "4px solid #f59e0b", padding: "1.5rem 1.5rem" }}>
        <div className="container" style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
          <span style={{ color: "#f59e0b", flexShrink: 0, marginTop: 2 }}>{ICONS.alert}</span>
          <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: 1.7, color: "#1a1a1a" }}>
            <strong>Atenção — Suspensão nacional no STF (Tema 1.417)</strong><br />
            Desde <strong>26/11/2025</strong>, o Supremo Tribunal Federal determinou a <strong>suspensão nacional</strong> dos processos que discutem a responsabilidade civil por <strong>atraso, cancelamento ou alteração de voo motivados por caso fortuito ou força maior</strong> (fortuito externo), até o julgamento do ARE 1.560.244 (Rel. Min. Dias Toffoli). O alcance é restrito: em regra, <strong>não atinge</strong> extravio/dano de bagagem, preterição/overbooking nem falhas internas da operação (fortuito interno).
          </p>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <section className="bg-light" style={{ padding: "4rem 1.5rem" }}>
        <div className="container">

          {/* ── TWO COLUMN SECTION ── */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", marginBottom: "4rem" }}>

            {/* Column 1 – Documentos */}
            <div style={{ flex: "1 1 min(100%, 440px)", background: "#fff", borderRadius: 16, padding: "clamp(1.5rem, 5vw, 2.5rem)", boxShadow: "0 4px 24px rgba(0,0,0,0.06)", border: "none", overflow: "hidden" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                <span style={{ color: "var(--lex-gold)" }}>{ICONS.file}</span>
                <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--lex-black)", margin: 0, textAlign: "left" }}>
                  Documentos necessários para acionar a companhia aérea
                </h2>
              </div>
              <p style={{ fontSize: "0.95rem", color: "#555", marginBottom: "1.5rem", lineHeight: 1.6 }}>
                A organização da documentação é essencial para o sucesso da ação. Quanto mais provas o passageiro tiver, maiores as chances de obter uma indenização justa.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {[
                  ["Cartão de embarque", "Prova de que estava no voo"],
                  ["Comprovante de reserva", "Dados da viagem contratada"],
                  ["E-mails/mensagens da cia.", "Comunicações sobre alteração"],
                  ["Nota fiscal de gastos extras", "Base para reembolso material"],
                  ["Declaração de atraso/cancelamento", "Documento oficial da companhia"],
                  ["Fotos do painel de partidas", "Prova da situação no aeroporto"],
                  ["Protocolo de atendimento", "Registro da reclamação formal"],
                ].map(([doc, uso], i) => (
                  <div key={i} style={{ padding: "0.75rem", background: i % 2 === 0 ? "#fff" : "#f9f9f7", borderRadius: 8, border: "1px solid #f0f0ec" }}>
                    <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#111", marginBottom: "0.2rem" }}>{doc}</div>
                    <div style={{ fontSize: "0.82rem", color: "#666" }}>{uso}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 – Prazos */}
            <div style={{ flex: "1 1 min(100%, 440px)", background: "#fff", borderRadius: 16, padding: "clamp(1.5rem, 5vw, 2.5rem)", boxShadow: "0 4px 24px rgba(0,0,0,0.06)", border: "none", overflow: "hidden" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                <span style={{ color: "var(--lex-gold)" }}>{ICONS.clock}</span>
                <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--lex-black)", margin: 0, textAlign: "left" }}>
                  Prazos prescricionais e assistência material
                </h2>
              </div>
              <p style={{ fontSize: "0.95rem", color: "#555", marginBottom: "1.5rem", lineHeight: 1.6 }}>
                Conhecer os prazos é fundamental. Agir dentro deles preserva o direito de buscar reparação.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { label: "Prescrição (voo doméstico – CDC)", value: "5 anos" },
                  { label: "Prescrição (voo internacional – Conv. Montreal)", value: "2 anos" },
                  { label: "Assistência: comunicação (internet/telefone)", value: "A partir de 1h de atraso" },
                  { label: "Assistência: alimentação (voucher)", value: "A partir de 2h de atraso" },
                  { label: "Assistência: hospedagem + transporte", value: "A partir de 4h (com pernoite)" },
                  { label: "Compensação por preterição (overbooking)", value: "250 DES (dom.) / 500 DES (int.)" },
                  { label: "Reembolso por cancelamento (> 4h)", value: "Imediato, integral" },
                ].map(({ label, value }, i) => (
                  <div key={i} style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "0.4rem 1rem", padding: "0.75rem 0", borderBottom: "1px solid #f0f0ec" }}>
                    <span style={{ fontSize: "0.88rem", color: "#444", lineHeight: 1.4, flex: "1 1 180px" }}>{label}</span>
                    <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--lex-black)", flexShrink: 0 }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── DIREITOS DO PASSAGEIRO E PARÂMETROS ── */}
          <div style={{ background: "#fff", borderRadius: 16, padding: "clamp(1.5rem, 5vw, 3.5rem)", boxShadow: "0 4px 24px rgba(0,0,0,0.06)", marginBottom: "4rem", border: "none", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
              <span style={{ color: "#d97706", background: "#fef3c7", padding: "12px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {ICONS.clock}
              </span>
              <h2 style={{ fontSize: "clamp(1.3rem, 4vw, 1.8rem)", fontWeight: 800, color: "var(--lex-black)", margin: 0, textAlign: "left", letterSpacing: "-0.02em" }}>
                Direitos do passageiro: parâmetros e bases legais
              </h2>
            </div>
            <p style={{ fontSize: "0.95rem", color: "#777", marginBottom: "2rem", lineHeight: 1.6, maxWidth: 600 }}>
              Principais direitos assegurados ao passageiro e os dispositivos legais que os fundamentam.
            </p>
            {/* Cards responsivos - substituem tabela no mobile */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { sit: "Atraso de voo superior a 4h", direito: "Reacomodação, reembolso ou execução por outra modalidade + assistência material", base: "Res. ANAC 400/2016, art. 21; CDC, art. 14", ind: "R$ 3.000 – 15.000", cor: "#1c2b48" },
                { sit: "Cancelamento de voo", direito: "Reembolso integral, reacomodação ou execução + assistência material", base: "Res. ANAC 400/2016, art. 21; CDC, arts. 14 e 20", ind: "R$ 5.000 – 20.000", cor: "#1c2b48" },
                { sit: "Overbooking (preterição)", direito: "Compensação financeira imediata (250 DES dom. / 500 DES int.) + reacomodação ou reembolso + assistência", base: "Res. ANAC 400/2016, arts. 22 e 24; CDC, art. 6º", ind: "R$ 5.000 – 25.000", cor: "#1c2b48" },
                { sit: "Extravio de bagagem", direito: "Indenização pelos bens perdidos + danos morais", base: "Dom.: CDC, art. 14. Int.: Convenção de Montreal (Dec. 5.910/2006)", ind: "R$ 3.000 – 15.000 + materiais", cor: "#1c2b48" },
                { sit: "Dano ou violação de bagagem", direito: "Reparo ou indenização do valor da mala + conteúdo", base: "Res. ANAC 400/2016; CDC, art. 14", ind: "R$ 2.000 – 10.000", cor: "#1c2b48" },
                { sit: "Falta de assistência material", direito: "Comunicação, alimentação e hospedagem conforme o tempo de espera", base: "Res. ANAC 400/2016, arts. 26 e 27", ind: "Agrava os danos morais", cor: "#555" },
                { sit: "Downgrade involuntário", direito: "Reembolso da diferença + indenização por danos morais", base: "Res. ANAC 400/2016; CDC, arts. 14 e 20", ind: "R$ 3.000 – 10.000", cor: "#1c2b48" },
                { sit: "Impedimento indevido de embarque", direito: "Reacomodação + indenização por danos morais e materiais", base: "CDC, art. 14; CC, art. 186", ind: "R$ 5.000 – 20.000", cor: "#1c2b48" },
              ].map(({ sit, direito, base, ind, cor }, i) => (
                <div key={i} style={{ background: i % 2 === 0 ? "#fff" : "#faf9f6", border: "1px solid #f0eee9", borderRadius: 10, padding: "1rem 1.25rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "0.6rem 1rem", alignItems: "start" }}>
                  <div>
                    <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#999", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.2rem" }}>Situação</div>
                    <div style={{ fontWeight: 800, fontSize: "0.9rem", color: "#1c2b48", lineHeight: 1.3 }}>{sit}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#999", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.2rem" }}>Direito</div>
                    <div style={{ fontSize: "0.85rem", color: "#444", lineHeight: 1.4 }}>{direito}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#999", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.2rem" }}>Base legal</div>
                    <div style={{ fontSize: "0.8rem", color: "#666", lineHeight: 1.4 }}>{base}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#999", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.2rem" }}>Indenização estimada</div>
                    <div style={{ fontSize: "0.9rem", fontWeight: 700, color: cor }}>{ind}</div>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "0.82rem", color: "#888", marginTop: "1.5rem", fontStyle: "italic" }}>
              Faixas de indenização são estimativas; a base legal é aplicada conforme o caso concreto e a natureza do voo (doméstico ou internacional).
            </p>
          </div>

          {/* ── TEMAS STF ── */}
          <div style={{ background: "#fdfbfa", padding: "clamp(1.5rem, 5vw, 2.5rem)", borderRadius: 16, marginBottom: "3rem", border: "1px solid #f0eee9" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "2rem" }}>
              <span style={{ color: "#d97706", background: "#fef3c7", padding: "10px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <div style={{ transform: "scale(0.85)" }}>{ICONS.building}</div>
              </span>
              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--lex-black)", margin: "0 0 0.25rem 0", letterSpacing: "-0.02em" }}>
                  STF em foco: Tema 1.417 e Tema 210
                </h2>
                <p style={{ fontSize: "0.9rem", color: "#666", margin: 0, lineHeight: 1.5, maxWidth: 800 }}>
                  Dois temas de repercussão geral moldam hoje o contencioso aéreo. Entenda o que cada um decide — e, sobretudo, o que a suspensão nacional realmente alcança.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
              {/* Card Tema 1.417 */}
              <div style={{ flex: "1 1 min(100%, 420px)", background: "#fff", borderRadius: 12, border: "2px solid #eab308", padding: "clamp(1.25rem, 4vw, 1.5rem)", boxShadow: "0 2px 12px rgba(0,0,0,0.03)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
                <div style={{ fontSize: "0.7rem", fontWeight: 800, color: "#d97706", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
                  TEMA 1.417 · ARE 1.560.244
                </div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--lex-black)", margin: "0 0 0.25rem 0", lineHeight: 1.3 }}>
                  Prevalência do regime aéreo x CDC no caso fortuito
                </h3>
                <p style={{ fontSize: "0.8rem", color: "#888", marginBottom: "1rem" }}>
                  Rel. Min. Dias Toffoli · Repercussão geral · mérito ainda não julgado
                </p>
                <div style={{ background: "#f9f8f6", borderRadius: 8, padding: "1rem", marginBottom: "1.25rem", borderLeft: "3px solid #eab308" }}>
                  <p style={{ margin: 0, fontSize: "0.85rem", color: "#444", lineHeight: 1.5 }}>
                    Discute-se, à luz do art. 178 da Constituição, se as normas do transporte aéreo prevalecem sobre as normas de proteção ao consumidor para disciplinar a responsabilidade civil por cancelamento, alteração ou atraso de voo por caso fortuito ou força maior.
                  </p>
                </div>
                
                {/* Timeline */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem", paddingLeft: "0.25rem" }}>
                  {[
                    { date: "23/08/2025", text: "Repercussão geral reconhecida." },
                    { date: "26/11/2025", text: "Suspensão nacional dos processos (art. 1.035, § 5º, CPC)." },
                    { date: "10/03/2026", text: "EDs acolhidos (sem ef. infringentes): restringe a controvérsia a caso fortuito/força maior (fortuito externo)." },
                    { date: "Mérito", text: "Pendente de julgamento definitivo." }
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#eab308", marginTop: 6, flexShrink: 0 }} />
                      <div>
                        <strong style={{ display: "block", fontSize: "0.85rem", color: "#111", marginBottom: "0.15rem" }}>{item.date}</strong>
                        <span style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.4, display: "block" }}>{item.text}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ background: "#1c2b48", borderRadius: 10, padding: "1rem", marginTop: "auto" }}>
                  <div style={{ fontWeight: 800, fontSize: "0.85rem", color: "#fef3c7", marginBottom: "0.5rem" }}>
                    O que a suspensão NÃO alcança (distinguishing)
                  </div>
                  <p style={{ margin: 0, fontSize: "0.85rem", color: "#cbd5e1", lineHeight: 1.5 }}>
                    Atinge apenas ações sobre atraso/cancelamento por <strong>fortuito externo</strong>. Em regra, continuam: <strong>falhas internas</strong> (manutenção); <strong>extravio/dano de bagagem; overbooking</strong>; e casos sem invocação de força maior.
                  </p>
                </div>
              </div>

              {/* Card Tema 210 */}
              <div style={{ flex: "1 1 min(100%, 420px)", background: "#fff", borderRadius: 12, border: "1px solid #e5e5e5", padding: "clamp(1.25rem, 4vw, 1.5rem)", boxShadow: "0 2px 12px rgba(0,0,0,0.02)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
                <div style={{ fontSize: "0.7rem", fontWeight: 800, color: "#d97706", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
                  TEMA 210 · RE 636.331
                </div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--lex-black)", margin: "0 0 0.25rem 0", lineHeight: 1.3 }}>
                  Tratados internacionais x CDC na bagagem
                </h3>
                <p style={{ fontSize: "0.8rem", color: "#888", marginBottom: "1.25rem" }}>
                  Rel. Min. Gilmar Mendes · Tribunal Pleno · julgado em 25/05/2017
                </p>
                
                <p style={{ fontSize: "0.85rem", color: "#333", lineHeight: 1.5, marginBottom: "1.5rem" }}>
                  <strong>Tese fixada:</strong> nos termos do art. 178 da Constituição, as normas e os tratados internacionais limitadores da responsabilidade das transportadoras aéreas (Convenções de Varsóvia e Montreal) prevalecem sobre o Código de Defesa do Consumidor.
                </p>

                <div style={{ background: "#f9f8f6", borderRadius: 10, padding: "1.25rem", marginBottom: "1.5rem", border: "1px solid #e5e0d5" }}>
                  <div style={{ fontWeight: 800, fontSize: "0.85rem", color: "#92400e", marginBottom: "0.5rem" }}>
                    Alcance restrito do Tema 210
                  </div>
                  <p style={{ margin: 0, fontSize: "0.85rem", color: "#555", lineHeight: 1.5 }}>
                    Aplica-se apenas aos <strong>danos materiais</strong> em <strong>voos internacionais</strong> (limitação tarifada em DES). <strong>Não</strong> se aplica aos danos morais nem aos voos domésticos, regidos integralmente pelo CDC.
                  </p>
                </div>

                <p style={{ fontSize: "0.85rem", color: "#444", lineHeight: 1.5 }}>
                  Ou seja: no voo <strong>doméstico</strong>, a bagagem extraviada é indenizada pelo valor integral comprovado (CDC); no voo <strong>internacional</strong>, o dano material segue o teto da Convenção de Montreal, mas o dano moral não sofre limitação.
                </p>
              </div>
            </div>
          </div>

          {/* ── ENTENDIMENTOS E JURISPRUDÊNCIAS ── */}
          <div style={{ marginBottom: "3rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
              <span style={{ color: "var(--lex-gold)" }}><div style={{ transform: "scale(0.85)" }}>{ICONS.scale}</div></span>
              <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--lex-black)", margin: 0, textAlign: "left" }}>
                Entendimentos e jurisprudências atuais
              </h2>
            </div>
            <p style={{ fontSize: "0.85rem", color: "#555", marginBottom: "2rem", lineHeight: 1.5 }}>
              Confira as teses consolidadas e os precedentes relevantes dos tribunais superiores.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
              {/* Left: list */}
              <div style={{ flex: "1 1 min(100%, 500px)", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  {
                    title: "Responsabilidade objetiva das companhias aéreas",
                    body: "As companhias aéreas respondem objetivamente pelos danos causados ao passageiro, independentemente de culpa, por falha na prestação do serviço e em razão do risco da atividade.",
                    base: "Base: CDC, art. 14; CC, art. 927, parágrafo único.",
                  },
                  {
                    title: "Dano moral: presunção condicionada às circunstâncias",
                    highlight: "Há divergência no STJ.",
                    body: " Uma linha entende que o simples atraso não gera dano moral in re ipsa, exigindo análise do caso concreto (espera excessiva, falta de assistência, perda de compromisso). Outra reconhece o dano moral presumido em cancelamento, atraso relevante e preterição.",
                    base: "Tema com posições divergentes na 3ª e 4ª Turmas do STJ.",
                  },
                  {
                    title: "Overbooking: direito à compensação",
                    body: "A recusa de embarque a passageiro que se apresentou regularmente configura preterição, gerando compensação financeira tarifada (250 DES em voo doméstico; 500 DES em internacional), além de reacomodação/reembolso e, conforme o caso, danos morais.",
                    base: "Base: Res. ANAC 400/2016, arts. 22 e 24.",
                  },
                  {
                    title: "Extravio de bagagem: regime dúplice",
                    body: "No voo doméstico, a indenização por danos materiais segue o CDC (reparação integral comprovada). No voo internacional, prevalece a limitação tarifada das Convenções de Varsóvia/Montreal para os danos materiais (STF, Tema 210), sem limitação para os danos morais.",
                    base: "Base: STF, RE 636.331 (Tema 210), Rel. Min. Gilmar Mendes, j. 25/05/2017.",
                  },
                  {
                    title: "Assistência material é dever legal",
                    body: "A ausência de assistência material (comunicação, alimentação e hospedagem conforme o tempo de espera) configura falha na prestação do serviço e reforça o pedido de reparação por danos morais.",
                    base: "Base: Res. ANAC 400/2016, arts. 26 e 27; CDC, art. 14.",
                  },
                  {
                    title: "Excludentes e o Tema 1.417: fortuito externo x interno",
                    body: "O fortuito externo (ex.: fechamento de aeroporto por condições meteorológicas) rompe o nexo causal e pode afastar a responsabilidade. Já o fortuito interno (falhas da própria operação) não a afasta. Essa distinção é o eixo do Tema 1.417/STF e delimita o alcance da suspensão nacional.",
                    base: "Base: STF, Tema 1.417 (ARE 1.560.244), Rel. Min. Dias Toffoli — art. 178 da CF.",
                  },
                ].map(({ title, highlight, body, base }, i) => (
                  <div key={i} style={{ display: "flex", gap: "0.85rem" }}>
                    <span style={{ color: "var(--lex-gold)", flexShrink: 0, marginTop: 2 }}>✓</span>
                    <div>
                      <strong style={{ fontSize: "0.95rem", color: "#111", display: "block", marginBottom: "0.25rem" }}>{title}</strong>
                      <p style={{ margin: 0, fontSize: "0.85rem", color: "#444", lineHeight: 1.5 }}>
                        {highlight && <span style={{ color: "#f59e0b", fontWeight: 700 }}>{highlight}</span>}
                        {body}
                      </p>
                      <span style={{ fontSize: "0.75rem", color: "#888", display: "block", marginTop: "0.4rem", fontStyle: "italic" }}>{base}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right: sidebar */}
              <div style={{ flex: "0 1 300px" }}>
                <div style={{ background: "#fffbea", border: "1.5px solid #f59e0b", borderRadius: 12, padding: "1.5rem", position: "sticky", top: "2rem", boxShadow: "0 2px 12px rgba(0,0,0,0.03)" }}>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--lex-black)", marginBottom: "1.25rem" }}>
                    Destaques do direito do passageiro
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    {[
                      { icon: ICONS.message, title: "Transparência e informação", desc: "A companhia deve informar, com antecedência, alterações, cancelamentos e direitos." },
                      { icon: ICONS.food, title: "Assistência material gratuita", desc: "Comunicação (a partir de 1 h), alimentação (2 h) e hospedagem + transporte (4 h, com pernoite)." },
                      { icon: ICONS.plane, title: "Escolha do passageiro", desc: "Em cancelamentos, opta-se entre reembolso, reacomodação ou outra modalidade." },
                      { icon: ICONS.refresh, title: "Inversão do ônus da prova", desc: "Nas relações de consumo, é possível inverter o ônus da prova (art. 6º, VIII, do CDC)." },
                      { icon: ICONS.clock, title: "Prescrição", desc: "Em regra, 5 anos (art. 27 do CDC). Em voo internacional, 2 anos (Convenção de Montreal)." },
                    ].map(({ icon, title, desc }) => (
                      <div key={title} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                        <span style={{ color: "var(--lex-gold)", flexShrink: 0, marginTop: 0, background: "#fff", padding: "6px", borderRadius: "50%", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", transform: "scale(0.85)" }}>{icon}</span>
                        <div>
                          <strong style={{ fontSize: "0.85rem", color: "#111", display: "block", marginBottom: "0.15rem" }}>{title}</strong>
                          <span style={{ fontSize: "0.75rem", color: "#555", lineHeight: 1.4, display: "block" }}>{desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── CTA E INFORMAÇÃO É PODER ── */}
          <div style={{ background: "#fdfbfa", padding: "3rem 1.5rem", marginBottom: "4rem" }}>
            
            <div style={{ background: "#fdf8ed", border: "1.5px solid #f59e0b", borderRadius: 12, padding: "2.5rem 3rem", margin: "0 auto 2.5rem", textAlign: "left", boxShadow: "0 4px 12px rgba(0,0,0,0.02)" }}>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--lex-black)", margin: "0 0 0.5rem 0" }}>
                Informação é poder. Conhecer seus direitos é o primeiro passo para defendê-los.
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#555", margin: "0 0 1.5rem 0", lineHeight: 1.5 }}>
                Em caso de problema com seu voo, guarde os documentos, registre o ocorrido e<br/>busque orientação jurídica especializada.
              </p>
              <Link
                href="/diagnostico"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "var(--lex-black)", color: "#fff", fontWeight: 700, fontSize: "0.95rem", padding: "0.85rem 1.5rem", borderRadius: 50, textDecoration: "none" }}
              >
                Falar com especialista
                <span style={{ background: "var(--lex-gold)", borderRadius: "50%", width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--lex-black)" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </span>
              </Link>
            </div>

            {/* ── FONTES E DISCLAIMER ── */}
            <div style={{ textAlign: "center" }}>
              <p style={{ fontSize: "0.75rem", color: "#888", margin: "0 0 0.75rem", lineHeight: 1.6 }}>
                Fontes: STF — Tema 1.417 (ARE 1.560.244) e Tema 210 (RE 636.331), portal.stf.jus.br; Resolução ANAC nº 400/2016; Lei nº 8.078/1990 (CDC); Convenção de Montreal (Decreto nº 5.910/2006).
              </p>
              <p style={{ fontSize: "0.75rem", color: "#888", margin: 0, lineHeight: 1.6 }}>
                Este conteúdo tem caráter informativo e não substitui a análise das circunstâncias e dos documentos de cada caso.<br />
                Para orientação personalizada, fale com a equipe jurídica da LexAero.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOG / CONTEÚDO INFORMATIVO ── */}
      <section className="bg-dark" style={{ padding: "5rem 1.5rem" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span style={{ color: "var(--lex-gold)", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", display: "block", marginBottom: "1rem" }}>
              Conteúdo informativo
            </span>
            <h2 style={{ color: "#fff", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.1, margin: "0 auto 1.5rem", maxWidth: 640 }}>
              Seu guia de direitos como passageiro aéreo
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.05rem", maxWidth: 540, margin: "0 auto", lineHeight: 1.65 }}>
              Artigos escritos por especialistas em Direito do Passageiro Aéreo para você conhecer seus direitos e saber como agir em cada situação.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            {[
              { date: "20 de Agosto de 2026", readTime: "8 min de leitura", img: "/blog-plane-1.jpg", title: "Voo atrasado: saiba exatamente quais são seus direitos e como receber indenização", summary: "Guia completo sobre o que a lei garante em casos de atraso de voo no Brasil — da assistência material à indenização por danos morais.", href: "/blog/voo-atrasado-direitos" },
              { date: "10 de Agosto de 2026", readTime: "7 min de leitura", img: "/blog-plane-2.jpg", title: "Voo cancelado pela companhia? Você tem direito a mais do que pensa", summary: "Diferença entre remarcação, reembolso e indenização por danos morais. Quando você pode exigir as três coisas ao mesmo tempo.", href: "/blog/voo-cancelado-direitos" },
              { date: "1 de Agosto de 2026", readTime: "6 min de leitura", img: "/blog-plane-3.jpg", title: "Bagagem extraviada ou danificada: o passo a passo para não perder seus direitos", summary: "O que fazer no aeroporto, quais documentos guardar e como calcular o valor da indenização que a companhia deve pagar.", href: "/blog/bagagem-extraviada" },
            ].map((post) => (
              <Link key={post.href} href={post.href} style={{ textDecoration: "none" }}>
                <div style={{ background: "#fff", borderRadius: 16, overflow: "hidden", height: "100%", display: "flex", flexDirection: "column", border: "none" }}>
                  <div style={{ height: 220, overflow: "hidden" }}>
                    <img src={post.img} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </div>
                  <div style={{ padding: "1.75rem", display: "flex", flexDirection: "column", flex: 1 }}>
                    <p style={{ fontSize: "0.85rem", color: "#999", marginBottom: "1rem", fontWeight: 600 }}>{post.date} · {post.readTime}</p>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#111", lineHeight: 1.4, marginBottom: "1rem" }}>{post.title}</h3>
                    <p style={{ fontSize: "0.95rem", color: "#555", lineHeight: 1.6, marginBottom: "1.5rem", flex: 1 }}>{post.summary}</p>
                    <span style={{ color: "var(--lex-gold)", fontSize: "0.95rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      Ler artigo completo 
                      <span style={{ fontSize: "1.2rem" }}>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5 MOTIVOS PARA ESCOLHER A LEXAERO ── */}
      <section style={{ background: "var(--lex-black)", padding: "5rem 1.5rem 0 1.5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center", paddingBottom: "5rem" }}>
          
          {/* Left Column */}
          <div style={{ flex: "1 1 min(100%, 500px)" }}>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#fff", lineHeight: 1.15, marginBottom: "1.25rem", letterSpacing: "-0.02em", maxWidth: 480 }}>
              Nós cuidamos de cada etapa com <span style={{ color: "var(--lex-gold)" }}>estratégia jurídica.</span>
            </h2>
            <p style={{ fontSize: "1rem", color: "#aaa", lineHeight: 1.6, marginBottom: "2.5rem", maxWidth: 480 }}>
              Atuação especializada em Direito do Passageiro Aéreo, com análise individualizada, atenção aos detalhes e compromisso com a proteção dos seus direitos.
            </p>

            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--lex-gold)", letterSpacing: "0.1em", marginBottom: "1.25rem" }}>
              5 MOTIVOS PARA ESCOLHER A LEXAERO
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "3rem", maxWidth: 500 }}>
              {[
                { icon: ICONS.scale, title: "Análise inicial rápida e eficiente", desc: "Avaliação da sua situação em até 2 minutos, sem compromisso." },
                { icon: ICONS.document, title: "Baixo custo", desc: "Pagamento de honorários advocatícios no fim do processo. Condições facilitadas." },
                { icon: ICONS.user, title: "Acompanhamento próximo", desc: "Comunicação clara, suporte humano e atualização em cada etapa." },
                { icon: ICONS.plane, title: "Especialistas no que fazemos", desc: "Foco em atrasos, cancelamentos, overbooking, bagagem e conexões." },
                { icon: ICONS.shield, title: "Compromisso com resultados", desc: "Atuação técnica, ética e transparente em defesa dos seus direitos." }
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid rgba(245,158,11,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "var(--lex-gold)" }}>
                    <div style={{ transform: "scale(0.85)" }}>{item.icon}</div>
                  </div>
                  <div>
                    <strong style={{ fontSize: "0.95rem", color: "#fff", display: "block", marginBottom: "0.2rem" }}>{item.title}</strong>
                    <span style={{ fontSize: "0.85rem", color: "#888", lineHeight: 1.4, display: "block" }}>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/diagnostico"
              style={{ display: "inline-flex", alignItems: "center", justifyContent: "space-between", gap: "2rem", border: "1px solid rgba(245,158,11,0.5)", borderRadius: 12, padding: "0.75rem 1rem", textDecoration: "none", minWidth: 280, transition: "border-color 0.2s" }}
            >
              <div>
                <strong style={{ display: "block", fontSize: "0.95rem", color: "#fff", marginBottom: "0.2rem" }}>Avaliar meu caso</strong>
                <span style={{ fontSize: "0.8rem", color: "#888" }}>Leva menos de 2 minutos</span>
              </div>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--lex-gold)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--lex-black)", flexShrink: 0 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6.5 3.5L5 16l-3.2-.8c-.4-.1-.8.2-1 .6L2 17l4.5 2.5L9 24l1.2-1.2c.4-.2.7-.6.6-1l-.8-3.2 4.5-4.5 3.5 6.5c.4.7 1.2.9 1.8.7l.8-.8c.4-.4.6-.9.5-1.4z"></path></svg>
              </div>
            </Link>
          </div>

          {/* Right Column / Image */}
          <div style={{ flex: "1 1 min(100%, 400px)", position: "relative", minHeight: 500 }}>
            <div style={{ position: "absolute", inset: 0, borderRadius: 16, overflow: "hidden" }}>
              <img src="/img_hero2.png" alt="Estratégia Jurídica LexAero" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.5rem", background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }}>
                <div style={{ background: "rgba(10,10,10,0.9)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "1.25rem", display: "flex", gap: "1rem", alignItems: "center" }}>
                  <span style={{ color: "var(--lex-gold)" }}>{ICONS.shield}</span>
                  <p style={{ fontSize: "0.85rem", color: "#ccc", margin: 0, lineHeight: 1.5 }}>
                    Avalie gratuitamente sua situação e descubra se você tem direito a uma <strong style={{ color: "var(--lex-gold)", fontWeight: 700 }}>indenização por problemas com voo.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* ── FAIXA BEGE INFERIOR ── */}
      <section style={{ background: "#fdf8ed", padding: "1.5rem", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", flexWrap: "wrap" }}>
        <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 32, height: 32, borderRadius: "50%", border: "2px solid var(--lex-black)" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        </span>
        <span style={{ fontSize: "1.25rem", color: "var(--lex-black)" }}>
          Você teve prejuízos ? Podemos te ajudar! Não perca tempo, <strong style={{ color: "var(--lex-gold)", fontWeight: 700 }}>fale conosco agora!</strong>
        </span>
        <a href="https://wa.me/553183259594" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", color: "#25D366", transform: "scale(1.2)" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        </a>
      </section>
    </>
  );
}
