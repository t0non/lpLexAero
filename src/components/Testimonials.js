"use client";
import { useState, useRef, useEffect } from "react";

const testimonials = [
  {
    name: "Erika Cristina",
    text: "A melhor advogada que já conheci! Tive um problema com minha viagem e com a companhia aérea, e em menos de dois meses o valor já estava na minha conta. Atendimento impecável, rápido e eficiente. Indico 100%!",
    img: "/Erika Cristina.png"
  },
  {
    name: "Ramon Figueirêdo",
    text: "Relação profissional muito eficiente, com confiança e transparência.",
    img: "/Ramon Figueirêdo.png"
  },
  {
    name: "Helemari Barretto Vila",
    text: "Excelente profissional! Atenciosa, educada, ágil e um trabalho impecável! Obrigada!",
    img: "/Helemari Barretto Vila.png"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.clientWidth;
      const index = Math.round(scrollLeft / width);
      setActiveIndex(index);
    }
  };

  const scrollTo = (index) => {
    if (scrollRef.current) {
      const width = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({ left: width * index, behavior: "smooth" });
    }
  };

  return (
    <section className="section section--sm bg-black" aria-label="Depoimentos e Avaliações">
      <div className="container">
        <div className="testimonials-header" style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
          <h2 className="section__title" style={{ fontSize: 'clamp(24px, 5vw, 32px)', marginBottom: 'var(--space-2)' }}>
            Centenas de passageiros já <span style={{ color: 'var(--lex-gold)' }}>receberam indenizações.</span>
          </h2>
          <p style={{ color: 'var(--lex-text-muted)', fontSize: '15px' }}>
            Mais de <strong style={{ color: 'var(--lex-gold)' }}>90% de taxa de sucesso</strong> contra companhias aéreas.
          </p>
        </div>

        <div className="testimonials-wrapper">
          <div 
            className="testimonials-grid" 
            ref={scrollRef}
            onScroll={handleScroll}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div className="testimonial__stars" style={{ display: 'flex', gap: '2px', color: 'var(--lex-gold)' }}>
                    {'★★★★★'.split('').map((star, idx) => <span key={idx}>{star}</span>)}
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20px" height="20px">
                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                  </svg>
                </div>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--lex-text)', flexGrow: 1, fontStyle: 'italic' }}>
                  "{t.text}"
                </p>
                <div className="testimonial__author" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                  <img src={t.img} alt={t.name} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                  <div>
                    <div style={{ fontWeight: '600', fontSize: '14px' }}>{t.name}</div>
                    <div style={{ fontSize: '12px', color: 'var(--lex-text-muted)' }}>Cliente LexAero</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="testimonials-dots">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                className={`dot ${i === activeIndex ? 'active' : ''}`}
                onClick={() => scrollTo(i)}
                aria-label={`Ver depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
