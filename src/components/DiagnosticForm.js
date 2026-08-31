"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const TOTAL_STEPS = 7;

const STEP3_MAP = {
  "Voo Atrasado ou Cancelado": {
    question: "Quanto tempo aproximadamente seu voo atrasou ou quando soube do cancelamento?",
    options: [
      "Menos de 2 horas",
      "Entre 2 e 4 horas",
      "Mais de 4 horas",
      "Cancelado no aeroporto",
      "Cancelado com antecedência",
      "Não sei informar",
    ],
  },
  "Bagagem Extraviada": {
    question: "Qual foi o problema com sua bagagem?",
    options: [
      "Bagagem extraviada (não chegou)",
      "Bagagem danificada",
      "Bagagem violada",
      "Atraso na entrega",
    ],
  },
  "Overbooking": {
    question: "O que a companhia ofereceu no momento?",
    options: [
      "Ofereceu reacomodação imediata",
      "Pagou compensação financeira",
      "Não ofereceu nada",
      "Ainda estou tentando resolver",
    ],
  },
  "Conexão Perdida": {
    question: "Por que você perdeu a conexão?",
    options: [
      "Atraso no voo anterior",
      "Cancelamento no voo anterior",
      "Demora na alfândega ou migração",
      "Outra razão",
    ],
  },
};

export default function DiagnosticForm({ initialProblem = null }) {
  const router = useRouter();
  const [step, setStep] = useState(initialProblem ? 2 : 1);
  const [selected, setSelected] = useState([]);
  const [formData, setFormData] = useState({
    problem: initialProblem || "",
    period: "",
    detail: "",
    assistance: "",
    impacts: [],
    documents: [],
    name: "",
    phone: "",
    email: "",
    lgpd: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const progress = ((step - 1) / TOTAL_STEPS) * 100;

  const advance = (field, value) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    setStep((s) => s + 1);
  };

  const advanceMulti = (field) => {
    setFormData((prev) => ({ ...prev, [field]: selected }));
    setSelected([]);
    setStep((s) => s + 1);
  };

  const toggleMulti = (val) => {
    setSelected((prev) =>
      prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    const msg = `Olá, realizei o diagnóstico preliminar no site da LexAero e gostaria de orientação.\n\n*Resumo:*\n- Problema: ${formData.problem}\n- Período: ${formData.period}\n- Detalhe: ${formData.detail}\n- Assistência recebida: ${formData.assistance}\n- Impactos: ${(formData.impacts || []).join(", ") || "Nenhum informado"}\n- Documentos: ${(formData.documents || []).join(", ") || "Nenhum informado"}\n\n*Dados de contato:*\n- Nome: ${formData.name}\n- E-mail: ${formData.email || "Não informado"}`;

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      window.open(
        `https://wa.me/5511999999999?text=${encodeURIComponent(msg)}`,
        "_blank"
      );
    }, 600);
  };

  const step3Data = STEP3_MAP[formData.problem] || STEP3_MAP["Outro"];

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "2rem 0" }}>
        <div className="diag-result-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h2 style={{ fontSize: "1.35rem", marginBottom: "0.75rem" }}>Diagnóstico concluído</h2>
        <p style={{ color: "var(--text-sub)", marginBottom: "2rem", lineHeight: 1.7 }}>
          Suas informações foram enviadas. A LexAero entrará em contato em breve para uma análise individualizada da sua situação.
        </p>
        <a href="/direito-do-passageiro-aereo" className="btn btn--secondary" style={{ fontSize: "0.875rem" }}>
          Ler sobre seus direitos
        </a>
      </div>
    );
  }

  return (
    <div>
      {/* Progress */}
      <div className="diag-progress">
        <div className="diag-progress__bar" style={{ width: `${progress}%` }} />
      </div>
      <p className="diag-step-label" style={{ marginBottom: "2rem" }}>
        {step < TOTAL_STEPS ? `Etapa ${step} de ${TOTAL_STEPS - 1}` : "Quase lá"}
      </p>

      {/* Step 1 – Problema */}
      {step === 1 && (
        <div style={{ paddingBottom: '1rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { label: "Voo Atrasado ou Cancelado", color: "#60a5fa", icon: <img src="/icone-voo-atrasado.png" alt="" style={{ width: '28px', height: '28px', objectFit: 'contain' }} /> },
              { label: "Bagagem Extraviada", color: "#fbbf24", icon: <img src="/icone-bagagem.png" alt="" style={{ width: '28px', height: '28px', objectFit: 'contain' }} /> },
              { label: "Overbooking", color: "#f87171", icon: <img src="/icone-overbooking.png" alt="" style={{ width: '28px', height: '28px', objectFit: 'contain' }} /> },
              { label: "Conexão Perdida", color: "#a78bfa", icon: <img src="/icone-perda-conexao.png" alt="" style={{ width: '28px', height: '28px', objectFit: 'contain' }} /> }
            ].map((opt) => (
              <button key={opt.label} onClick={() => advance("problem", opt.label)} style={{
                display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem 1rem', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--lex-border-dark)', borderRadius: '12px', borderLeft: `4px solid ${opt.color}`, cursor: 'pointer', textAlign: 'left', fontWeight: 500, fontSize: '0.95rem', color: 'var(--lex-white)', transition: 'all 0.2s ease', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
              onMouseOver={(e) => { e.currentTarget.style.boxShadow = `0 8px 24px ${opt.color}25`; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = 'var(--lex-gold)'; e.currentTarget.style.background = 'rgba(179, 139, 54, 0.05)'; }}
              onMouseOut={(e) => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--lex-border-dark)'; e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'; }}
              >
                <div style={{ color: opt.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{opt.icon}</div>
                {opt.label}
              </button>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem', padding: '1rem', background: 'rgba(139, 92, 246, 0.05)', borderRadius: '12px', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
            <p style={{ color: '#a78bfa', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.35rem', letterSpacing: '-0.02em' }}>Descubra se você tem direito a até R$ 10.000</p>
            <p style={{ color: 'var(--lex-text-dark-muted)', fontSize: '0.85rem' }}>Análise confidencial. Você só paga se ganhar.</p>
          </div>
        </div>
      )}

      {/* Step 2 – Período */}
      {step === 2 && (
        <div>
          <h2 className="diag-question">Quando aconteceu?</h2>
          <p style={{ fontSize: "0.88rem", color: "var(--lex-gold)", marginBottom: "1.25rem", fontWeight: 500 }}>Atenção: O seu direito de reclamar pode expirar.</p>
          <div className="diag-options">
            {["Nos últimos 7 dias","Nos últimos 30 dias","Há alguns meses","Há mais tempo","Não sei precisar"].map((opt) => (
              <button key={opt} className="diag-option" onClick={() => advance("period", opt)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                {opt}
              </button>
            ))}
          </div>
          <button className="diag-back" onClick={() => setStep(1)}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Voltar
          </button>
        </div>
      )}

      {/* Step 3 – Detalhe variável */}
      {step === 3 && (
        <div>
          <h2 className="diag-question">{step3Data.question}</h2>
          <div className="diag-options">
            {step3Data.options.map((opt) => (
              <button key={opt} className="diag-option" onClick={() => advance("detail", opt)}>
                {opt}
              </button>
            ))}
          </div>
          <button className="diag-back" onClick={() => setStep(2)}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Voltar
          </button>
        </div>
      )}

      {/* Step 4 – Assistência */}
      {step === 4 && (
        <div>
          <h2 className="diag-question">A companhia ofereceu alguma alternativa ou assistência?</h2>
          <div className="diag-options">
            {["Sim, ofereceu tudo adequadamente","Sim, mas de forma parcial ou insuficiente","Não ofereceu nada","Não sei informar"].map((opt) => (
              <button key={opt} className="diag-option" onClick={() => advance("assistance", opt)}>
                {opt}
              </button>
            ))}
          </div>
          <button className="diag-back" onClick={() => setStep(3)}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Voltar
          </button>
        </div>
      )}

      {/* Step 5 – Impactos (multi) */}
      {step === 5 && (
        <div>
          <h2 className="diag-question">A situação gerou algum impacto ou prejuízo adicional?</h2>
          <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "1.25rem" }}>Selecione todas as opções que se aplicam.</p>
          <div className="diag-options">
            {["Perdi compromisso importante","Tive gasto com alimentação","Tive gasto com hotel","Tive gasto com transporte","Perdi outra conexão","Minha bagagem foi afetada","Outro impacto","Nenhum desses"].map((opt) => (
              <button
                key={opt}
                className={`diag-option diag-option--multi${selected.includes(opt) ? " selected" : ""}`}
                onClick={() => toggleMulti(opt)}
              >
                <span style={{
                  width: 18, height: 18, border: "1.5px solid", borderColor: selected.includes(opt) ? "var(--accent)" : "var(--border)",
                  borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, background: selected.includes(opt) ? "var(--accent)" : "transparent",
                  transition: "all 0.15s ease", color: "white", fontSize: 11,
                }}>
                  {selected.includes(opt) && "✓"}
                </span>
                {opt}
              </button>
            ))}
          </div>
          <button
            className="btn btn--primary btn--full diag-multi-continue"
            onClick={() => advanceMulti("impacts")}
          >
            Continuar
          </button>
          <button className="diag-back" onClick={() => setStep(4)}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Voltar
          </button>
        </div>
      )}

      {/* Step 6 – Documentos (multi) */}
      {step === 6 && (
        <div>
          <h2 className="diag-question">Você possui documentos relacionados ao ocorrido?</h2>
          <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "1.25rem" }}>Selecione todos que tiver.</p>
          <div className="diag-options">
            {["Cartão de embarque","Comprovante da reserva","E-mails ou mensagens da companhia","Fotografias","Comprovantes de gastos","Protocolos de atendimento","Declaração de atraso ou cancelamento","Ainda não organizei os documentos"].map((opt) => (
              <button
                key={opt}
                className={`diag-option diag-option--multi${selected.includes(opt) ? " selected" : ""}`}
                onClick={() => toggleMulti(opt)}
              >
                <span style={{
                  width: 18, height: 18, border: "1.5px solid", borderColor: selected.includes(opt) ? "var(--accent)" : "var(--border)",
                  borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, background: selected.includes(opt) ? "var(--accent)" : "transparent",
                  transition: "all 0.15s ease", color: "white", fontSize: 11,
                }}>
                  {selected.includes(opt) && "✓"}
                </span>
                {opt}
              </button>
            ))}
          </div>
          <button
            className="btn btn--primary btn--full diag-multi-continue"
            onClick={() => advanceMulti("documents")}
          >
            Continuar
          </button>
          <button className="diag-back" onClick={() => setStep(5)}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Voltar
          </button>
        </div>
      )}

      {/* Step 7 – Lead Form */}
      {step === 7 && (
        <div>
          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <div className="diag-result-icon" style={{ display: "inline-flex" }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            </div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem", color: "var(--lex-white)" }}>Tudo pronto para a sua análise.</h2>
            <p style={{ fontSize: "0.95rem", color: "var(--lex-text-dark-muted)", lineHeight: 1.6, maxWidth: "400px", margin: "0 auto" }}>
              Para descobrirmos o valor exato que você pode receber e os próximos passos, informe onde devemos enviar o resultado da sua avaliação gratuita.
            </p>
          </div>

          <form className="lead-form" onSubmit={handleSubmit}>
            <div className="field" style={{ marginBottom: '1.25rem' }}>
              <label htmlFor="diag-name" style={{ color: 'var(--lex-white)', fontSize: '0.85rem', marginBottom: '0.4rem', display: 'block' }}>Nome completo *</label>
              <input
                id="diag-name"
                type="text"
                placeholder="Ex: João da Silva"
                required
                value={formData.name}
                onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--lex-border-dark)', borderRadius: '8px', color: 'var(--lex-white)', outline: 'none' }}
                onFocus={(e) => e.target.style.borderColor = 'var(--lex-gold)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--lex-border-dark)'}
              />
            </div>
            <div className="field" style={{ marginBottom: '1.25rem' }}>
              <label htmlFor="diag-phone" style={{ color: 'var(--lex-white)', fontSize: '0.85rem', marginBottom: '0.4rem', display: 'block' }}>WhatsApp *</label>
              <input
                id="diag-phone"
                type="tel"
                placeholder="(11) 99999-9999"
                required
                value={formData.phone}
                onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--lex-border-dark)', borderRadius: '8px', color: 'var(--lex-white)', outline: 'none' }}
                onFocus={(e) => e.target.style.borderColor = 'var(--lex-gold)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--lex-border-dark)'}
              />
            </div>
            <div className="field" style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="diag-email" style={{ color: 'var(--lex-white)', fontSize: '0.85rem', marginBottom: '0.4rem', display: 'block' }}>E-mail <span style={{ color: "var(--lex-text-dark-muted)", fontWeight: 400 }}>(opcional)</span></label>
              <input
                id="diag-email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--lex-border-dark)', borderRadius: '8px', color: 'var(--lex-white)', outline: 'none' }}
                onFocus={(e) => e.target.style.borderColor = 'var(--lex-gold)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--lex-border-dark)'}
              />
            </div>

            <label className="diag-lgpd">
              <input
                type="checkbox"
                required
                checked={formData.lgpd}
                onChange={(e) => setFormData((p) => ({ ...p, lgpd: e.target.checked }))}
                style={{ marginTop: '2px', accentColor: 'var(--lex-gold)' }}
              />
              Concordo que meus dados sejam utilizados exclusivamente para atendimento sigiloso e relacionado a esta solicitação, conforme a LGPD.
            </label>

            <button type="submit" className="btn btn--primary btn--full btn--lg" disabled={submitting} style={{ boxShadow: '0 8px 24px rgba(179, 139, 54, 0.3)' }}>
              {submitting ? "Enviando seus dados..." : "Receber Análise Gratuita Agora"}
            </button>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1.5rem', opacity: 0.8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--lex-text-dark-muted)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                100% Seguro
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--lex-text-dark-muted)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                Sigilo Absoluto
              </div>
            </div>

            <div className="diag-disclaimer">
              <strong>Especialistas da LexAero.</strong>
              O diagnóstico é exclusivamente informativo. Cada situação deve ser analisada individualmente por um de nossos especialistas antes de qualquer medida legal.
            </div>
          </form>

          <button className="diag-back" onClick={() => setStep(6)}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Voltar
          </button>
        </div>
      )}
    </div>
  );
}
