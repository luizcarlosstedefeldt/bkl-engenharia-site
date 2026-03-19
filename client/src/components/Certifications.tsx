import { Award, CheckCircle2 } from 'lucide-react';

/**
 * Certifications Component
 * Design: Modernismo Corporativo Elevado
 * - Destaque para credenciais e associações profissionais
 * - Cores: Azul profundo e branco
 * - Layout simétrico com selos e descrições
 */
export default function Certifications() {
  const certifications = [
    {
      id: 1,
      title: 'Membro ABRAVA',
      description: 'Associação Brasileira de Refrigeração, Ar Condicionado, Ventilação e Aquecimento',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/Abrava_Empresa_Associada_2026_vert_rgb_54db21dc.jpg',
      year: '2026'
    }
  ];

  const standards = [
    { id: 1, name: 'NR-18', description: 'Condições e Meio Ambiente de Trabalho na Indústria da Construção' },
    { id: 2, name: 'NR-12', description: 'Segurança do Trabalho em Máquinas e Equipamentos' },
    { id: 3, name: 'NR-10', description: 'Segurança em Instalações e Serviços em Eletricidade' },
    { id: 4, name: 'NR-33', description: 'Segurança e Saúde nos Trabalhos em Espaços Confinados' },
    { id: 5, name: 'ABNT NBR 14518:2020', description: 'Sistemas de exaustão para cozinhas comerciais' },
  ];

  return (
    <section id="certificacoes" className="py-20 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/30">
            <span className="text-sm font-semibold text-accent">Credibilidade e Conformidade</span>
          </div>
          <h2 className="font-bold text-4xl md:text-5xl text-foreground mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Certificações e Associações
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Somos uma empresa comprometida com os mais altos padrões de qualidade, segurança e conformidade normativa.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* ABRAVA Seal */}
          <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-sm border border-border">
            <img
              src={certifications[0].image}
              alt={certifications[0].title}
              className="h-48 w-auto mb-6 object-contain"
            />
            <h3 className="font-bold text-xl text-foreground mb-2 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {certifications[0].title}
            </h3>
            <p className="text-sm text-muted-foreground text-center mb-3">
              {certifications[0].description}
            </p>
            <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
              Associado desde {certifications[0].year}
            </span>
          </div>

          {/* Standards Compliance */}
          <div className="bg-gradient-to-br from-primary to-primary/90 rounded-lg p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <Award size={28} className="text-accent" />
              <h3 className="font-bold text-2xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Normas Atendidas
              </h3>
            </div>
            <p className="text-white/90 mb-6">
              Todos os nossos projetos e instalações seguem rigorosamente as normas técnicas brasileiras e regulamentações de segurança.
            </p>
            <ul className="space-y-3">
              {standards.slice(0, 5).map((standard) => (
                <li key={standard.id} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-accent">{standard.name}</span>
                    <p className="text-white/80 text-sm">{standard.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-muted rounded-lg">
            <div className="text-4xl font-bold text-accent mb-2">100%</div>
            <p className="text-foreground font-semibold mb-1">Conformidade</p>
            <p className="text-sm text-muted-foreground">Todos os projetos seguem normas vigentes</p>
          </div>
          <div className="text-center p-6 bg-muted rounded-lg">
            <div className="text-4xl font-bold text-accent mb-2">+10</div>
            <p className="text-foreground font-semibold mb-1">Anos de Experiência</p>
            <p className="text-sm text-muted-foreground">Atuando com excelência desde 2017</p>
          </div>
          <div className="text-center p-6 bg-muted rounded-lg">
            <div className="text-4xl font-bold text-accent mb-2">Equipe</div>
            <p className="text-foreground font-semibold mb-1">Certificada</p>
            <p className="text-sm text-muted-foreground">Profissionais habilitados e qualificados</p>
          </div>
        </div>
      </div>
    </section>
  );
}
