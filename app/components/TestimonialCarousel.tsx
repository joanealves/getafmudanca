export default function TestimonialCarousel() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="border border-gray-200 p-6 rounded-lg shadow-sm bg-white">
        <p className="text-gray-700 italic">
          "Muito bom! Mudança rápida e não tive nenhum problema com os móveis, todos bem embalados."
        </p>
        <p className="mt-4 font-semibold text-green-600">— João Silva</p>
      </div>
      <div className="border border-gray-200 p-6 rounded-lg shadow-sm bg-white">
        <p className="text-gray-700 italic">
          "Recomendo a Getaf a todos, já fiz diversos serviços de mudança com eles na minha empresa. Podem confiar!"
        </p>
        <p className="mt-4 font-semibold text-green-600">— Ana Costa</p>
      </div>
    </div>
  );
}