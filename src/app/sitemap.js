export default function sitemap() {
  const baseUrl = 'https://www.lexaero.com.br';
  
  const routes = [
    '',
    '/voo-atrasado',
    '/voo-cancelado',
    '/overbooking',
    '/bagagem',
    '/conexao-perdida',
    '/assistencia-material',
    '/outros-problemas',
    '/reembolso',
    '/diagnostico',
    '/kareline-staut',
    '/radar-juridico',
    '/blog',
    '/lgpd'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
