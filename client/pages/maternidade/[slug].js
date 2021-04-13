import Header from '../../components/Header';
import { useRouter } from 'next/router';
import { fetchAPI } from '../../lib/api';
import Link from 'next/link';

function Maternidade({ maternity }) {
  const { plans } = maternity;
  const router = useRouter();

  return (
    <>
      <Header />
      <button type="button" onClick={() => router.back()}>
        {'< '}Voltar
      </button>
      <h1>{maternity.NAME}</h1>
      <p>{maternity.CNPJ}</p>
      <p>{maternity.WEBSITE}</p>
      <p>{maternity.PHONE}</p>
      {plans.map((plan) => (
        <div key={plan.id}>
          <h3>{plan.TITLE}</h3>
          <p>{plan.DESCRIPTION}</p>
          <p>{plan.VALUE}</p>
          <Link
            href={{
              pathname: '/maternidade/checkout',
              query: { keyword: 'this way' },
            }}
          >
            <a>Contratar</a>
          </Link>
        </div>
      ))}
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
  console.log(maternities);
  return {
    props: { maternity: maternities[0] },
    revalidate: 1,
  };
}
