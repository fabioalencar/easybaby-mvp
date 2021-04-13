import Header from '../components/Header';
import Navigation from '../components/Navigation';
import PageContent from '../components/PageContent';
import CTA from '../components/CTA';
import { motion } from 'framer-motion';
import { variants } from '../components/Config/Motion';

function Financiamento() {
  return (
    <>
      <Header />
      <Navigation />
      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div variants={variants}>
          <PageContent>
            <h1>Ajuda financeira para realizar seu sonho.</h1>
            <h2>Financiamento Coletivo para seu parto ou enxoval</h2>
            <p>
              Crie uma campanha e conte com a ajuda dos seus amigos para
              realizar o sonho de ser mãe!
            </p>
            <p>
              Através de uma campanha de financiamento coletivo você terá
              tranquilidade para contratar serviços e comprar os produtos que
              precisa.
            </p>
            <br />
            <CTA path="/cadastro">Criar sua conta grátis</CTA>
          </PageContent>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Financiamento;
