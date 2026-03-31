import { MessageCircle, Phone, MapPin, Mail, ArrowRight } from 'lucide-react';
import { useState } from 'react';

/**
 * Contact Component
 * Design: Modernismo Corporativo Elevado
 * - Seção de contato com formulário e informações
 * - Destaque para WhatsApp como principal canal de comunicação
 * - Cores: Azul profundo com acentos em laranja
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Olá! Meu nome é ${formData.name}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-primary to-primary/90 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <pattern id="dots" patternUnits="userSpaceOnUse" width="40" height="40">
              <circle cx="20" cy="20" r="2" fill="white" />
            </pattern>
          </defs>
          <rect width="1200" height="800" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Info */}
          <div className="text-white">
            <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm font-semibold text-accent">Entre em Contato</span>
            </div>

            <h2 className="font-bold text-4xl md:text-5xl mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Vamos Conversar Sobre Seu Projeto
            </h2>

            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Estamos prontos para ajudar com suas necessidades de engenharia e construção. Entre em contato conosco através de qualquer um dos canais abaixo.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-8">
              {/* WhatsApp - Primary */}
              <a
                href="https://wa.me/5511943750033?text=Olá%20BKL%20Engenharia!%20Gostaria%20de%20solicitar%20um%20orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">WhatsApp</p>
                  <p className="text-white/80 text-sm">(11) 94375-0033</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+551135671300"
                className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Telefone</p>
                  <p className="text-white/80 text-sm">(11) 3567-1300</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:contato@bklengenharia.com.br"
                className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-white/80 text-sm">contato@bklengenharia.com.br</p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Endereço</p>
                  <p className="text-white/80 text-sm">Rua Alto de Santa Helena, 7 - São Paulo, SP</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="https://wa.me/5511943750033?text=Olá%20BKL%20Engenharia!%20Gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-white rounded-lg font-semibold hover:bg-orange-600 transition-all duration-200 hover:shadow-lg hover:shadow-accent/40 hover:translate-y-[-2px]"
            >
              Enviar Mensagem via WhatsApp
              <ArrowRight size={20} />
            </a>
          </div>

          {/* Right - Form */}
          <div className="bg-white rounded-lg p-8 shadow-xl">
            <h3 className="font-bold text-2xl text-foreground mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Envie-nos uma Mensagem
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  placeholder="Seu nome"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  placeholder="(11) 99999-9999"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                  placeholder="Descreva seu projeto..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-orange-600 transition-all duration-200 hover:shadow-lg hover:shadow-accent/30"
              >
                Enviar via WhatsApp
              </button>
            </form>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Seus dados serão enviados via WhatsApp para contato direto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
