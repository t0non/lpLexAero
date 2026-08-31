"use client";
import { useState, useEffect } from "react";

const TOTAL_STEPS = 6;

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
const C = {
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

export default function DiagnosticForm({ initialProblem = null, isEmbedded = false }) {
  const [step,        setStep]        = useState(initialProblem ? 2 : 1);
  const [multi,       setMulti]       = useState([]);
  const [formData,    setFormData]    = useState({
    problem: initialProblem || "",
    period: "", detail: "", assistance: "", impacts: [], documents: [],
  });

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [loadPct,     setLoadPct]     = useState(0);
  const [showResult,  setShowResult]  = useState(false);

  useEffect(() => {
    if (step > TOTAL_STEPS && !showResult) {
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
  const goMulti = (f)    => { setFormData(d => ({ ...d, [f]: multi })); setMulti([]); setStep(s => s + 1); };
  const toggle  = (v)    => setMulti(m => m.includes(v) ? m.filter(x => x !== v) : [...m, v]);

  const stepPct  = Math.min(100, ((step - 1) / TOTAL_STEPS) * 100);
  const barW     = stepPct + "%";
  const loadBarW = loadPct + "%";
  const step3    = STEP3_OPTIONS[formData.problem] || { q: "Descreva o ocorrido:", opts: [] };

  const sendWA = () => {
    const txt =
      "Olá! Fiz o diagnóstico no site LexAero.\n\n"
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
  const Opt = ({ label, icon, onClick, sel }) => (
    <button onClick={onClick} style={{
      display: "flex", alignItems: "center", gap: "0.85rem",
      background: sel ? C.goldBg : C.surface,
      border: "1.5px solid " + (sel ? C.gold : C.border),
      borderRadius: 12, padding: "0.9rem 1.1rem",
      color: C.text, cursor: "pointer", width: "100%", textAlign: "left",
      fontSize: "0.9rem", fontWeight: 500, transition: "all 0.18s",
      boxShadow: sel ? "0 0 0 3px " + C.goldBg : "none",
    }}>
      {icon && (
        <img src={icon} alt="" width={30} height={30} style={{ objectFit: "contain", flexShrink: 0 }} />
      )}
      <span style={{ flex: 1 }}>{label}</span>
      {sel && (
        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="2.5">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      )}
    </button>
  );

  /* ── checkbox option ── */
  const ChkOpt = ({ label, onClick, checked }) => (
    <button onClick={onClick} style={{
      display: "flex", alignItems: "center", gap: "0.8rem",
      background: checked ? C.goldBg : C.surface,
      border: "1.5px solid " + (checked ? C.gold : C.border),
      borderRadius: 10, padding: "0.8rem 1rem",
      color: C.text, cursor: "pointer", width: "100%", textAlign: "left",
      fontSize: "0.85rem", fontWeight: 500, transition: "all 0.18s",
    }}>
      <span style={{
        width: 20, height: 20, borderRadius: 5, flexShrink: 0,
        border: "1.5px solid " + (checked ? C.gold : "#d1d5db"),
        background: checked ? C.gold : "transparent",
        display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.15s",
      }}>
        {checked && (
          <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        )}
      </span>
      {label}
    </button>
  );

  /* ── back button ── */
  const BackBtn = ({ to }) => (
    <button onClick={() => setStep(to)} style={{
      background: "transparent", border: "none", color: C.textMuted,
      fontSize: "0.85rem", cursor: "pointer", marginTop: "1.25rem",
      display: "flex", alignItems: "center", gap: "0.4rem", padding: 0,
    }}>
      <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
      Voltar
    </button>
  );

  /* ── gold CTA button ── */
  const GoldBtn = ({ children, onClick }) => (
    <button onClick={onClick} style={{
      display: "flex", alignItems: "center", justifyContent: "center",
      width: "100%", marginTop: "1.5rem", padding: "1rem",
      background: C.gold, color: "#000", border: "none",
      borderRadius: 12, fontSize: "1rem", fontWeight: 700, cursor: "pointer",
      boxShadow: "0 4px 16px rgba(252,189,38,0.35)", transition: "transform 0.15s",
    }}>
      {children}
    </button>
  );

  const cardStyle = {
    width: "100%", maxWidth: 560,
    background: C.surface,
    border: "1px solid " + C.border,
    borderRadius: 20, padding: "2.25rem 2rem",
    boxShadow: "0 8px 40px rgba(0,0,0,0.07)",
  };

  /* ── RESULT ── */
  if (showResult) {
    return (
      <div style={{ width: "100%", display: "flex", justifyContent: "center", animation: "fade-in 0.5s ease-out" }}>
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes pulse-wa {
            0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
            70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
            100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
          }
          @keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
          .voucher {
            background: linear-gradient(135deg, #fffbee 0%, #fff 100%);
            border: 2px dashed #e0a820;
            position: relative;
          }
          .voucher::before, .voucher::after {
            content: ''; position: absolute; top: 50%; width: 20px; height: 20px; background: #fff; border-radius: 50%; transform: translateY(-50%); border: 1px solid #e5e7eb;
          }
          .voucher::before { left: -11px; border-right-color: transparent; border-top-color: transparent; transform: translateY(-50%) rotate(45deg); }
          .voucher::after { right: -11px; border-left-color: transparent; border-bottom-color: transparent; transform: translateY(-50%) rotate(45deg); }
        `}} />
        <div style={{ ...cardStyle, textAlign: "center", padding: "3rem 2.5rem", position: "relative", overflow: "hidden" }}>
          
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 64, height: 64, background: C.greenBg, borderRadius: "50%", boxShadow: "0 0 0 8px rgba(22, 163, 74, 0.1)" }}>
              <svg width={32} height={32} viewBox="0 0 24 24" fill="none" stroke={C.green} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
          </div>
          
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, margin: "0 0 0.5rem", color: C.text, letterSpacing: "-0.02em" }}>
            Seu caso tem <span style={{ color: C.green }}>alto potencial!</span>
          </h2>
          <p style={{ color: C.textMuted, marginBottom: "2rem", lineHeight: 1.6, fontSize: "1rem" }}>
            Cruzamos suas respostas com a <strong>Resolução 400 da ANAC</strong> e identificamos fortes indícios de elegibilidade.
          </p>
          
          <div className="voucher" style={{ borderRadius: 16, padding: "2rem 1.5rem", marginBottom: "2.5rem", boxShadow: "0 10px 25px rgba(252,189,38,0.12)" }}>
            <div style={{ fontSize: "0.85rem", color: "#8a6800", textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: 800, marginBottom: "0.5rem" }}>
              Estimativa de Indenização
            </div>
            
            <div style={{ fontSize: "3.5rem", fontWeight: 900, color: "#b8860b", lineHeight: 1, textShadow: "0 2px 10px rgba(184, 134, 11, 0.15)" }}>
              <span style={{ fontSize: "1.5rem", verticalAlign: "middle", marginRight: "0.2rem" }}>R$</span>3.000
            </div>
            <div style={{ fontSize: "1.05rem", color: "#8a6800", marginTop: "0.5rem", fontWeight: 600 }}>
              podendo chegar a <strong style={{ color: C.text, fontSize: "1.15rem" }}>R$ 15.000</strong>
            </div>
          </div>
          
          <p style={{ fontSize: "0.95rem", color: C.text, fontWeight: 700, marginBottom: "1.25rem" }}>
            Especialista disponível agora para confirmar seu valor:
          </p>
          
          <button onClick={sendWA} style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem",
            width: "100%", padding: "1.25rem",
            background: "#25D366", color: "#fff", border: "none", borderRadius: 14,
            fontSize: "1.1rem", fontWeight: 800, cursor: "pointer",
            boxShadow: "0 6px 20px rgba(37,211,102,0.3)", transition: "transform 0.2s",
            animation: "pulse-wa 2s infinite"
          }} onMouseOver={e => e.currentTarget.style.transform = "scale(1.03)"} onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}>
            <svg width={26} height={26} viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            Falar com a Dra. Kareline no WhatsApp
          </button>
          
          <div style={{ marginTop: "1.25rem", color: C.textMuted, fontSize: "0.85rem", fontWeight: 500 }}>
            Seus dados estão seguros.
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

      {/* Progress */}
      <div style={{ width: "100%", maxWidth: 560, marginBottom: "1.25rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.4rem", fontSize: "0.8rem", color: C.textMuted }}>
          <span style={{ fontWeight: 600 }}>Etapa {step} de {TOTAL_STEPS}</span>
          <span style={{ fontWeight: 600 }}>{Math.round(stepPct)}%</span>
        </div>
        <div style={{ background: C.border, borderRadius: 6, height: 6, overflow: "hidden" }}>
          <div style={{ height: "100%", background: C.gold, width: barW, transition: "width 0.4s ease", borderRadius: 6 }} />
        </div>
      </div>

      {/* Card */}
      <div style={cardStyle}>

        {step === 1 && (
          <div>
            <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.4rem", color: C.text }}>
              Qual problema você enfrentou com o voo?
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem" }}>
              {PROBLEM_OPTS.map(o => (
                <Opt key={o.label} label={o.label} icon={o.icon} sel={formData.problem === o.label} onClick={() => go("problem", o.label)} />
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.4rem", color: C.text }}>Quando aconteceu o problema?</h2>
            <p style={{ fontSize: "0.85rem", color: "#b8860b", marginBottom: "1.5rem", fontWeight: 500 }}>
              Atenção: o prazo para reclamar pode estar se esgotando.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {["Nos últimos 7 dias", "Nos últimos 30 dias", "Há alguns meses", "Há mais tempo", "Não sei precisar"].map(o => (
                <Opt key={o} label={o} sel={formData.period === o} onClick={() => go("period", o)} />
              ))}
            </div>
            <BackBtn to={1} />
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.4rem", color: C.text }}>{step3.q}</h2>
            <p style={{ fontSize: "0.85rem", color: C.textMuted, marginBottom: "1.5rem" }}>Detalhes ajudam a calcular o potencial de indenização.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {step3.opts.map(o => (
                <Opt key={o} label={o} sel={formData.detail === o} onClick={() => go("detail", o)} />
              ))}
            </div>
            <BackBtn to={2} />
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.4rem", color: C.text }}>A companhia ofereceu alguma Assistência?</h2>
            <p style={{ fontSize: "0.85rem", color: C.textMuted, marginBottom: "1.5rem" }}>Alimentação, hotel, transporte, remarcacao...</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {["Sim, ofereceu tudo adequadamente", "Sim, mas de forma parcial ou insuficiente", "Não ofereceu nada", "Não sei informar"].map(o => (
                <Opt key={o} label={o} sel={formData.assistance === o} onClick={() => go("assistance", o)} />
              ))}
            </div>
            <BackBtn to={3} />
          </div>
        )}

        {step === 5 && (
          <div>
            <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.4rem", color: C.text }}>Houve impactos ou prejuízos adicionais?</h2>
            <p style={{ fontSize: "0.85rem", color: C.textMuted, marginBottom: "1.5rem" }}>Selecione todas as opções que se aplicam.</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.65rem" }}>
              {["Perdi compromisso importante", "Gastos com Alimentação", "Gastos com hotel", "Gastos com transporte", "Perdi outra conexão", "Bagagem afetada", "Outro impacto", "Nenhum"].map(o => (
                <ChkOpt key={o} label={o} checked={multi.includes(o)} onClick={() => toggle(o)} />
              ))}
            </div>
            <GoldBtn onClick={() => goMulti("impacts")}>Continuar</GoldBtn>
            <BackBtn to={4} />
          </div>
        )}

        {step === 6 && (
          <div>
            <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.4rem", color: C.text }}>você possui documentos do ocorrido?</h2>
            <p style={{ fontSize: "0.85rem", color: C.textMuted, marginBottom: "1.5rem" }}>Selecione o que tiver — qualquer coisa ajuda.</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.65rem" }}>
              {["Cartão de embarque", "Comprovante de reserva", "E-mails da companhia", "Fotografias", "Comprovantes de gastos", "Protocolos de atendimento", "Declaração de atraso", "Não tenho documentos"].map(o => (
                <ChkOpt key={o} label={o} checked={multi.includes(o)} onClick={() => toggle(o)} />
              ))}
            </div>
            <GoldBtn onClick={() => goMulti("documents")}>Finalizar Análise</GoldBtn>
            <BackBtn to={5} />
          </div>
        )}

      </div>

      {/* Disclaimer */}
      <div style={{ marginTop: "1.5rem", fontSize: "0.78rem", color: C.textMuted, textAlign: "center", maxWidth: 520 }}>
        <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke={C.gold} strokeWidth="2" style={{ verticalAlign: "middle", marginRight: 4 }}>
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
          <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
        <strong style={{ color: "#8a6800" }}>Aviso legal:</strong>{" "}
        Ferramenta orientativa baseada em jurisprudência. Análise definitiva feita por especialista.
      </div>
    </div>
  );
}