import styled from "styled-components"
import IProfissional from "../../types/IProfissional"
import Card from "./Card"
import Button from "../Button"

type AvaliationProps = {
    profissionais: IProfissional[] | null
}

const CardSection = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
width: 100%;
`

export default function Avaliation({ profissionais }: AvaliationProps) {
    return (
        <>
            <CardSection>
                {
                    profissionais?.map(profissional => (
                        <Card key={profissional.id} profissional={profissional} />
                    ))
                }
            </CardSection>
            <Button>Ver mais</Button>
        </>
    )
}