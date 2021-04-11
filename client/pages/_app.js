import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
