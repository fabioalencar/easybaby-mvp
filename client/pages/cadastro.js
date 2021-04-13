import Header from '../components/Header';
import Navigation from '../components/Navigation';
import PageContent from '../components/PageContent';
import { motion } from 'framer-motion';
import { variants } from '../components/Config/Motion';

function SignUp() {
  return (
    <>
      <Header />
      <Navigation />
      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div variants={variants}>
          <PageContent>
            <h1>Cadastre-se na lista de espera</h1>
            <p>
              Estamos em beta fechado e aos poucos mais funcionalidades serão
              adicionadas.
            </p>
          </PageContent>
        </motion.div>
      </motion.div>
    </>
  );
}

export default SignUp;
