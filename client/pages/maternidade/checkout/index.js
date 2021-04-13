import Header from '../../../components/Header';
import getConfig from 'next/config';
import { fetchAPI } from '../../../lib/api';

const { publicRuntimeConfig } = getConfig();

const newContract = async () => {
  const contractInfo = {
    name: 'teste',
    MATERNITY_SIGNED: false,
  };

  const contract = await fetch(
    `${publicRuntimeConfig.STRAPI_API_URL}/contracts`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contractInfo),
    }
  );

  const contractResponse = await contract.json();
  return contractResponse;
};

function Checkout({ maternidade }) {
  return (
    <>
      <Header />
      <h1>Checkout</h1>
      <p>{maternidade.NAME}</p>
      <p>{maternidade.plans[0].TITLE}</p>
      <p>{maternidade.plans[0].VALUE}</p>
      <button type="button" onClick={() => newContract()}>
        Enviar
      </button>
    </>
  );
}

export default Checkout;

export async function getStaticProps({ params }) {
  const maternities = await fetchAPI(`/maternities?id=1`);

  return {
    props: { maternidade: maternities[0] },
    revalidate: 1,
  };
}
