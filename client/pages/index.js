import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Banner from '../components/Banner';
import CTA from '../components/CTA';
import { motion } from 'framer-motion';
import { variants } from '../components/Config/Motion';

function Index() {
  return (
    <>
      <Header />
      <Navigation />
      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div variants={variants}>
          <div className="white">
            <Banner />
            <CTA path="/cadastro">Criar sua conta grátis</CTA>
            <br />
            <p>
              Conveniência e simplicidade para você realizar seu sonho de ser
              mãe!
            </p>
            <h2>Com a Easy Baby você pode:</h2>
            <p>Encontrar a maternidade perfeita.</p>
            <p>Contratar serviços essenciais para a gestação.</p>
            <p>Obter ajudar financeira para o parto e enxoval.</p>

            <h2>Sobre Easy Baby</h2>
            <p>
              Somos uma empresa de tecnologia que promove a digitalização dos
              serviços e produtos para maternidades.
            </p>
            <p>
              Possibilitamos maior conveniência, facilidade e segurança na
              prestação de serviços para gestantes através de plataformas
              digitais.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Index;
