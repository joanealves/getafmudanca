'use client';

import { Phone, Mail, MapPin, MessageCircle, Clock, Award } from 'lucide-react';
import { SiFacebook, SiInstagram } from 'react-icons/si';

export function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '(31) 98645-3365',
      link: 'tel:+5531986453365'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: '(31) 98645-3365',
      link: 'https://wa.me/5531986453365'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'contato@getafmudancas.com.br',
      link: 'mailto:contato@getafmudancas.com.br'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'Belo Horizonte - MG',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: SiFacebook,
      name: 'Facebook',
      link: 'https://facebook.com/getafmudancas',
      ariaLabel: 'Siga-nos no Facebook'
    },
    {
      icon: SiInstagram,
      name: 'Instagram',
      link: 'https://instagram.com/getafmudancas',
      ariaLabel: 'Siga-nos no Instagram'
    }
  ];

  return (
    <section 
      id="contato" 
      className="py-12 md:py-16 lg:py-20 bg-white"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="text-center mb-12 md:mb-16">
          <h2 
            id="contact-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4 md:mb-6"
          >
            Entre em <span className="text-blue-900">Contato</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para atender você com excelência. 
            Entre em contato conosco e solicite seu orçamento.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          <div className="space-y-8">
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Fale Conosco</h3>
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : '_self'}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center p-4 rounded-lg bg-gray-50 hover:bg-indigo-50 transition-all duration-300 hover:shadow-md"
                    aria-label={`${item.title}: ${item.info}`}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors duration-300">
                      <Icon className="h-5 w-5 text-blue-900" />
                    </div>
                    <div className="ml-4 min-w-0 flex-1">
                      <h4 className="text-base font-medium text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600 truncate">{item.info}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Award className="h-4 w-4 text-blue-900" />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900 mb-1">Experiência</h4>
                  <p className="text-xs text-gray-600">+10 anos</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-4">Redes Sociais</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.ariaLabel}
                      className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-indigo-100 transition-colors duration-300"
                    >
                      <Icon className="text-gray-600 h-4 w-4 hover:text-indigo-600 transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-4  flex items-center justify-center">
              <div className="text-center">
                <img 
                  src="/comercial.jpg" 
                  alt="Equipe Getaf Mudanças realizando mudança residencial em Belo Horizonte" 
                  className="w-full h-full object-cover rounded-lg"
                  width="400"
                  height="300"
                  loading="lazy"
                /> 
               
              </div>
            </div>
          </div>
        </div>

        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Getaf Mudanças",
              "description": "Empresa de mudanças residenciais e comerciais em Belo Horizonte",
              "telephone": "+55-31-98645-3365",
              "email": "contato@getafmudancas.com.br",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Belo Horizonte",
                "addressRegion": "MG",
                "addressCountry": "BR"
              },
              "openingHours": "Mo-Sa 08:00-18:00",
              "sameAs": [
                "https://facebook.com/getafmudancas",
                "https://instagram.com/getafmudancas"
              ]
            })
          }}
        />
      </div>
    </section>
  );
}