import './App.css';
import Container from './components/Container';
import Header from './components/Header';
import Title from './components/Title';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Container>
        <Title>Área administrativa</Title>
      </Container>
      <Footer />
    </>
  )
}
