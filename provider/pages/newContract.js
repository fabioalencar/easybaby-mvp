import getConfig from 'next/config';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { parseCookies } from 'nookies';
import { useState } from 'react';
import Router from 'next/router';

function newContract({ authData, contracts, cId }){ //TO-DO: tornar o formulário editável, não entendi o que eu fiz de errado :(
    const [contractName, setContractName] = useState('');
    const [planId, setPlanId] = useState('');
    const [customerId, setCustomerId] = useState('');
    
    
    const cookie = parseCookies().user;
    const userData = cookie != undefined ? JSON.parse(cookie) : false;

    const handleNewContract = async () => { //TO-DO: essa chamada está com erro.
        const contractinfo = {
          name: contractName,
          plan: planId,
          customer: customerId
        };
    
        const contract = await fetch(
          `${publicRuntimeConfig.STRAPI_API_URL}/contracts`,
          {
            method: 'POST',
            headers: {
            Authorization: `Bearer ${userData.jwt}`,
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(contractinfo),
          }
        );
    
        const contractResponse = await contract.json();
        
        console.log('Aqui3!'+JSON.stringify(contractResponse));
    
        if (contractResponse) {
          window.alert("Contrato criado!");
          Router.push('/contracts');
        }else{
          window.alert("Erro na chamada!");
        }
      };



    /*const res = fetch(`${publicRuntimeConfig.STRAPI_API_URL}/contracts/1`, {
        headers: {
          Authorization: `Bearer ${userData.jwt}`,
        },
      });*/
    console.log('AQUI 2! '+JSON.stringify(contracts.id));
    const { user } = authData;
    return (
      <div className="flex flex-col h-screen justify-between bg-gray-100">
        <header className=" px-2 sm:px-4 lg:px-4 bg-white shadow mb-8">
        <Navbar user={user} />
          <div className="max-w-7xl mx-auto py-1 px-1 sm:px-4 lg:px-6 ">
            <div className="flex justify-between items-center py-6 md:justify-between">
              <h1 className="text-3xl font-bold leading-tight text-gray-900">
                Novo contrato
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
              >
                Nome do Contrato: 
              </label></td>
              <td> <input
                className="text-sm bg-gray-100 appearance-none rounded w-full border-gray-300 py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="nome-contrato"
                type="text"
                onChange={(e) => setContractName(e.target.value)}
                value={contractName}
                /></td>
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
                onChange={(e) => setPlanId(e.target.value)}
                value={planId}
                /></td>
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
                onChange={(e) => setCustomerId(e.target.value)}
                value={customerId}
                /></td>
              </tr>
              <div className="flex w-full mt-8">
              <button
                className="w-full bg-primary-100 hover:bg-primary-50 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
                type="button"
                align="center"
                onClick={() => handleNewContract(authData, contracts)}
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
  
    const res = await fetch(`${publicRuntimeConfig.STRAPI_API_URL}/contracts/1`, { //TO-DO: passar o id do contrato como parâmetro para consulta
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

  export default newContract;