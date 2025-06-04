import ServiceCard from './components/ServiceCard';
import Map from './components/Map';
import TestimonialCarousel from './components/TestimonialCarousel';

export default function Home() {
  return (
    <>
      <section className="bg-black text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Serviços de mudança e içamentos é com a Getaf Mudanças</h1>
          <p className="mb-6 text-sm sm:text-base">
            A Getaf possui mais de 10 anos de atuação com içamentos e mudanças residenciais e comerciais.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full flex items-center gap-2 mx-auto">
            <span className="fab fa-whatsapp"></span>
            Solicite um Orçamento
          </button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              title="Mudanças Residenciais"
              description="A Getaf realiza mudanças residenciais a mais de 10 anos e possui vasta experiência..."
              image="/service1.jpg"
            />
            <ServiceCard
              title="Mudanças Comerciais"
              description="A Getaf também atua com mudanças comerciais, transportando com maestria e agilidade objetos de empresas..."
              image="/service2.jpg"
            />
            <ServiceCard
              title="Mudanças Interestaduais"
              description="Está precisando transportar sua carga pelo Brasil? A Getaf também pode te atender! Realizamos mudanças para 12 estados brasileiros."
              image="/truck.jpg"
            />
            <ServiceCard
              title="Içamentos"
              description="Preocupado com objetos que são difíceis de transportar? A Getaf também atua com içamentos..."
              image="/service3.jpg"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Áreas cobertas</h2>
          <Map />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Depoimentos</h2>
          <TestimonialCarousel />
        </div>
      </section>
    </>
  );
}