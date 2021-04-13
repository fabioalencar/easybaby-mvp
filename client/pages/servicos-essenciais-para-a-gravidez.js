import Header from '../components/Header';

import { motion } from 'framer-motion';
import { variants } from '../components/Config/Motion';

function Services() {
  return (
    <>
      <Header />

      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div variants={variants}>
          <h1>Serviços</h1>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Services;
