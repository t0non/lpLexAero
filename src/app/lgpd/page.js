import Link from "next/link";

export const metadata = {
  title: "Termos de Uso e LGPD | LexAero",
  description: "Transparência e respeito aos seus dados. Leia nossos termos de uso, política de privacidade e LGPD.",
};

const ICONS = {
  document: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>,
  shieldCheck: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>,
  lock: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>,
  calendar: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
};

export default function LGPDPage() {
  return (
    <div style={{ background: "#f8f9fa" }}>
      {/* ── HERO ── */}
      <section style={{ background: "var(--lex-black)", position: "relative", overflow: "hidden" }}>
        
        {/* Background Overlay for Image */}
        <div style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: "50%",
          backgroundImage: "url('/img_hero2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.6,
          maskImage: "linear-gradient(to right, transparent, black 40%)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 40%)",
          zIndex: 1
        }}></div>

        <div className="container" style={{ position: "relative", zIndex: 2, padding: "4rem 1.5rem 0" }}>
          
          {/* Breadcrumb */}
          <nav style={{ fontSize: "0.85rem", marginBottom: "2rem", color: "#a0a0a0", display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <Link href="/" style={{ color: "var(--lex-gold)", textDecoration: "none" }}>Início</Link>
            <span>›</span>
            <span>Institucional</span>
            <span>›</span>
            <span style={{ color: "#fff" }}>Termos de Uso, Privacidade e LGPD</span>
          </nav>

          <div style={{ maxWidth: 600, paddingBottom: "4rem" }}>
            <h1 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: "1rem", lineHeight: 1.1, color: "#fff" }}>
              Termos de Uso,<br/>
              Privacidade e <span style={{ color: "var(--lex-gold)" }}>LGPD</span>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "#c5c5c5", marginBottom: "0", lineHeight: 1.6 }}>
              Transparência e respeito aos seus dados.<br/>
              Leia nossos termos e políticas.
            </p>
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", gap: "2rem", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingTop: "2rem" }}>
            <a href="#termos" style={{ color: "var(--lex-gold)", textDecoration: "none", fontWeight: 700, paddingBottom: "1rem", borderBottom: "3px solid var(--lex-gold)" }}>Termos de Uso</a>
            <a href="#privacidade" style={{ color: "#aaa", textDecoration: "none", fontWeight: 600, paddingBottom: "1rem" }}>Política de Privacidade</a>
            <a href="#lgpd" style={{ color: "#aaa", textDecoration: "none", fontWeight: 600, paddingBottom: "1rem" }}>LGPD</a>
          </div>
        </div>
      </section>

      {/* ── CONTEÚDO PRINCIPAL ── */}
      <section style={{ padding: "4rem 1.5rem 6rem" }}>
        <div className="container" style={{ maxWidth: 960 }}>
          
          {/* CARTÃO 1: TERMOS DE USO */}
          <div id="termos" style={{ background: "#fff", borderRadius: 16, border: "1px solid #eaeaea", padding: "3rem", marginBottom: "2rem", boxShadow: "0 4px 20px rgba(0,0,0,0.02)", scrollMarginTop: "100px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
              <div style={{ color: "var(--lex-gold)", transform: "scale(1.5)", transformOrigin: "left center" }}>
                {ICONS.document}
              </div>
              <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--lex-black)", margin: 0 }}>
                1. Termos de Uso
              </h2>
            </div>
            
            <p style={{ fontSize: "1rem", color: "#555", lineHeight: 1.6, marginBottom: "2rem" }}>
              Ao acessar e utilizar o site da LexAero, você concorda com os presentes Termos de Uso.<br/>
              Recomendamos a leitura atenta antes de utilizar nossos serviços.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111", marginBottom: "0.5rem" }}>1.1. Aceitação dos Termos</h3>
                <p style={{ fontSize: "0.95rem", color: "#666", lineHeight: 1.6, margin: 0 }}>Ao utilizar este site e seus serviços, você declara que leu, compreendeu e concorda com estes Termos de Uso, bem como com nossa Política de Privacidade e com a legislação aplicável.</p>
              </div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111", marginBottom: "0.5rem" }}>1.2. Sobre a LexAero</h3>
                <p style={{ fontSize: "0.95rem", color: "#666", lineHeight: 1.6, margin: 0 }}>A LexAero é uma marca de Kareline Staut – Advocacia, inscrita na OAB/RO 10.067, que atua na prestação de serviços jurídicos especializados em Direito do Passageiro Aéreo, de forma digital, para todo o território nacional.</p>
              </div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111", marginBottom: "0.5rem" }}>1.3. Serviços</h3>
                <p style={{ fontSize: "0.95rem", color: "#666", lineHeight: 1.6, margin: 0 }}>
                  Os serviços oferecidos no site têm caráter informativo e incluem diagnóstico preliminar automatizado e possibilidade de solicitação de análise jurídica individualizada.<br/>
                  O diagnóstico preliminar é uma ferramenta informativa e não substitui a análise profissional nem constitui parecer jurídico.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111", marginBottom: "0.5rem" }}>1.4. Uso do Site</h3>
                <p style={{ fontSize: "0.95rem", color: "#666", lineHeight: 1.6, margin: "0 0 0.5rem 0" }}>Você se compromete a utilizar este site de forma lícita, ética e em conformidade com a legislação vigente, não sendo permitido:</p>
                <ul style={{ fontSize: "0.95rem", color: "#666", lineHeight: 1.6, margin: 0, paddingLeft: "1.2rem" }}>
                  <li><span style={{ color: "var(--lex-gold)", marginRight: "0.5rem" }}>•</span>Utilizar o site para fins ilícitos ou fraudulentos;</li>
                  <li><span style={{ color: "var(--lex-gold)", marginRight: "0.5rem" }}>•</span>Tentar acessar áreas restritas ou sistemas internos;</li>
                  <li><span style={{ color: "var(--lex-gold)", marginRight: "0.5rem" }}>•</span>Reproduzir, distribuir ou modificar o conteúdo sem autorização;</li>
                  <li><span style={{ color: "var(--lex-gold)", marginRight: "0.5rem" }}>•</span>Fornecer informações falsas ou de terceiros sem autorização.</li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111", marginBottom: "0.5rem" }}>1.5. Propriedade Intelectual</h3>
                <p style={{ fontSize: "0.95rem", color: "#666", lineHeight: 1.6, margin: 0 }}>Todo o conteúdo publicado no site, incluindo textos, imagens, logotipos, vídeos e materiais, é de propriedade da LexAero ou licenciado para seu uso, sendo protegido pela legislação de direitos autorais e de propriedade intelectual.</p>
              </div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111", marginBottom: "0.5rem" }}>1.6. Limitação de Responsabilidade</h3>
                <p style={{ fontSize: "0.95rem", color: "#666", lineHeight: 1.6, margin: 0 }}>
                  As informações disponibilizadas têm caráter geral e informativo.<br/>
                  A LexAero não se responsabiliza por decisões tomadas com base apenas no conteúdo do site, sendo necessária a análise individualizada de cada caso por profissional habilitado.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111", marginBottom: "0.5rem" }}>1.7. Alterações</h3>
                <p style={{ fontSize: "0.95rem", color: "#666", lineHeight: 1.6, margin: 0 }}>Podemos atualizar estes Termos de Uso a qualquer momento.<br/>A data da última atualização será sempre indicada no início desta página.</p>
              </div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111", marginBottom: "0.5rem" }}>1.8. Lei Aplicável e Foro</h3>
                <p style={{ fontSize: "0.95rem", color: "#666", lineHeight: 1.6, margin: 0 }}>Estes Termos são regidos pelas leis da República Federativa do Brasil.<br/>Fica eleito o foro da comarca de Porto Velho/RO para dirimir quaisquer questões decorrentes deste documento, renunciando a qualquer outro, por mais privilegiado que seja.</p>
              </div>
            </div>
          </div>

          {/* CARTÃO 2: POLÍTICA DE PRIVACIDADE */}
          <div id="privacidade" style={{ background: "#fff", borderRadius: 16, border: "1px solid #eaeaea", padding: "3rem", marginBottom: "2rem", boxShadow: "0 4px 20px rgba(0,0,0,0.02)", scrollMarginTop: "100px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
              <div style={{ color: "var(--lex-gold)", transform: "scale(1.5)", transformOrigin: "left center" }}>
                {ICONS.shieldCheck}
              </div>
              <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--lex-black)", margin: 0 }}>
                2. Política de Privacidade
              </h2>
            </div>
            
            <p style={{ fontSize: "1rem", color: "#555", lineHeight: 1.6, marginBottom: "2rem" }}>
              Esta Política descreve como coletamos, usamos, armazenamos e protegemos<br/>
              as informações dos usuários.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111", marginBottom: "0.5rem" }}>2.1. Informações que coletamos</h3>
                <p style={{ fontSize: "0.95rem", color: "#666", lineHeight: 1.6, margin: 0 }}>Podemos coletar informações fornecidas por você, como nome, e-mail, telefone e dados do caso, além de dados de navegação (cookies e tecnologias semelhantes).</p>
              </div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111", marginBottom: "0.5rem" }}>2.2. Finalidades</h3>
                <p style={{ fontSize: "0.95rem", color: "#666", lineHeight: 1.6, margin: 0 }}>Utilizamos os dados para prestar nossos serviços, responder contatos, realizar análises de casos, enviar comunicações e melhorar a experiência no site.</p>
              </div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111", marginBottom: "0.5rem" }}>2.3. Compartilhamento</h3>
                <p style={{ fontSize: "0.95rem", color: "#666", lineHeight: 1.6, margin: 0 }}>Não vendemos seus dados pessoais. Compartilhamos informações apenas quando necessário para a prestação dos serviços ou cumprimento de obrigação legal.</p>
              </div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111", marginBottom: "0.5rem" }}>2.4. Segurança</h3>
                <p style={{ fontSize: "0.95rem", color: "#666", lineHeight: 1.6, margin: 0 }}>Adotamos medidas técnicas e administrativas adequadas para proteger seus dados contra acessos não autorizados, perdas ou vazamentos.</p>
              </div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111", marginBottom: "0.5rem" }}>2.5. Seus Direitos</h3>
                <p style={{ fontSize: "0.95rem", color: "#666", lineHeight: 1.6, margin: 0 }}>Você pode solicitar acesso, correção, exclusão ou revogação do consentimento dos seus dados pessoais a qualquer momento, conforme previsto na LGPD.</p>
              </div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111", marginBottom: "0.5rem" }}>2.6. Contato</h3>
                <p style={{ fontSize: "0.95rem", color: "#666", lineHeight: 1.6, margin: 0 }}>Dúvidas sobre esta Política podem ser enviadas para: <strong>contato@lexaero.com.br</strong>.</p>
              </div>
            </div>
          </div>

          {/* CARTÃO 3: LGPD */}
          <div id="lgpd" style={{ background: "#fff", borderRadius: 16, border: "1px solid #eaeaea", padding: "3rem", marginBottom: "2rem", boxShadow: "0 4px 20px rgba(0,0,0,0.02)", scrollMarginTop: "100px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
              <div style={{ color: "var(--lex-gold)", transform: "scale(1.5)", transformOrigin: "left center" }}>
                {ICONS.lock}
              </div>
              <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "var(--lex-black)", margin: 0 }}>
                3. LGPD – Lei Geral de Proteção de Dados
              </h2>
            </div>
            
            <p style={{ fontSize: "1rem", color: "#555", lineHeight: 1.6, marginBottom: "2rem" }}>
              Estamos comprometidos com a proteção dos seus dados pessoais e<br/>
              com o cumprimento da Lei nº 13.709/2018 (LGPD).
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111", marginBottom: "0.5rem" }}>3.1. Bases Legais</h3>
                <p style={{ fontSize: "0.95rem", color: "#666", lineHeight: 1.6, margin: 0 }}>Tratamos seus dados com base no seu consentimento, execução de contrato, cumprimento de obrigação legal ou exercício regular de direitos.</p>
              </div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111", marginBottom: "0.5rem" }}>3.2. Prazo de Retenção</h3>
                <p style={{ fontSize: "0.95rem", color: "#666", lineHeight: 1.6, margin: 0 }}>Seus dados serão mantidos apenas pelo tempo necessário para as finalidades descritas nesta política ou para cumprimento de obrigações legais.</p>
              </div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111", marginBottom: "0.5rem" }}>3.3. Encarregado de Proteção de Dados (DPO)</h3>
                <p style={{ fontSize: "0.95rem", color: "#666", lineHeight: 1.6, margin: 0 }}>Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento de dados, entre em contato conosco pelo e-mail: <strong>contato@lexaero.com.br</strong>.</p>
              </div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111", marginBottom: "0.5rem" }}>3.4. Direitos do Titular</h3>
                <p style={{ fontSize: "0.95rem", color: "#666", lineHeight: 1.6, margin: 0 }}>Você tem o direito de solicitar confirmação da existência de tratamento, acesso, correção, anonimização, bloqueio, eliminação, portabilidade e revogação do consentimento.</p>
              </div>
            </div>
          </div>

          {/* RODAPÉ DO CONTEÚDO (Data) */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--lex-gold)", fontSize: "0.85rem", fontWeight: 600 }}>
            {ICONS.calendar}
            <span>Última atualização: 09/2026.</span>
          </div>

        </div>
      </section>
    </div>
  );
}
