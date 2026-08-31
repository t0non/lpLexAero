export const metadata = {
  title: "Calculadora de Indenização Aérea | LexAero",
  description:
    "Ferramenta gratuita de diagnóstico preliminar do seu caso. Descubra em minutos se você tem direito à indenização por problemas com voo.",
};

export default function CalculadoraPage() {
  return (
    <div style={{ width: "100%", minHeight: "100vh" }}>
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
