import Link from "next/link";
import { blogPosts } from "@/data/blogData";

export const metadata = {
  title: "Blog | LexAero",
  description:
    "Artigos e guias sobre direito do passageiro aéreo: voo atrasado, cancelado, bagagem extraviada e muito mais. Conteúdo gratuito da LexAero.",
};

export default function BlogPage() {
  return (
    <div className="blog-listing-page">
      {/* ── HERO DO BLOG ── */}
      <section className="blog-hero" style={{ 
        backgroundImage: "linear-gradient(rgba(17, 17, 17, 0.85), rgba(17, 17, 17, 0.95)), url('/wing_sunset_bg.jpg')", 
        backgroundSize: "cover", 
        backgroundPosition: "center" 
      }}>
        <div className="container">
          <span className="eyebrow" style={{ color: "var(--lex-gold)" }}>
            CONTEÚDO GRATUITO
          </span>
          <h1 className="blog-hero__title">
            Seu guia de direitos como passageiro aéreo
          </h1>
          <p className="blog-hero__subtitle">
            Artigos escritos por especialistas em Direito do Passageiro Aéreo para você conhecer seus direitos e saber como agir em cada situação.
          </p>
        </div>
      </section>

      {/* ── GRID DE ARTIGOS ── */}
      <section className="section bg-ivory">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.slug} className="blog-card">
                <div className="blog-card__image-wrap" style={{ position: "relative", overflow: "hidden", borderRadius: "12px 12px 0 0", aspectRatio: "16/9", background: "#111" }}>
                  {post.coverImage && (
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      loading="lazy"
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  )}

                  <div className="blog-card__image-overlay" />
                </div>

                <div className="blog-card__body">
                  <div className="blog-card__meta">
                    <span>{post.date}</span>
                    <span className="blog-card__dot">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="blog-card__title">{post.title}</h2>
                  <p className="blog-card__summary">{post.summary}</p>
                  <Link href={`/blog/${post.slug}`} className="blog-card__link">
                    Ler artigo completo
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* CTA ao final */}
          <div className="blog-cta-box" style={{ textAlign: "left" }}>
            <div className="blog-cta-box__content" style={{ textAlign: "left" }}>
              <h2 className="blog-cta-box__title" style={{ textAlign: "left" }}>
                Passou por algum problema em seu voo?
              </h2>
              <p style={{ textAlign: "left" }}>Nossa análise é gratuita e leva menos de 2 minutos.</p>
            </div>
            <Link href="/diagnostico" className="btn btn--primary btn--lg" style={{ color: "var(--lex-black)" }}>
              Analisar meu caso gratuitamente
              <span className="btn__icon-circle" aria-hidden="true">
                <img src="/aviao.svg" width="20" height="20" alt="" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
