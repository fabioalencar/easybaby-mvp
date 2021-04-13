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
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <GlobalStyle />

      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
