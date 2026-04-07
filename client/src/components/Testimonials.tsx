/**
 * Testimonials Component (Transformado em "Quem Somos")
 * Design: Modernismo Corporativo Elevado
 * - Seção de apresentação da empresa
 * - Descrição completa dos serviços
 * - Cores: Azul profundo com acentos em laranja
 */
export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/30">
            <span className="text-sm font-semibold text-accent">Quem somos</span>
          </div>
          <h2 className="font-bold text-4xl md:text-5xl text-foreground mb-4" style={{ fontFamily: 'Poppins, sans-serif', color: '#0000c1' }}>
            Conheça a BKL Engenharia
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Somos uma empresa especializada em Projetos, Vendas e Instalações de sistemas de Exaustão para Cozinhas Industriais, Pressurização de Escadas de Emergência, Ventilação Industrial, Ar Condicionado e Climatização Evaporativa.
            <br />
            <br />
            Nossa experiência em diversas obras permite um melhor planejamento e atendimento às necessidades dos nossos clientes.
            <br />
            <br />
            Atendemos ainda com equipe qualificada nas áreas de manutenção preventiva, corretiva e limpeza de sistemas de exaustão em coifas de cozinhas industriais para assegurar o funcionamento de sistemas instalados e garantindo maior durabilidade e perfeita função de cada equipamento instalado pela própria empresa ou por terceiros.
          </p>
        </div>
      </div>
    </section>
  );
}
