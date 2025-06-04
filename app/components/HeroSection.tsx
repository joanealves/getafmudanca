import {
  MessageCircle,
  Truck,
  Shield,
  Clock,
  MapPin,
  Star,
  Phone,
  CheckCircle,
  Home,
  Building2,
  ArrowUpDown,
  Award,
  Users
} from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden min-h-screen flex items-center pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm0 0c0 5.5 4.5 10 10 10s10-4.5 10-10-4.5-10-10-10-10 4.5-10 10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        ></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-white/20 shadow-lg">
              <Shield className="w-4 h-4 mr-2" />
              Mais de 10 anos de experiência
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-none">
              Mudanças e{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">
                içamentos
              </span>
              <br className="hidden lg:block" />
              com a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 font-black">
                GETAF
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-slate-200 mb-10 leading-relaxed max-w-2xl">
              Serviços profissionais de mudança residencial, comercial e içamentos. 
              Sua tranquilidade é nossa <strong className="text-white">prioridade</strong>.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                { icon: <Users className="w-4 h-4" />, text: 'Equipe experiente' },
                { icon: <Shield className="w-4 h-4" />, text: 'Seguro incluído' },
                { icon: <MapPin className="w-4 h-4" />, text: '12 estados cobertos' },
                { icon: <Award className="w-4 h-4" />, text: 'Orçamento gratuito' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white group-hover:bg-white/20 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-slate-200 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="https://wa.me/5531986453365?text=Olá! Gostaria de solicitar um orçamento para mudança."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-5 rounded-2xl font-bold transition-all duration-300 hover:scale-105 shadow-2xl flex items-center justify-center gap-3 text-lg"
              >
                <MessageCircle size={24} />
                Solicitar Orçamento Grátis
              </a>
              <a
                href="tel:31986453365"
                className="border-2 border-white/30 hover:border-white bg-white/5 hover:bg-white hover:text-slate-900 text-white px-10 py-5 rounded-2xl font-bold transition-all duration-300 hover:scale-105 backdrop-blur-sm flex items-center justify-center gap-3 text-lg"
              >
                <Phone size={24} />
                (31) 9 8645-3365
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-white" />
                <span>Belo Horizonte - MG</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-white" />
                <span>Seg-Sáb: 08:00 às 18:00</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={16} className="text-yellow-400" />
                <span>4.8/5 de avaliação</span>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="relative">
              {/* Background decorative cards */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl transform rotate-3 blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl transform -rotate-2 blur-sm translate-x-2 translate-y-2"></div>

              {/* Main card */}
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 shadow-2xl">
                {/* Icon */}
                <div className="w-24 h-24 bg-gradient-to-br from-white/20 to-white/10 rounded-3xl flex items-center justify-center mb-8 shadow-xl border border-white/20">
                  <Truck className="w-12 h-12 text-white" />
                </div>

                {/* Company highlight */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">GETAF Mudanças</h3>
                  <p className="text-slate-200">Confiança e qualidade desde 2013</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    { value: '10+', label: 'Anos de experiência', icon: <Award className="w-5 h-5" /> },
                    { value: '12', label: 'Estados cobertos', icon: <MapPin className="w-5 h-5" /> },
                    { value: '1000+', label: 'Mudanças realizadas', icon: <Truck className="w-5 h-5" /> },
                    { value: '4.8', label: 'Avaliação média', icon: <Star className="w-5 h-5" /> }
                  ].map((stat, index) => (
                    <div key={index} className="text-center bg-white/5 rounded-2xl p-4 border border-white/10">
                      <div className="flex items-center justify-center mb-2 text-white">
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-xs text-slate-300 leading-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Service icons */}
                <div className="flex justify-center gap-4">
                  {[
                    { icon: Home, label: 'Residencial' },
                    { icon: Building2, label: 'Comercial' },
                    { icon: ArrowUpDown, label: 'Içamentos' }
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="group flex flex-col items-center"
                    >
                      <div className="w-14 h-14 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 border border-white/20">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-xs text-slate-300 mt-2 font-medium">{service.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-12 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-4 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}