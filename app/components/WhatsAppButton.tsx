export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5531986453365" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-50 transition-transform transform hover:scale-105"
      aria-label="Fale conosco no WhatsApp"
    >
      <i className="fab fa-whatsapp text-2xl"></i>
    </a>
  );
}