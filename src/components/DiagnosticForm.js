"use client";
import { useState, useEffect } from "react";

const TOTAL_STEPS = 6;

const STEP3_OPTIONS = {
  "Voo Atrasado ou Cancelado": {
    q: "Quanto tempo seu voo atrasou ou quando soube do cancelamento?",
    opts: ["Menos de 2 horas", "Entre 2 e 4 horas", "Mais de 4 horas", "Cancelado no aeroporto", "Cancelado com antecedencia", "Nao sei informar"],
  },
  "Bagagem Extraviada": {
    q: "Qual foi o problema com sua bagagem?",
    opts: ["Bagagem extraviada (nao chegou)", "Bagagem danificada", "Bagagem violada", "Atraso na entrega"],
  },
  "Overbooking": {
    q: "O que a companhia ofereceu no momento?",
    opts: ["Ofereceu reacomodacao imediata", "Pagou compensacao financeira", "Nao ofereceu nada", "Ainda estou tentando resolver"],
  },
  "Conexao Perdida": {
    q: "Por que voce perdeu a conexao?",
    opts: ["Atraso no voo anterior", "Cancelamento no voo anterior", "Demora na alfandega", "Outra razao"],
  },
};

const PROBLEM_OPTS = [
  { label: "Voo Atrasado ou Cancelado", icon: "/icone-voo-atrasado.png" },
  { label: "Bagagem Extraviada",         icon: "/icone-bagagem.png" },
  { label: "Overbooking",                icon: "/icone-overbooking.png" },
  { label: "Conexao Perdida",            icon: "/icone-perda-conexao.png" },
];

export default function DiagnosticForm({ initialProblem = null, isEmbedded = false }) {
  const [step,        setStep]        = useState(initialProblem ? 2 : 1);
  const [multi,       setMulti]       = useState([]);
  const [timeLeft,    setTimeLeft]    = useState(119);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [loadPct,     setLoadPct]     = useState(0);
  const [showResult,  setShowResult]  = useState(false);
  const [formData,    setFormData]    = useState({
    problem: initialProblem || "",
    period: "", detail: "", assistance: "", impacts: [], documents: [],
  });

  useEffect(() => {
    if (step <= TOTAL_STEPS && !showResult) {
      const t = setInterval(() => setTimeLeft(p => Math.max(0, p - 1)), 1000);
      return () => clearInterval(t);
    }
  }, [step, showResult]);

  useEffect(() => {
    if (step > TOTAL_STEPS && !showResult && !isAnalyzing) {
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
  }, [step, showResult, isAnalyzing]);

  const go      = (f, v) => { setFormData(d => ({ ...d, [f]: v })); setStep(s => s + 1); };
  const goMulti = (f)    => { setFormData(d => ({ ...d, [f]: multi })); setMulti([]); setStep(s => s + 1); };
  const toggle  = (v)    => setMulti(m => m.includes(v) ? m.filter(x => x !== v) : [...m, v]);
  const fmt     = (s)    => Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");

  const stepPct  = Math.min(100, ((step - 1) / TOTAL_STEPS) * 100);
  const barW     = stepPct + "%";
  const loadBarW = loadPct + "%";
  const step3    = STEP3_OPTIONS[formData.problem] || { q: "Descreva o ocorrido:", opts: [] };

  const sendWA = () => {
    const txt =
      "Ola! Fiz o diagnostico no site LexAero.\n\n"
      + "Problema: "    + formData.problem   + "\n"
      + "Quando: "      + formData.period    + "\n"
      + "Detalhes: "    + formData.detail    + "\n"
      + "Assistencia: " + formData.assistance + "\n"
      + "Impactos: "    + (formData.impacts.join(", ")   || "Nenhum") + "\n"
      + "Documentos: "  + (formData.documents.join(", ") || "Nenhum") + "\n\n"
      + "Gostaria de falar com um especialista!";
    window.open("https://wa.me/5511999999999?text=" + encodeURIComponent(txt), "_blank");
  };

  const Opt = ({ label, icon, onClick, sel }) => (
    <button
      onClick={onClick}
      style={{
        display: "flex", alignItems: "center", gap: "0.85rem",
        background: sel ? "rgba(252,189,38,0.12)" : "rgba(255,255,255,0.04)",
        border: sel ? "1.5px solid #FCBD26" : "1.5px solid rgba(255,255,255,0.1)",
        borderRadius: "12px", padding: "1rem 1.25rem",
        color: "#fff", cursor: "pointer", width: "100%", textAlign: "left",
        fontSize: "0.95rem", fontWeight: 500, transition: "all 0.2s",
      }}
    >
      {icon && (
        <span style={{
          width: 42, height: 42, flexShrink: 0,
          background: sel ? "rgba(252,189,38,0.2)" : "rgba(255,255,255,0.08)",
          borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <img src={icon} alt="" width={26} height={26} style={{ objectFit: "contain" }} />
        </span>
      )}
      <span style={{ flex: 1 }}>{label}</span>
      {sel && (
        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#FCBD26" strokeWidth="2.5">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      )}
    </button>
  );

  const ChkOpt = ({ label, onClick, checked }) => (
    <button
      onClick={onClick}
      style={{
        display: "flex", alignItems: "center", gap: "0.85rem",
        background: checked ? "rgba(252,189,38,0.12)" : "rgba(255,255,255,0.04)",
        border: checked ? "1.5px solid #FCBD26" : "1.5px solid rgba(255,255,255,0.1)",
        borderRadius: "12px", padding: "0.85rem 1.25rem",
        color: "#fff", cursor: "pointer", width: "100%", textAlign: "left",
        fontSize: "0.88rem", fontWeight: 500, transition: "all 0.2s",
      }}
    >
      <span style={{
        width: 20, height: 20, borderRadius: 5, flexShrink: 0,
        border: checked ? "none" : "1.5px solid rgba(255,255,255,0.3)",
        background: checked ? "#FCBD26" : "transparent",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {checked && <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>}
      </span>
      {label}
    </button>
  );

  const BackBtn = ({ to }) => (
    <button onClick={() => setStep(to)} style={{
      background: "transparent", border: "none", color: "rgba(255,255,255,0.4)",
      fontSize: "0.85rem", cursor: "pointer", marginTop: "1.25rem",
      display: "flex", alignItems: "center", gap: "0.4rem",
    }}>
      <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
      Voltar
    </button>
  );

  const wrapStyle = {
    width: "100%", minHeight: isEmbedded ? "auto" : "100vh",
    background: "#0A0A0A",
    display: "flex", flexDirection: "column", alignItems: "center",
    padding: isEmbedded ? "1.5rem 1rem" : "3rem 1rem 4rem",
    fontFamily: "'Poppins', -apple-system, sans-serif",
    color: "#fff", boxSizing: "border-box",
  };
  const cardStyle = {
    width: "100%", maxWidth: 520,
    background: "#141414", border: "1px solid rgba(252,189,38,0.15)",
    borderRadius: 20, padding: "2rem",
    boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
  };

  if (showResult) {
    return (
      <div style={wrapStyle}>
        <div style={{ ...cardStyle, textAlign: "center" }}>
          <div style={{ display: "inline-flex", background: "rgba(34,197,94,0.12)", padding: "1rem", borderRadius: "50%", marginBottom: "1.25rem" }}>
            <svg width={40} height={40} viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0 0 0.5rem" }}>Seu caso tem potencial!</h2>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "2rem", lineHeight: 1.6 }}>
            Com base nas suas respostas, identificamos fortes indicios de elegibilidade para indenizacao.
          </p>
          <div style={{ background: "rgba(252,189,38,0.08)", border: "1px solid rgba(252,189,38,0.25)", borderRadius: 14, padding: "1.5rem", marginBottom: "2rem" }}>
            <div style={{ fontSize: "0.8rem", color: "#FCBD26", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 600, marginBottom: "0.5rem" }}>Estimativa de Indenizacao</div>
            <div style={{ fontSize: "2.8rem", fontWeight: 800, color: "#FCBD26", lineHeight: 1 }}>R$ 3.000</div>
            <div style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", marginTop: "0.25rem" }}>a ate R$ 15.000</div>
          </div>
          <button onClick={sendWA} style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem",
            width: "100%", padding: "1.15rem 1.5rem",
            background: "#25D366", color: "#fff", border: "none", borderRadius: 12,
            fontSize: "1.05rem", fontWeight: 700, cursor: "pointer",
            boxShadow: "0 6px 24px rgba(37,211,102,0.35)",
          }}>
            <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            Falar com a Dra. Kareline no WhatsApp
          </button>
          <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", marginTop: "1rem" }}>Sem custo inicial. Sem burocracia. Sem sair de casa.</p>
        </div>
      </div>
    );
  }

  if (isAnalyzing) {
    return (
      <div style={wrapStyle}>
        <div style={{ ...cardStyle, textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
            <div style={{ width: 64, height: 64, border: "4px solid rgba(252,189,38,0.15)", borderTopColor: "#FCBD26", borderRadius: "50%", animation: "diag-spin 0.8s linear infinite" }} />
          </div>
          <style dangerouslySetInnerHTML={{ __html: "@keyframes diag-spin { to { transform: rotate(360deg); } }" }} />
          <h2 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.5rem" }}>Analisando seu caso...</h2>
          <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: "2rem", lineHeight: 1.6 }}>
            Estamos cruzando suas respostas com a legislacao vigente (Resolucao 400 ANAC e CDC).
          </p>
          <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 8, height: 8, overflow: "hidden", marginBottom: "0.75rem" }}>
            <div style={{ height: "100%", background: "#FCBD26", width: loadBarW, transition: "width 0.1s linear", borderRadius: 8 }} />
          </div>
          <div style={{ fontSize: "0.85rem", color: "#FCBD26", fontWeight: 600 }}>{loadPct}%</div>
        </div>
      </div>
    );
  }

  return (
    <div style={wrapStyle}>
      {!isEmbedded && (
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="#FCBD26" strokeWidth="1.5" style={{ marginBottom: "0.75rem", display: "block", margin: "0 auto 0.75rem" }}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
          </svg>
          <h1 style={{ fontSize: "clamp(1.4rem,4vw,1.9rem)", fontWeight: 700, margin: "0 0 0.25rem" }}>
            Descubra quanto voce pode{" "}
            <span style={{ color: "#FCBD26" }}>ganhar!</span>
          </h1>
        </div>
      )}

      <div style={{ width: "100%", maxWidth: 520, marginBottom: "1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.5rem", fontSize: "0.82rem", color: "rgba(255,255,255,0.5)" }}>
          <span>Etapa {step} de {TOTAL_STEPS}</span>
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "#FCBD26", fontWeight: 600 }}>
            <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            {fmt(timeLeft)}
          </div>
          <span>{Math.round(stepPct)}%</span>
        </div>
        <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 6, height: 6, overflow: "hidden" }}>
          <div style={{ height: "100%", background: "#FCBD26", width: barW, transition: "width 0.4s ease", borderRadius: 6 }} />
        </div>
      </div>

      <div style={cardStyle}>
        {step === 1 && (
          <div>
            <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Qual problema voce enfrentou com o voo?</h2>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", marginBottom: "1.5rem" }}>
              <span style={{ color: "#FCBD26", fontWeight: 600 }}>Analise gratuita:</span> descubra se voce tem direito a indenizacao.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem" }}>
              {PROBLEM_OPTS.map(o => (
                <Opt key={o.label} label={o.label} icon={o.icon} sel={formData.problem === o.label} onClick={() => go("problem", o.label)} />
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Quando aconteceu o problema?</h2>
            <p style={{ fontSize: "0.85rem", color: "#FCBD26", marginBottom: "1.5rem", fontWeight: 500 }}>Atencao: seu prazo para reclamar pode estar se esgotando.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {["Nos ultimos 7 dias", "Nos ultimos 30 dias", "Ha alguns meses", "Ha mais tempo", "Nao sei precisar"].map(o => (
                <Opt key={o} label={o} sel={formData.period === o} onClick={() => go("period", o)} />
              ))}
            </div>
            <BackBtn to={1} />
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem" }}>{step3.q}</h2>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", marginBottom: "1.5rem" }}>Detalhes ajudam a calcular seu potencial de indenizacao.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {step3.opts.map(o => (
                <Opt key={o} label={o} sel={formData.detail === o} onClick={() => go("detail", o)} />
              ))}
            </div>
            <BackBtn to={2} />
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem" }}>A companhia ofereceu alguma assistencia?</h2>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", marginBottom: "1.5rem" }}>Alimentacao, hotel, transporte, remarcacao...</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {["Sim, ofereceu tudo adequadamente", "Sim, mas de forma parcial ou insuficiente", "Nao ofereceu nada", "Nao sei informar"].map(o => (
                <Opt key={o} label={o} sel={formData.assistance === o} onClick={() => go("assistance", o)} />
              ))}
            </div>
            <BackBtn to={3} />
          </div>
        )}

        {step === 5 && (
          <div>
            <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Houve impactos ou prejuizos adicionais?</h2>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", marginBottom: "1.5rem" }}>Selecione todas as opcoes que se aplicam.</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
              {["Perdi compromisso importante", "Gastos com alimentacao", "Gastos com hotel", "Gastos com transporte", "Perdi outra conexao", "Bagagem afetada", "Outro impacto", "Nenhum"].map(o => (
                <ChkOpt key={o} label={o} checked={multi.includes(o)} onClick={() => toggle(o)} />
              ))}
            </div>
            <button onClick={() => goMulti("impacts")} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", marginTop: "1.5rem", padding: "1rem", background: "#FCBD26", color: "#000", border: "none", borderRadius: 12, fontSize: "1rem", fontWeight: 700, cursor: "pointer" }}>
              Continuar
            </button>
            <BackBtn to={4} />
          </div>
        )}

        {step === 6 && (
          <div>
            <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Voce possui documentos do ocorrido?</h2>
            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", marginBottom: "1.5rem" }}>Selecione o que tiver — qualquer documento ajuda.</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
              {["Cartao de embarque", "Comprovante de reserva", "E-mails da companhia", "Fotografias", "Comprovantes de gastos", "Protocolos de atendimento", "Declaracao de atraso", "Nao tenho documentos"].map(o => (
                <ChkOpt key={o} label={o} checked={multi.includes(o)} onClick={() => toggle(o)} />
              ))}
            </div>
            <button onClick={() => goMulti("documents")} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", marginTop: "1.5rem", padding: "1rem", background: "#FCBD26", color: "#000", border: "none", borderRadius: 12, fontSize: "1rem", fontWeight: 700, cursor: "pointer" }}>
              Finalizar Analise
            </button>
            <BackBtn to={5} />
          </div>
        )}
      </div>

      <div style={{ marginTop: "1.5rem", fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", textAlign: "center", maxWidth: 480 }}>
        <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="#FCBD26" strokeWidth="2" style={{ verticalAlign: "middle", marginRight: 4 }}>
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
          <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
        <strong style={{ color: "#FCBD26" }}>Aviso legal:</strong>{" "}
        Ferramenta orientativa baseada em jurisprudencia. Analise definitiva feita por especialista.
      </div>
    </div>
  );
}