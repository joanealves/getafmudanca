"use client";

import React, { useState, useRef } from 'react';
import BrazilMap from './BrazilMap';
import { statesData } from '../data/statesData';
import { isStateServed } from '../components/utils/mapUtils';

const AreasSection: React.FC = () => {
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (
    event: React.MouseEvent<SVGPathElement>,
    code: string
  ) => {
    setHoveredState(code);
    if (tooltipRef.current) {
      tooltipRef.current.style.opacity = '1';
      tooltipRef.current.style.left = `${event.clientX + 10}px`;
      tooltipRef.current.style.top = `${event.clientY + 10}px`;
    }
  };

  const handleMouseLeave = () => {
    setHoveredState(null);
    if (tooltipRef.current) {
      tooltipRef.current.style.opacity = '0';
    }
  };

  const servedStates = [
    'Minas Gerais',
    'Espírito Santo', 
    'São Paulo',
    'Rio de Janeiro',
    'Brasília',
    'Goiás',
    'Santa Catarina',
    'Bahia',
    'Sergipe',
    'Mato Grosso do Sul',
    'Mato Grosso',
    'Paraná'
  ];

  return (
    <section className="relative py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Áreas cobertas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A GETAF está sediada em Belo Horizonte – MG e realiza mudanças para todo o Brasil. Confira!
          </p>
        </div>

        <div className="flex flex-wrap items-start justify-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0 flex justify-center">
            <div className="relative">
              <BrazilMap
                hoveredStateCode={hoveredState}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
              />
              <div
                ref={tooltipRef}
                className="absolute bg-gray-800 text-white text-sm p-2 rounded shadow-lg transition-opacity duration-300 pointer-events-none z-10"
                style={{ opacity: 0 }}
              >
                {hoveredState ? (
                  <>
                    <p className="font-bold">{statesData.find(s => s.code === hoveredState)?.name} ({hoveredState})</p>
                    <p>Capital: {statesData.find(s => s.code === hoveredState)?.capital}</p>
                    <p>{isStateServed(hoveredState) ? 'Atendido' : 'Não Atendido'}</p>
                  </>
                ) : 'Detalhes do Estado'}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-md">
              {servedStates.map((state, index) => (
                <div key={index} className="flex items-center text-gray-700">
                  <svg 
                    className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">{state}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasSection;