import './App.css';
import Container from './components/Container';
import Header from './components/Header';
import Title from './components/Title';
import Footer from './components/Footer';
import MyTable from './components/Table';
import Graphic from './components/Graphic';
import useDadosConsulta from './hooks/useDadosConsulta';
import useDadosProfissional from './hooks/useDadosProfissional';

export default function App() {
  const { dados: consultas, error: consultasErro } = useDadosConsulta()
  const { dados: profissionais, error: profissionaisErro } = useDadosProfissional()

  if (consultasErro || profissionaisErro) {
    console.log("Ocorreu um erro na requisição")
    throw new Error("Ocorreu um erro na requisição")
  }

  return (
    <>
      <Header />
      <Container>
        <Title>Área administrativa</Title>
        <MyTable consultas={consultas} />
        <Graphic consultas={consultas} profissionais={profissionais} />
      </Container>
      <Footer />
    </>
  )
}
