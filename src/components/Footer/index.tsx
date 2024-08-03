import styled from 'styled-components';
import facebook from './assets/facebook.png';
import whatsapp from './assets/whatsapp.png';
import instagram from './assets/instagram.png';
import google from './assets/google.png';

const StyledFooter = styled.footer`
height: 100%;
color: white;
padding: 1em;
background-color: var(--azul-escuro);
text-align: center;
`

const StyledList = styled.ul`
display: flex;
justify-content: space-around;
width: 10%;
margin: 1em auto;
padding: 0;
`

const StyledItem = styled.li`
list-style-type: none;
`

export default function Footer() {
    return (
        <StyledFooter>
            <StyledList>
                <StyledList>
                    <a href="#">
                        <img src={facebook} alt="logo do facebook" />
                    </a>
                </StyledList>
                <StyledList>
                    <a href="#">
                        <img src={whatsapp} alt="logo do whatsapp" />
                    </a>
                </StyledList>
                <StyledList>
                    <a href="#">
                        <img src={google} alt="logo do google" />
                    </a>
                </StyledList>
                <StyledList>
                    <a href="#">
                        <img src={instagram} alt="logo do instagram" />
                    </a>
                </StyledList>
            </StyledList>
            <p> 2023 Desenvolvido por Alura | Projeto fictício sem fins comerciais. </p>
        </StyledFooter>
    )
}