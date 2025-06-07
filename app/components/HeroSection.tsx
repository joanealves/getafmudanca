'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Shield, Clock, Users, Star } from 'lucide-react';

interface FormData {
  nome: string;
  telefone: string;
  email: string;
  origem: string;
  destino: string;
  tipo: 'residencial' | 'comercial' | 'interestadual';
}

export default function Hero() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    telefone: '',
    email: '',
    origem: '',
    destino: '',
    tipo: 'residencial',
  });

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const images = ['/mudanca.jpg', '/comercial.jpg', '/icamento.webp'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 8000); 

    return () => clearInterval(interval); 
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Olá! Gostaria de solicitar um orçamento de mudança.
Nome: ${formData.nome}
Telefone: ${formData.telefone}
Email: ${formData.email}
Origem: ${formData.origem}
Destino: ${formData.destino}
Tipo: ${formData.tipo}`;
    const whatsappUrl = `https://wa.me/5531986453365?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden"
      role="main"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 z-0">
        {images.map((src, index) => (
          <div
            key={src}
            className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${src})`,
              opacity: index === currentImageIndex ? 0.2 : 0,
              zIndex: index === currentImageIndex ? 10 : 1,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-emerald-400/20">
                <Star className="h-4 w-4" aria-hidden="true" />
                Mais de 10 anos de experiência
              </div>

              <h1
                id="hero-title"
                className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
              >
                <span className="text-gradient bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                  GETAF
                </span>
                <br />
                <span className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white">
                   GETAF MUDANÇAS
                </span>
              </h1>

              <p className="text-xl sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Especialistas em mudanças 
                e içamentos residenciais, comerciais e interestaduais. Sua
                mudança com{' '}
                <strong className="text-white">segurança, agilidade e tranquilidade</strong> em todo o
                Brasil.
              </p>
            </div>


            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('form-orcamento')}
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                aria-label="Solicitar orçamento gratuito"
              >
                Vamos Conversar ?
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}