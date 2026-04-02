import { Star } from 'lucide-react';

/**
 * Testimonials Component
 * Design: Modernismo Corporativo Elevado
 * - Cards com depoimentos de clientes
 * - Avaliações em estrelas
 * - Cores: Azul profundo com acentos em laranja
 */
export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'João Silva',
      company: 'Empresa XYZ',
      text: 'A BKL Engenharia realizou uma reforma completa em nosso escritório. O trabalho foi impecável, dentro do prazo e orçamento. Recomendo!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Maria Santos',
      company: 'Construtora ABC',
      text: 'Profissionalismo, qualidade e pontualidade. A BKL entregou um projeto de ventilação industrial que superou nossas expectativas.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Carlos Oliveira',
      company: 'Residencial Premium',
      text: 'Excelente atendimento e execução de obra. A equipe da BKL é competente e atenciosa com cada detalhe.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/30">
            <span className="text-sm font-semibold text-accent">Quem Somos</span>
          </div>
          <h2 className="font-bold text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#0000c1' }}>
            Conheça a BKL Engenharia
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Somos uma empresa especializada em Projetos, Vendas e Instalações de sistemas de Exaustão para Cozinhas Industriais, Pressurização de Escadas de Emergência, Ventilação Industrial, Ar Condicionado e Climatização Evaporativa.
            <br /><br />
            Nossa experiência em diversas obras permite um melhor planejamento e atendimento às necessidades dos nossos clientes.
            <br /><br />
            Atendemos ainda com equipe qualificada nas áreas de manutenção preventiva, corretiva e limpeza de sistemas de exaustão em coifas de cozinhas industriais para assegurar o funcionamento de sistemas instalados e garantindo maior durabilidade e perfeita função de cada equipamento instalado pela própria empresa ou por terceiros.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-lg p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border group"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent overflow-hidden">
                  <div className="w-full h-full bg-muted flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
