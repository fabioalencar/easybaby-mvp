import Head from 'next/head';
import '../styles/index.css';

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

export default MyApp;
