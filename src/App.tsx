import './App.css';
import Container from './components/Container';
import Header from './components/Header';
import Title from './components/Title';
import Footer from './components/Footer';
import MyTable from './components/Table';
import Graphic from './components/Graphic';
import Avaliation from './components/Avaliation';
import useDadosConsulta from './hooks/useDadosConsulta';
import useDadosProfissional from './hooks/useDadosProfissional';
import Button from './components/Button';
import Subtitle from './components/Subtitle';

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
        <Button>Cadastrar especialista</Button>

        <Title image='consulta'>Consultas do Dia</Title>
        <MyTable consultas={consultas} />

        <Title image='grafico'>Consultas mensais por especialista</Title>
        <Subtitle>Dezembro/22</Subtitle>
        <Graphic consultas={consultas} profissionais={profissionais} />

        <Title image='avaliacao'>Avaliações de especialistas</Title>
        <Avaliation profissionais={profissionais} />
      </Container>
      <Footer />
    </>
  )
}
