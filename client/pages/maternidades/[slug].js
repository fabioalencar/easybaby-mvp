import Header from '../../components/Header';
import { fetchAPI } from '../../lib/api';

function Maternidade({ maternity }) {
  return (
    <>
      <Header />
      <h1>{maternity.NAME}</h1>
      <p>{maternity.CNPJ}</p>
      <p>{maternity.WEBSITE}</p>
      <p>{maternity.PHONE}</p>
    </>
  );
}

export default Maternidade;

export async function getStaticPaths() {
  const maternities = await fetchAPI('/maternities');

  return {
    paths: maternities.map((maternity) => ({
      params: {
        slug: maternity.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const maternities = await fetchAPI(`/maternities?slug=${params.slug}`);

  return {
    props: { maternity: maternities[0] },
    revalidate: 1,
  };
}
