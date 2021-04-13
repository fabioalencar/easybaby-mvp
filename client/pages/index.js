import Header from '../components/Header';

import { motion } from 'framer-motion';
import { variants } from '../components/Config/Motion';

function Index() {
  return (
    <>
      <Header />
      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div variants={variants}>
          <h2>
            Encontre a maternidade perfeita e serviços essenciais para sua
            gestação.
          </h2>
          <p>
            Conveniência e simplicidade para você realizar seu sonho de ser mãe!
          </p>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Index;
