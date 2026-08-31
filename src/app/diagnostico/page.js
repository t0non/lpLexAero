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
        <DiagnosticForm initialProblem={problema} />
      </div>
    </div>
  );
}
