'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: '#inicio', label: 'Início' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#areas', label: 'Áreas de Atuação' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#contato', label: 'Contato' }
  ];

  return (
    <>
      {/* Top Bar com informações de contato */}
      <div className="bg-slate-900 text-white py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>(31) 98645-3365</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Belo Horizonte - MG</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>Seg-Sáb: 08:00-18:00</span>
              </div>
            </div>
            <div className="text-blue-400 font-medium">
              Orçamento Grátis Online!
            </div>
          </div>
        </div>
      </div>

      {/* Header Principal */}
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-sm shadow-lg py-3' 
            : 'bg-white/90 backdrop-blur-sm py-4'
        }`}
      >
        <nav className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-3 group"
              aria-label="GETAF Mudanças - Página Inicial"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                  GETAF
                </h1>
                <p className="text-sm text-slate-600 -mt-1">Mudanças</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-slate-700 hover:text-blue-900 font-medium transition-colors duration-200 group"
                >
                  {item.label}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </Link>
              ))}
            </div>

            {/* CTA Button Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="tel:+5531986453365"
                className="flex items-center space-x-2 text-slate-700 hover:text-blue-900 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">(31) 98645-3365</span>
              </Link>
              <Link
                href="#orcamento"
                className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-800 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Orçamento Grátis
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Abrir menu de navegação"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-slate-700" />
              ) : (
                <Menu className="w-6 h-6 text-slate-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 border-t border-slate-200 mt-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-slate-700 hover:text-blue-900 font-medium py-2 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <hr className="border-slate-200" />
                <Link
                  href="tel:+5531986453365"
                  className="flex items-center space-x-2 text-slate-700 hover:text-blue-900 py-2 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">(31) 98645-3365</span>
                </Link>
                <Link
                  href="#orcamento"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-blue-800 hover:to-blue-600 transition-all duration-200"
                >
                  Orçamento Grátis
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Spacer for fixed header */}
      <div className={`${isScrolled ? 'h-20' : 'h-24'} transition-all duration-300`}></div>
    </>
  );
};

export default Header;