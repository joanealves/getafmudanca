export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 px-4 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
        
        <div>
          <h2 className="text-white font-bold text-lg mb-2">Getaf Mudanças</h2>
          <p>
            A Getaf conta com mais de 10 anos de experiência e excelência nos serviços prestados.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold text-base mb-2">Contato</h3>
          <ul className="space-y-1">
            <li>
              <a href="mailto:getafmudancas@gmail.com" className="hover:text-white transition">
                getafmudancas@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+5531986453365" className="hover:text-white transition">
                (31) 9 8645-3365
              </a>
            </li>
            <li>
              <a href="tel:+553138792781" className="hover:text-white transition">
                (31) 3879-2781
              </a>
            </li>
          </ul>
        </div>

        <div className="md:text-right">
          <p className="mb-2">© 2025 Getaf Mudanças. Todos os direitos reservados.</p>
          <p>
            Desenvolvido por{' '}
            <a
              href="https://schemadev.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              Schema Desenvolvimento
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
