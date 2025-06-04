import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black text-white py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <img src="/logo.png" alt="Logo" className="h-10" />
        <div className="flex gap-6 items-center text-sm">
          <span><i className="fas fa-phone mr-1"></i> 31 9 8645-3365</span>
          <span><i className="fas fa-whatsapp mr-1"></i> 31 3879-2781</span>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
            Solicite um Orçamento
          </button>
        </div>
      </div>
    </header>
  );
}