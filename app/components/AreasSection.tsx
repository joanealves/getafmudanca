'use client';

import { MapPin, Truck, Clock, CheckCircle, Star } from 'lucide-react';

export default function AreasSection() {
  const states = [
    { name: 'Minas Gerais', code: 'MG', capital: 'Belo Horizonte', featured: true },
    { name: 'São Paulo', code: 'SP', capital: 'São Paulo', featured: true },
    { name: 'Rio de Janeiro', code: 'RJ', capital: 'Rio de Janeiro', featured: true },
    { name: 'Espírito Santo', code: 'ES', capital: 'Vitória' },
    { name: 'Bahia', code: 'BA', capital: 'Salvador' },
    { name: 'Goiás', code: 'GO', capital: 'Goiânia' },
    { name: 'Distrito Federal', code: 'DF', capital: 'Brasília' },
    { name: 'Mato Grosso', code: 'MT', capital: 'Cuiabá' },
    { name: 'Mato Grosso do Sul', code: 'MS', capital: 'Campo Grande' },
    { name: 'Paraná', code: 'PR', capital: 'Curitiba' },
    { name: 'Santa Catarina', code: 'SC', capital: 'Florianópolis' },
    { name: 'Rio Grande do Sul', code: 'RS', capital: 'Porto Alegre' }
  ];

  const features = [
    {
      icon: Truck,
      title: 'Transporte Seguro',
      description: 'Frota própria com veículos equipados e rastreamento em tempo real'
    },
    {
      icon: Clock,
      title: 'Prazo Garantido',
      description: 'Cumprimos rigorosamente os prazos estabelecidos para sua mudança'
    },
    {
      icon: CheckCircle,
      title: 'Equipe Especializada',
      description: 'Profissionais treinados em cada região para melhor atendimento'
    },
    {
      icon: Star,
      title: 'Qualidade Comprovada',
      description: 'Mesmo padrão de excelência em todos os estados atendidos'
    }
  ];

  return (
    <section id="areas" className="py-20 bg-gradient-to-br from-blue-50 to-slate-100 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MapPin className="h-4 w-4" />
            Áreas Atendidas
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Presente em
            <span className="text-blue-600 block">12 Estados Brasileiros</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Nossa cobertura nacional garante que você tenha o mesmo padrão de qualidade 
            GETAF em qualquer lugar do Brasil.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Map Representation */}
          <div className="animate-slide-up">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                Mapa de Cobertura
              </h3>
              
              {/* Stylized Brazil Map */}
              <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white mb-6">
                <div className="text-center">
                  <div className="text-6xl mb-4">🇧🇷</div>
                  <div className="text-2xl font-bold mb-2">Brasil</div>
                  <div className="text-blue-100">12 Estados Atendidos</div>
                </div>
                
                {/* Animated dots representing coverage */}
                <div className="absolute top-4 right-4 flex space-x-1">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
              </div>

              {/* Featured States */}
              <div className="space-y-3">
                <h4 className="font-semibold text-slate-700 mb-3">Principais Rotas:</h4>
                {states.filter(state => state.featured).map((state, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                        {state.code}
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">{state.name}</div>
                        <div className="text-sm text-slate-500">{state.capital}</div>
                      </div>
                    </div>
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* States List */}
          <div className="animate-fade-in">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Estados Atendidos
              </h3>
              
              <div className="grid grid-cols-2 gap-3 mb-8">
                {states.map((state, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg hover:from-blue-50 hover:to-blue-100 transition-all duration-300 group cursor-pointer"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-xs font-bold group-hover:scale-110 transition-transform">
                      {state.code}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-slate-900 text-sm">{state.name}</div>
                      <div className="text-xs text-slate-500">{state.capital}</div>
                    </div>
                    {state.featured && (
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    )}
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white text-center">
                <h4 className="font-bold mb-2">Precisa de outro estado?</h4>
                <p className="text-emerald-100 text-sm mb-4">
                  Consulte-nos! Estamos sempre expandindo nossa área de cobertura.
                </p>
                <a 
                  href="https://wa.me/5531986453365" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-emerald-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-emerald-50 transition-colors"
                >
                  <MapPin className="h-4 w-4" />
                  Consultar Disponibilidade
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl text-white mb-4">
                  <IconComponent className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Sua mudança interestadual com total segurança
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              Não importa a distância, levamos sua mudança com o mesmo cuidado e 
              qualidade para qualquer um dos 12 estados que atendemos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('form-orcamento')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
              >
                Solicitar Orçamento Interestadual
              </button>
              <a 
                href="https://wa.me/5531986453365" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-900 transition-colors border-2 border-blue-800 hover:border-blue-900"
              >
                Consultar Rota
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}