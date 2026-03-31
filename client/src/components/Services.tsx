import { Building2, Hammer, Zap, Wind, CheckCircle2 } from 'lucide-react';

/**
 * Services Component
 * Design: Modernismo Corporativo Elevado
 * - Cards com ícones geométricos
 * - Fundo alternado com padrão diagonal
 * - Cores: Azul profundo e laranja
 */
export default function Services() {
  const services = [
    {
      id: 1,
      icon: Building2,
      title: 'Ventilação Industrial',
      description: 'Sistemas completos de ventilação industrial para processos e conforto térmico em conformidade com as leis e normas vigentes.',
      features: ['Projetos customizados', 'Instalação profissional', 'Manutenção especializada'],
    },
    {
      id: 2,
      icon: Hammer,
      title: 'Climatização Adiabática',
      description: 'Soluções inovadoras de climatização com máxima eficiência energética em conformidade com NR-18.',
      features: ['Tecnologia moderna', 'Economia de energia', 'Sustentabilidade'],
    },
    {
      id: 3,
      icon: Wind,
      title: 'Ar Condicionado',
      description: 'Sistemas de ar condicionado para conforto térmico em diversos ambientes em conformidade com NR-33.',
      features: ['Projetos customizados', 'Instalação profissional', 'Garantia de qualidade'],
    },
    {
      id: 4,
      icon: Zap,
      title: 'Exaustão de Cozinhas',
      description: 'Sistemas especializados de exaustão para cozinhas industriais em conformidade com ABNT NBR 14518:2020 e NR-12.',
      features: ['Conformidade com NR', 'Eficiencia de exaustão', 'Manutenção regular'],
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-muted relative overflow-hidden">
      {/* Diagonal Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="8" height="8">
              <path d="M-2,2 l4,-4 M0,8 l8,-8 M6,10 l4,-4" stroke="#1e3a5f" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="1200" height="800" fill="url(#diagonalHatch)" />
        </svg>
      </div>

      <div className="relative container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/30">
            <span className="text-sm font-semibold text-accent">O Que Oferecemos</span>
          </div>
          <h2 className="font-bold text-4xl md:text-5xl text-foreground mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em engenharia e construção para seus projetos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] border border-border group"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={32} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="font-bold text-xl text-foreground mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
