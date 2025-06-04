import { MapPin, Truck, Shield, CheckCircle } from 'lucide-react';

export default function AreasSection() {
  const states = [
    { name: 'Minas Gerais', highlight: true },
    { name: 'São Paulo', highlight: false },
    { name: 'Rio de Janeiro', highlight: false },
    { name: 'Espírito Santo', highlight: false },
    { name: 'Bahia', highlight: false },
    { name: 'Goiás', highlight: false },
    { name: 'Brasília', highlight: false },
    { name: 'Mato Grosso', highlight: false },
    { name: 'Mato Grosso do Sul', highlight: false },
    { name: 'Paraná', highlight: false },
    { name: 'Santa Catarina', highlight: false },
    { name: 'Sergipe', highlight: false }
  ];

  const benefits = [
    {
      icon: <Truck className="w-6 h-6 text-blue-600" />,
      title: "Transporte Seguro",
      description: "Frota própria preparada para longas distâncias"
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-600" />,
      title: "Seguro Incluso",
      description: "Proteção completa para seus bens durante o transporte"
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      title: "Rastreamento",
      description: "Acompanhe sua mudança em tempo real"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      title: "Garantia Total",
      description: "Comprometimento com prazos e qualidade"
    }
  ];

  return (
    <section id="areas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-50 text-blue-600 px-6 py-3 rounded-full text-sm font-bold mb-8 border border-blue-100">
            <MapPin className="w-4 h-4 mr-2" />
            Áreas de Cobertura
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Mudanças para todo o{' '}
            <span className="text-blue-600">Brasil</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Com sede em Belo Horizonte, atendemos <strong className="text-slate-900">12 estados</strong> brasileiros 
            com a mesma qualidade e segurança que nos tornaram referência no mercado.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Map Visualization */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-3xl p-8 border border-slate-100 shadow-xl">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Cobertura Nacional</h3>
                <p className="text-slate-600">12 estados cobertos</p>
              </div>

              {/* States Grid */}
              <div className="grid grid-cols-2 gap-3">
                {states.map((state, index) => (
                  <div
                    key={index}
                    className={`
                      flex items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:scale-105 border
                      ${state.highlight 
                        ? 'bg-blue-600 text-white border-blue-700 shadow-lg' 
                        : 'bg-white hover:bg-blue-50 text-slate-700 border-slate-200 hover:border-blue-200'
                      }
                    `}
                  >
                    <div className={`
                      w-2 h-2 rounded-full flex-shrink-0
                      ${state.highlight ? 'bg-white' : 'bg-blue-600'}
                    `}></div>
                    <span className="font-semibold text-sm">{state.name}</span>
                  </div>
                ))}
              </div>

              {/* Headquarters */}
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="font-bold">Sede Principal</span>
                </div>
                <p className="text-blue-100">Belo Horizonte - Minas Gerais</p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Por que escolher a GETAF para mudanças interestaduais?
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Mais de 10 anos de experiência transportando bens por todo o Brasil 
                com segurança, pontualidade e cuidado excepcional.
              </p>
            </div>

            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-slate-100"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-blue-100">
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">{benefit.title}</h4>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="pt-6">
              <a
                href="https://wa.me/5531986453365?text=Olá! Gostaria de saber mais sobre mudanças interestaduais."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.569-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.088"/>
                </svg>
                Solicitar Orçamento Interestadual
              </a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-12 text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl translate-y-48 -translate-x-48"></div>
          
          <div className="relative">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">Números que Impressionam</h3>
              <p className="text-slate-300 text-lg">Nossa experiência em mudanças interestaduais</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors border border-white/20">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">12</div>
                <div className="text-slate-300 font-medium">Estados Atendidos</div>
              </div>
              
              <div className="group">
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors border border-white/20">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">500+</div>
                <div className="text-slate-300 font-medium">Mudanças Interestaduais</div>
              </div>
              
              <div className="group">
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors border border-white/20">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">100%</div>
                <div className="text-slate-300 font-medium">Segurança Garantida</div>
              </div>
              
              <div className="group">
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors border border-white/20">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">98%</div>
                <div className="text-slate-300 font-medium">Satisfação dos Clientes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}