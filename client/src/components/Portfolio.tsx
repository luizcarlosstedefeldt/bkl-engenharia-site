import { ExternalLink } from 'lucide-react';

/**
 * Portfolio Component
 * Design: Modernismo Corporativo Elevado
 * - Grid de cards com imagens de obras
 * - Efeito hover com elevação e sombra
 * - Cores: Azul profundo com acentos em laranja
 */
export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Sistema de Ventilação Industrial',
      category: 'Ventilação Industrial',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/air-duct-10_fd5ee665.jpg',
      description: 'Instalação completa de sistema de ventilação industrial.',
    },
    {
      id: 2,
      title: 'Climatizador Evaporativo',
      category: 'Climatização',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/Evaporativo_d7a1ad48.jpg',
      description: 'Sistemas de climatização evaporativa para máxima eficiência energética.',
    },
    {
      id: 3,
      title: 'Exaustão de Cozinhas Industriais',
      category: 'Exaustão',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/kitchen-hero-560-300-560x373_a8601899.jpg',
      description: 'Soluções completas de exaustão para cozinhas industriais e comerciais.',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/30">
            <span className="text-sm font-semibold text-accent">Nossos Trabalhos</span>
          </div>
          <h2 className="font-bold text-4xl md:text-5xl text-foreground mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Portfólio de Obras
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos projetos que realizamos com excelência e profissionalismo.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:translate-y-[-8px] border border-border"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="inline-block mb-3 px-3 py-1 bg-accent/10 rounded-full">
                  <span className="text-xs font-semibold text-accent">{project.category}</span>
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all duration-200"
                >
                  Saiba mais
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
              href="https://wa.me/5511943750033?text=Olá%20BKL%20Engenharia!%20Gostaria%20de%20conhecer%20mais%20sobre%20seus%20projetos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-white rounded-lg font-semibold hover:bg-orange-600 transition-all duration-200 hover:shadow-lg hover:shadow-accent/40"
          >
            Ver Mais Projetos
          </a>
        </div>
      </div>
    </section>
  );
}
