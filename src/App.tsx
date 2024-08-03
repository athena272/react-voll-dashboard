import './App.css';
import Container from './components/Container';
import Header from './components/Header';
import Title from './components/Title';
import Footer from './components/Footer';
import MyTable from './components/Table';
import useDadosConsulta from './hooks/useDadosConsulta';

export default function App() {
  const { dados, error } = useDadosConsulta()
  console.log("🚀 ~ App ~ dados:", dados)

  return (
    <>
      <Header />
      <Container>
        <Title>Área administrativa</Title>
        <MyTable consultas={dados}/>
      </Container>
      <Footer />
    </>
  )
}
