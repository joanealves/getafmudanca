'use client';

import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useState } from 'react';

// Contact Section Component
export function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Olá! Tenho uma dúvida/solicitação:
Nome: ${formData.nome}
Email: ${formData.email}
Telefone: ${formData.telefone}
Assunto: ${formData.assunto}
Mensagem: ${formData.mensagem}`;
    
    const whatsappUrl = `https://wa.me/5531986453365?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '(31) 98645-3365',
      link: 'tel:+5531986453365',
      color: 'blue'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: '(31) 98645-3365',
      link: 'https://wa.me/5531986453365',
      color: 'emerald'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'contato@getafmudancas.com.br',
      link: 'mailto:contato@getafmudancas.com.br',
      color: 'purple'
    },
    {
      icon: MapPin,
      title: 'Localização',
      info: 'Belo Horizonte - MG',
      link: '#',
      color: 'orange'
    }
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MessageCircle className="h-4 w-4" />
            Entre em Contato
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Vamos Conversar Sobre
            <span className="text-blue-400 block">Sua Mudança</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para esclarecer suas dúvidas e criar a solução perfeita 
            para sua mudança. Entre em contato conosco!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up">
            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.link}
                    target={contact.link.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="group bg-white/10 backdrop-blur-sm hover:bg-white/15 rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`inline-flex items-center justify-center w-14 h-14 bg-${contact.color}-500 rounded-2xl text-white group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-7 w-7" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg group-hover:text-blue-300 transition-colors">
                          {contact.title}
                        </h3>
                        <p className="text-slate-300 group-hover:text-white transition-colors">
                          {contact.info}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
           
          </div>

          
        </div>

        {/* Social Media Links */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-bold text-white mb-6">Siga-nos nas Redes Sociais</h3>
          <div className="flex justify-center space-x-6">
            <a 
              href="#" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-4 border border-white/20 hover:border-white/30 transition-all duration-300 group"
            >
              <Facebook className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="#" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-4 border border-white/20 hover:border-white/30 transition-all duration-300 group"
            >
              <Instagram className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="#" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-4 border border-white/20 hover:border-white/30 transition-all duration-300 group"
            >
              <Linkedin className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
