import Header from '../components/Header';
import Box from '../components/Box';
import { fetchAPI } from '../lib/api';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import { motion } from 'framer-motion';
import { variants } from '../components/Config/Motion';

const searchClient = algoliasearch(
  'RUUKE3CWKK',
  '7b40c60068df98b3e37cb8bc90275500'
);

function Search() {
  return (
    <>
      <Header />
      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div variants={variants}>
          <h1>Busca</h1>

          <InstantSearch indexName="EasyBaby" searchClient={searchClient}>
            <SearchBox />
            <Hits hitComponent={Box} />
          </InstantSearch>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Search;

export async function getStaticProps() {
  const maternities = await fetchAPI(`/maternities`);

  return {
    props: { maternities: maternities },
    revalidate: 1,
  };
}
