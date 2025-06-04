import { Star, Quote, MessageCircle, Shield, Award } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "João Silva",
      role: "Cliente Residencial",
      content: "Muito bom! Mudança rápida e não tive nenhum problema com os móveis, todos bem embalados. A equipe foi muito profissional e cuidadosa com nossos pertences.",
      rating: 5,
      service: "Mudança Residencial",
      location: "BH → São Paulo"
    },
    {
      name: "Ana Costa",
      role: "Empresária",
      content: "Recomendo a GETAF a todos! Já fiz diversos serviços de mudança com eles na minha empresa. Podem confiar! Sempre pontuais e organizados.",
      rating: 5,
      service: "Mudança Comercial",
      location: "Belo Horizonte"
    },
    {
      name: "Carlos Mendes",
      role: "Cliente Interestadual",
      content: "Mudança de Minas Gerais para o Rio de Janeiro sem problemas. Preço justo, prazo cumprido e atendimento excepcional. Nota 10!",
      rating: 5,
      service: "Mudança Interestadual",
      location: "MG → RJ"
    },
    {
      name: "Maria Santos",
      role: "Cliente Içamento",
      content: "Precisava de um içamento complexo no meu apartamento. A GETAF resolveu tudo com equipamentos adequados e muito profissionalismo.",
      rating: 5,
      service: "Içamento",
      location: "Belo Horizonte"
    },
    {
      name: "Roberto Lima",
      role: "Cliente Residencial",
      content: "Atendimento impecável desde o primeiro contato. Equipe preparada, material de qualidade e cuidado extremo com nossos móveis.",
      rating: 5,
      service: "Mudança Residencial",
      location: "Contagem → BH"
    },
    {
      name: "Fernanda Oliveira",
      role: "Gerente de RH",
      content: "A GETAF fez a mudança do nosso escritório sem interromper nossas atividades. Planejamento perfeito e execução impecável!",
      rating: 5,
      service: "Mudança Comercial",
      location: "Belo Horizonte"
    }
  ];

  const stats = [
    { number: "1000+", label: "Clientes Satisfeitos", icon: <Shield className="w-6 h-6" /> },
    { number: "4.8", label: "Avaliação Média", icon: <Star className="w-6 h-6" /> },
    { number: "98%", label: "Taxa de Satisfação", icon: <Award className="w-6 h-6" /> },
    { number: "10+", label: "Anos de Experiência", icon: <MessageCircle className="w-6 h-6" /> }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-50 text-blue-600 px-6 py-3 rounded-full text-sm font-bold mb-8 border border-blue-100">
            <Star className="w-4 h-4 mr-2" />
            Depoimentos
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            O que nossos <span className="text-blue-600">clientes dizem</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Mais de 1000 clientes confiam na GETAF para suas mudanças. 
            Veja o que eles têm a dizer sobre nossos serviços.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors shadow-lg">
                <div className="text-white">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-1">{stat.number}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-100 relative group"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Service badge */}
              <div className="inline-flex items-center bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold mb-4 border border-blue-100">
                {testimonial.service}
              </div>

              {/* Author */}
              <div className="border-t border-slate-100 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-slate-600 text-sm">{testimonial.role}</div>
                    <div className="text-blue-600 text-xs font-medium">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-white text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-32 -translate-x-32"></div>
          
          <div className="relative">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg border border-white/30">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Seja o próximo cliente satisfeito!
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Junte-se aos mais de 1000 clientes que já confiaram na GETAF. 
              Solicite seu orçamento gratuito e descubra por que somos referência em mudanças.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5531986453365?text=Olá! Vi os depoimentos e gostaria de solicitar um orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-xl text-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.569-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.088"/>
                </svg>
                Solicitar Meu Orçamento
              </a>
              
              <a
                href="tel:31986453365"
                className="border-2 border-white/30 hover:border-white bg-white/10 hover:bg-white hover:text-blue-600 text-white px-10 py-5 rounded-2xl font-bold transition-all duration-300 hover:scale-105 backdrop-blur-sm flex items-center justify-center gap-3 text-lg"
              >
                Ligar Agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}