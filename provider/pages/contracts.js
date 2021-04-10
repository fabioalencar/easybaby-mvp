import getConfig from "next/config";

function Contracts({ authData, contracts }) {
  console.log(authData);
  console.log(contracts);
  return (
    <>
      <h1>Contratos</h1>
      {contracts.map((contract) => (
        <div key={contract.id}>{contract.NAME}</div>
      ))}
    </>
  );
}

const { publicRuntimeConfig } = getConfig();

const logininfo = {
  identifier: "santacecilia",
  password: "teste123",
};

export async function getServerSideProps() {
  const login = await fetch(
    `${publicRuntimeConfig.STRAPI_API_URL}/auth/local`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
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
