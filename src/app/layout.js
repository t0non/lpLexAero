import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import HeaderWrapper from "@/components/HeaderWrapper";
import FooterWrapper from "@/components/FooterWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://www.lexaero.com.br"),
  title: {
    default: "Indenização por Voo Cancelado ou Atrasado | LexAero",
    template: "%s | LexAero",
  },
  description:
    "Teve problemas com voo ou bagagem? Você pode ter direito a compensação financeira. Resolvemos seu problema de forma 100% online com mais de 90% de sucesso. Avalie seu caso agora!",
  keywords: [
    "direito do passageiro aéreo",
    "voo atrasado",
    "voo cancelado",
    "advogado voo cancelado",
    "overbooking direitos",
    "bagagem extraviada",
    "Kareline Staut",
    "LexAero",
  ],
  openGraph: {
    title: "Indenização por Voo Cancelado ou Atrasado | LexAero",
    description:
      "Teve problemas com voo ou bagagem? Você pode ter direito a compensação financeira. Resolvemos seu problema com agilidade. Avalie seu caso agora!",
    url: "https://www.lexaero.com.br",
    siteName: "LexAero",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indenização por Voo Cancelado ou Atrasado | LexAero",
    description: "Teve problemas com voo ou bagagem? Você pode ter direito a compensação financeira. Avalie seu caso agora!",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.lexaero.com.br" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <head>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "LexAero",
              "url": "https://www.lexaero.com.br",
              "description": "Boutique jurídica especializada em Direito do Passageiro Aéreo.",
              "areaServed": "BR",
              "founder": {
                "@type": "Person",
                "name": "Kareline Staut",
                "jobTitle": "Advogada",
                "knowsAbout": ["Direito do Passageiro Aéreo", "Direito do Consumidor"],
              },
              "knowsAbout": ["Direito do Passageiro Aéreo", "Transporte Aéreo", "Direito do Consumidor"],
            }),
          }}
        />
      </head>
      <body>
        <div id="google_translate_element" style={{ display: "none" }}></div>
        <Script
          id="google-translate-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement({pageLanguage: 'pt', includedLanguages: 'pt,en'}, 'google_translate_element');
              }
            `,
          }}
        />
        <Script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" strategy="afterInteractive" />
        <HeaderWrapper />
        <main id="main-content">{children}</main>
        <FooterWrapper />

      </body>
    </html>
  );
}
