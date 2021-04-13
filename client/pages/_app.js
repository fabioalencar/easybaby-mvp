import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html{
      /* colors */
      --color--primary: #FF5357;
      --color--secondary: #035B7C;
      --color--blue: #3FCAFF;
      --color--yellow: #FFE292;
      --color--bg: #F0FBFF;
  }
  body{
    padding:0;
    margin:0;
    font-family: 'Nunito', sans-serif;
    padding-bottom: 85px;
    background: var(--color--bg);
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;800&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;800&display=swap"
          media="print"
          onLoad="this.media='all'"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;800&display=swap"
          />
        </noscript>
      </Head>
      <GlobalStyle />

      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
