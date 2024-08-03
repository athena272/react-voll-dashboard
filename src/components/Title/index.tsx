import evaluation from './assets/avaliacao.png';
import graphic from './assets/grafico.png';
import query from './assets/consulta.png';
import styled from 'styled-components';

type TitleProps = {
    image?: string,
    children?: React.ReactNode
}

interface IImages {
    evaluation: string,
    graphic: string,
    query: string
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
`

const StyledContainer = styled.div`
display: flex;
align-items: center;
`


export default function Title({ image, children }: TitleProps) {
    console.log("🚀 ~ Title ~ image:", image)
    const imagesList: IImages = {
        evaluation: evaluation,
        graphic: graphic,
        query: query
    }

    return (
        <StyledContainer>
            {image && <StyledSpan image={imagesList[image as keyof IImages]} />}
            <StyledTitle>{children}</StyledTitle>
        </StyledContainer>
    )
}