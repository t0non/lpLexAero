import ServiceTemplate from '@/components/ServiceTemplate';
import { servicesData } from '@/data/servicesData';

export function generateMetadata() {
  const data = servicesData['voo-atrasado'];
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
  return <ServiceTemplate serviceData={servicesData['voo-atrasado']} />;
}
