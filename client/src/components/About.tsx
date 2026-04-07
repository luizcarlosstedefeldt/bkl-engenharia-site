import { Lightbulb, TrendingUp, Heart, Award } from 'lucide-react';

/**
 * About Section Component
 * Design: Modernismo Corporativo Elevado
 * - Seção sobre empresa com missão, visão, valores e histórico
 * - Integrada na página one-page
 */
export default function About() {
  const values = [
    {
      id: 1,
      icon: Lightbulb,
      title: 'Engenharia como Ferramenta',
      description: 'Utilizamos a engenharia como ferramenta para alcançar a excelência em nossos produtos e serviços.'
    },
    {
      id: 2,
      icon: TrendingUp,
      title: 'Sustentabilidade',
      description: 'Foco em sustentabilidade com programas voltados à reciclagem de materiais e eficiência energética.'
    },
    {
      id: 3,
      icon: Heart,
      title: 'Integridade e Segurança',
      description: 'Integridade de nossos colaboradores com foco em sua segurança e bem-estar, seguindo todas as normas vigentes.'
    },
    {
      id: 4,
      icon: Award,
      title: 'Reconhecimento',
      description: 'Busca pelo sucesso através do reconhecimento dos bons serviços prestados e satisfação dos clientes.'
    }
  ];

  const milestones = [
    {
      year: '2017',
      title: 'Fundação da BKL Engenharia',
      description: 'Empresa fundada com objetivo de oferecer soluções inovadoras em ventilação industrial, climatização e ar condicionado.'
    },
    {
      year: '2018-2019',
      title: 'Expansão e Consolidação',
      description: 'Consolidação no mercado com projetos em indústrias alimentícias, de energia, celulose, mineração e combustíveis. Investimento em equipamentos, frota de veículos e qualificação de equipe.'
    },
    {
      year: '2020',
      title: 'Associação ABRAVA',
      description: 'Filiação à ABRAVA (Associação Brasileira de Refrigeração, Ar Condicionado, Ventilação e Aquecimento), reforçando compromisso com excelência.'
    },
    {
      year: '2021-2023',
      title: 'Diversificação de Serviços',
      description: 'Expansão para novos segmentos: hotéis, galpões logísticos e edífcios comerciais. Implementação de sistemas de pressurização de escadas e detecção de fumaça para as obras de grandes Construtoras.'
    },
    {
      year: '2024-2025',
      title: 'Inovação e Modernização',
      description: 'Investimento em tecnologia, modernização de processos e expansão da capacidade de fabricação e instalação.'
    }
  ];

  const team = [
    {
      id: 1,
      title: 'Equipe Qualificada',
      description: 'Profissionais próprios devidamente habilitados, documentados e certificados para exercer suas funções, garantindo qualidade em todos os projetos.'
    },
    {
      id: 2,
      title: 'Conformidade Normativa',
      description: 'Atendimento rigoroso às normas nacionais NR-18, NR-15, NR-12, NR-10, NR-33, NR-06, NR-01, NR-11 e ABNT NBR 14518:2020 e 16401:2025. Instruções Técnicas do Corpo de Bombeiros e ANVISA.'
    },
    {
      id: 3,
      title: 'Suporte Técnico',
      description: 'Equipe especializada em manutenção, incluindo limpeza de sistemas de exaustão de coifas industriais, incluindo suporte técnico para garantir funcionamento perfeito dos sistemas instalados.'
    }
  ];

  return (
    <div id="sobre" className="scroll-mt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary to-primary/90">
        <div className="relative container">
          <div className="max-w-3xl">
            <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm font-semibold text-accent">Conheça Nossa História</span>
            </div>
            <h1 className="font-bold text-5xl md:text-6xl text-white mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Sobre a BKL Engenharia
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Mais de uma década transformando projetos em realidade através de soluções inovadoras em ventilação industrial, climatização e exaustão.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="p-8 bg-white rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-primary mb-4">Missão</h3>
              <p className="text-foreground/80 leading-relaxed">
                Oferecer soluções completas em projetos, fabricação e instalação de sistemas de ventilação industrial, climatização e exaustão com excelência, profissionalismo e conformidade às normas vigentes.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-primary mb-4">Visão</h3>
              <p className="text-foreground/80 leading-relaxed">
                Ser referência nacional em soluções de engenharia para ventilação industrial, climatização e exaustão, reconhecida pela qualidade, inovação e compromisso com a satisfação dos clientes.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-primary mb-4">Valores</h3>
              <p className="text-foreground/80 leading-relaxed">
                Excelência, integridade, sustentabilidade, segurança, inovação e satisfação do cliente são os pilares que guiam todas as nossas ações e decisões.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-primary mb-12">Nossos Valores</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.id} className="flex gap-4 p-6 bg-white rounded-lg border border-border hover:border-accent transition-colors">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">{value.title}</h3>
                      <p className="text-foreground/80">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-primary mb-12">Nossa Jornada</h2>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-8">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-accent mt-2"></div>
                    {index < milestones.length - 1 && <div className="w-1 h-24 bg-accent/20 mt-4"></div>}
                  </div>
                  <div className="pb-8">
                    <p className="text-sm font-semibold text-accent mb-2">{milestone.year}</p>
                    <h3 className="text-xl font-bold text-primary mb-2">{milestone.title}</h3>
                    <p className="text-foreground/80">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div>
            <h2 className="text-4xl font-bold text-primary mb-12">Por Que Nos Escolher</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((item) => (
                <div key={item.id} className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border border-primary/10">
                  <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                  <p className="text-foreground/80 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
