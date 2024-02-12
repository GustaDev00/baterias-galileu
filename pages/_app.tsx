import { AppProps } from 'next/app';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';

import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import AppProvider from '@/context';

import '../src/styles/reset.css';
import { useEffect } from 'react';
import GSAPInitializer from '@/components/atoms/GSAPInitializer';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const indexRemove = () => {
      if (window.location.href.includes('index.html')) {
        window.location.href = 'https://www.bateriasgalileu.com.br/';
      }
    };

    window.onload = indexRemove;

    return () => {
      window.onload = null;
    };
  }, []);

  return (
    <>
      <Head>
        <meta property="og:title" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.bateriasgalileu.com.br/`} />
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          id="schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            [{
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Baterias Galileu",
              "url": "https://www.bateriasgalileu.com.br/",
              "logo": "https://www.bateriasgalileu.com.br/imgs/logo.webp",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "5511944569970",
                "contactType": "customer service",
                "areaServed": "BR",
                "availableLanguage": "Portuguese"
              },
              "sameAs": [
                "https://www.facebook.com/bateriasgalileu/",
                "https://www.instagram.com/bateriasgalileu/",
                "https://www.bateriasgalileu.com.br/"
              ]
            },
            {
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "name": "Baterias Galileu",
              "url": "https://www.bateriasgalileu.com.br/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.bateriasgalileu.com.br/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }]
      `
          }}
        />
      </Head>
      <AppProvider>
        <GSAPInitializer />
        <Header />
        <Component {...pageProps} />
        <Footer />
        <Analytics />
      </AppProvider>
    </>
  );
};

export default App;
