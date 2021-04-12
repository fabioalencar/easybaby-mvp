import getConfig from 'next/config';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { parseCookies } from 'nookies';

function Contracts({ authData, contracts }) {
  const { user } = authData;
  console.log(contracts);

  return (
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
        {contracts.map((contract) => (
          <div key={contract.id}>{contract.NAME}</div>
        ))}
      </main>

      <table className="w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th
              scope="col"
              className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              ID
            </th>
            <th
              scope="col"
              className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Nome
            </th>
            <th
              scope="col"
              className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Descrição
            </th>
            <th
              scope="col"
              className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Vídeo
            </th>
            <th
              scope="col"
              className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Preço
            </th>
            <th
              scope="col"
              className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Duração
            </th>
            <th
              scope="col"
              className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Data de criação
            </th>
            <th scope="col" className="px-6 py-3 bg-gray-50">
              <span className="sr-only">Ações</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">hgf</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">hgf</div>
            </td>{' '}
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              hgf
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                hgf
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              hgf
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              hg
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              hgf
            </td>
            <td className="px-6 py-1 whitespace-nowrap text-right text-sm font-medium ">
              <div className="flex items-center">
                <a
                  href="#"
                  className="w-full flex items-center justify-center text-indigo-600 hover:text-indigo-900"
                >
                  <svg
                    className="h-8 w-8 p-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-full flex items-center justify-center text-indigo-600 hover:text-indigo-900"
                >
                  <svg
                    className="h-8 w-8 p-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <Footer />
    </div>
  );
}

const { publicRuntimeConfig } = getConfig();

export async function getServerSideProps(ctx) {
  const cookie = parseCookies(ctx).user;
  const userData = cookie != undefined ? JSON.parse(cookie) : false;

  const res = await fetch(`${publicRuntimeConfig.STRAPI_API_URL}/maternities`, {
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
