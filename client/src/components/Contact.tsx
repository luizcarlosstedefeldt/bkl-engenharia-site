import { MessageCircle, Phone, MapPin, Mail, ArrowRight, HelpCircle, Lightbulb, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

/**
 * Contact Component
 * Design: Modernismo Corporativo Elevado
 * - Seção de contato com formulário e informações
 * - Destaque para WhatsApp como principal canal de comunicação
 * - Cores: Azul profundo com acentos em laranja
 */
export default function Contact() {
  const [activeTab, setActiveTab] = useState<'contact' | 'supplier' | 'feedback' | 'employee'>('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [employeeData, setEmployeeData] = useState({
    subject: 'Condições de trabalho',
    name: '',
    email: '',
    message: '',
    anonymous: false,
  });
  const [feedbackData, setFeedbackData] = useState({
    type: 'Pergunta',
    name: '',
    email: '',
    phone: '',
    message: '',
    responseChannel: 'WhatsApp',
  });
  const [supplierData, setSupplierData] = useState({
    companyName: '',
    cnpj: '',
    products: ['', '', '', '', ''],
    contactName: '',
    phone: '',
    whatsapp: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEmployeeChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setEmployeeData(prev => ({ ...prev, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }));
  };

  const handleEmployeeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Gostaria de registrar uma reclamação/relato pelo canal interno da BKL Engenharia.\n\nAssunto: ${employeeData.subject}\nIdentificação: ${employeeData.anonymous ? 'Prefiro não me identificar' : employeeData.name}\nE-mail: ${employeeData.anonymous ? 'Não informado' : employeeData.email}\n\nRelato:\n${employeeData.message}`;
    const whatsappUrl = `https://wa.me/5511943750033?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setEmployeeData({ subject: 'Condições de trabalho', name: '', email: '', message: '', anonymous: false });
  };

  const handleFeedbackChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFeedbackData(prev => ({ ...prev, [name]: value }));
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Gostaria de enviar uma contribuição para a BKL Engenharia.\n\nTipo: ${feedbackData.type}\nNome: ${feedbackData.name}\nE-mail: ${feedbackData.email}\nTelefone: ${feedbackData.phone || 'Não informado'}\nCanal preferencial para retorno: ${feedbackData.responseChannel}\n\nMensagem:\n${feedbackData.message}`;
    const whatsappUrl = `https://wa.me/5511943750033?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setFeedbackData({ type: 'Pergunta', name: '', email: '', phone: '', message: '', responseChannel: 'WhatsApp' });
  };

  const handleSupplierChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSupplierData(prev => ({ ...prev, [name]: value }));
  };

  const handleProductChange = (index: number, value: string) => {
    setSupplierData(prev => ({
      ...prev,
      products: prev.products.map((p, i) => i === index ? value : p)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Olá! Meu nome é ${formData.name}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/5511943750033?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleSupplierSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const productsText = supplierData.products.filter(p => p).join(', ');
    const whatsappMessage = `Olá! Gostaria de me cadastrar como fornecedor.\n\nEmpresa: ${supplierData.companyName}\nCNPJ: ${supplierData.cnpj}\nProdutos: ${productsText}\nContato: ${supplierData.contactName}\nTelefone: ${supplierData.phone}\nWhatsApp: ${supplierData.whatsapp}`;
    const whatsappUrl = `https://wa.me/5511943750033?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    setSupplierData({ companyName: '', cnpj: '', products: ['', '', '', '', ''], contactName: '', phone: '', whatsapp: '' });
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
        {/* Tabs */}
        <div className="flex gap-4 mb-12 border-b border-white/20">
          <button
            onClick={() => setActiveTab('contact')}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === 'contact'
                ? 'text-accent border-b-2 border-accent'
                : 'text-white/70 hover:text-white'
            }`}
          >
            Contato
          </button>
          <button
            onClick={() => setActiveTab('employee')}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === 'employee'
                ? 'text-accent border-b-2 border-accent'
                : 'text-white/70 hover:text-white'
            }`}
          >
            Canal de Reclamações
          </button>
          <button
            onClick={() => setActiveTab('feedback')}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === 'feedback'
                ? 'text-accent border-b-2 border-accent'
                : 'text-white/70 hover:text-white'
            }`}
          >
            Perguntas e Sugestões
          </button>
          <button
            onClick={() => setActiveTab('supplier')}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === 'supplier'
                ? 'text-accent border-b-2 border-accent'
                : 'text-white/70 hover:text-white'
            }`}
          >
            Seja um Fornecedor
          </button>
        </div>

        {activeTab === 'contact' && (
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
        )}

        {activeTab === 'employee' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"><span className="text-sm font-semibold text-accent">Ambiente seguro e respeitoso</span></div>
            <h2 className="font-bold text-4xl md:text-5xl mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>Canal de Reclamações</h2>
            <p className="text-lg text-white/90 mb-6 leading-relaxed">Este canal é destinado a funcionários e colaboradores que desejam comunicar situações relacionadas ao ambiente de trabalho, respeito, segurança ou conduta.</p>
            <p className="text-sm text-white/75 leading-relaxed">O canal digital não substitui atendimento de emergência, órgãos públicos ou apoio profissional. Em risco imediato, procure os serviços de emergência e o responsável local pela segurança.</p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-xl">
            <h3 className="font-bold text-2xl text-foreground mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Registrar reclamação ou relato</h3>
            <p className="text-sm text-muted-foreground mb-6">Descreva os fatos com objetividade. A opção de não identificação não garante anonimato técnico, pois o envio é iniciado pelo WhatsApp.</p>
            <form onSubmit={handleEmployeeSubmit} className="space-y-4">
              <div>
                <label htmlFor="employee-subject" className="block text-sm font-semibold text-foreground mb-2">Assunto</label>
                <select id="employee-subject" name="subject" value={employeeData.subject} onChange={handleEmployeeChange} className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all">
                  <option>Condições de trabalho</option><option>Saúde e segurança</option><option>Assédio ou violência</option><option>Discriminação</option><option>Conduta ética</option><option>Outro assunto</option>
                </select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div><label htmlFor="employee-name" className="block text-sm font-semibold text-foreground mb-2">Nome</label><input id="employee-name" type="text" name="name" value={employeeData.name} onChange={handleEmployeeChange} disabled={employeeData.anonymous} required={!employeeData.anonymous} className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all disabled:bg-muted" placeholder="Seu nome" /></div>
                <div><label htmlFor="employee-email" className="block text-sm font-semibold text-foreground mb-2">E-mail</label><input id="employee-email" type="email" name="email" value={employeeData.email} onChange={handleEmployeeChange} disabled={employeeData.anonymous} required={!employeeData.anonymous} className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all disabled:bg-muted" placeholder="seu@email.com" /></div>
              </div>
              <div><label htmlFor="employee-message" className="block text-sm font-semibold text-foreground mb-2">Relato</label><textarea id="employee-message" name="message" value={employeeData.message} onChange={handleEmployeeChange} required rows={6} className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none" placeholder="Informe o que aconteceu, quando e onde..."></textarea></div>
              <label className="flex items-start gap-3 text-sm text-muted-foreground"><input type="checkbox" name="anonymous" checked={employeeData.anonymous} onChange={handleEmployeeChange} className="mt-0.5 accent-orange-500" /><span>Prefiro não me identificar neste relato.</span></label>
              <label className="flex items-start gap-3 text-xs text-muted-foreground"><input type="checkbox" required className="mt-0.5 accent-orange-500" /><span>Autorizo o uso dos dados informados para o tratamento deste relato, conforme a política de privacidade da empresa.</span></label>
              <button type="submit" className="w-full px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-orange-600 transition-all duration-200 hover:shadow-lg hover:shadow-accent/30">Enviar relato pelo WhatsApp</button>
            </form>
            <p className="text-xs text-muted-foreground text-center mt-4">A BKL deve definir internamente responsáveis, prazos, registros e procedimentos de apuração antes de divulgar este canal como canal formal de compliance.</p>
          </div>
        </div>
        )}

        {activeTab === 'feedback' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm font-semibold text-accent">Escuta e melhoria contínua</span>
            </div>
            <h2 className="font-bold text-4xl md:text-5xl mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Perguntas e Sugestões
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Sua opinião ajuda a BKL Engenharia a melhorar o atendimento, os projetos e a qualidade das nossas soluções.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0"><HelpCircle size={20} className="text-white" /></div>
                <p className="text-white/90">Envie dúvidas sobre serviços, propostas, prazos ou atendimento.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0"><Lightbulb size={20} className="text-white" /></div>
                <p className="text-white/90">Compartilhe sugestões para tornar sua experiência ainda melhor.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0"><ShieldCheck size={20} className="text-white" /></div>
                <p className="text-white/90">As informações serão encaminhadas à equipe responsável para avaliação.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-xl">
            <h3 className="font-bold text-2xl text-foreground mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Fale com a BKL</h3>
            <p className="text-sm text-muted-foreground mb-6">Selecione o tipo de mensagem e conte-nos como podemos ajudar.</p>
            <form onSubmit={handleFeedbackSubmit} className="space-y-4">
              <div>
                <label htmlFor="feedback-type" className="block text-sm font-semibold text-foreground mb-2">Tipo de mensagem</label>
                <select id="feedback-type" name="type" value={feedbackData.type} onChange={handleFeedbackChange} className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all">
                  <option>Pergunta</option>
                  <option>Sugestão</option>
                  <option>Elogio</option>
                  <option>Reclamação sobre serviço</option>
                  <option>Orçamento</option>
                </select>
              </div>
              <div>
                <label htmlFor="feedback-name" className="block text-sm font-semibold text-foreground mb-2">Nome</label>
                <input id="feedback-name" type="text" name="name" value={feedbackData.name} onChange={handleFeedbackChange} required className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all" placeholder="Seu nome" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="feedback-email" className="block text-sm font-semibold text-foreground mb-2">E-mail</label>
                  <input id="feedback-email" type="email" name="email" value={feedbackData.email} onChange={handleFeedbackChange} required className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all" placeholder="seu@email.com" />
                </div>
                <div>
                  <label htmlFor="feedback-phone" className="block text-sm font-semibold text-foreground mb-2">Telefone <span className="font-normal text-muted-foreground">(opcional)</span></label>
                  <input id="feedback-phone" type="tel" name="phone" value={feedbackData.phone} onChange={handleFeedbackChange} className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all" placeholder="(11) 99999-9999" />
                </div>
              </div>
              <div>
                <label htmlFor="feedback-message" className="block text-sm font-semibold text-foreground mb-2">Mensagem</label>
                <textarea id="feedback-message" name="message" value={feedbackData.message} onChange={handleFeedbackChange} required rows={5} className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none" placeholder="Escreva sua pergunta ou sugestão..."></textarea>
              </div>
              <div>
                <label htmlFor="feedback-channel" className="block text-sm font-semibold text-foreground mb-2">Canal preferencial para resposta</label>
                <select id="feedback-channel" name="responseChannel" value={feedbackData.responseChannel} onChange={handleFeedbackChange} className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all">
                  <option>WhatsApp</option>
                  <option>E-mail</option>
                </select>
              </div>
              <label className="flex items-start gap-3 text-xs text-muted-foreground">
                <input type="checkbox" required className="mt-0.5 accent-orange-500" />
                <span>Autorizo o uso dos dados informados para responder a esta mensagem, conforme a política de privacidade da empresa.</span>
              </label>
              <button type="submit" className="w-full px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-orange-600 transition-all duration-200 hover:shadow-lg hover:shadow-accent/30">
                Enviar pelo WhatsApp
              </button>
            </form>
            <p className="text-xs text-muted-foreground text-center mt-4">O envio abre o WhatsApp com a mensagem preenchida para o atendimento da BKL.</p>
          </div>
        </div>
        )}

        {activeTab === 'supplier' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Info */}
          <div className="text-white">
            <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm font-semibold text-accent">Parceria Comercial</span>
            </div>

            <h2 className="font-bold text-4xl md:text-5xl mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Seja um Fornecedor
            </h2>

            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Precisamos homologar seu produto ou serviço. Estamos sempre em busca de parceiros confiáveis para expandir nossa rede de fornecedores. Se sua empresa oferece produtos ou serviços relacionados à engenharia, ventilação ou climatização, gostaríamos de conhecê-la.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <p className="text-white/90">Preencha o formulário com seus dados</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <p className="text-white/90">Descreva os produtos que comercializa</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <p className="text-white/90">Entraremos em contato para discutir parcerias</p>
              </div>
            </div>
          </div>

          {/* Right - Supplier Form */}
          <div className="bg-white rounded-lg p-8 shadow-xl">
            <h3 className="font-bold text-2xl text-foreground mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Cadastro de Fornecedor
            </h3>

            <form onSubmit={handleSupplierSubmit} className="space-y-4">
              {/* Company Name */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Nome da Empresa
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={supplierData.companyName}
                  onChange={handleSupplierChange}
                  required
                  className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  placeholder="Sua empresa"
                />
              </div>

              {/* CNPJ */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  CNPJ
                </label>
                <input
                  type="text"
                  name="cnpj"
                  value={supplierData.cnpj}
                  onChange={handleSupplierChange}
                  required
                  className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  placeholder="00.000.000/0000-00"
                />
              </div>

              {/* Products */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Produtos que Comercializa (até 5)
                </label>
                <div className="space-y-2">
                  {supplierData.products.map((product, index) => (
                    <input
                      key={index}
                      type="text"
                      value={product}
                      onChange={(e) => handleProductChange(index, e.target.value)}
                      className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                      placeholder={`Produto ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Contact Name */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Nome do Contato
                </label>
                <input
                  type="text"
                  name="contactName"
                  value={supplierData.contactName}
                  onChange={handleSupplierChange}
                  required
                  className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  placeholder="Nome completo"
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
                  value={supplierData.phone}
                  onChange={handleSupplierChange}
                  required
                  className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  placeholder="(11) 99999-9999"
                />
              </div>

              {/* WhatsApp */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={supplierData.whatsapp}
                  onChange={handleSupplierChange}
                  required
                  className="w-full px-4 py-2.5 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  placeholder="(11) 99999-9999"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-orange-600 transition-all duration-200 hover:shadow-lg hover:shadow-accent/30"
              >
                Enviar Cadastro via WhatsApp
              </button>
            </form>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Seus dados serão enviados via WhatsApp para análise.
            </p>
          </div>
        </div>
        )}
      </div>
    </section>
  );
}
