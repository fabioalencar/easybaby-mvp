import Header from '../components/Header';
import Navigation from '../components/Navigation';
import PageContent from '../components/PageContent';
import LoginBox from '../components/LoginBox';
import { motion } from 'framer-motion';
import { variants } from '../components/Config/Motion';

function Login() {
  return (
    <>
      <Header />
      <Navigation />
      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div variants={variants}>
          <PageContent>
            <h1>Login</h1>
            <LoginBox />
          </PageContent>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Login;
