import Header from '../components/Header';

import { motion } from 'framer-motion';
import { variants } from '../components/Config/Motion';

function Financiamento() {
  return (
    <>
      <Header />

      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div variants={variants}>
          <h1>Ajuda financeira</h1>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Financiamento;
