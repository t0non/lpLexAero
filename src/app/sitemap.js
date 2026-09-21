import { supabase } from "@/lib/supabaseClient";

export default async function sitemap() {
  const baseUrl = 'https://www.lexaero.com.br';
  
  const staticRoutes = [
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

  let dynamicRoutes = [];
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('slug, updated_at');
    
    if (!error && data) {
      dynamicRoutes = data.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.updated_at || new Date()),
        changeFrequency: 'monthly',
        priority: 0.7,
      }));
    }
  } catch (err) {
    console.error("Error fetching blog posts for sitemap:", err);
  }

  return [...staticRoutes, ...dynamicRoutes];
}
