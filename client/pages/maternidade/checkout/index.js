import Header from '../../../components/Header';
import Router from 'next/router';
import PageContent from '../../../components/PageContent';
import getConfig from 'next/config';
import { fetchAPI } from '../../../lib/api';
import DataTable from 'react-data-table-component';

const { publicRuntimeConfig } = getConfig();

const customStyles = {
  rows: {
    style: {
      minHeight: '72px', // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: '8px', // override the cell padding for head cells
      paddingRight: '8px',
    },
  },
  cells: {
    style: {
      paddingLeft: '8px', // override the cell padding for data cells
      paddingRight: '8px',
    },
  },
};

const newContract = async () => {
  const contractInfo = {
    name: 'Contrato teste',
    MATERNITY_SIGNED: false,
    users_permissions_user: { id: 2 },
    plan: { id: 1 },
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
  if (contractResponse) {
    Router.push('/maternidade/checkout/sucesso');
    return contractResponse;
  } else {
    alert('Erro');
  }
};

function Checkout({ maternidade }) {
  const columns = [
    {
      name: 'Maternidade',
      selector: 'NAME',
      sortable: true,
    },
    {
      name: 'Plano',
      selector: 'plans[0].TITLE',
      sortable: true,
    },
    {
      name: 'Preço',
      selector: 'plans[0].VALUE',
      sortable: true,
    },
  ];
  return (
    <>
      <Header />
      <PageContent>
        <h1>Checkout</h1>
        <br />
        <DataTable
          columns={columns}
          data={[maternidade]}
          customStyles={customStyles}
        />
        <br />
        <p>
          <strong>Importante:</strong> Ao finalizar a contratação a maternidade
          entrará em contato para enviar o contrato assinado e um link para
          pagamento.
        </p>
        <button
          type="button"
          className="checkout"
          onClick={() => newContract()}
        >
          Finalizar contratação
        </button>
      </PageContent>
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
