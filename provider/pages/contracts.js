import getConfig from 'next/config';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { parseCookies } from 'nookies';
import Router from 'next/router';

function Contracts({ authData, contracts}) {

  const handleNewForm = (authData, contract) => {
    

    if (true) {
      Router.push('/newContract');
    }
  };

  const handleOpenForm = (authData, contract) => {
    

    if (true) {
      Router.push('/contractForm');
    }
  };

  const { user } = authData;
  console.log('AQUI! '+JSON.stringify(contracts));
  return ( //TO-DO: formatar essa tabela!
    <div className="flex flex-col h-screen justify-between bg-gray-100">
      <header className=" px-2 sm:px-4 lg:px-4 bg-white shadow mb-8">
        <Navbar user={user} />
        <div className="max-w-7xl mx-auto py-1 px-1 sm:px-4 lg:px-6 ">
          <div className="flex justify-between items-center py-6 md:justify-between">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              Contratos
            </h1>
          </div>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-4 p-20 sm:px-6 lg:px-8 bg-white">
      <table>
        <tr>
          <th>Nome do contrato |</th><th>Nome do plano |</th><th>Nome do paciente</th>
        </tr>
      </table>
        {contracts.map((contract) => (
          <>
          <table>
            <tr>
            <td>
            <button //className="w-full bg-primary-100 hover:bg-primary-50 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
            onClick={() => handleOpenForm(authData, contract)}
            >
            <div key={contract.id}>{contract.name}|</div>
            </button>
            
            </td>
            
            <td><div key={contract.id}>{contract.plan.TITLE}|</div></td>
            <td><div key={contract.id}>{contract.customer.NAME}</div></td>
            </tr>
            
          </table>

          </>
        ))}
        <table>
        <tr><td><div className="flex w-full mt-8">
              <button
                className="w-full bg-primary-100 hover:bg-primary-50 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
                type="button"
                onClick={() => handleNewForm(authData, contracts)}
              >
                Novo contrato
              </button></div></td></tr>
        </table>
      </main>
      <Footer />
    </div>
  );
}



const { publicRuntimeConfig } = getConfig();

export async function getServerSideProps(ctx) {
  const cookie = parseCookies(ctx).user;
  const userData = cookie != undefined ? JSON.parse(cookie) : false;

  const res = await fetch(`${publicRuntimeConfig.STRAPI_API_URL}/contracts`, {
    headers: {
      Authorization: `Bearer ${userData.jwt}`,
    },
  });

  const contracts = await res.json();

  return {
    props: {
      contracts: contracts,
      authData: userData,
    },
  };
}

export default Contracts;
