import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'wouter';

/**
 * Navigation Component
 * Design: Modernismo Corporativo Elevado
 * - Header com logo e menu de navegação
 * - Cores: Azul profundo (#1e3a5f) com acentos em laranja (#ff6b35)
 * - Tipografia: Poppins para títulos, Inter para corpo
 */
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Início', href: '/' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663433396372/oXebyALbuTY7pfm6aNR3rz/LogosemHVAC_c1620f1b.png"
            alt="BKL Engenharia"
            className="h-12 w-auto transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-foreground hover:text-accent transition-colors duration-200 font-medium text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="https://wa.me/5511943750033?text=Olá%20BKL%20Engenharia!%20Gostaria%20de%20solicitar%20um%20orçamento."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-accent text-white rounded-lg font-semibold text-sm hover:bg-orange-600 transition-all duration-200 hover:shadow-lg hover:shadow-accent/30"
        >
          WhatsApp
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-border">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground hover:text-accent transition-colors py-2 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5511943750033?text=Olá%20BKL%20Engenharia!%20Gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-4 py-2.5 bg-accent text-white rounded-lg font-semibold text-center hover:bg-orange-600 transition-all"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
