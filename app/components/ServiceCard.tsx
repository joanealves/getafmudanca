interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ServiceCard({ title, description, image }: ServiceCardProps) {
  return (
    <div className="bg-white border p-6 rounded shadow flex flex-col md:flex-row items-center gap-6">
      <img src={image} alt={title} className="w-full md:w-48 h-32 object-cover rounded" />
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}