"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const TOTAL_STEPS = 6;

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

export default function DiagnosticForm({ initialProblem = null, isEmbedded = false }) {
  const router = useRouter();
  const [step, setStep] = useState(initialProblem ? 2 : 1);
  const [selectedMulti, setSelectedMulti] = useState([]);
  
  const [formData, setFormData] = useState({
    problem: initialProblem || "",
    period: "",
    detail: "",
    assistance: "",
    impacts: [],
    documents: [],
  });

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [resultReady, setResultReady] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);

  // Trigger analysis sequence when all steps are completed
  useEffect(() => {
    if (step > TOTAL_STEPS && !resultReady && !isAnalyzing) {
      setIsAnalyzing(true);
      setAnalysisProgress(0);
      
      const interval = setInterval(() => {
        setAnalysisProgress(p => {
          if (p >= 100) {
            clearInterval(interval);
            setIsAnalyzing(false);
            setResultReady(true);
            return 100;
          }
          return p + 2.5; // reaches 100 in about 4 seconds (100 / 2.5 = 40 * 100ms = 4s)
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [step, resultReady, isAnalyzing]);

  const advance = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setStep(s => s + 1);
  };

  const advanceMulti = (field) => {
    setFormData(prev => ({ ...prev, [field]: selectedMulti }));
    setSelectedMulti([]);
    setStep(s => s + 1);
  };

  const toggleMulti = (val) => {
    setSelectedMulti(prev =>
      prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val]
    );
  };

  const handleWhatsAppClick = () => {
    const msg = `Olá, realizei o diagnóstico no site da LexAero e vi que posso ter direito a indenização.\n\n*Resumo do meu caso:*\n- Problema: ${formData.problem}\n- Ocorrido: ${formData.period}\n- Detalhe: ${formData.detail}\n- Assistência: ${formData.assistance}\n- Impactos: ${(formData.impacts || []).join(", ") || "Nenhum"}\n- Documentos: ${(formData.documents || []).join(", ") || "Nenhum"}\n\nGostaria de falar com um especialista.`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const step3Data = STEP3_MAP[formData.problem] || STEP3_MAP["Voo Atrasado ou Cancelado"];

  // Sidebar mapping
  const sidebarSteps = [
    { num: 1, title: "Ocorrência", activeIf: [1, 2, 3] },
    { num: 2, title: "Informações Adicionais", activeIf: [4, 5] },
    { num: 3, title: "Documentos", activeIf: [6] },
    { num: 4, title: "Análise", activeIf: [7] }, // 7 = analyzing or result
  ];

  const currentSidebarStepNum = sidebarSteps.find(s => s.activeIf.includes(step > 6 ? 7 : step))?.num || 1;

  // Components for options
  const RadioOption = ({ label, icon, onClick, active }) => (
    <div className={`ah-option ${active ? 'ah-option-active' : ''}`} onClick={onClick}>
      <div className="ah-radio-circle">
        {active && <div className="ah-radio-dot" />}
      </div>
      {icon && <div className="ah-option-icon">{icon}</div>}
      <span className="ah-option-label">{label}</span>
    </div>
  );

  const CheckboxOption = ({ label, onClick, checked }) => (
    <div className={`ah-option ${checked ? 'ah-option-active' : ''}`} onClick={onClick}>
      <div className={`ah-checkbox-box ${checked ? 'checked' : ''}`}>
        {checked && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>}
      </div>
      <span className="ah-option-label">{label}</span>
    </div>
  );

  return (
    <div className={`ah-container ${isEmbedded ? 'ah-embedded' : ''}`}>
      <style>{`
        .ah-container {
          --ah-primary: #0052cc;
          --ah-primary-hover: #0043a8;
          --ah-primary-light: #e6f0ff;
          --ah-bg: #f4f5f7;
          --ah-surface: #ffffff;
          --ah-border: #dfe1e6;
          --ah-text: #172b4d;
          --ah-text-muted: #6b778c;
          --ah-gold: #FCBD26;
          --ah-gold-hover: #e0a316;
          --ah-radius: 12px;
          
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          background: var(--ah-bg);
          color: var(--ah-text);
          display: flex;
          width: 100%;
          min-height: ${isEmbedded ? 'auto' : '100vh'};
          border-radius: ${isEmbedded ? '20px' : '0'};
          overflow: hidden;
        }

        .ah-sidebar {
          width: 280px;
          background: var(--ah-surface);
          border-right: 1px solid var(--ah-border);
          padding: 2.5rem 1.5rem;
          display: flex;
          flex-direction: column;
        }

        .ah-embedded .ah-sidebar {
          display: none;
        }

        .ah-sidebar-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--ah-text);
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .ah-step-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
          position: relative;
        }
        .ah-step-item:not(:last-child)::after {
          content: '';
          position: absolute;
          left: 11px;
          top: 24px;
          bottom: -16px;
          width: 2px;
          background: var(--ah-border);
        }
        .ah-step-item.active:not(:last-child)::after,
        .ah-step-item.completed:not(:last-child)::after {
          background: var(--ah-primary);
        }

        .ah-step-circle {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--ah-surface);
          border: 2px solid var(--ah-border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--ah-text-muted);
          z-index: 2;
        }
        .ah-step-item.active .ah-step-circle {
          border-color: var(--ah-primary);
          color: var(--ah-primary);
        }
        .ah-step-item.completed .ah-step-circle {
          background: var(--ah-primary);
          border-color: var(--ah-primary);
          color: white;
        }
        .ah-step-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--ah-text-muted);
          padding-top: 2px;
        }
        .ah-step-item.active .ah-step-label {
          color: var(--ah-text);
        }

        .ah-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: ${isEmbedded ? '2rem' : '4rem 2rem'};
          align-items: center;
          background: ${isEmbedded ? 'var(--ah-surface)' : 'var(--ah-bg)'};
        }

        .ah-content-box {
          width: 100%;
          max-width: 600px;
        }

        .ah-top-progress {
          display: none;
          width: 100%;
          margin-bottom: 2rem;
        }
        .ah-embedded .ah-top-progress {
          display: block;
        }
        .ah-progress-track {
          width: 100%;
          height: 6px;
          background: var(--ah-border);
          border-radius: 3px;
          overflow: hidden;
        }
        .ah-progress-fill {
          height: 100%;
          background: var(--ah-primary);
          transition: width 0.3s ease;
        }

        .ah-card {
          background: var(--ah-surface);
          border: 1px solid var(--ah-border);
          border-radius: var(--ah-radius);
          padding: 2rem;
          box-shadow: 0 4px 12px rgba(9, 30, 66, 0.05);
          margin-bottom: 1.5rem;
        }

        .ah-embedded .ah-card {
          border: none;
          padding: 0;
          box-shadow: none;
        }

        .ah-question-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: var(--ah-text);
        }

        .ah-question-desc {
          font-size: 0.9rem;
          color: var(--ah-text-muted);
          margin-bottom: 1.5rem;
        }

        .ah-options-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        
        @media (min-width: 600px) {
          .ah-options-grid-2 {
            grid-template-columns: 1fr 1fr;
          }
        }

        .ah-option {
          display: flex;
          align-items: center;
          padding: 1rem;
          border: 1px solid var(--ah-border);
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          background: var(--ah-surface);
        }
        .ah-option:hover {
          border-color: var(--ah-primary);
          background: var(--ah-primary-light);
        }
        .ah-option-active {
          border-color: var(--ah-primary);
          background: var(--ah-primary-light);
        }

        .ah-radio-circle {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 2px solid var(--ah-border);
          margin-right: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .ah-option-active .ah-radio-circle {
          border-color: var(--ah-primary);
        }
        .ah-radio-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--ah-primary);
        }

        .ah-checkbox-box {
          width: 20px;
          height: 20px;
          border-radius: 4px;
          border: 2px solid var(--ah-border);
          margin-right: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .ah-checkbox-box.checked {
          background: var(--ah-primary);
          border-color: var(--ah-primary);
        }

        .ah-option-icon {
          width: 32px;
          height: 32px;
          margin-right: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ah-option-label {
          font-weight: 500;
          font-size: 0.95rem;
          line-height: 1.3;
        }

        .ah-btn-primary {
          background: var(--ah-primary);
          color: white;
          border: none;
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.2s;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }
        .ah-btn-primary:hover {
          background: var(--ah-primary-hover);
        }

        .ah-btn-back {
          background: transparent;
          color: var(--ah-text-muted);
          border: none;
          padding: 0.5rem 0;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 1rem;
        }
        .ah-btn-back:hover {
          color: var(--ah-text);
        }

        /* Result View */
        .ah-result-box {
          text-align: center;
          padding: 2rem 0;
        }
        .ah-result-amount {
          font-size: 2.5rem;
          font-weight: 800;
          color: #36B37E;
          margin: 1rem 0;
        }
        .ah-btn-whatsapp {
          background: #25D366;
          color: white;
          border: none;
          padding: 1.25rem 2rem;
          font-size: 1.1rem;
          font-weight: 700;
          border-radius: 8px;
          cursor: pointer;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-top: 1.5rem;
          box-shadow: 0 4px 14px rgba(37, 211, 102, 0.3);
          transition: transform 0.2s;
        }
        .ah-btn-whatsapp:hover {
          transform: translateY(-2px);
        }

        /* Loading bar */
        .ah-loading-container {
          text-align: center;
          padding: 3rem 0;
        }
        .ah-loading-bar-wrap {
          width: 100%;
          height: 8px;
          background: var(--ah-border);
          border-radius: 4px;
          overflow: hidden;
          margin: 2rem 0 1rem;
        }
        .ah-loading-fill {
          height: 100%;
          background: var(--ah-primary);
          transition: width 0.1s linear;
        }

        @media (max-width: 768px) {
          .ah-sidebar { display: none; }
          .ah-main { padding: 1.5rem; background: var(--ah-surface); }
          .ah-top-progress { display: block; }
          .ah-card { border: none; padding: 0; box-shadow: none; }
        }
      `}</style>

      {/* Sidebar (Desktop Only) */}
      <div className="ah-sidebar">
        <div className="ah-sidebar-title">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ah-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          Garantimos seus direitos
        </div>
        
        <div className="ah-steps-list">
          {sidebarSteps.map((s, i) => {
            const isActive = currentSidebarStepNum === s.num;
            const isCompleted = currentSidebarStepNum > s.num;
            return (
              <div key={s.num} className={`ah-step-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}>
                <div className="ah-step-circle">
                  {isCompleted ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg> : s.num}
                </div>
                <div className="ah-step-label">{s.title}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="ah-main">
        <div className="ah-content-box">
          
          <div className="ah-top-progress">
            <div className="ah-progress-track">
              <div className="ah-progress-fill" style={{ width: `${Math.min(100, (step / TOTAL_STEPS) * 100)}%` }} />
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--ah-text-muted)', marginTop: '0.5rem', textAlign: 'right' }}>
              Passo {Math.min(step, TOTAL_STEPS)} de {TOTAL_STEPS}
            </div>
          </div>

          {step <= TOTAL_STEPS && (
            <div className="ah-card">
              
              {/* Step 1 */}
              {step === 1 && (
                <>
                  <h2 className="ah-question-title">Qual problema você enfrentou?</h2>
                  <p className="ah-question-desc">Selecione o principal motivo da sua reclamação.</p>
                  <div className="ah-options-grid ah-options-grid-2">
                    {[
                      { label: "Voo Atrasado ou Cancelado", icon: <img src="/icone-voo-atrasado.png" alt="" style={{width: 32, height: 32}}/> },
                      { label: "Bagagem Extraviada", icon: <img src="/icone-bagagem.png" alt="" style={{width: 32, height: 32}}/> },
                      { label: "Overbooking", icon: <img src="/icone-overbooking.png" alt="" style={{width: 32, height: 32}}/> },
                      { label: "Conexão Perdida", icon: <img src="/icone-perda-conexao.png" alt="" style={{width: 32, height: 32}}/> },
                    ].map(opt => (
                      <RadioOption key={opt.label} label={opt.label} icon={opt.icon} active={formData.problem === opt.label} onClick={() => advance('problem', opt.label)} />
                    ))}
                  </div>
                </>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <>
                  <h2 className="ah-question-title">Quando aconteceu?</h2>
                  <p className="ah-question-desc">Para voos nacionais, você tem até 5 anos para pedir indenização.</p>
                  <div className="ah-options-grid">
                    {["Nos últimos 7 dias", "Nos últimos 30 dias", "Há alguns meses", "Há mais tempo", "Não sei precisar"].map(opt => (
                      <RadioOption key={opt} label={opt} active={formData.period === opt} onClick={() => advance('period', opt)} />
                    ))}
                  </div>
                  <button className="ah-btn-back" onClick={() => setStep(1)}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg> Voltar</button>
                </>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <>
                  <h2 className="ah-question-title">{step3Data.question}</h2>
                  <p className="ah-question-desc">Detalhes nos ajudam a calcular a chance de sucesso.</p>
                  <div className="ah-options-grid">
                    {step3Data.options.map(opt => (
                      <RadioOption key={opt} label={opt} active={formData.detail === opt} onClick={() => advance('detail', opt)} />
                    ))}
                  </div>
                  <button className="ah-btn-back" onClick={() => setStep(2)}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg> Voltar</button>
                </>
              )}

              {/* Step 4 */}
              {step === 4 && (
                <>
                  <h2 className="ah-question-title">A companhia ofereceu alguma assistência?</h2>
                  <p className="ah-question-desc">Alimentação, hotel, transporte, remarcação...</p>
                  <div className="ah-options-grid">
                    {["Sim, ofereceu tudo adequadamente", "Sim, mas de forma parcial ou insuficiente", "Não ofereceu nada", "Não sei informar"].map(opt => (
                      <RadioOption key={opt} label={opt} active={formData.assistance === opt} onClick={() => advance('assistance', opt)} />
                    ))}
                  </div>
                  <button className="ah-btn-back" onClick={() => setStep(3)}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg> Voltar</button>
                </>
              )}

              {/* Step 5 */}
              {step === 5 && (
                <>
                  <h2 className="ah-question-title">A situação gerou impacto ou prejuízo adicional?</h2>
                  <p className="ah-question-desc">Selecione todas as opções que se aplicam.</p>
                  <div className="ah-options-grid ah-options-grid-2">
                    {["Perdi compromisso importante", "Gasto com alimentação", "Gasto com hotel", "Gasto com transporte", "Perdi outra conexão", "Bagagem afetada", "Outro impacto", "Nenhum"].map(opt => (
                      <CheckboxOption key={opt} label={opt} checked={selectedMulti.includes(opt)} onClick={() => toggleMulti(opt)} />
                    ))}
                  </div>
                  <div style={{ marginTop: '1.5rem' }}>
                    <button className="ah-btn-primary" onClick={() => advanceMulti('impacts')}>Continuar</button>
                  </div>
                  <button className="ah-btn-back" onClick={() => setStep(4)}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg> Voltar</button>
                </>
              )}

              {/* Step 6 */}
              {step === 6 && (
                <>
                  <h2 className="ah-question-title">Você possui documentos do ocorrido?</h2>
                  <p className="ah-question-desc">E-mails, cartão de embarque, fotos, protocolos. Selecione o que tiver.</p>
                  <div className="ah-options-grid ah-options-grid-2">
                    {["Cartão de embarque", "Comprovante de reserva", "E-mails da companhia", "Fotografias", "Comprovantes de gastos", "Protocolos", "Declaração de atraso", "Ainda não organizei"].map(opt => (
                      <CheckboxOption key={opt} label={opt} checked={selectedMulti.includes(opt)} onClick={() => toggleMulti(opt)} />
                    ))}
                  </div>
                  <div style={{ marginTop: '1.5rem' }}>
                    <button className="ah-btn-primary" onClick={() => advanceMulti('documents')}>Finalizar Análise</button>
                  </div>
                  <button className="ah-btn-back" onClick={() => setStep(5)}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg> Voltar</button>
                </>
              )}
            </div>
          )}

          {/* Analyzing View */}
          {isAnalyzing && (
            <div className="ah-card ah-loading-container">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--ah-primary)" strokeWidth="1.5" className="spin-anim" style={{ animation: 'spin 3s linear infinite' }}>
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" strokeLinejoin="round"/>
                <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
              </svg>
              <h2 className="ah-question-title" style={{ marginTop: '1.5rem' }}>Analisando seu caso...</h2>
              <p className="ah-question-desc">Nossa IA está cruzando suas respostas com as leis de direito do passageiro (Resolução 400 ANAC e CDC).</p>
              <div className="ah-loading-bar-wrap">
                <div className="ah-loading-fill" style={{ width: `${analysisProgress}%` }} />
              </div>
            </div>
          )}

          {/* Result View */}
          {resultReady && (
            <div className="ah-card ah-result-box">
              <div style={{ display: 'inline-flex', background: '#e3fceb', color: '#36B37E', padding: '0.75rem', borderRadius: '50%', marginBottom: '1rem' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h2 className="ah-question-title">Boas notícias!</h2>
              <p className="ah-question-desc">Seu caso apresenta fortes indícios de elegibilidade para indenização financeira por danos morais e materiais.</p>
              
              <div style={{ background: 'var(--ah-bg)', border: '1px solid var(--ah-border)', borderRadius: '8px', padding: '1.5rem', margin: '2rem 0' }}>
                <div style={{ fontSize: '0.9rem', color: 'var(--ah-text-muted)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>Estimativa de Indenização</div>
                <div className="ah-result-amount">R$ 3.000 a R$ 10.000</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--ah-text-muted)' }}>*O valor final depende da documentação e decisão judicial.</div>
              </div>

              <button className="ah-btn-whatsapp" onClick={handleWhatsAppClick}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                Falar com a equipe no WhatsApp
              </button>
              
              <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--ah-text-muted)' }}>
                Ao clicar você será redirecionado para falar diretamente com a Dra. Kareline Staut.
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
