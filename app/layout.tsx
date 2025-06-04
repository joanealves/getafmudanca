import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Getaf Mudanças | Serviços de Mudança e Içamentos</title>
        <meta name="description" content="Getaf Mudanças realiza mudanças residenciais, comerciais e interestaduais com mais de 10 anos de experiência." />
        <meta property="og:title" content="Getaf Mudanças" />
        <meta property="og:description" content="Serviços de mudança e içamentos com mais de 10 anos de experiência." />
        <meta property="og:image" content="/preview-image.jpg" />
        <meta property="og:url" content="https://seusite.com.br"  />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}