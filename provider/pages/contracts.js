import getConfig from 'next/config';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contracts({ authData, contracts }) {
  const { user } = authData;

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
      <Footer />
    </div>
  );
}

const { publicRuntimeConfig } = getConfig();

const logininfo = {
  identifier: 'santacecilia',
  password: 'teste123',
};

export async function getServerSideProps() {
  const login = await fetch(
    `${publicRuntimeConfig.STRAPI_API_URL}/auth/local`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(logininfo),
    }
  );

  const loginResponse = await login.json();

  const res = await fetch(`${publicRuntimeConfig.STRAPI_API_URL}/maternities`, {
    headers: {
      Authorization: `Bearer ${loginResponse.jwt}`,
    },
  });

  const contracts = await res.json();

  return {
    props: {
      contracts: contracts,
      authData: loginResponse,
    },
  };
}

export default Contracts;
