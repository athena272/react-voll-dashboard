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
                    <StyledItem>
                        <a href="https://wa.me/7999007075?text=Gostei do seu trabalho e gostaria de conhecer mais sobre, por favor" target='_blank' rel='noreferrer'>
                            <img src={facebook} alt="logo do facebook" />
                        </a>
                    </StyledItem>
                </StyledList>
                <StyledList>
                    <StyledItem>
                        <a href="https://wa.me/7999007075?text=Gostei do seu trabalho e gostaria de conhecer mais sobre, por favor" target='_blank' rel='noreferrer'>
                            <img src={whatsapp} alt="logo do whatsapp" />
                        </a>
                    </StyledItem>
                </StyledList>
                <StyledList>
                    <StyledItem>
                        <a href="https://athena272portfolio.vercel.app/" target='_blank' rel='noreferrer'>
                            <img src={google} alt="logo do google" />
                        </a>
                    </StyledItem>
                </StyledList>
                <StyledList>
                    <StyledItem>

                        <a href="https://www.instagram.com/guigo_rosario" target='_blank' rel='noreferrer'>
                            <img src={instagram} alt="logo do instagram" />
                        </a>
                    </StyledItem>
                </StyledList>
            </StyledList>
            <p> 2023 Desenvolvido por Guilherme R. Alves | Projeto fictício sem fins comerciais. </p>
        </StyledFooter>
    )
}