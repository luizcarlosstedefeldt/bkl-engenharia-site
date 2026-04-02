import { ArrowRight, Lightbulb, Target, Heart, Users, Award, TrendingUp } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

/**
 * About Page
 * Design: Modernismo Corporativo Elevado
 * - Página dedicada com missão, visão, valores e histórico
 * - Layout assimétrico com seções bem definidas
 * - Cores: Azul profundo e laranja
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
      description: 'Consolidação no mercado com projetos em indústrias alimentícias, de energia e combustíveis. Investimento em qualificação de equipe.'
    },
    {
      year: '2020',
      title: 'Associação ABRAVA',
      description: 'Filiação à ABRAVA (Associação Brasileira de Refrigeração, Ar Condicionado, Ventilação e Aquecimento), reforçando compromisso com excelência.'
    },
    {
      year: '2021-2023',
      title: 'Diversificação de Serviços',
      description: 'Expansão para novos segmentos: hotéis, galpões logísticos, edifícios comerciais e residenciais. Implementação de sistemas de pressurização de escadas.'
    },
    {
      year: '2024-2025',
      title: 'Inovação e Modernização',
      description: 'Investimento em equipamentos de última geração, modernização de processos e expansão da capacidade de fabricação e instalação com equipe própria.'
    }
  ];

  const team = [
    {
      id: 1,
      title: 'Equipe Qualificada',
      description: 'Profissionais devidamente habilitados e certificados para exercer suas funções, garantindo qualidade em todos os projetos.'
    },
    {
      id: 2,
      title: 'Conformidade Normativa',
      description: 'Atendimento rigoroso às normas NR-18, NR-12, NR-10, NR-33, NR-06, NR-01, NR-11 e ABNT NBR 14518:2020.'
    },
    {
      id: 3,
      title: 'Suporte Técnico',
      description: 'Equipe especializada em manutenção e suporte técnico para garantir funcionamento perfeito dos sistemas instalados.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-primary to-primary/90">
          <div className="relative container">
            <div className="max-w-3xl">
              <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm font-semibold text-accent">Conheça Nossa História</span>
              </div>
              <h1 className="font-bold text-5xl md:text-6xl text-white mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Sobre a BKL Engenharia
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Desde 2017, transformamos projetos em realidade através de soluções inovadoras em ventilação industrial, climatização e ar condicionado.
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Mission */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-border hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-orange-600 rounded-lg flex items-center justify-center mb-6">
                  <Target size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-2xl text-foreground mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Missão
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Manter-nos como empresa solidificada e em crescimento contínuo, desenvolvendo soluções comerciais e tecnológicas que atendam às necessidades específicas de cada cliente com excelência e inovação.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-border hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-orange-600 rounded-lg flex items-center justify-center mb-6">
                  <Lightbulb size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-2xl text-foreground mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Visão
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nosso objetivo é estar focado em atender as necessidades dos clientes através de tecnologia moderna e eficaz, qualidade de fabricação e de Instalações, e se possível superar suas expectativas.
                  <br /><br />
                  Engenharia, desenvolvimento e atendimento. Este foco é um compromisso de todos os colaboradores e perfil de trabalho da organização.
                </p>
              </div>

              {/* Values */}
              <div className="bg-white rounded-lg p-8 shadow-sm border border-border hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-orange-600 rounded-lg flex items-center justify-center mb-6">
                  <Heart size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-2xl text-foreground mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Valores
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Excelência, sustentabilidade, integridade, segurança e reconhecimento. Estes valores guiam todas as nossas ações e decisões, refletindo nosso compromisso com qualidade e responsabilidade.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-muted">
          <div className="container">
            <div className="mb-16 text-center">
              <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/30">
                <span className="text-sm font-semibold text-accent">Nossos Princípios</span>
              </div>
              <h2 className="font-bold text-4xl md:text-5xl text-foreground mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Valores que Guiam Nossa Empresa
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Estes princípios fundamentais orientam todas as nossas decisões e ações.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.id}
                    className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] border border-border group"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={32} className="text-white" />
                    </div>
                    <h3 className="font-bold text-xl text-foreground mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline/History */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="mb-16 text-center">
              <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/30">
                <span className="text-sm font-semibold text-accent">Nossa Trajetória</span>
              </div>
              <h2 className="font-bold text-4xl md:text-5xl text-foreground mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Histórico da BKL Engenharia
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Uma jornada de crescimento, inovação e excelência desde nossa fundação em 2017.
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-orange-600 transform md:-translate-x-1/2"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:ml-1/2 md:pl-8'}`}>
                    {/* Timeline Dot */}
                    <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-accent rounded-full border-4 border-white transform md:-translate-x-1/2 -translate-x-1.5"></div>

                    {/* Content */}
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-border hover:shadow-lg transition-all duration-300">
                      <span className="inline-block px-3 py-1 bg-accent/10 rounded-full text-sm font-semibold text-accent mb-3">
                        {milestone.year}
                      </span>
                      <h3 className="font-bold text-xl text-foreground mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team & Expertise */}
        <section className="py-20 bg-muted">
          <div className="container">
            <div className="mb-16 text-center">
              <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/30">
                <span className="text-sm font-semibold text-accent">Nossa Força</span>
              </div>
              <h2 className="font-bold text-4xl md:text-5xl text-foreground mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Equipe e Expertise
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Profissionais qualificados e comprometidos com a excelência em cada projeto.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((item) => (
                <div key={item.id} className="bg-white rounded-lg p-8 shadow-sm border border-border hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-orange-600 rounded-lg flex items-center justify-center mb-6">
                    <Users size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/90">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-bold text-4xl md:text-5xl text-white mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Pronto para Transformar Seu Projeto?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Conheça nossas soluções inovadoras em ventilação industrial, climatização e ar condicionado. Entre em contato conosco hoje mesmo.
              </p>
              <a
                href="https://wa.me/5511943750033?text=Olá%20BKL%20Engenharia!%20Gostaria%20de%20conhecer%20melhor%20seus%20serviços."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-white rounded-lg font-semibold hover:bg-orange-600 transition-all duration-200 hover:shadow-lg hover:shadow-accent/40 hover:translate-y-[-2px]"
              >
                Fale Conosco no WhatsApp
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
