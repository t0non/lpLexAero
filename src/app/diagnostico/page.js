import DiagnosticForm from "@/components/DiagnosticForm";

export const metadata = {
  title: "Diagnóstico Preliminar do Caso | LexAero",
  description: "Responda algumas perguntas sobre o que aconteceu durante sua viagem.",
};

export default function DiagnosticoPage() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "#f4f5f7" }}>
      <DiagnosticForm />
    </div>
  );
}
