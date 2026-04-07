import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Certifications from '@/components/Certifications';
import Testimonials from '@/components/Testimonials';
import Clients from '@/components/Clients';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

/**
 * Home Page
 * Design: Modernismo Corporativo Elevado
 * - Página inicial com todas as seções principais
 * - Navegação fixa, hero assimétrico, portfólio, serviços, depoimentos, contato e footer
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <main className="flex-1">
        <Hero />
        <About />
        <Portfolio />
        <Clients />
        <Services />
        <Certifications />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
