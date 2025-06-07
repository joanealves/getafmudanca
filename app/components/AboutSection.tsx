'use client';

import { Shield, Users, Clock, Award, CheckCircle, Star, Truck, Heart } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Segurança',
      description: 'Proteção máxima para seus bens com equipamentos de qualidade.'
    },
    {
      icon: Heart,
      title: 'Cuidado',
      description: 'Tratamos seus pertences com o mesmo zelo que tratamos os nossos próprios.'
    },
    {
      icon: Clock,
      title: 'Pontualidade',
      description: 'Cumprimos rigorosamente os prazos acordados, respeitando seu tempo.'
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Mais de 10 anos aprimorando nossos serviços para oferecer o melhor.'
    }
  ];

  const stats = [
    { number: '10+', label: 'Anos de Experiência', icon: Award },
    { number: '12+', label: 'Estados Atendidos', icon: Truck },
    { number: '1000+', label: 'Mudanças Realizadas', icon: CheckCircle },
    { number: '5.0', label: 'Avaliação Máxima', icon: Star }
  ];


  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-white to-slate-50">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users className="h-4 w-4" />
            Sobre Nós
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Mais de 10 Anos
            <span className="text-blue-600 block">Cuidando de Sua Mudança</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A GETAF nasceu com o propósito de transformar o momento da mudança em uma 
            experiência tranquila e segura para nossos clientes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          
          <div className="space-y-6 animate-slide-up">
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 leading-relaxed mb-6">
                A <strong className="text-blue-900">GETAF Mudanças</strong> realiza mudanças e içamentos, há mais de 10 anos e possui vasta experiência no mercado. Acreditamos que o serviço de mudança vai muito além de transportar objetos - <strong>a tranquilidade do cliente está no topo de nossa prioridade</strong>.
              </p>
              
              <p className="text-slate-700 leading-relaxed mb-6">
                Para manter esse padrão de excelência, contamos com os <strong>melhores profissionais de mudança do mercado</strong>, agindo com zelo, segurança e agilidade com os objetos de nossos clientes.
              </p>
              
              <p className="text-slate-700 leading-relaxed mb-6">
                Além de mudanças residenciais, também atuamos com <strong>mudanças comerciais</strong>, transportando com maestria e agilidade equipamentos de empresas que não podem perder tempo. Com a GETAF, o momento da mudança da sua empresa deixa de ser uma dor de cabeça.
              </p>
              
              <p className="text-slate-700 leading-relaxed">
                Oferecemos também <strong>serviços de içamentos</strong>, possibilitando a remoção de qualquer objeto, em qualquer lugar, e realizamos <strong>mudanças interestaduais</strong> para 12 estados brasileiros.
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Nossos Compromissos</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-700">Orçamento gratuito e sem compromisso</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-700">Equipe treinada e equipamentos modernos</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-700">Atendimento personalizado e transparente</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 animate-fade-in">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center hover:shadow-xl transition-shadow duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl text-white mb-4">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 mb-1">{stat.number}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}