import Header from '../components/Header';
import Navigation from '../components/Navigation';
import PageContent from '../components/PageContent';
import Search from '../components/Search';
import { motion } from 'framer-motion';
import { variants } from '../components/Config/Motion';

function Busca() {
  return (
    <>
      <Header />
      <Navigation />
      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div variants={variants}>
          <PageContent>
            <Search />
          </PageContent>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Busca;
