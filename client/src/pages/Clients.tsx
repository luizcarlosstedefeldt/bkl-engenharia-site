import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Clients Page
 * Design: Modernismo Corporativo Elevado
 * - Grid de logos com efeito hover
 * - Cores: Azul profundo e laranja
 * - Seção de projetos em destaque
 */

export default function Clients() {
  const clients = [
    {
      id: 1,
      name: 'Alpargatas',
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/alpargatas-logo-150x96_9db8cdfa.png',
      category: 'Indústria Alimenticia',
      largeSize: true
    },
    {
      id: 2,
      name: 'Anglo American',
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/ANGLOAMERICAN_e7e2badc.png',
      category: 'Mineradora'
    },
    {
      id: 3,
      name: 'ArcelorMittal',
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/ARCELORMITTAL_b628c3ba.png',
      category: 'Siderurgia'
    },
    {
      id: 4,
      name: 'Atlas Copco',
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/ATLASCOPCO_bd8d5e9a.png',
      category: 'Equipamentos Industriais'
    },
    {
      id: 5,
      name: 'Gerdau',
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/Gerdau__10d14339.png',
      category: 'Siderurgia'
    },
    {
      id: 6,
      name: 'Bracell',
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/BRACELL_f6dbbda4.jpeg',
      category: 'Celulose e Papel'
    },
    {
      id: 7,
      name: 'Aurora',
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/AURORA_07855ea8.jpeg',
      category: 'Indústria Alimentícia'
    },
    {
      id: 8,
      name: 'LD Celulose',
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/LDCelulose_5f59d9e6.png',
      category: 'Celulose e Papel'
    },
    {
      id: 9,
      name: 'Ajinomoto',
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/AJINOMOTO_2c84f2e6.png',
      category: 'Indústria Alimentícia'
    },
    {
      id: 10,
      name: 'FIAT',
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/FIAT_396e3a34.webp',
      category: 'Automotiva'
    },
    {
      id: 11,
      name: 'Embraer',
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/embraer-logo-hq_c7328b08.jpg',
      category: 'Aeronáutica',
      largeSize: true
    },
    {
      id: 12,
      name: 'Frasle',
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/frasle-logo_426ca503.png',
      category: 'Automotiva'
    }
  ];

  const featuredProjects = [
    {
      id: 1,
      title: 'Gerdau',
      description: 'Elaboração de projetos executivos, Fornecimento e Montagem de 08 Sistemas exaustão e ventilação em Cozinhas industriais nas plantas da Siderurgia e da Mineração, com capacidade de mais de 40.000 refeições / dia.',
      image: '',
      clientLogo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/gerdau-logo_2e6ff44f.png',
      client: 'Gerdau',
      category: 'Exaustão de Coifas em Cozinhas Industriais',
      year: '2022 - 2026'
    },
    {
      id: 2,
      title: 'Bracell',
      description: 'Projetos de sistemas de Climatização, Ventilação e Exaustão de Cozinhas Industriais que atenderá a capacidade de mais de 4500 refeições/dia.',
      image: '',
      clientLogo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/bracell-logo_95cd929a.png',
      client: 'Bracell',
      category: 'Projetos de sistemas de Climatização, Ventilação e Exaustão de Cozinhas Industriais',
      year: '2025'
    },
    {
      id: 3,
      title: 'Alpargatas',
      description: 'Sistema de exaustão para cozinha industrial com capacidade de 30.000 m³/h. Conformidade com ABNT NBR 14518:2020.',
      image: '',
      clientLogo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/ALPARGATAS_567efb9f.jpeg',
      client: 'Alpargatas',
      category: 'Ventilação e Exaustão de Coifas',
      year: '2023'
    },
    {
      id: 4,
      title: 'Serbom',
      description: 'Projeto de distribuição de ar com Sistemas de desumidificação industrial incluindo tecnologia avançada para controle de umidade em ambientes de armazenagem de resfriados e congelados. Solução completa com monitoramento em tempo real.',
      image: '',
      clientLogo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/serbom-logo-projeto_33c1deaa.png',
      client: 'Serbom',
      category: 'Desumidificação Industrial',
      year: '2024'
    },
    {
      id: 5,
      title: 'Aurora',
      description: 'Sistemas de climatização em áreas administrativas, exaustão e ventilação de coifas em cozinhas industriais. Solução integrada para conforto térmico e qualidade do ar.',
      image: '',
      clientLogo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/aurora-logo_7da9c3e8.png',
      client: 'Aurora',
      category: 'Climatização e Exaustão',
      year: '2024'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
            <defs>
              <pattern id="clientPattern" patternUnits="userSpaceOnUse" width="100" height="100">
                <circle cx="50" cy="50" r="30" fill="currentColor" opacity="0.1" />
              </pattern>
            </defs>
            <rect width="1200" height="400" fill="url(#clientPattern)" />
          </svg>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Principais Clientes
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Confiados por grandes empresas brasileiras e multinacionais para soluções de ventilação industrial, climatização e exaustão de alta qualidade.
            </p>
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-2 text-foreground" style={{ width: '600px' }}>
              Empresas que Confiam na BKL Engenharia
            </h2>
            <p className="text-muted-foreground text-lg">
              Mais de 50 projetos realizados em diversos segmentos industriais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client) => (
              <div
                key={client.id}
                className="group bg-card border border-border rounded-lg p-8 hover:shadow-lg hover:border-accent transition-all duration-300 flex flex-col items-center justify-center min-h-48"
              >
                <div className="mb-4 h-24 flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    style={{ width: client.largeSize ? '300px' : '150px' }}
                    className="max-h-24 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="font-bold text-foreground mb-2 text-center">
                  {client.name}
                </h3>
                <p className="text-sm text-muted-foreground text-center">
                  {client.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-muted relative overflow-hidden">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-2 text-foreground">
              Projetos em Destaque
            </h2>
            <p className="text-muted-foreground text-lg">
              Conheça alguns dos principais trabalhos realizados com excelência
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg hover:border-accent transition-all duration-300"
              >
                {project.image && (
                  <div className="relative h-7 overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-3 py-1 m-3 rounded-full text-sm font-semibold">
                      {project.year}
                    </div>
                  </div>
                )}
                {!project.image && (
                  <div className="h-7 bg-muted flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-muted-foreground text-sm font-semibold">{project.year}</p>
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <p className="text-sm text-accent font-semibold mb-2">{project.category}</p>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    {project.clientLogo ? (
                      <img
                        src={project.clientLogo}
                        alt={project.client}
                        style={{ width: project.id === 3 ? '85px' : project.id === 4 ? '80px' : '50px', height: project.id === 3 || project.id === 4 ? '52px' : '38px' }}
                        className="object-contain"
                      />
                    ) : (
                      <span className="text-sm font-semibold text-foreground">{project.client}</span>
                    )}
                    <ArrowRight size={16} className="text-accent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-muted relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
            <defs>
              <pattern id="statPattern" patternUnits="userSpaceOnUse" width="50" height="50">
                <rect x="0" y="0" width="50" height="50" fill="none" stroke="#1e3a5f" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="1200" height="400" fill="url(#statPattern)" />
          </svg>
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">50+</div>
              <p className="text-foreground text-lg">Projetos Realizados</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">12</div>
              <p className="text-foreground text-lg">Principais Clientes</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">8+</div>
              <p className="text-foreground text-lg">Anos de Experiência</p>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 300" preserveAspectRatio="none">
            <defs>
              <pattern id="ctaPattern" patternUnits="userSpaceOnUse" width="60" height="60">
                <path d="M0,30 Q15,0 30,30 T60,30" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="1200" height="300" fill="url(#ctaPattern)" />
          </svg>
        </div>

        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-6">
              Sua Empresa Pode Ser Nossa Próxima Referência
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Entre em contato conosco e descubra como a BKL Engenharia pode oferecer soluções inovadoras para seus desafios de ventilação e climatização industrial.
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                onClick={() => window.open('https://wa.me/5511943750033', '_blank')}
              >
                Fale Conosco via WhatsApp
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
