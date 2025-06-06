import React from 'react';
import { Truck, Building2, MapPin, Settings, Shield, Clock, CheckCircle } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: <Truck className="w-12 h-12 text-blue-600" />,
      title: "Mudanças Residenciais",
      description: "A GETAF realiza mudanças residenciais a mais de 10 anos e possui vasta experiência. Acreditamos que o serviço de mudança vai muito além do que transportar objetos. A tranquilidade do cliente está no topo de nossa prioridade.",
      features: ["Embalagem profissional", "Desmontagem e montagem", "Transporte seguro", "Equipe especializada"],
      image: "/mudanca.jpg"
    },
    {
      id: 2,
      icon: <Building2 className="w-12 h-12 text-blue-600" />,
      title: "Mudanças Comerciais",
      description: "A GETAF também atua com mudanças comerciais, transportando com maestria e agilidade objetos de empresas que não podem perder tempo com mudança. Com a GETAF o momento da mudança da sua empresa pode deixar de ser uma dor de cabeça.",
      features: ["Planejamento estratégico", "Execução rápida", "Mínimo downtime", "Logística especializada"],
      image: "/comercial.jpg"
    },
    {
      id: 3,
      icon: <MapPin className="w-12 h-12 text-blue-600" />,
      title: "Mudanças Interestaduais",
      description: "Está precisando transportar sua carga pelo Brasil? A GETAF também pode te atender! Realizamos mudanças para 12 estados brasileiros com total segurança e agilidade.",
      features: ["Cobertura nacional", "12 estados atendidos", "Rastreamento completo", "Seguro incluso"],
      image: "/interestadual.jpg"
    },
    {
      id: 4,
      icon: <Settings className="w-12 h-12 text-blue-600" />,
      title: "Içamentos",
      description: "Preocupado com objetos que são difíceis de transportar? A GETAF também atua com içamentos, possibilitando a remoção de qualquer objeto, em qualquer lugar. Com a GETAF sua mudança acontece!",
      features: ["Equipamentos especializados", "Objetos pesados", "Acesso difícil", "Segurança total"],
      image: "/icamento.webp"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Serviços
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A GETAF possui mais de 10 anos de atuação com içamentos e mudanças residenciais e comerciais.
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  {service.icon}
                  <h3 className="text-3xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-600 leading-relaxed text-lg">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center gap-3">
                  <span>Solicitar Orçamento</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white">
          <h3 className="text-3xl text-white font-bold mb-4">
            Precisa de um serviço especializado?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Entre em contato conosco e receba um orçamento personalizado
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Solicitar Orçamento
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Falar no WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;