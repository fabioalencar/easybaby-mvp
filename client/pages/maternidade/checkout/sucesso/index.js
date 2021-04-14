import Header from '../../../../components/Header';
import PageContent from '../../../../components/PageContent';
import CTA from '../../../../components/CTA';

function Sucesso() {
  return (
    <>
      <Header />
      <PageContent>
        <h1>
          Contrato realizado <br />
          com sucesso!
        </h1>

        <p>
          Seu contrato foi finalizado com sucesso e a maternidade entrará em
          contato em breve!
        </p>
        <br />
        <CTA path="/dashboard">Ver contratos</CTA>
      </PageContent>
    </>
  );
}

export default Sucesso;
