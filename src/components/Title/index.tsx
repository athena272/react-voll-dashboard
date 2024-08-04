import avaliacao from './assets/avaliacao.png';
import grafico from './assets/grafico.png';
import consulta from './assets/consulta.png';
import styled from 'styled-components';

type TitleProps = {
    image?: string,
    children?: React.ReactNode
}

interface IImages {
    avaliacao: string,
    grafico: string,
    consulta: string
}

const StyledSpan = styled.span<TitleProps>`
background-repeat: no-repeat;
background-position: center;
background-size: cover;
width: 25px;
height: 25px;
background-image: ${props => props.image ? `url(${props.image})` : 'none'}
`

const StyledTitle = styled.h2`
color: var(--azul-claro);
margin-left: 20px;
`

const StyledContainer = styled.div`
display: flex;
align-items: center;
`


export default function Title({ image, children }: TitleProps) {
    console.log("🚀 ~ Title ~ image:", image)
    const imagesList: IImages = {
        avaliacao: avaliacao,
        grafico: grafico,
        consulta: consulta
    }

    return (
        <StyledContainer>
            {image && <StyledSpan image={imagesList[image as keyof IImages]} />}
            <StyledTitle>{children}</StyledTitle>
        </StyledContainer>
    )
}