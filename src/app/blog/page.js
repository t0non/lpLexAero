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
      <section className="blog-hero">
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
                  <span className="blog-card__category">{post.category}</span>
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
          <div className="blog-cta-box">
            <div className="blog-cta-box__content">
              <h2 className="blog-cta-box__title">
                Passou por algum problema em seu voo?
              </h2>
              <p>Nossa análise é gratuita e leva menos de 2 minutos.</p>
            </div>
            <Link href="/diagnostico" className="btn btn--primary btn--lg" style={{ color: "var(--lex-black)" }}>
              Analisar meu caso gratuitamente
              <span className="btn__icon-circle" aria-hidden="true" style={{ background: "#fff", color: "var(--lex-gold)" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1281 1920" preserveAspectRatio="xMidYMid meet" version="1.0">
                  <defs><clipPath id="aviao-blog-cta"><path d="M 100 386 L 1182 386 L 1182 1465.921875 L 100 1465.921875 Z M 100 386" clipRule="nonzero" /></clipPath></defs>
                  <g clipPath="url(#aviao-blog-cta)"><path fill="currentColor" d="M 1170.144531 397.558594 C 1129.84375 357.300781 969.78125 435.792969 916.152344 489.46875 L 777.460938 628.160156 L 174.851562 521.820312 C 170.257812 520.992188 165.523438 522.460938 162.214844 525.769531 L 104.957031 583.078125 C 101.691406 586.339844 100.175781 590.980469 100.910156 595.53125 C 101.648438 600.082031 104.496094 603.988281 108.632812 606.054688 L 580.222656 841.847656 L 380.5 1097.40625 L 203.484375 1066.15625 C 198.84375 1065.421875 194.15625 1066.796875 190.847656 1070.109375 L 147.878906 1113.074219 C 144.707031 1116.246094 143.144531 1120.796875 143.789062 1125.253906 C 144.523438 1129.804688 147.1875 1133.710938 151.1875 1135.777344 L 296.957031 1214.269531 L 259.730469 1288.667969 C 256.976562 1294.183594 258.078125 1300.847656 262.445312 1305.167969 C 265.246094 1307.925781 268.878906 1309.304688 272.597656 1309.304688 C 274.757812 1309.304688 276.964844 1308.84375 278.988281 1307.832031 L 353.386719 1270.609375 L 431.878906 1416.378906 C 434.039062 1420.328125 437.945312 1423.085938 442.402344 1423.824219 C 443.09375 1423.914062 443.734375 1423.914062 444.472656 1423.914062 C 448.238281 1423.914062 451.871094 1422.488281 454.628906 1419.777344 L 497.59375 1376.765625 C 500.902344 1373.457031 502.375 1368.769531 501.59375 1364.21875 L 470.34375 1187.109375 L 725.898438 987.386719 L 961.695312 1458.976562 C 963.761719 1463.113281 967.714844 1465.964844 972.21875 1466.699219 C 973 1466.835938 973.734375 1466.882812 974.605469 1466.882812 C 978.375 1466.882812 981.914062 1465.410156 984.671875 1462.699219 L 1042.023438 1405.394531 C 1045.238281 1402.085938 1046.800781 1397.398438 1045.976562 1392.757812 L 939.636719 790.148438 L 1078.328125 651.457031 C 1132.003906 597.828125 1210.449219 437.859375 1170.144531 397.558594 Z" fillOpacity="1" fillRule="nonzero" /></g>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
