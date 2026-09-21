import ServiceTemplate from '@/componentes/ServiceTemplate';
import { servicesData } from '@/dados/servicesData';

export function generateMetadata() {
  const data = servicesData['assistencia-material'];
  return {
    title: data.seo.title,
    description: data.seo.description,
  };
}

export default function ServicePage() {
  return <ServiceTemplate serviceData={servicesData['assistencia-material']} />;
}
