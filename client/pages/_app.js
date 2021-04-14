import Head from 'next/head';
import getConfig from 'next/config';
import Router from 'next/router';
import { AnimatePresence } from 'framer-motion';
import { createGlobalStyle } from 'styled-components';
import { parseCookies } from 'nookies';

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
  .ais-Panel{
    margin:20px 0 30px;
  }
  .ais-RheostatRangeSlider-wrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .rheostat{
    width: 100%;
    margin: 0 20px;
  }
  .DefaultProgressBar_progressBar{
    background: #8ad9f6;
  }
  .white{
    background:#fff;
  }
  .rdt_TableHeader{
    display:none;
  }
  .rdt_Table{
    padding:10px;
  }
  .rdt_TableCol_Sortable{
    font-weight:800;
  }
  
  .logout{
    border-radius:50px;
    background: var(--color--secondary);
    color: #fff;
    border:none;
    font-size:20px;
    margin-top:20px;
    padding:10px 20px;
    font-family: Nunito, 'sans-serif';
  }
`;

const redirectUser = (ctx, location) => {
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    Router.push(location);
  }
};

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

const { publicRuntimeConfig } = getConfig();

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  const cookie = parseCookies(ctx).user;
  const { jwt } = cookie != undefined ? JSON.parse(cookie) : false;

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  if (!jwt && ctx.pathname === '/dashboard') {
    redirectUser(ctx, '/');
  }

  if (
    (jwt && ctx.pathname === '/login') ||
    (jwt && ctx.pathname === '/cadastro')
  ) {
    redirectUser(ctx, '/dashboard');
  }

  return {
    pageProps,
  };
};
