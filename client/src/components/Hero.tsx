import { ArrowRight, CheckCircle2 } from 'lucide-react';

/**
 * Hero Section Component
 * Design: Modernismo Corporativo Elevado
 * - Layout assimétrico com imagem à direita, conteúdo à esquerda
 * - Fundo azul profundo com texto branco
 * - Animações suaves e CTAs em laranja
 */
export default function Hero() {
  const heroImageUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/hero-obra-moderna-fJFAE7NPzutYzrGLuPtEZ2.webp';

  const benefits = [
    'Mais de 10 anos de experiência',
    'Projetos de alta qualidade',
    'Equipe profissional certificada',
  ];

  return (
    <section className="relative pt-32 pb-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/90"></div>
      
      <div className="relative container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center">
        {/* Left Content */}
        <div className="text-white z-10 lg:pr-8">
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-sm font-semibold text-accent">Soluções em Engenharia</span>
          </div>

          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Transformando Projetos em Realidade
          </h1>

          <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-lg">
            A BKL Engenharia oferece soluções completas em construção, reformas e projetos de engenharia. Com profissionalismo e qualidade, entregamos obras que superam expectativas.
          </p>

          {/* Benefits List */}
          <div className="space-y-3 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-accent flex-shrink-0" />
                <span className="text-white/95">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5511943750033?text=Olá%20BKL%20Engenharia!%20Gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-white rounded-lg font-semibold hover:bg-orange-600 transition-all duration-200 hover:shadow-lg hover:shadow-accent/40 hover:translate-y-[-2px]"
            >
              Solicitar Orçamento
              <ArrowRight size={20} />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 text-white rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
            >
              Ver Portfólio
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-96 lg:h-[600px] lg:-mr-20 lg:-mb-20 overflow-hidden">
          <img
            src={heroImageUrl}
            alt="Obra de engenharia moderna"
            className="w-full h-full object-cover rounded-lg lg:rounded-none"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-primary/40"></div>
        </div>
      </div>

      {/* Diagonal Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{
        clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0 100%)'
      }}></div>
    </section>
  );
}
