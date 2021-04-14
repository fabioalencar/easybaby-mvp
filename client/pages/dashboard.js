import getConfig from 'next/config';
import Router from 'next/router';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import PageContent from '../components/PageContent';
import { motion } from 'framer-motion';
import { variants } from '../components/Config/Motion';
import { parseCookies } from 'nookies';
import DataTable from 'react-data-table-component';
import { destroyCookie } from 'nookies';

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

const handleLogout = () => {
  const logout = destroyCookie(null, 'user', {
    path: '/',
  });
  if (logout) {
    Router.push('/');
  }
};
function Dashboard({ authData, contracts }) {
  const username = authData.user.username;
  const columns = [
    {
      name: 'Título',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Serviço',
      selector: 'plan.TITLE',
      sortable: true,
    },
    {
      name: 'Criação',
      selector: 'created_at',
      sortable: true,
      right: true,
    },
  ];
  console.log(contracts);
  return (
    <>
      <Header user={authData} />
      <Navigation />
      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div variants={variants}>
          <PageContent>
            <h1>Bem-vindo {username}</h1>
            <h2>Contratos ativos</h2>
            <DataTable
              columns={columns}
              data={contracts}
              customStyles={customStyles}
            />
            <button
              type="button"
              className="logout"
              onClick={() => handleLogout()}
            >
              Sair
            </button>
          </PageContent>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Dashboard;

const { publicRuntimeConfig } = getConfig();

export async function getServerSideProps(ctx) {
  const cookie = parseCookies(ctx).user;
  const userData = cookie != undefined ? JSON.parse(cookie) : false;
  const { jwt, user } = userData;

  const res = await fetch(
    `${publicRuntimeConfig.STRAPI_API_URL}/contracts?users_permissions_user.email_eq=${user.email}`,
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  );

  const contracts = await res.json();

  return {
    props: {
      contracts: contracts,
      authData: userData,
    },
  };
}
