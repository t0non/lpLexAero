"use client";
import { useState } from "react";
import Link from "next/link";

const FAQ_ITEMS = [
  {
    q: "Quais problemas com voos podem envolver direitos do passageiro?",
    a: "Atrasos superiores a 4 horas, cancelamentos, alterações de voo, perda de conexão, preterição de embarque (overbooking), extravio ou dano de bagagem e ausência ou inadequação da assistência prevista na Resolução nº 400 da ANAC são situações que podem gerar direitos ao passageiro.\n\nA análise de cada caso considera as circunstâncias específicas, os documentos disponíveis e a legislação aplicável.",
  },
  {
    q: "O que devo guardar após um problema com voo?",
    a: "Guarde o cartão de embarque, o comprovante de reserva, e-mails e mensagens da companhia, protocolos de atendimento, declaração de atraso ou cancelamento, comprovantes de gastos extras e fotografias do painel de voos, filas, condições do aeroporto e bagagem (se aplicável). Esses documentos são essenciais para comprovar o ocorrido.",
  },
  {
    q: "Atraso ou cancelamento gera automaticamente indenização?",
    a: "Não. A indenização não é automática e depende da análise do caso concreto, incluindo motivo do atraso/cancelamento, tempo de espera, assistência oferecida, impactos na viagem e eventuais prejuízos comprovados.",
  },
  {
    q: "A partir de quantas horas de atraso posso pedir indenização?",
    a: "Não há um número fixo. A jurisprudência considera, entre outros fatores, a duração do atraso e os transtornos causados. A partir de 4 horas de atraso, surge o direito à assistência material (comunicação, alimentação e hospedagem). A indenização por dano moral depende da análise individual do caso.",
  },
  {
    q: "O que acontece quando perco uma conexão por atraso?",
    a: "Se os trechos fazem parte do mesmo bilhete (localizador único), a companhia é responsável pelo voo que atrasou e deve garantir reacomodação no próximo voo disponível para o destino final, além da assistência material necessária. Se os bilhetes foram comprados separadamente, a responsabilidade pode ser diferente.",
  },
  {
    q: "Como funciona a assistência material?",
    a: "De acordo com a Resolução nº 400 da ANAC, a companhia deve oferecer, de forma progressiva e gratuita:\n• A partir de 1 hora de atraso: comunicação (acesso à internet ou telefone).\n• A partir de 2 horas de atraso: alimentação adequada.\n• A partir de 4 horas de atraso ou na interrupção da viagem com pernoite: transporte e hospedagem.\n\nA assistência deve ser adequada à situação e ao tempo de espera.",
  },
  {
    q: "A companhia aérea pode alterar meu voo?",
    a: "Sim, mas deve informar com antecedência mínima (72h para voos domésticos e 96h para internacionais), oferecer reacomodação em voo próprio ou de parceira, ou reembolso integral, além da assistência material quando aplicável.",
  },
  {
    q: "Minha bagagem foi extraviada. Quanto tempo a companhia tem para localizá-la?",
    a: "O prazo para entrega da bagagem é de até 7 dias para voos domésticos e até 21 dias para internacionais, contados a partir do registro da ocorrência. Se não for localizada, o passageiro tem direito à indenização pelos prejuízos (materiais e morais, quando cabível).",
  },
  {
    q: "E se a companhia negar meu embarque por overbooking?",
    a: "A companhia deve solicitar voluntários para o embarque em data ou horário posterior e oferecer compensações. Se não houver voluntários, tem o dever de reacomodação e pode haver direito à indenização por danos morais e materiais.",
  },
  {
    q: "Comprei a passagem por uma agência. Quem responde pelo problema do voo?",
    a: "A responsabilidade principal é da companhia aérea que executa o serviço de transporte. A agência responde apenas pelos serviços que intermediou, conforme o Código de Defesa do Consumidor.",
  },
  {
    q: "Como funciona o diagnóstico preliminar?",
    a: "Nosso diagnóstico é uma análise inicial e informativa da sua situação, com base nas informações fornecidas por você. Ao final, indicamos os caminhos possíveis e a viabilidade jurídica do seu caso. Não constitui parecer jurídico e não substitui a análise aprofundada de um advogado.",
  },
  {
    q: "O atendimento da LexAero é realizado online?",
    a: "Sim. Nosso atendimento é 100% online e atendemos passageiros de todo o Brasil. A comunicação é segura, prática e sigilosa.",
  },
];

const TRUST_ITEMS = [
  {
    icon: (
      <img src="/info1.png" width="36" height="36" alt="Informações confiáveis" style={{ objectFit: 'contain' }} />
    ),
    title: "Informações confiáveis",
    desc: "Conteúdo elaborado com base na legislação, normas da ANAC e jurisprudência atual.",
  },
  {
    icon: (
      <img src="/info2.png" width="36" height="36" alt="Seus direitos em primeiro lugar" style={{ objectFit: 'contain' }} />
    ),
    title: "Seus direitos em primeiro lugar",
    desc: "Nosso objetivo é orientar você para que possa tomar decisões com segurança.",
  },
  {
    icon: (
      <img src="/info3.png" width="36" height="36" alt="Atendimento especializado" style={{ objectFit: 'contain' }} />
    ),
    title: "Atendimento especializado",
    desc: "Equipe preparada para analisar cada detalhe do seu caso.",
  },
  {
    icon: (
      <img src="/info4.png" width="36" height="36" alt="Privacidade e segurança" style={{ objectFit: 'contain' }} />
    ),
    title: "Privacidade e segurança",
    desc: "Seus dados e documentos são tratados com sigilo e proteção em todas as etapas.",
  },
];

function FaqItem({ item, index, isOpen, onToggle }) {
  return (
    <div
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
      style={{
        border: "1.5px solid",
        borderColor: isOpen ? "var(--lex-gold)" : "#e5e7eb",
        borderRadius: "12px",
        overflow: "hidden",
        transition: "border-color 0.2s ease",
        background: "#fff",
      }}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          padding: "1.1rem 1.25rem",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        {/* Number badge */}
        <span style={{
          flexShrink: 0,
          width: "32px", height: "32px",
          borderRadius: "50%",
          background: "var(--lex-gold)",
          color: "#000",
          fontWeight: 700,
          fontSize: "0.85rem",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          {index + 1}
        </span>

        {/* Question text */}
        <span itemProp="name" style={{ flex: 1, fontWeight: 600, fontSize: "0.95rem", color: "#111827", lineHeight: 1.4 }}>
          {item.q}
        </span>

        {/* Chevron */}
        <svg
          width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke="var(--lex-gold)" strokeWidth="2.5"
          style={{ flexShrink: 0, transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s ease" }}
        >
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      </button>

      {/* Answer */}
      {isOpen && (
        <div
          itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"
          style={{ padding: "0 1.25rem 1.25rem 4.5rem" }}
        >
          <div itemProp="text" style={{ fontSize: "0.9rem", color: "#374151", lineHeight: 1.7 }}>
            {item.a.split("\n").map((line, i) => (
              <p key={i} style={{ margin: "0 0 0.4rem" }}>{line}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function FaqAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);
  const itemsToRender = faqs || FAQ_ITEMS;

  return (
    <section className="section" style={{ background: "#fff" }} aria-labelledby="faq-heading">
      <div className="container" style={{ maxWidth: "820px" }}>

        {/* Header */}
        <div className="text-center" style={{ marginBottom: "3rem" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.25rem" }}>
            <div style={{
              width: "56px", height: "56px", borderRadius: "50%",
              border: "2px solid var(--lex-gold)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--lex-gold)" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
            </div>
          </div>
          <h2 id="faq-heading" style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, marginBottom: "0.75rem" }}>
            Perguntas frequentes
          </h2>
          <p style={{ color: "#6b7280", fontSize: "1rem" }}>
            Respostas claras para entender seus direitos e agir com segurança.
          </p>
        </div>

        {/* Accordion */}
        <div itemScope itemType="https://schema.org/FAQPage" style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "3rem" }}>
          {itemsToRender.map((item, i) => (
            <FaqItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* Trust grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "1.5rem",
          marginBottom: "2rem",
        }}>
          {TRUST_ITEMS.map((t, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ color: "var(--lex-gold)", display: "flex", justifyContent: "center", marginBottom: "0.75rem" }}>
                {t.icon}
              </div>
              <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#111827", marginBottom: "0.4rem" }}>{t.title}</div>
              <div style={{ fontSize: "0.8rem", color: "#6b7280", lineHeight: 1.5 }}>{t.desc}</div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "1rem",
          background: "#fff9e6",
          border: "1.5px solid var(--lex-gold)",
          borderRadius: "12px",
          padding: "1.25rem 1.5rem",
        }}>
          <img src="/infoinfo.png" width="36" height="36" alt="Importante" style={{ flexShrink: 0, objectFit: 'contain' }} />
          <div>
            <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#111827", marginBottom: "0.3rem" }}>Importante</div>
            <p style={{ fontSize: "0.85rem", color: "#374151", lineHeight: 1.6, margin: 0 }}>
              As respostas acima têm caráter informativo e não substituem a análise das circunstâncias e documentos de cada caso. Para orientação personalizada, fale com nossa equipe jurídica.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
