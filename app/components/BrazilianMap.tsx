"use client"
import React from 'react';

const MapaBrasil: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Título */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Áreas Cobertas
      </h1>

      {/* Texto Descritivo */}
      <p className="text-lg text-center text-gray-600 mb-12">
        A GETAF está sediada em Belo Horizonte – MG e realiza mudanças para todo o Brasil. Confira!
      </p>

      {/* Container Principal */}
      <div className="flex flex-row items-center justify-center space-x-12">
        {/* Mapa do Brasil */}
        <div className="relative w-[400px] h-[400px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            className="w-full h-full"
          >
            {/* Minas Gerais */}
            <path
              id="mg"
              onMouseOver={(e) => {
                const target = e.target as SVGPathElement;
                target.setAttribute('fill', 'blue');
              }}
              onMouseOut={(e) => {
                const target = e.target as SVGPathElement;
                target.setAttribute('fill', '#ccc');
              }}
              d="M100 50 L120 70 L110 90 L90 80 Z"
              fill="#ccc"
              stroke="#000"
              strokeWidth="0.5"
            />
            {/* São Paulo */}
            <path
              id="sp"
              onMouseOver={(e) => {
                const target = e.target as SVGPathElement;
                target.setAttribute('fill', 'blue');
              }}
              onMouseOut={(e) => {
                const target = e.target as SVGPathElement;
                target.setAttribute('fill', '#ccc');
              }}
              d="M120 70 L140 90 L130 110 L110 90 Z"
              fill="#ccc"
              stroke="#000"
              strokeWidth="0.5"
            />
            {/* Rio de Janeiro */}
            <path
              id="rj"
              onMouseOver={(e) => {
                const target = e.target as SVGPathElement;
                target.setAttribute('fill', 'blue');
              }}
              onMouseOut={(e) => {
                const target = e.target as SVGPathElement;
                target.setAttribute('fill', '#ccc');
              }}
              d="M140 90 L160 110 L150 130 L130 110 Z"
              fill="#ccc"
              stroke="#000"
              strokeWidth="0.5"
            />
            {/* Espírito Santo */}
            <path
              id="es"
              onMouseOver={(e) => {
                const target = e.target as SVGPathElement;
                target.setAttribute('fill', 'blue');
              }}
              onMouseOut={(e) => {
                const target = e.target as SVGPathElement;
                target.setAttribute('fill', '#ccc');
              }}
              d="M160 110 L180 130 L170 150 L150 130 Z"
              fill="#ccc"
              stroke="#000"
              strokeWidth="0.5"
            />
            {/* Bahia */}
            <path
              id="ba"
              onMouseOver={(e) => {
                const target = e.target as SVGPathElement;
                target.setAttribute('fill', 'blue');
              }}
              onMouseOut={(e) => {
                const target = e.target as SVGPathElement;
                target.setAttribute('fill', '#ccc');
              }}
              d="M180 130 L200 150 L190 170 L170 150 Z"
              fill="#ccc"
              stroke="#000"
              strokeWidth="0.5"
            />
            {/* Sergipe */}
            <path
              id="se"
              onMouseOver={(e) => {
                const target = e.target as SVGPathElement;
                target.setAttribute('fill', 'blue');
              }}
              onMouseOut={(e) => {
                const target = e.target as SVGPathElement;
                target.setAttribute('fill', '#ccc');
              }}
              d="M200 150 L220 170 L210 190 L190 170 Z"
              fill="#ccc"
              stroke="#000"
              strokeWidth="0.5"
            />
            {/* Mato Grosso do Sul */}
            <path
              id="ms"
              onMouseOver={(e) => {
                const target = e.target as SVGPathElement;
                target.setAttribute('fill', 'blue');
              }}
              onMouseOut={(e) => {
                const target = e.target as SVGPathElement;
                target.setAttribute('fill', '#ccc');
              }}
              d="M100 90 L120 110 L110 130 L90 110 Z"
              fill="#ccc"
              stroke="#000"
              strokeWidth="0.5"
            />
            {/* Mato Grosso */}
            <path
              id="mt"
              onMouseOver={(e) => {
                const target = e.target as SVGPathElement;
                target.setAttribute('fill', 'blue');
              }}
              onMouseOut={(e) => {
                const target = e.target as SVGPathElement;
                target.setAttribute('fill', '#ccc');
              }}
              d="M120 110 L140 130 L130 150 L110 130 Z"
              fill="#ccc"
              stroke="#000"
              strokeWidth="0.5"
            />
            {/* Goiás */}
            <path
              id="go"
              onMouseOver={(e) => {
                const target = e.target as SVGPathElement;
                target.setAttribute('fill', 'blue');
              }}
              onMouseOut={(e) => {
                const target = e.target as SVGPathElement;
                target.setAttribute('fill', '#ccc');
              }}
              d="M140 130 L160 150 L150 170 L130 150 Z"
              fill="#ccc"
              stroke="#000"
              strokeWidth="0.5"
            />
            {/* Paraná */}
            <path
              id="pr"
              onMouseOver={(e) => {
                const target = e.target as SVGPathElement;
                target.setAttribute('fill', 'blue');
              }}
              onMouseOut={(e) => {
                const target = e.target as SVGPathElement;
                target.setAttribute('fill', '#ccc');
              }}
              d="M160 150 L180 170 L170 190 L150 170 Z"
              fill="#ccc"
              stroke="#000"
              strokeWidth="0.5"
            />
            {/* Santa Catarina */}
            <path
              id="sc"
              onMouseOver={(e) => {
                const target = e.target as SVGPathElement;
                target.setAttribute('fill', 'blue');
              }}
              onMouseOut={(e) => {
                const target = e.target as SVGPathElement;
                target.setAttribute('fill', '#ccc');
              }}
              d="M180 170 L200 190 L190 210 L170 190 Z"
              fill="#ccc"
              stroke="#000"
              strokeWidth="0.5"
            />
            {/* Distrito Federal (Brasília) */}
            <path
              id="df"
              onMouseOver={(e) => {
                const target = e.target as SVGPathElement;
                target.setAttribute('fill', 'blue');
              }}
              onMouseOut={(e) => {
                const target = e.target as SVGPathElement;
                target.setAttribute('fill', '#ccc');
              }}
              d="M100 130 L120 150 L110 170 L90 150 Z"
              fill="#ccc"
              stroke="#000"
              strokeWidth="0.5"
            />
          </svg>
        </div>

        {/* Lista de Regiões Atendidas */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-800">Regiões Atendidas</h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Minas Gerais</li>
            <li>Espírito Santo</li>
            <li>São Paulo</li>
            <li>Rio de Janeiro</li>
            <li>Brasília</li>
            <li>Goiás</li>
            <li>Santa Catarina</li>
            <li>Bahia</li>
            <li>Sergipe</li>
            <li>Mato Grosso do Sul</li>
            <li>Mato Grosso</li>
            <li>Paraná</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MapaBrasil;