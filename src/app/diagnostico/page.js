import DiagnosticForm from "@/components/DiagnosticForm";

export const metadata = {
  title: "Diagnostico Gratuito | LexAero",
  description: "Descubra em 2 minutos se voce tem direito a indenizacao por atraso, cancelamento, overbooking ou bagagem.",
};

export default function DiagnosticoPage() {
  return (
    <main style={{
      width: "100%",
      minHeight: "100vh",
      background: "#f8f7f4",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem 1rem",
      boxSizing: "border-box",
    }}>
      <DiagnosticForm />
    </main>
  );
}