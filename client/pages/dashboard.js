import Header from '../components/Header';
import Navigation from '../components/Navigation';
import PageContent from '../components/PageContent';
import { motion } from 'framer-motion';
import { variants } from '../components/Config/Motion';

function Dashboard() {
  return (
    <>
      <Header />
      <Navigation />
      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div variants={variants}>
          <PageContent>
            <h1>Bem-vindo</h1>
          </PageContent>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Dashboard;
