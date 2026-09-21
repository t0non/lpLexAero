import ServiceTemplate from '@/componentes/ServiceTemplate';
import { servicesData } from '@/dados/servicesData';

export function generateMetadata() {
  const data = servicesData['bagagem'];
  const { seo } = data;
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: seo.canonical },
    openGraph: {
      ...seo.openGraph,
      siteName: "LexAero",
      locale: "pt_BR",
      type: "website",
      images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630 }],
    },
  };
}

export default function ServicePage() {
  return <ServiceTemplate serviceData={servicesData['bagagem']} />;
}
