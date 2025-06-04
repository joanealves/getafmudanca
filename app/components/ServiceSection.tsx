import { Home, Building2, Truck, ArrowUpDown, Shield, Clock, CheckCircle, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
  isReversed?: boolean;
}

function ServiceCard({ icon, title, description, features, color, isReversed }: ServiceCardProps) {
  return (
    <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 mb-20`}>
      {/* Visual */}
      <div className="w-full lg:w-1/2">
        <div className="relative group">
          <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500 opacity-20`}></div>
          <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300">
            <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
              {icon}
            </div>
            <div className="h-48 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl flex items-center justify-center text-slate-400 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent"></div>
              <span className="text-sm font-medium">Imagem do serviço</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2">
        <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">{title}</h3>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">{description}</p>
        
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://wa.me/5531986453365?text=Olá! Gostaria de saber mais sobre mudanças residenciais."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
          >
            Solicitar Orçamento
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="tel:31986453365"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
          >
            Ligar Agora
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const services = [
    {
      icon: <Home className="w-8 h-8 text-white" />,
      title: "Mudanças Residenciais",
      description: "A GETAF possui mais de 10 anos de experiência em mudanças residenciais, cuidando dos seus bens com a máxima segurança e profissionalismo. Nossa equipe treinada garante que sua mudança seja tranquila e sem preocupações.",
      features: [
        "Embalagem profissional de móveis e objetos",
        "Desmontagem e montagem de móveis",
        "Transporte seguro e protegido",
        "Equipe treinada e experiente",
        "Seguro para seus bens"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Building2 className="w-8 h-8 text-white" />,
      title: "Mudanças Comerciais",
      description: "Especialistas em mudanças empresariais, transportamos equipamentos, móveis e documentos com agilidade e segurança. Minimizamos o tempo de inatividade do seu negócio com planejamento eficiente.",
      features: [
        "Mudanças fora do horário comercial",
        "Transporte de equipamentos sensíveis",
        "Planejamento detalhado da mudança",
        "Equipe especializada em ambientes corporativos",
        "Mínima interrupção das atividades"
      ],
      color: "from-slate-600 to-slate-700",
      isReversed: true
    },
    {
      icon: <Truck className="w-8 h-8 text-white" />,
      title: "Mudanças Interestaduais",
      description: "Precisa transportar sua carga pelo Brasil? A GETAF realiza mudanças para 12 estados brasileiros com toda segurança e pontualidade. Sua mudança de longa distância em boas mãos.",
      features: [
        "Cobertura em 12 estados brasileiros",
        "Rastreamento da carga em tempo real",
        "Equipe especializada em longas distâncias",
        "Prazos de entrega confiáveis",
        "Documentação completa para transporte"
      ],
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: <ArrowUpDown className="w-8 h-8 text-white" />,
      title: "Içamentos",
      description: "Objetos difíceis de transportar? A GETAF possui equipamentos e técnicos especializados em içamentos, possibilitando a remoção segura de qualquer objeto, em qualquer local.",
      features: [
        "Equipamentos especializados em içamento",
        "Técnicos certificados e experientes",
        "Içamento de objetos pesados e grandes",
        "Análise técnica prévia do local",
        "Máxima segurança na operação"
      ],
      color: "from-slate-700 to-slate-800",
      isReversed: true
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Nossos Serviços
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
            Soluções completas em mudanças e <span className="text-blue-600">içamentos</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Com mais de uma década de experiência, oferecemos serviços especializados 
            para todas as suas necessidades de mudança e transporte.
          </p>
        </div>

        {/* Services */}
        <div className="max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              color={service.color}
              isReversed={service.isReversed}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-32 -translate-x-32"></div>
            
            <div className="relative">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">Pronto para sua mudança?</h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Entre em contato conosco e receba um orçamento personalizado para seu projeto. 
                Estamos prontos para tornar sua mudança uma experiência tranquila e segura.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5531986453365?text=Olá! Gostaria de solicitar um orçamento detalhado."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371