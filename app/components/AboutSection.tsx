import { Shield, Users, Award, Zap, CheckCircle, Star, TrendingUp, Clock, Target, Handshake, MessageCircle } from 'lucide-react';

export default function AboutSection() {
  const features = [
    {
      icon: <Shield className="w-7 h-7 text-slate-800" />,
      title: "Segurança Garantida",
      description: "Oferecemos seguro adicional para seus bens e trabalhamos com máxima segurança em cada etapa do processo."
    },
    {
      icon: <Users className="w-7 h-7 text-slate-800" />,
      title: "Equipe Experiente",
      description: "Profissionais treinados e qualificados com mais de 10 anos de experiência no mercado de mudanças."
    },
    {
      icon: <Award className="w-7 h-7 text-slate-800" />,
      title: "Qualidade Comprovada",
      description: "Mais de 1000 mudanças realizadas com excelência e alta satisfação dos nossos clientes."
    },
    {
      icon: <Zap className="w-7 h-7 text-slate-800" />,
      title: "Agilidade Total",
      description: "Processos otimizados para realizar sua mudança de forma rápida, eficiente e sem complicações."
    }
  ];

  const values = [
    {
      icon: <Target className="w-5 h-5 text-white" />,
      title: "Atendimento 100% Personalizado",
      description: "Cada mudança é única, por isso oferecemos soluções personalizadas para suas necessidades específicas."
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-white" />,
      title: "Transparência Total",
      description: "Mantemos nossos clientes sempre informados, acabando com incertezas e proporcionando total confiança."
    },
    {
      icon: <Handshake className="w-5 h-5 text-white" />,
      title: "Resolução Rápida e Eficiente",
      description: "Qualquer eventualidade é resolvida de forma rápida e eficiente, garantindo sua total tranquilidade."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          {/* Content */}
          <div>
            <div className="inline-flex items-center bg-slate-100 text-slate-800 px-6 py-3 rounded-full text-sm font-bold mb-8 border border-slate-200">
              <Star className="w-4 h-4 mr-2" />
              Sobre a GETAF
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Mais de 10 anos transformando 
              <span className="text-slate-800 block mt-2"> mudanças</span> em 
              <span className="text-slate-800"> experiências tranquilas</span>
            </h2>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              A GETAF acredita que o serviço de mudança vai muito além de transportar objetos. 
              A <strong className="text-slate-800">tranquilidade do cliente</strong> está no topo de nossa prioridade, e para manter esse 
              padrão, contamos com os melhores profissionais do mercado.
            </p>

            {/* Values list with modern design */}
            <div className="space-y-6 mb-10">
              {values.map((value, index) => (
                <div key={index} className="bg-slate-800 rounded-2xl p-6 text-white hover:bg-slate-700 transition-all duration-300 hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">{value.title}</h4>
                      <p className="text-slate-200 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5531986453365?text=Olá! Gostaria de conhecer mais sobre os serviços da GETAF."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                Fale Conosco
              </a>
              <a
                href="#servicos"
                className="border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
              >
                Ver Serviços
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-slate-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-slate-100 group hover:bg-white"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-slate-100 transition-colors shadow-lg border border-slate-200">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-48 -translate-x-48"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl -translate-x-32 -translate-y-32"></div>
          
          <div className="relative">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">Nossos Números Falam por Si</h3>
              <p className="text-slate-300 text-lg">Resultados que comprovam nossa excelência no mercado</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors border border-white/20">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">10+</div>
                <div className="text-slate-300 font-medium">Anos de Experiência</div>
                <div className="text-slate-400 text-sm mt-1">Crescendo constantemente</div>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors border border-white/20">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">12</div>
                <div className="text-slate-300 font-medium">Estados Cobertos</div>
                <div className="text-slate-400 text-sm mt-1">Cobertura nacional</div>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors border border-white/20">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">1000+</div>
                <div className="text-slate-300 font-medium">Mudanças Realizadas</div>
                <div className="text-slate-400 text-sm mt-1">Com total sucesso</div>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors border border-white/20">
                  <Star className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">4.8</div>
                <div className="text-slate-300 font-medium">Avaliação Média</div>
                <div className="text-slate-400 text-sm mt-1">Clientes satisfeitos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}