import './globals.css';
import Header from './components/Header';
// import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GETAF Mudanças | Mudanças Residenciais, Comerciais e Içamentos em BH e Brasil',
  description: 'GETAF Mudanças: Mais de 10 anos de experiência em mudanças residenciais, comerciais e interestaduais. Serviços de içamento em Belo Horizonte e 12 estados do Brasil. Orçamento grátis!',
  keywords: 'mudanças BH, mudanças Belo Horizonte, mudanças residenciais, mudanças comerciais, mudanças interestaduais, içamentos, transportes, GETAF,mudancas BH, mudancas Belo Horizonte, mudancas residenciais, mudancas comerciais, mudancas interestaduais, icamentos, içamentos bh',
  authors: [{ name: 'GETAF Mudanças' }],
  creator: 'GETAF Mudanças',
  publisher: 'GETAF Mudanças',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://getafmudancas.com.br',
    title: 'GETAF Mudanças | Especialistas em Mudanças e Içamentos',
    description: 'Mais de 10 anos de experiência em mudanças residenciais, comerciais e interestaduais. Cobertura em 12 estados brasileiros. Solicite seu orçamento grátis!',
    siteName: 'GETAF Mudanças',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GETAF Mudanças - Serviços de Mudança e Içamentos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GETAF Mudanças | Especialistas em Mudanças e Içamentos',
    description: 'Mais de 10 anos de experiência em mudanças. Cobertura em 12 estados. Orçamento grátis!',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://getafmudancas.com.br',
  },
  other: {
    'google-site-verification': 'SEU_CODIGO_GOOGLE_VERIFICATION',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        <meta name="theme-color" content="#1e3a8a" />
        <meta name="msapplication-TileColor" content="#1e3a8a" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MovingCompany",
              "name": "GETAF Mudanças",
              "description": "Empresa especializada em mudanças residenciais, comerciais e interestaduais com mais de 10 anos de experiência.",
              "url": "https://getafmudancas.com.br",
              "logo": "https://getafmudancas.com.br/logo.png",
              "image": "https://getafmudancas.com.br/og-image.jpg",
              "telephone": "+55-31-98645-3365",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Belo Horizonte",
                "addressRegion": "MG",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -19.9167,
                "longitude": -43.9345
              },
              "areaServed": [
                "Minas Gerais", "São Paulo", "Rio de Janeiro", "Espírito Santo",
                "Bahia", "Goiás", "Brasília", "Mato Grosso", "Mato Grosso do Sul",
                "Paraná", "Santa Catarina", "Sergipe, Brasil"
              ],
              "serviceType": [
                "Mudanças Residenciais",
                "Mudanças Comerciais", 
                "Mudanças Interestaduais",
                "Içamentos",
                "Transporte de Móveis"
              ],
              "priceRange": "$$",
              "openingHours": "Mo-Sa 08:00-18:00",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "150"
              }
            })
          }}
        />
        
        {/* Google Analytics - Adicionar ID */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main role="main">
          {children}
        </main>
        {/* <Footer /> */}
        <WhatsAppButton />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "GETAF Mudanças",
              "url": "https://getafmudancas.com.br",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://getafmudancas.com.br/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </body>
    </html>
  );
}