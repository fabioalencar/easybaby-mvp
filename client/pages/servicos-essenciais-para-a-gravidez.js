import Header from '../components/Header';
import Navigation from '../components/Navigation';
import PageContent from '../components/PageContent';
import Card from '../components/Card';
import CTA from '../components/CTA';
import { motion } from 'framer-motion';
import { variants } from '../components/Config/Motion';

function Services() {
  return (
    <>
      <Header />
      <Navigation />
      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div variants={variants}>
          <PageContent>
            <h1>Serviços essenciais para facilitar a Gestação e o Parto</h1>
            <Card>
              <h2>Plano maternidade</h2>
              <CTA path="/busca">Encontrar planos</CTA>
            </Card>
            <Card>
              <h2>Agendamento de visita à maternidade</h2>
              <p>Em breve!</p>
            </Card>
            <Card>
              <h2>Consulta Online</h2>
              <p>Em breve!</p>
            </Card>
            <Card>
              <h2>Cursos para gestantes</h2>
              <p>Em breve!</p>
            </Card>
            <Card>
              <h2>Pré-natal Online</h2>
              <p>Em breve!</p>
            </Card>
            <Card>
              <h2>Enxoval Online</h2>
              <p>Em breve!</p>
            </Card>
            <Card>
              <h2>Agendamento de exames</h2>
              <p>Em breve!</p>
            </Card>
            <Card>
              <h2>Registro do bebê em cartório</h2>
              <p>Em breve!</p>
            </Card>
            <Card>
              <h2>Foto e Filmagem do parto</h2>
              <p>Em breve!</p>
            </Card>
            <Card>
              <h2>Chá de bebê virtual</h2>
              <p>Em breve!</p>
            </Card>
          </PageContent>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Services;
