import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Clients Page
 * Design: Modernismo Corporativo Elevado
 * - Grid de logos com efeito hover
 * - Cores: Azul profundo e laranja
 * - Seção de depoimentos de clientes
 */

export default function Clients() {
  const clients = [
    {
      id: 1,
      name: 'Alpargatas',
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/ALPARGATAS_567efb9f.jpeg',
      category: 'Indústria Alimentícia'
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
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/LDCelulose_c7d0181a.png',
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
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/i4EHRvzmwhMx_ca31c158.jpg',
      category: 'Aeronáutica'
    },
    {
      id: 12,
      name: 'Frasle',
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/FRASLE_23a8ad02.png',
      category: 'Automotiva'
    },
    {
      id: 13,
      name: 'Mahle',
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/A3mOV8GMJ1Dj_09794e95.png',
      category: 'Automotiva'
    },
    {
      id: 14,
      name: 'Vale',
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/zo4HvxDVroGH_440323a6.png',
      category: 'Mineradora'
    },
    {
      id: 15,
      name: 'Suzano',
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/PH8w6ZdLbHhp_9b8ff980.png',
      category: 'Celulose e Papel'
    },
    {
      id: 16,
      name: 'Petlove',
      logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/mF5WX1yetwGB_9ba6dc15.jpg',
      category: 'Comércio Eletrônico'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'João Silva',
      company: 'Alpargatas',
      role: 'Gerente de Operações',
      text: 'A BKL Engenharia entregou um sistema de ventilação industrial que superou nossas expectativas. Profissionalismo e qualidade em cada detalhe.',
      rating: 5
    },
    {
      id: 2,
      name: 'Maria Santos',
      company: 'Anglo American',
      role: 'Diretora de Manutenção',
      text: 'Excelente conformidade com normas técnicas. A equipe da BKL é altamente qualificada e comprometida com a excelência.',
      rating: 5
    },
    {
      id: 3,
      name: 'Carlos Oliveira',
      company: 'ArcelorMittal',
      role: 'Supervisor de Projetos',
      text: 'Solução completa e inovadora. A BKL Engenharia é nosso parceiro confiável para sistemas de climatização.',
      rating: 5
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
            <h2 className="text-3xl font-bold mb-2 text-foreground">
              Empresas que Confiam na BKL
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
                    style={{ width: '150px' }}
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

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-2 text-foreground">
              O que Nossos Clientes Dizem
            </h2>
            <p className="text-muted-foreground text-lg">
              Depoimentos de empresas que confiam na qualidade da BKL Engenharia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">★</span>
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-accent font-semibold">{testimonial.company}</p>
                </div>
              </div>
            ))}
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
