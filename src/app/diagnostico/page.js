import DiagnosticForm from "@/components/DiagnosticForm";

export const metadata = {
  title: "Diagnóstico Preliminar do Caso",
  description:
    "Responda algumas perguntas sobre o que aconteceu durante sua viagem. As informações ajudam a compreender melhor a situação antes de uma análise jurídica individualizada.",
};

export default function DiagnosticoPage({ searchParams }) {
  const problema = searchParams?.problema || null;
  return (
    <div className="diag-wrap">
      <div className="diag-card">
        <div className="diag-header">
          <div className="diag-logo">
            Lex<span>Aero</span>
          </div>
          <h1 style={{ fontSize: "1.3rem", fontWeight: 600, marginBottom: "0.5rem" }}>
            Diagnóstico Preliminar do Caso
          </h1>
          <p style={{ fontSize: "0.875rem", color: "var(--text-sub)", lineHeight: 1.6 }}>
            Responda algumas perguntas sobre o que aconteceu durante sua viagem. As informações ajudam a identificar quais elementos são relevantes para uma análise jurídica mais detalhada.
          </p>
        </div>

        <DiagnosticForm initialProblem={problema} />
      </div>
    </div>
  );
}
