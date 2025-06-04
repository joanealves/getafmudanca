import Image from 'next/image';

export default function Map() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
      <Image
        src="/map-brasil.svg"
        alt="Mapa do Brasil com áreas cobertas"
        width={300}
        height={250}
        className="w-full md:w-auto max-w-xs"
      />
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <i className="fas fa-map-marker-alt text-red-500"></i> Minas Gerais
          </li>
          <li className="flex items-center gap-2">
            <i className="fas fa-map-marker-alt text-red-500"></i> Espírito Santo
          </li>
          <li className="flex items-center gap-2">
            <i className="fas fa-map-marker-alt text-red-500"></i> São Paulo
          </li>
          <li className="flex items-center gap-2">
            <i className="fas fa-map-marker-alt text-red-500"></i> Rio de Janeiro
          </li>
          <li className="flex items-center gap-2">
            <i className="fas fa-map-marker-alt text-red-500"></i> Brasília
          </li>
          <li className="flex items-center gap-2">
            <i className="fas fa-map-marker-alt text-red-500"></i> Goiás
          </li>
        </ul>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <i className="fas fa-map-marker-alt text-red-500"></i> Santa Catarina
          </li>
          <li className="flex items-center gap-2">
            <i className="fas fa-map-marker-alt text-red-500"></i> Bahia
          </li>
          <li className="flex items-center gap-2">
            <i className="fas fa-map-marker-alt text-red-500"></i> Sergipe
          </li>
          <li className="flex items-center gap-2">
            <i className="fas fa-map-marker-alt text-red-500"></i> Mato Grosso do Sul
          </li>
          <li className="flex items-center gap-2">
            <i className="fas fa-map-marker-alt text-red-500"></i> Mato Grosso
          </li>
          <li className="flex items-center gap-2">
            <i className="fas fa-map-marker-alt text-red-500"></i> Paraná
          </li>
        </ul>
      </div>
    </div>
  );
}