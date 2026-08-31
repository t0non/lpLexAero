export const metadata = {
  title: "Diagnóstico Preliminar do Caso",
  description:
    "Responda algumas perguntas sobre o que aconteceu durante sua viagem. As informações ajudam a compreender melhor a situação antes de uma análise jurídica individualizada.",
};

export default function DiagnosticoPage() {
  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "#0a0a0a" }}>
      <iframe
        src="/lexaero-calculadora.html"
        title="Diagnóstico Preliminar de Caso — LexAero"
        style={{
          width: "100%",
          height: "100vh",
          border: "none",
          display: "block",
        }}
        loading="eager"
      />
    </div>
  );
}
