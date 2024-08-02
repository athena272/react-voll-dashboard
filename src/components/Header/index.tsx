import styled from 'styled-components';
import logo from './assets/logo.png';
import perfil from './assets/perfil.png';

const StyledHeader = styled.header`
display:flex;
align-items: center;
justify-content: space-between;
padding: 2em 4em
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-grow: .1;
`

const StyledLink = styled.a`
 color: var(--azul-escuro);
 font-weight: 700;
`

export default function Header() {
    return (
        <StyledHeader>
            <img src={logo} alt="logo da empresa Voll" />
            <Container>
                <img src={perfil} alt="imagem de perfil do usuário" />
                <StyledLink href="#">Sair</StyledLink>
            </Container>
        </StyledHeader>
    )
}