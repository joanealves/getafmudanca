'use client';

import { useState } from 'react';
import { MapPin, Truck, CheckCircle } from 'lucide-react';

export default function CoverageMap() {
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const coveredStates = [
    { name: 'Minas Gerais', code: 'MG', capital: 'Belo Horizonte', region: 'Sudeste' },
    { name: 'São Paulo', code: 'SP', capital: 'São Paulo', region: 'Sudeste' },
    { name: 'Rio de Janeiro', code: 'RJ', capital: 'Rio de Janeiro', region: 'Sudeste' },
    { name: 'Espírito Santo', code: 'ES', capital: 'Vitória', region: 'Sudeste' },
    { name: 'Bahia', code: 'BA', capital: 'Salvador', region: 'Nordeste' },
    { name: 'Goiás', code: 'GO', capital: 'Goiânia', region: 'Centro-Oeste' },
    { name: 'Distrito Federal', code: 'DF', capital: 'Brasília', region: 'Centro-Oeste' },
    { name: 'Mato Grosso', code: 'MT', capital: 'Cuiabá', region: 'Centro-Oeste' },
    { name: 'Mato Grosso do Sul', code: 'MS', capital: 'Campo Grande', region: 'Centro-Oeste' },
    { name: 'Paraná', code: 'PR', capital: 'Curitiba', region: 'Sul' },
    { name: 'Santa Catarina', code: 'SC', capital: 'Florianópolis', region: 'Sul' },
    { name: 'Sergipe', code: 'SE', capital: 'Aracaju', region: 'Nordeste' },
  ];

  const regionColors = {
    'Sudeste': 'bg-blue-500',
    'Nordeste': 'bg-emerald-500',
    'Centro-Oeste': 'bg-orange-500',
    'Sul': 'bg-purple-500'
  };

  const regionStats = {
    'Sudeste': { count: 4, percentage: 33 },
    'Nordeste': { count: 2, percentage: 17 },
    'Centro-Oeste': { count: 4, percentage: 33 },
    'Sul': { count: 2, percentage: 17 }
  };

  return (
    <section id="cobertura" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MapPin className="h-4 w-4" />
            Nossa Cobertura
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Atendemos em
            <span className="text-blue-400 block">12 Estados Brasileiros</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Nossa ampla rede de cobertura garante que sua mudança seja realizada 
            com a mesma qualidade em qualquer destino.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Map Visualization */}
          <div className="relative animate-slide-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Mapa de Cobertura
              </h3>
              
              {/* Simplified Brazil Map Representation */}
              <div className="relative bg-slate-800/50 rounded-2xl p-8 min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mb-6 animate-float">
                    <Truck className="h-16 w-16 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Brasil</h4>
                  <p className="text-slate-300 mb-4">12 Estados Cobertos</p>
                  
                  {/* Coverage Stats */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {Object.entries(regionStats).map(([region, stats]) => (
                      <div key={region} className="bg-white/10 rounded-lg p-3">
                        <div className={`w-3 h-3 ${regionColors[region as keyof typeof regionColors]} rounded-full mx-auto mb-1`}></div>
                        <div className="text-white font-medium">{region}</div>
                        <div className="text-slate-300">{stats.count} estados</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* States List */}
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Estados Atendidos
              </h3>
              
              <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
                {coveredStates.map((state, index) => (
                  <div
                    key={state.code}
                    className="group bg-white/5 hover:bg-white/10 rounded-xl p-4 transition-all duration-300 cursor-pointer border border-white/10 hover:border-white/20"
                    onMouseEnter={() => setHoveredState(state.code)}
                    onMouseLeave={() => setHoveredState(null)}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 ${regionColors[state.region as keyof typeof regionColors]} rounded-full`}></div>
                        <div>
                          <div className="text-white font-medium group-hover:text-blue-300 transition-colors">
                            {state.name} ({state.code})
                          </div>
                          <div className="text-slate-400 text-sm">
                            {state.capital} • {state.region}
                          </div>
                        </div>
                      </div>
                      <CheckCircle className="h-5 w-5 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-xl p-4 text-center border border-blue-400/20">
                <div className="text-3xl font-bold text-blue-400 mb-1">12</div>
                <div className="text-slate-300 text-sm">Estados</div>
              </div>
              <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-xl p-4 text-center border border-emerald-400/20">
                <div className="text-3xl font-bold text-emerald-400 mb-1">4</div>
                <div className="text-slate-300 text-sm">Regiões</div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-6 text-center">
              <h4 className="text-xl font-bold text-white mb-2">
                Seu destino não está na lista?
              </h4>
              <p className="text-emerald-100 mb-4 text-sm">
                Entre em contato conosco! Podemos avaliar a viabilidade de atender sua região.
              </p>
              <a 
                href="https://wa.me/5531986453365" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
              >
                <MapPin className="h-4 w-4" />
                Consultar Cobertura
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section - Process */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-white mb-12">
            Como Funciona Nossa Cobertura Nacional
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-2xl text-white mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Planejamento</h4>
              <p className="text-slate-300">
                Analisamos sua rota e organizamos toda a logística para sua mudança interestadual.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500 rounded-2xl text-white mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Transporte</h4>
              <p className="text-slate-300">
                Realizamos o transporte com veículos adequados e equipe especializada para longas distâncias.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-2xl text-white mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Entrega</h4>
              <p className="text-slate-300">
                Entregamos seus pertences no destino final com a mesma qualidade e cuidado de sempre.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </section>
  );
}