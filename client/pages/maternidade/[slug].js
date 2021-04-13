import { fetchAPI } from '../../lib/api';
import Footer from '../../components/Footer';
import HeaderMaternidade from '../../components/HeaderMaternidade';
import CTA from '../../components/CTA';
import Card from '../../components/Card';
import PageContent from '../../components/PageContent';
import { motion } from 'framer-motion';
import { variants } from '../../components/Config/Motion';

function Maternidade({ maternity }) {
  const { plans } = maternity;

  return (
    <>
      <motion.div initial="exit" animate="enter" exit="exit">
        <motion.div variants={variants}>
          <HeaderMaternidade
            title={maternity.NAME}
            brand={maternity.LOGO[0].url}
          />

          <PageContent>
            <p>{maternity.CNPJ}</p>
            <p>{maternity.WEBSITE}</p>
            <p>{maternity.PHONE}</p>
            {plans.map((plan) => (
              <Card key={plan.id}>
                <h3>{plan.TITLE}</h3>
                <p>{plan.DESCRIPTION}</p>
                <p>R$ {plan.VALUE}</p>
                <CTA path="/maternidade/checkout">Contratar</CTA>
              </Card>
            ))}
          </PageContent>
          <Footer />
        </motion.div>
      </motion.div>
    </>
  );
}

export default Maternidade;

export async function getStaticPaths() {
  const maternities = await fetchAPI('/maternities');

  return {
    paths: maternities.map((maternity) => ({
      params: {
        slug: maternity.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const maternities = await fetchAPI(`/maternities?slug=${params.slug}`);
  console.log(maternities);
  return {
    props: { maternity: maternities[0] },
    revalidate: 1,
  };
}
