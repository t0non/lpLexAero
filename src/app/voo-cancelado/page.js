import ServiceTemplate from '@/components/ServiceTemplate';
import { servicesData } from '@/data/servicesData';

export function generateMetadata() {
  const data = servicesData['voo-cancelado'];
  return {
    title: data.seo.title,
    description: data.seo.description,
  };
}

export default function ServicePage() {
  return <ServiceTemplate serviceData={servicesData['voo-cancelado']} />;
}
