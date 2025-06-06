"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, Shield } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Amanda Souza",
      text: "Recomendo a GETAF a todos, já fiz diversos serviços de mudança com eles na minha empresa. Podem confiar!",
      rating: 5,
      service: "Mudança Comercial",
      location: "Belo Horizonte - MG"
    },
    {
      id: 2,
      name: "José Eustáquio",
      text: "O pessoal foi muito profissional, não tive nenhum problema. Recomendo a todos!",
      rating: 5,
      service: "Mudança Residencial",
      location: "Contagem - MG"
    },
    {
      id: 3,
      name: "Maria Silva",
      text: "Excelente serviço! Cuidaram dos meus móveis com muito zelo e carinho. Equipe super profissional e pontual.",
      rating: 5,
      service: "Mudança Residencial",
      location: "Nova Lima - MG"
    },
    {
      id: 4,
      name: "Carlos Pereira",
      text: "Mudança interestadual sem dor de cabeça! Tudo chegou no prazo e em perfeito estado. Recomendo demais!",
      rating: 5,
      service: "Mudança Interestadual",
      location: "São Paulo - SP"
    },
    {
      id: 5,
      name: "Ana Paula",
      text: "Fizeram o içamento de um piano para o meu apartamento. Serviço impecável, com toda segurança necessária.",
      rating: 5,
      service: "Içamentos",
      location: "Belo Horizonte - MG"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-20">
      <div className="w-full">
        
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-current" />
            Avaliações 5 Estrelas
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            O que nossos clientes
            <span className="block text-blue-600">dizem sobre nós</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Mais de 1000 mudanças realizadas com excelência e satisfação garantida
          </p>
        </div>

        <div className="relative mb-24">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-12 md:p-16 relative overflow-hidden border border-white/20">
              
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-12 -left-12 w-32 h-32  rounded-full blur-2xl"></div>
              
              <div className="absolute top-8 right-8 opacity-5">
              </div>

              <div className="relative z-10">
                <div className="flex justify-center mb-8">
                  <div className="flex gap-1 p-3 bg-yellow-50 rounded-2xl">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                </div>

                <blockquote className="text-2xl md:text-3xl text-gray-800 text-center mb-12 leading-relaxed font-medium">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6 shadow-lg">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <h4 className="font-bold text-2xl text-gray-900 mb-2">
                    {testimonials[currentIndex].name}
                  </h4>
                  <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-2">
                    {testimonials[currentIndex].service}
                  </div>
                  <p className="text-gray-500 text-base">
                    📍 {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-6 mt-10">
              <button
                onClick={prevTestimonial}
                className="p-4 rounded-full bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white hover:scale-110 group border border-white/20"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
              </button>

              <div className="flex gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-blue-600 w-12 shadow-lg'
                        : 'bg-gray-300 w-3 hover:bg-gray-400 hover:w-6'
                    }`}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-4 rounded-full bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white hover:scale-110 group border border-white/20"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
              </button>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Por que escolher a 
              <span className="block text-green-600">GETAF?</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Três pilares que garantem o sucesso da sua mudança
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-300 shadow-xl group-hover:shadow-2xl">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Transparência Total</h4>
              <p className="text-gray-600 leading-relaxed text-lg">
                Mantemos você informado em cada etapa. Sem surpresas, sem custos ocultos. 
                Nossa prioridade é sua tranquilidade durante todo o processo.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-300 shadow-xl group-hover:shadow-2xl">
                  <Shield className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Segurança Garantida</h4>
              <p className="text-gray-600 leading-relaxed text-lg">
                Equipe especializada. 
                Protegemos seus pertences como se fossem nossos.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all duration-300 shadow-xl group-hover:shadow-2xl">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Agilidade Máxima</h4>
              <p className="text-gray-600 leading-relaxed text-lg">
                Orçamento online em minutos! Processo 100% digital e 
                resposta rápida para você não perder tempo.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-12 md:p-16 text-white text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              
              <h3 className="text-4xl text-white md:text-5xl font-bold mb-6 leading-tight">
                Pronto para sua mudança?
              </h3>
              <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
                Receba um orçamento personalizado em menos de 5 minutos. 
                Sem compromisso, totalmente gratuito!
              </p>
              
              <button className="bg-green-500 hover:bg-green-400 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center gap-3 mx-auto group">
                <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z"/>
                </svg>
                <span>Solicitar Orçamento Agora</span>
              </button>
              
              <p className="text-blue-200 text-sm mt-6">
                 ✅ 100% gratuito | 🔒 Seus dados protegidos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;