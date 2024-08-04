import { Rating } from "@mui/material"
import IProfissional from "../../../types/IProfissional"
import styled from "styled-components"

type CardProps = {
    profissional: IProfissional
}

const StyledContainer = styled.div`
flex: 40%;
max-width: 100%;
background-color: #ffffff;
padding: 1em;
box-shadow: 2px 2px 8px rgba(0,0,0,0.15);
border-radius: 8px;
color: var(--cinza);
margin: 1em 2em 1em;
`

const StyledList = styled.ul`
display: flex;
align-items: center;
width: 100%;
justify-content: space-between;
padding: 0;
`

const StyledItem = styled.li`
list-style-type: none;
`
const StyledItemInfos = styled(StyledItem)`
lex-grow: 1;
`

const StyledImage = styled.img`
border-radius: 100%;
width: 64px;
object-fit: cover;
height: 64px;
border: 2px solid var(--azul-claro);
margin-right: 1em
`

const StyledParagraphTitle = styled.p`
font-weight: 700;
`

const StyledParagraph = styled.p`
margin: .5em 0;
font-size: 14px
`

export default function Card({ profissional }: CardProps) {
    return (
        <StyledContainer>
            <StyledList>
                <StyledItem>
                    <StyledImage src={profissional.imagem}
                        alt={`Foto de perfil do profissional ${profissional.nome}`} />
                </StyledItem>
                <StyledItem>
                    <StyledParagraphTitle>{profissional.nome}</StyledParagraphTitle>
                    <StyledParagraph>{profissional.especialidade}</StyledParagraph>
                </StyledItem>
                <StyledItem>
                    <Rating
                        name="simple-controlled"
                        value={profissional.nota}
                        readOnly={true}
                    />
                </StyledItem>
            </StyledList>
        </StyledContainer>
    )
}