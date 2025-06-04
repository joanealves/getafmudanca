'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, MapPin, Clock, Star } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-2xl border-b border-slate-200' 
        : 'bg-white shadow-lg'
    }`}>
      {/* Top Bar - Visible only on desktop */}
      <div className="bg-slate-900 text-white py-3 hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-8">
              <div className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                <MapPin size={16} />
                <span className="font-medium">Belo Horizonte - MG</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                <Clock size={16} />
                <span className="font-medium">Seg-Sáb: 08:00 às 18:00</span>
              </div>
              <div className="flex items-center gap-2 text-yellow-400">
                <Star size={16} />
                <span className="font-medium">Mais de 10 anos de experiência</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <a 
                href="tel:31986453365" 
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-medium"
                aria-label="Ligar para (31) 9 8645-3365"
              >
                <Phone size={16} />
                <span>(31) 9 8645-3365</span>
              </a>
              <a 
                href="tel:31387929781" 
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-medium"
                aria-label="Ligar para (31) 3879-2781"
              >
                <Phone size={16} />
                <span>(31) 3879-2781</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="flex items-center gap-4">
              {/* Modern Logo */}
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-slate-900 to-slate-700 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border-2 border-slate-800">
                  G
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full shadow-lg"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-slate-900 group-hover:text-slate-700 transition-colors tracking-tight">
                  GETAF
                </span>
                <span className="text-sm text-slate-600 font-bold -mt-1 tracking-wider">
                  MUDANÇAS
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { href: '/', label: 'Início' },
              { href: '#servicos', label: 'Serviços' },
              { href: '#areas', label: 'Áreas Cobertas' },
              { href: '#depoimentos', label: 'Depoimentos' },
              { href: '#contato', label: 'Contato' }
            ].map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="text-slate-700 hover:text-slate-900 font-semibold transition-all duration-300 relative group py-2"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Buttons & Mobile Menu */}
          <div className="flex items-center space-x-3">
            {/* Phone button - hidden on mobile */}
            <a
              href="tel:31986453365"
              className="hidden md:flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 border border-slate-200 shadow-md"
              aria-label="Ligar agora"
            >
              <Phone size={18} />
              <span className="hidden lg:inline">Ligar</span>
            </a>

            {/* WhatsApp button */}
            <a
              href="https://wa.me/5531986453365?text=Olá! Gostaria de solicitar um orçamento para mudança."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-              to-green-600 hover:from-green-600 hover:to-green-700 text-white px-5 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-md"
              aria-label="Chamar no WhatsApp"
            >
              <MessageCircle size={18} />
              <span className="hidden lg:inline">WhatsApp</span>
            </a>

            {/* Mobile menu toggle button */}
            <button
              className="lg:hidden flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-slate-900 transition-all"
              onClick={toggleMenu}
              aria-label="Abrir menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white px-6 py-4 border-t border-slate-200 shadow-lg space-y-4">
          {[
            { href: '/', label: 'Início' },
            { href: '#servicos', label: 'Serviços' },
            { href: '#areas', label: 'Áreas Cobertas' },
            { href: '#depoimentos', label: 'Depoimentos' },
            { href: '#contato', label: 'Contato' }
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              className="block text-slate-700 font-semibold py-2 hover:text-slate-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
