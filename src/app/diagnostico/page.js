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
        <div className="diag-header" style={{ borderBottom: 'none', paddingBottom: 0, marginBottom: '0.5rem' }}>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#ecfdf5', color: '#059669', border: '1px solid #a7f3d0', padding: '4px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: 600 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
              100% GRATUITA
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#fffbeb', color: '#d97706', border: '1px solid #fde68a', padding: '4px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: 600 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              4.9 • +2.300 análises
            </span>
          </div>
        </div>

        <DiagnosticForm initialProblem={problema} />
      </div>
    </div>
  );
}
