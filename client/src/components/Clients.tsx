import { Button } from '@/components/ui/button';

/**
 * Clients Section Component
 * Design: Modernismo Corporativo Elevado
 * - Grid de logos com efeito hover
 * - Cores: Azul profundo e laranja
 * - Seção de projetos em destaque
 * - Integrada na página one-page
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
    },
    {
      id: 13,
      name: 'Hyundai',
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/hyundai-logo_eb0c8063.png',
      category: 'Automotiva'
    },
    {
      id: 14,
      name: 'Construcap',
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/construcap-logo_2ea70684.png',
      category: 'Construção'
    },
    {
      id: 15,
      name: 'Danone',
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/danone-logo_b25e916d.png',
      category: 'Indústria Alimentícia'
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'Gerdau',
      description: 'Sistema completo de ventilação industrial com capacidade de 50.000 m³/h para planta siderúrgica. Conformidade com NR-10 e NR-18.',
      image: '',
      clientLogo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/Gerdau__10d14339.png',
      client: 'Gerdau',
      category: 'Ventilação Industrial',
      year: '2023'
    },
    {
      id: 2,
      title: 'Bracell',
      description: 'Instalação de sistema de climatização evaporativa em área de 5.000 m². Redução de 40% no consumo de energia.',
      image: '',
      clientLogo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/BRACELL_f6dbbda4.jpeg',
      client: 'Bracell',
      category: 'Climatização',
      year: '2023'
    },
    {
      id: 3,
      title: 'Alpargatas',
      description: 'Sistema de exaustão para cozinha industrial com capacidade de 30.000 m³/h. Conformidade com ABNT NBR 14518:2020.',
      image: '',
      clientLogo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/ALPARGATAS_567efb9f.jpeg',
      client: 'Alpargatas',
      category: 'Ventilação e Exaustão de Coifas',
      year: '2022'
    },
    {
      id: 4,
      title: 'Serbom',
      description: 'Projeto de distribuição de ar com Sistemas de desumidificação industrial incluindo tecnologia avançada para controle de umidade em ambientes de armazenagem de resfriados e congelados. Solução completa com monitoramento em tempo real.',
      image: '',
      clientLogo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/serbom-logo-projeto_33c1deaa.png',
      client: 'Serbom',
      category: 'Desumidificação Industrial',
      year: '2022'
    },
    {
      id: 5,
      title: 'Aurora',
      description: 'Sistemas de climatização em áreas administrativas, exaustão e ventilação de coifas em cozinhas industriais. Solução integrada para conforto térmico e qualidade do ar.',
      image: '',
      clientLogo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/aurora-logo_7da9c3e8.png',
      client: 'Aurora',
      category: 'Climatização e Exaustão',
      year: '2024 - 2026'
    },
    {
      id: 6,
      title: 'Suzano',
      description: 'Projetos de sistemas de Climatização, Ventilação e Exaustão em unidades de produção de celulose. Solução completa com conformidade às normas ambientais e de segurança.',
      image: '',
      clientLogo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/suzano-logo-updated_0ab0c231.png',
      client: 'Suzano',
      category: 'Climatização e Ventilação Industrial',
      year: '2025'
    }
  ];

  return (
    <div id="clientes" className="scroll-mt-20">
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
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Empresas que Confiam na BKL Engenharia
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Confiados por grandes empresas brasileiras e multinacionais para soluções de ventilação industrial, climatização e exaustão de alta qualidade.
            </p>
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-center">
            {clients.map((client) => (
              <div
                key={client.id}
                className="flex items-center justify-center p-6 bg-white rounded-lg border border-border hover:border-accent hover:shadow-lg transition-all duration-300 group"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className={`object-contain transition-all duration-300 group-hover:scale-110 ${
                    client.largeSize ? 'h-20 w-40' : 'h-16 w-32'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Projetos em Destaque</h2>
            <p className="text-lg text-foreground/70">Conheça alguns dos principais trabalhos realizados pela BKL Engenharia</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                {project.image && (
                  <div className="h-48 bg-muted overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <div className="p-6">
                  {project.clientLogo && (
                    <div className="mb-4 flex items-center">
                      <img
                        src={project.clientLogo}
                        alt={project.client}
                        className="h-12 object-contain hover:scale-110 transition-transform duration-300"
                        style={{ width: 'auto' }}
                      />
                    </div>
                  )}
                  
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-primary">{project.title}</h3>
                    <div className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded">
                      {project.year}
                    </div>
                  </div>
                  
                  <p className="text-sm text-accent mb-3 font-medium">{project.category}</p>
                  <p className="text-foreground/80 text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 mt-20 pt-20 border-t border-border">
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">15+</div>
              <p className="text-foreground/70">Clientes Principais</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">6+</div>
              <p className="text-foreground/70">Projetos em Destaque</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">10+</div>
              <p className="text-foreground/70">Anos de Experiência</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <p className="text-lg text-foreground/70 mb-6">Quer conhecer mais sobre nossos projetos?</p>
            <a
              href="https://wa.me/5511943750033?text=Olá%20BKL%20Engenharia!%20Gostaria%20de%20conhecer%20mais%20sobre%20seus%20projetos."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-accent hover:bg-orange-600 text-white px-8 py-3">
                Solicitar Informações
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
