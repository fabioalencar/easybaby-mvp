import getConfig from 'next/config';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { parseCookies } from 'nookies';

function contractForm({ authData, contracts, contractId }){ //TO-DO: tornar o formulário editável, não entendi o que eu fiz de errado :(
    
  console.log('contractId: '+contractId);
  const cookie = parseCookies().user;
    const userData = cookie != undefined ? JSON.parse(cookie) : false;

    

    const contrato = JSON.stringify(contracts);


    console.log('Contrato aqui! > '+contracts[0].id);

    /*const res = fetch(`${publicRuntimeConfig.STRAPI_API_URL}/contracts/1`, {
        headers: {
          Authorization: `Bearer ${userData.jwt}`,
        },
      });*/
    //console.log('AQUI 2! '+JSON.stringify(contract.id));
    const { user } = authData;
    return (
      <div className="flex flex-col h-screen justify-between bg-gray-100">
        <header className=" px-2 sm:px-4 lg:px-4 bg-white shadow mb-8">
        <Navbar user={user} />
          <div className="max-w-7xl mx-auto py-1 px-1 sm:px-4 lg:px-6 ">
            <div className="flex justify-between items-center py-6 md:justify-between">
              <h1 className="text-3xl font-bold leading-tight text-gray-900">
                Contrato: {contracts.name}
              </h1>
            </div>
          </div>
        </header>
        <main className="max-w-5xl mx-auto px-4 p-20 sm:px-6 lg:px-8 bg-white">
            <>
            <form method="post" action="#" align="center"> 
            <table>
            <tr>
                <td><label
                className="block text-secondary-100  text-sm font-semibold mb-2"
                htmlFor="password"
              >
                Id do Contrato: 
              </label></td>
              <td> <input
                className="text-sm bg-gray-100 appearance-none rounded w-full border-gray-300 py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="id-contrato"
                type="text"
                value={contracts.id}/></td>
              </tr>

              <tr>
                <td><label
                className="block text-secondary-100  text-sm font-semibold mb-2"
                htmlFor="password"
              >
                Nome do Contrato: 
              </label></td>
              <td> <input
                className="text-sm bg-gray-100 appearance-none rounded w-full border-gray-300 py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="nome-contrato"
                type="text"
                value={contracts.name}/></td>
              </tr>

              <tr>
                <td><label
                className="block text-secondary-100  text-sm font-semibold mb-2"
                htmlFor="password"
              >
                Nome do Plano: 
              </label></td>
              <td> <input
                className="text-sm bg-gray-100 appearance-none rounded w-full border-gray-300 py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="nome-contrato"
                type="text"
                value={contrato.plan}/></td>
              </tr>

              <tr>
                <td><label
                className="block text-secondary-100  text-sm font-semibold mb-2"
                htmlFor="password"
              >
                Nome do cliente: 
              </label></td>
              <td> <input
                className="text-sm bg-gray-100 appearance-none rounded w-full border-gray-300 py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="nome-contrato"
                type="text"
                value={contrato.customer}/></td>
              </tr>
              <div className="flex w-full mt-8">
              <button
                className="w-full bg-primary-100 hover:bg-primary-50 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
                type="button"
              >
                Salvar
              </button>
            </div>
            </table>
            </form>
            </>
          
        </main>
        <Footer />
      </div>
  
      
    );
  
  }


  const { publicRuntimeConfig } = getConfig();

  export async function getServerSideProps(ctx) {
    const cookie = parseCookies(ctx).user;
    const userData = cookie != undefined ? JSON.parse(cookie) : false;
  
    const res = await fetch(`${publicRuntimeConfig.STRAPI_API_URL}/contracts`, { //TO-DO: passar o id do contrato como parâmetro para consulta
      headers: {
        Authorization: `Bearer ${userData.jwt}`,
      },
    });
  
    const contracts = await res.json();
  
    return {
      props: {
        contracts: contracts,
        authData: userData
      },
    };
  }

  /*export async function getStaticPaths() {
    const maternities = await fetchAPI('/contracts');
  
    return {
      paths: maternities.map((contracts) => ({
        params: {
          id: contract.id,
        },
      })),
      fallback: false,
    };
  }
  
  export async function getStaticProps({ params }) {
    const contracts = await fetchAPI(`/contracts/${params.id}`);
    console.log('C:'+contracts);
    return {
      props: { contract: contracts[0] },
      revalidate: 1,
    };
  }*/

  export default contractForm;