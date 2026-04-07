import { MessageCircle, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

/**
 * Footer Component
 * Design: Modernismo Corporativo Elevado
 * - Footer com informações da empresa e links úteis
 * - Cores: Azul profundo com acentos em laranja
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/LogosemHVAC_c1620f1b.png"
                alt="BKL Engenharia"
                className="h-16 w-auto"
                style={{ width: '250px', height: '65px' }}
              />
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Soluções profissionais em ventilação, climatização e ar condicionado desde 2017.
            </p>
            <a
              href="https://wa.me/5511943750033"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-orange-400 transition-colors text-sm font-semibold"
            >
              Fale conosco
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-colors text-sm">
                  Início
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-white/80 hover:text-accent transition-colors text-sm">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-white/80 hover:text-accent transition-colors text-sm">
                  Serviços
                </a>
              </li>
              <li>
                <a href="/clientes" className="text-white/80 hover:text-accent transition-colors text-sm">
                  Clientes
                </a>
              </li>
              <li>
                <a href="#contato" className="text-white/80 hover:text-accent transition-colors text-sm">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li className="text-white/80 text-sm">Ventilação Industrial</li>
              <li className="text-white/80 text-sm">Climatização e Desumidificação</li>
              <li className="text-white/80 text-sm">Ar Condicionado</li>
              <li className="text-white/80 text-sm">Ventilação e Exaustão de Coifas em Cozinhas Industriais</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/80 text-sm">
                <MessageCircle size={16} className="text-accent flex-shrink-0" />
                <a href="https://wa.me/5511943750033" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  (11) 94375-0033
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/80 text-sm">
                <Phone size={16} className="text-accent flex-shrink-0" />
                <a href="tel:+5511943750033" className="hover:text-accent transition-colors">
                  (11) 3567-1300
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/80 text-sm">
                <Mail size={16} className="text-accent flex-shrink-0" />
                <a href="mailto:contato@bklengenharia.com.br" className="hover:text-accent transition-colors">
                  contato@bklengenharia.com.br
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/80 text-sm">
                <MapPin size={16} className="text-accent flex-shrink-0 mt-0.5" />
                <span>Rua Alto de Santa Helena, 7 - São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm">
            &copy; {currentYear} BKL Engenharia. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/70 hover:text-accent transition-colors text-sm">
              Política de Privacidade
            </a>
            <a href="#" className="text-white/70 hover:text-accent transition-colors text-sm">
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
