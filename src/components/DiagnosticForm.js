"use client";
import { useState, useEffect } from "react";

const TOTAL_STEPS = 7;

const STEP3_OPTIONS = {
  "Voo Atrasado ou Cancelado": {
    q: "Quanto tempo seu voo atrasou ou quando soube do cancelamento?",
    opts: ["Menos de 2 horas", "Entre 2 e 4 horas", "Mais de 4 horas", "Cancelado no aeroporto", "Cancelado com antecedência", "Não sei informar"],
  },
  "Bagagem Extraviada": {
    q: "Qual foi o problema com sua bagagem?",
    opts: ["Bagagem extraviada (Não chegou)", "Bagagem danificada", "Bagagem violada", "Atraso na entrega"],
  },
  "Overbooking": {
    q: "O que a companhia ofereceu no momento?",
    opts: ["Ofereceu reacomodação imediata", "Pagou compensação financeira", "Não ofereceu nada", "Ainda estou tentando resolver"],
  },
  "conexão Perdida": {
    q: "Por que você perdeu a conexão?",
    opts: ["Atraso no voo anterior", "Cancelamento no voo anterior", "Demora na alfândega", "Outra razão"],
  },
};

const PROBLEM_OPTS = [
  { label: "Voo Atrasado ou Cancelado", icon: "/icone-voo-atrasado.png" },
  { label: "Bagagem Extraviada",         icon: "/icone-bagagem.png" },
  { label: "Overbooking",                icon: "/icone-overbooking.png" },
  { label: "Conexão Perdida",            icon: "/icone-perda-conexao.png" },
];

/* ── colour tokens ── */
const LIGHT = {
  gold:        "#FCBD26",
  goldHover:   "#e0a820",
  goldBg:      "#FFFBEE",
  goldBorder:  "rgba(252,189,38,0.4)",
  text:        "#1a1a1a",
  textMuted:   "#6b7280",
  surface:     "#ffffff",
  bg:          "#f8f7f4",
  border:      "#e5e7eb",
  green:       "#16a34a",
  greenBg:     "#dcfce7",
};

const DARK = {
  gold:        "#FCBD26",
  goldHover:   "#e0a820",
  goldBg:      "rgba(252,189,38,0.1)",
  goldBorder:  "rgba(252,189,38,0.3)",
  text:        "#ffffff",
  textMuted:   "rgba(255,255,255,0.55)",
  surface:     "rgba(255,255,255,0.05)",
  bg:          "transparent",
  border:      "rgba(255,255,255,0.12)",
  green:       "#22c55e",
  greenBg:     "rgba(34,197,94,0.15)",
};

export default function DiagnosticForm({ initialProblem = null, isEmbedded = false }) {
  const C = LIGHT; // always light/white card — embedded uses white card over dark background
  const [step,        setStep]        = useState(initialProblem ? 2 : 1);
  const [multi,       setMulti]       = useState([]);
  const [formData,    setFormData]    = useState({
    problem: initialProblem || "",
    period: "", detail: "", assistance: "", impacts: [], documents: [],
  });
  const [leadData,    setLeadData]    = useState({ nome: "", telefone: "", email: "" });
  const [leadError,   setLeadError]   = useState("");

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [loadPct,     setLoadPct]     = useState(0);
  const [showResult,  setShowResult]  = useState(false);

  useEffect(() => {
    if (step > 7 && !showResult) {
      setIsAnalyzing(true);
      const t = setInterval(() => {
        setLoadPct(p => {
          const n = p + 2;
          if (n >= 100) { clearInterval(t); setIsAnalyzing(false); setShowResult(true); return 100; }
          return n;
        });
      }, 80);
      return () => clearInterval(t);
    }
  }, [step, showResult]);

  const go      = (f, v) => { setFormData(d => ({ ...d, [f]: v })); setStep(s => s + 1); };
  const setField = (f, v) => setFormData(d => ({ ...d, [f]: v }));
  const goNext   = () => setStep(s => s + 1);
  const goMulti = (f)    => { setFormData(d => ({ ...d, [f]: multi })); setMulti([]); setStep(7); };
  const toggle  = (v)    => setMulti(m => m.includes(v) ? m.filter(x => x !== v) : [...m, v]);

  const submitLead = () => {
    const { nome, telefone } = leadData;
    if (!nome.trim() || !telefone.trim()) {
      setLeadError("Por favor, preencha seu nome e telefone para ver seu resultado.");
      return;
    }
    setLeadError("");
    setStep(8); // triggers analyzing
  };

  const stepPct  = Math.min(100, ((step - 1) / TOTAL_STEPS) * 100);
  const barW     = stepPct + "%";
  const loadBarW = loadPct + "%";
  const step3    = STEP3_OPTIONS[formData.problem] || { q: "Descreva o ocorrido:", opts: [] };

  const sendWA = () => {
    const txt =
      "Olá! Fiz o diagnóstico no site LexAero.\n\n"
      + "Nome: "        + leadData.nome       + "\n"
      + "Telefone: "    + leadData.telefone   + "\n\n"
      + "Problema: "    + formData.problem    + "\n"
      + "Quando: "      + formData.period     + "\n"
      + "Detalhes: "    + formData.detail     + "\n"
      + "Assistência: " + formData.assistance + "\n"
      + "Impactos: "    + (formData.impacts.join(", ")   || "Nenhum") + "\n"
      + "Documentos: "  + (formData.documents.join(", ") || "Nenhum") + "\n\n"
      + "Gostaria de falar com um especialista!";
    window.open("https://wa.me/5511999999999?text=" + encodeURIComponent(txt), "_blank");
  };

  /* ── shared option component ── */
  const Opt = ({ label, onClick, sel }) => (
    <button onClick={onClick} className={`diag-opt ${sel ? 'sel' : ''}`} style={{
      display: "flex", alignItems: "center", padding: "0.75rem 1rem",
      border: "1px solid " + (sel ? "var(--lex-gold)" : "var(--lex-border-light)"),
      borderRadius: "10px", cursor: "pointer", transition: "all 0.2s ease",
      background: sel ? "var(--lex-gold-bg)" : "var(--lex-white)", margin: 0, width: "100%", textAlign: "left"
    }}>
      <div className="diag-radio-inner" style={{ 
        width: "18px", height: "18px", borderRadius: "50%", 
        border: "2px solid " + (sel ? "var(--lex-gold)" : "var(--lex-border-mid)"), 
        marginRight: "0.75rem", position: "relative", transition: "all 0.2s ease", flexShrink: 0
      }}>
        {sel && <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "8px", height: "8px", background: "var(--lex-gold)", borderRadius: "50%" }}></div>}
      </div>
      <span style={{ color: "var(--lex-graphite)", fontSize: "0.9rem", fontWeight: 400, flex: 1 }}>{label}</span>
    </button>
  );

  /* ── checkbox option ── */
  const ChkOpt = ({ label, checked, onClick }) => (
    <button onClick={onClick} className={`diag-opt ${checked ? 'sel' : ''}`} style={{
      display: "flex", alignItems: "center", padding: "0.75rem 1rem",
      border: "1px solid " + (checked ? "var(--lex-gold)" : "var(--lex-border-light)"),
      borderRadius: "10px", cursor: "pointer", transition: "all 0.2s ease",
      background: checked ? "var(--lex-gold-bg)" : "var(--lex-white)", margin: 0, width: "100%", textAlign: "left"
    }}>
      <div style={{
        width: 18, height: 18, borderRadius: "4px", border: "2px solid " + (checked ? "var(--lex-gold)" : "var(--lex-border-mid)"),
        background: checked ? "var(--lex-gold)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center",
        marginRight: "0.75rem", transition: "all 0.2s ease", flexShrink: 0
      }}>
        {checked && (
          <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        )}
      </div>
      <span style={{ color: "var(--lex-graphite)", fontSize: "0.9rem", fontWeight: 400, flex: 1 }}>{label}</span>
    </button>
  );

  /* ── back button ── */
  const BackBtn = ({ to }) => (
    <button onClick={() => setStep(to)} style={{
      background: "transparent", border: "none", color: "var(--lex-text-muted)",
      fontSize: "0.85rem", cursor: "pointer", marginTop: "1rem",
      display: "flex", alignItems: "center", gap: "0.4rem", padding: 0,
      width: "100%", justifyContent: "center"
    }}>
      <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
      Voltar
    </button>
  );

  /* ── footer text ── */
  const StepFooter = () => (
    <div style={{ textAlign: "center", marginTop: "0.75rem" }}>
      <span style={{ color: "var(--lex-text-muted)", fontSize: "0.75rem", display: "block" }}>
        Leva menos de 2 minutos • Análise inicial gratuita
      </span>
    </div>
  );

  /* ── gold CTA button ── */
  const GoldBtn = ({ children, onClick, disabled }) => (
    <button onClick={onClick} disabled={disabled} className="btn btn--primary" style={{ 
      width: "100%", padding: "1rem", fontSize: "1rem", justifyContent: "center", marginTop: "1rem", 
      background: disabled ? "#f3f4f6" : "var(--lex-gold)", 
      color: disabled ? "#9ca3af" : "#111827",
      cursor: disabled ? "not-allowed" : "pointer",
      boxShadow: disabled ? "none" : undefined
    }}>
      {children}
    </button>
  );

  const cardStyle = {
    width: "100%", maxWidth: 460,
    background: isEmbedded ? "transparent" : "var(--lex-white)",
    borderRadius: isEmbedded ? "0" : "20px", 
    padding: isEmbedded ? "0" : "2rem", 
    boxShadow: isEmbedded ? "none" : "0 20px 40px rgba(0,0,0,0.1)",
    border: isEmbedded ? "none" : "1px solid var(--lex-border-light)"
  };

  /* ── RESULT ── */
  if (showResult) {
    const waPath = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z";
    return (
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes r-in { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
          @keyframes wa-ring { 0%,100% { box-shadow:0 0 0 0 rgba(37,211,102,0.3); } 55% { box-shadow:0 0 0 8px rgba(37,211,102,0); } }
          .diag-opt:hover:not(.sel) { border-color:#cbd5e1!important; background:#f8fafc!important; transform:translateY(-2px); box-shadow:0 4px 12px rgba(0,0,0,0.05)!important; }
          .diag-opt:active { transform:translateY(0) scale(0.98); }
          .r-card { animation: r-in 0.45s cubic-bezier(0.4,0,0.2,1); }
          .r-wa { transition: opacity .18s, transform .18s; }
          .r-wa:hover { opacity:.88; transform:translateY(-1px); }
          .r-wa:active { transform:scale(0.98); }
        `}} />

        <div className="r-card" style={{
          width: "100%", maxWidth: 460,
          animation: "r-in 0.45s cubic-bezier(0.4,0,0.2,1)",
        }}>

          <div style={{ padding: "0.5rem 0" }}>

            {/* Perfil */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", marginBottom: "1.5rem" }}>
              <div style={{
                width: 48, height: 48, borderRadius: "50%", flexShrink: 0,
                overflow: "hidden", border: "1.5px solid #FCBD26", background: "#000"
              }}>
                <img src="/kareline-hero-confianca.png" alt="Dra. Kareline" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
              </div>
              <div>
                <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#111827" }}>Dra. Kareline Staut</div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", marginTop: "0.2rem" }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e" }} />
                  <span style={{ fontSize: "0.72rem", color: "#22c55e", fontWeight: 600 }}>Disponível agora</span>
                </div>
              </div>
            </div>

            {/* Mensagem */}
            <p style={{ fontSize: "0.9rem", color: "#374151", lineHeight: 1.65, margin: "0 0 1.5rem" }}>
              {leadData.nome.split(" ")[0]}, seu caso tem <strong style={{ color: "#111827" }}>boas chances de indenização</strong>. Casos com perfil similar ao seu costumam resultar em valores entre <strong style={{ color: "#b45309" }}>R$ 3.000 e R$ 15.000</strong>. Posso analisar melhor os detalhes com você.
            </p>

            {/* CTA */}
            <button className="r-wa" onClick={sendWA} style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: "0.55rem",
              width: "100%", padding: "0.9rem",
              background: "#25D366", color: "#fff", border: "none",
              borderRadius: 12, fontSize: "0.95rem", fontWeight: 700, cursor: "pointer",
              animation: "wa-ring 2.5s ease infinite",
            }}>
              <svg width={19} height={19} viewBox="0 0 24 24" fill="currentColor"><path d={waPath} /></svg>
              Falar com a Dra. Kareline
            </button>

          </div>
        </div>
      </div>
    );
  }

  /* ── ANALYZING ── */
  if (isAnalyzing) {
    return (
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div style={{ ...cardStyle, textAlign: "center" }}>
          <style dangerouslySetInnerHTML={{ __html: "@keyframes diag-spin { to { transform: rotate(360deg); } }" }} />
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
            <div style={{
              width: 56, height: 56,
              border: "4px solid " + C.border,
              borderTopColor: C.gold,
              borderRadius: "50%",
              animation: "diag-spin 0.8s linear infinite",
            }} />
          </div>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.5rem", color: C.text }}>
            Analisando seu caso...
          </h2>
          <p style={{ color: C.textMuted, marginBottom: "2rem", lineHeight: 1.6, fontSize: "0.9rem" }}>
            Cruzando suas respostas com a Resolução 400 ANAC e o Código de Defesa do Consumidor.
          </p>
          <div style={{ background: C.border, borderRadius: 8, height: 8, overflow: "hidden", marginBottom: "0.75rem" }}>
            <div style={{ height: "100%", background: C.gold, width: loadBarW, transition: "width 0.1s linear", borderRadius: 8 }} />
          </div>
          <div style={{ fontSize: "0.85rem", color: C.gold, fontWeight: 700 }}>{loadPct}%</div>
        </div>
      </div>
    );
  }

  /* ── MAIN FORM ── */
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>

      {/* Header (only on standalone page) */}
      {!isEmbedded && (
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>

          <h1 style={{ fontSize: "clamp(1.5rem,4vw,2rem)", fontWeight: 800, color: C.text, margin: "0 0 0.25rem" }}>
            Descubra quanto você pode <span style={{ color: C.gold }}>ganhar!</span>
          </h1>
          <p style={{ color: C.textMuted, fontSize: "0.95rem", margin: 0 }}>Leva menos de 2 minutos. Sem cadastro.</p>
        </div>
      )}

      {/* Card */}
      <div style={cardStyle}>
        
        {/* Progress header inside card */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
          <span style={{ color: "var(--lex-graphite)", fontWeight: 600, fontSize: "0.9rem" }}>Análise do seu voo</span>
          <span style={{ color: "var(--lex-text-muted)", fontSize: "0.8rem", fontWeight: 500 }}>Etapa {step} de {TOTAL_STEPS}</span>
        </div>
        
        <div style={{ width: "100%", height: "4px", background: "var(--lex-border-light)", borderRadius: "4px", marginBottom: "2rem", overflow: "hidden" }}>
          <div style={{ width: barW, height: "100%", background: "var(--lex-gold)", borderRadius: "4px", transition: "width 0.4s ease" }}></div>
        </div>

        {step === 1 && (
          <div>
            <h3 style={{ color: "var(--lex-black)", fontSize: "1.2rem", fontWeight: 500, marginBottom: "1.25rem" }}>
              Qual problema você enfrentou com o voo?
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
              {PROBLEM_OPTS.map(o => (
                <Opt key={o.label} label={o.label} sel={formData.problem === o.label} onClick={() => setField("problem", o.label)} />
              ))}
            </div>
            
            <GoldBtn onClick={goNext} disabled={!formData.problem}>Continuar</GoldBtn>
            <StepFooter />
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 style={{ color: "var(--lex-black)", fontSize: "1.2rem", fontWeight: 500, marginBottom: "0.25rem" }}>Quando aconteceu o problema?</h3>
            <p style={{ fontSize: "0.85rem", color: "#b8860b", marginBottom: "1.25rem", fontWeight: 500 }}>
              Atenção: o prazo para reclamar pode estar se esgotando.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
              {["Nos últimos 7 dias", "Nos últimos 30 dias", "Há alguns meses", "Há mais tempo", "Não sei precisar"].map(o => (
                <Opt key={o} label={o} sel={formData.period === o} onClick={() => setField("period", o)} />
              ))}
            </div>
            <GoldBtn onClick={goNext} disabled={!formData.period}>Continuar</GoldBtn>
            <BackBtn to={1} />
            <StepFooter />
          </div>
        )}

        {step === 3 && (
          <div>
            <h3 style={{ color: "var(--lex-black)", fontSize: "1.2rem", fontWeight: 500, marginBottom: "0.25rem" }}>{step3.q}</h3>
            <p style={{ fontSize: "0.85rem", color: "var(--lex-text-muted)", marginBottom: "1.25rem" }}>Detalhes ajudam a calcular o potencial de indenização.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
              {step3.opts.map(o => (
                <Opt key={o} label={o} sel={formData.detail === o} onClick={() => setField("detail", o)} />
              ))}
            </div>
            <GoldBtn onClick={goNext} disabled={!formData.detail}>Continuar</GoldBtn>
            <BackBtn to={2} />
            <StepFooter />
          </div>
        )}

        {step === 4 && (
          <div>
            <h3 style={{ color: "var(--lex-black)", fontSize: "1.2rem", fontWeight: 500, marginBottom: "0.25rem" }}>A companhia ofereceu alguma Assistência?</h3>
            <p style={{ fontSize: "0.85rem", color: "var(--lex-text-muted)", marginBottom: "1.25rem" }}>Alimentação, hotel, transporte, remarcação...</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
              {["Sim, ofereceu tudo adequadamente", "Sim, mas de forma parcial ou insuficiente", "Não ofereceu nada", "Não sei informar"].map(o => (
                <Opt key={o} label={o} sel={formData.assistance === o} onClick={() => setField("assistance", o)} />
              ))}
            </div>
            <GoldBtn onClick={goNext} disabled={!formData.assistance}>Continuar</GoldBtn>
            <BackBtn to={3} />
            <StepFooter />
          </div>
        )}

        {step === 5 && (
          <div>
            <h3 style={{ color: "var(--lex-black)", fontSize: "1.2rem", fontWeight: 500, marginBottom: "0.25rem" }}>Houve impactos ou prejuízos adicionais?</h3>
            <p style={{ fontSize: "0.85rem", color: "var(--lex-text-muted)", marginBottom: "1.25rem" }}>Selecione todas as opções que se aplicam.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem", maxHeight: "240px", overflowY: "auto", paddingRight: "0.5rem" }}>
              {["Perdi compromisso importante", "Gastos com Alimentação", "Gastos com hotel", "Gastos com transporte", "Perdi outra conexão", "Bagagem afetada", "Outro impacto", "Nenhum"].map(o => (
                <ChkOpt key={o} label={o} checked={multi.includes(o)} onClick={() => toggle(o)} />
              ))}
            </div>
            <GoldBtn onClick={() => goMulti("impacts")}>Continuar</GoldBtn>
            <BackBtn to={4} />
            <StepFooter />
          </div>
        )}

        {step === 6 && (
          <div>
            <h3 style={{ color: "var(--lex-black)", fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.25rem" }}>Você possui documentos do ocorrido?</h3>
            <p style={{ fontSize: "0.9rem", color: "var(--lex-text-muted)", marginBottom: "1.25rem" }}>Selecione o que tiver — qualquer coisa ajuda.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem", maxHeight: "240px", overflowY: "auto", paddingRight: "0.5rem" }}>
              {["Cartão de embarque", "Comprovante de reserva", "E-mails da companhia", "Fotografias", "Comprovantes de gastos", "Protocolos de atendimento", "Declaração de atraso", "Não tenho documentos"].map(o => (
                <ChkOpt key={o} label={o} checked={multi.includes(o)} onClick={() => toggle(o)} />
              ))}
            </div>
            <GoldBtn onClick={() => goMulti("documents")}>Finalizar Análise</GoldBtn>
            <BackBtn to={5} />
            <StepFooter />
          </div>
        )}

        {step === 7 && (
          <div>
            <style dangerouslySetInnerHTML={{ __html: `
              .lead-input {
                width: 100%;
                padding: 0.9rem 1.1rem;
                border: 2px solid var(--lex-border-light);
                border-radius: 12px;
                font-size: 0.95rem;
                outline: none;
                transition: border-color 0.2s;
                background: var(--lex-white);
                color: var(--lex-graphite);
              }
              .lead-input:focus { border-color: var(--lex-gold); }
            `}} />
            <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>

              <h3 style={{ color: "var(--lex-black)", fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.25rem" }}>
                Quase lá! Seu resultado está pronto.
              </h3>
              <p style={{ color: "var(--lex-text-muted)", fontSize: "0.9rem" }}>
                Para onde devemos enviar os detalhes da sua análise?
              </p>
            </div>

            {/* Campos */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, color: "#374151", marginBottom: "0.4rem", letterSpacing: "0.02em" }}>
                  Nome completo
                </label>
                <input
                  className="lead-input"
                  type="text"
                  placeholder="Seu nome"
                  value={leadData.nome}
                  onChange={e => setLeadData(d => ({ ...d, nome: e.target.value }))}
                  autoComplete="name"
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, color: "#374151", marginBottom: "0.4rem", letterSpacing: "0.02em" }}>
                  WhatsApp
                </label>
                <input
                  className="lead-input"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={leadData.telefone}
                  onChange={e => setLeadData(d => ({ ...d, telefone: e.target.value }))}
                  autoComplete="tel"
                />
              </div>
            </div>

            {/* Erro de validação */}
            {leadError && (
              <p style={{ color: "#dc2626", fontSize: "0.82rem", fontWeight: 600, marginTop: "0.75rem", marginBottom: 0, display: "flex", alignItems: "center", gap: "0.35rem" }}>
                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                {leadError}
              </p>
            )}

            {/* CTA */}
            <GoldBtn onClick={submitLead}>
              Ver meu resultado agora
              <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "0.4rem" }}>
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </GoldBtn>

            {/* Micro-copy de segurança */}
            <div style={{ textAlign: "center", marginTop: "0.9rem", fontSize: "0.78rem", color: "#9ca3af", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.35rem" }}>
              <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              Seus dados são 100% seguros e não serão compartilhados.
            </div>

            <BackBtn to={6} />
          </div>
        )}

      </div>

      {/* Disclaimer — only on standalone page */}
      {!isEmbedded && (
        <div style={{ marginTop: "1.5rem", fontSize: "0.78rem", color: C.textMuted, textAlign: "center", maxWidth: 520 }}>
          <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="2" style={{ verticalAlign: "middle", marginRight: 4 }}>
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          <strong style={{ color: "#8a6800" }}>Aviso legal:</strong>{" "}
          Ferramenta orientativa baseada em jurisprudência. Análise definitiva feita por especialista.
        </div>
      )}
    </div>
  );
}