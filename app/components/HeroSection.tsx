'use client';

import { useState } from 'react';
import { ArrowRight, Shield, Clock, Users, Star } from 'lucide-react';

export default function Hero() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    origem: '',
    destino: '',
    tipo: 'residencial'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de envio do formulário
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat"></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Content Left */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium">
                <Star className="h-4 w-4" />
                Mais de 10 anos de experiência
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-gradient bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  GETAF
                </span>
                <br />
                <span className="text-3xl lg:text-4xl font-normal text-blue-200">
                  Mudanças
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                Especialistas em mudanças residenciais, comerciais e interestaduais. 
                Sua mudança com <strong className="text-white">segurança, agilidade e tranquilidade</strong> em todo o Brasil.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">10+</div>
                <div className="text-sm text-slate-400">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">12</div>
                <div className="text-sm text-slate-400">Estados Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">5.0</div>
                <div className="text-sm text-slate-400">Avaliação Clientes</div>
              </div>
            </div>

            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => document.getElementById('form-orcamento')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn btn-primary bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105"
              >
                Solicitar Orçamento Grátis
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <a 
                href="https://wa.me/5531986453365" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 border border-white/20 backdrop-blur-sm transition-all duration-300"
              >
                WhatsApp Direto
              </a>
            </div>
          </div>

          
          </div>
        </div>
    </section>
  );
}