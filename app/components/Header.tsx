'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

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
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/98 backdrop-blur-md shadow-lg border-b border-slate-100' 
            : 'bg-white/95 backdrop-blur-sm'
        }`}
        role="banner"
      >
        <nav 
          className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8"
          role="navigation"
          aria-label="Navegação principal"
        >
          <div className={`flex justify-between items-center transition-all duration-300 ${
            isScrolled ? 'py-2 sm:py-3' : 'py-3 sm:py-4 lg:py-5'
          }`}>
            
            <Link 
              href="/" 
              className="flex items-center gap-2 sm:gap-3 group flex-shrink-0 min-w-0"
              aria-label="GETAF Mudanças - Ir para página inicial"
            >
              <div className={`${
                isScrolled ? 'w-9 h-9 sm:w-10 sm:h-10' : 'w-10 h-10 sm:w-12 sm:h-12'
              } bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg`}>
                <span className={`text-white font-bold ${
                  isScrolled ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'
                } transition-all duration-300`}>G</span>
              </div>
              <div className="min-w-0 flex-1">
                <h1 className={`font-bold text-slate-900 group-hover:text-blue-900 transition-colors truncate ${
                  isScrolled ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'
                }`}>
                  GETAF
                </h1>
                <p className={`text-slate-600 -mt-0.5 truncate ${
                  isScrolled ? 'text-xs' : 'text-xs sm:text-sm'
                }`}>Mudanças</p>
              </div>
            </Link>

            <div className="hidden lg:flex items-center justify-center flex-1 max-w-2xl mx-8">
              <div className="flex items-center space-x-1 xl:space-x-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative text-slate-700 hover:text-blue-900 font-medium transition-all duration-200 group py-2 px-3 xl:px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg hover:bg-slate-50/70 text-sm xl:text-base whitespace-nowrap"
                  >
                    {item.label}
                    <span className="absolute inset-x-3 xl:inset-x-4 -bottom-0 h-0.5 bg-gradient-to-r from-blue-900 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full"></span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-2 xl:gap-4 flex-shrink-0">
              <Link
                href="tel:+5531986453365"
                className="flex items-center gap-2 text-slate-700 hover:text-blue-900 transition-all duration-200 py-2 px-3 xl:px-4 rounded-lg hover:bg-slate-50/70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group"
                aria-label="Ligar para (31) 98645-3365"
              >
                <Phone className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true" />
                <span className="font-medium text-sm xl:text-base whitespace-nowrap">(31) 98645-3365</span>
              </Link>
              <Link
                href="#orcamento"
                className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white px-4 xl:px-6 py-2.5 xl:py-3 rounded-xl font-semibold hover:from-blue-800 hover:via-blue-700 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 whitespace-nowrap text-sm xl:text-base"
              >
                Orçamento Grátis
              </Link>
            </div>

            <button
              onClick={toggleMenu}
              className="lg:hidden p-2.5 rounded-xl hover:bg-slate-100 active:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex-shrink-0"
              aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  className={`w-6 h-6 text-slate-700 absolute inset-0 transition-all duration-200 ${
                    isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                  }`} 
                  aria-hidden="true" 
                />
                <X 
                  className={`w-6 h-6 text-slate-700 absolute inset-0 transition-all duration-200 ${
                    isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                  }`} 
                  aria-hidden="true" 
                />
              </div>
            </button>
          </div>

          <div 
            id="mobile-menu"
            className={`lg:hidden absolute left-0 right-0 top-full bg-white/98 backdrop-blur-md border-t border-slate-200 shadow-lg transition-all duration-300 ease-in-out ${
              isMenuOpen 
                ? 'opacity-100 translate-y-0 pointer-events-auto' 
                : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}
            aria-hidden={!isMenuOpen}
          >
            <div className="container mx-auto px-3 sm:px-4 py-4 max-h-[calc(100vh-80px)] overflow-y-auto">
              <div className="flex flex-col">
                {/* Links de navegação */}
                <div className="space-y-1 mb-6">
                  {navItems.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block text-slate-700 hover:text-blue-900 hover:bg-blue-50 font-medium py-3.5 px-4 transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                        isMenuOpen ? 'animate-fade-in-up' : ''
                      }`}
                      style={{ 
                        animationDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                        animationFillMode: 'both'
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                
                <div className="border-t border-slate-200 pt-4 space-y-3">
                  <Link
                    href="tel:+5531986453365"
                    className="flex items-center gap-3 text-slate-700 hover:text-blue-900 hover:bg-blue-50 py-3.5 px-4 transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group"
                    aria-label="Ligar para (31) 98645-3365"
                  >
                    <Phone className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true" />
                    <span className="font-medium">(31) 98645-3365</span>
                  </Link>
                  
                  <div className="px-4 pt-2">
                    <Link
                      href="#orcamento"
                      onClick={() => setIsMenuOpen(false)}
                      className="block w-full bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white px-6 py-4 rounded-xl font-semibold text-center hover:from-blue-800 hover:via-blue-700 hover:to-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Orçamento Grátis
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <div 
        className={`transition-all duration-300 ${
          isScrolled ? 'h-14 sm:h-16 lg:h-18' : 'h-16 sm:h-20 lg:h-24'
        }`}
        aria-hidden="true"
      />

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Header;