import Image from 'next/image';
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
            <div className="home-content">
              <p className="dream-text">
                Conveniência e simplicidade para você realizar seu sonho de ser
                mãe!
              </p>
              <h2>Com a Easy Baby você pode:</h2>
              <Image
                src="/search.png"
                alt="Buscar"
                width={100}
                height={100}
                layout="fixed"
              />
              <h3>
                <strong>Encontrar a maternidade</strong> perfeita.
              </h3>
              <Image
                src="/baby.png"
                alt="Serviços eseenciais para a gestação"
                width={100}
                height={100}
                layout="fixed"
              />
              <h3>
                Contratar <strong>serviços essenciais</strong> para a gestação.
              </h3>
              <Image
                src="/pig.png"
                alt="Ajuda financeira"
                width={100}
                height={100}
                layout="fixed"
              />
              <h3>
                Obter <strong>ajuda financeira</strong> para o parto e enxoval.
              </h3>
              <br />
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
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Index;
