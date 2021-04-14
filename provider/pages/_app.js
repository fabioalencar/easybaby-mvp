import Head from 'next/head';
import Router from 'next/router';
import getConfig from 'next/config';
import { parseCookies } from 'nookies';
import '../styles/index.css';

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
      <Head></Head>
      <div className="mx-auto">
        <Component {...pageProps} />
      </div>
    </>
  );
}

const { publicRuntimeConfig } = getConfig();

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  const cookie = parseCookies(ctx).user;
  const { jwt } = cookie != undefined ? JSON.parse(cookie) : false;

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  if (!jwt && ctx.pathname != '/') {
    redirectUser(ctx, '/');
  }

  return {
    pageProps,
  };
};

export default MyApp;
