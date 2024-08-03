import { Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from "@mui/material";
import IConsulta from "../../types/IConsulta";
import formatDate from "../../utils";
import styled from "@emotion/styled";

type MyTableProps = {
    consultas: IConsulta[] | null
}

const StyledCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        color: "var(--azul-escuro)",
        fontSize: 18,
        fontWeight: 700,
        fontFamily: "var(--fonte-principal)"
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
        fontFamily: "var(--fonte-principal)"
    }
}))

const StyledRow = styled(TableRow)(() => ({
    [`&:nth-of-type(odd)`]: {
        backgroundColor: "var(--cinza-claro)",
        align: "right"
    }
}))

export default function MyTable({ consultas }: MyTableProps) {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="tabela-customizada">
                    <TableHead>
                        <StyledRow>
                            <StyledCell>Data</StyledCell>
                            <StyledCell>Horário</StyledCell>
                            <StyledCell>Profissional</StyledCell>
                            <StyledCell>Especialidade</StyledCell>
                            <StyledCell>Paciente</StyledCell>
                            <StyledCell>Modalidade</StyledCell>
                        </StyledRow>
                    </TableHead>
                    <TableBody>
                        {
                            consultas?.map(consulta => (
                                <StyledRow key={consulta.id}>
                                    <StyledCell component="th" scope="row">{formatDate(consulta.data)}</StyledCell>
                                    <StyledCell>{consulta.horario}</StyledCell>
                                    <StyledCell>{consulta.profissional[0].nome}</StyledCell>
                                    <StyledCell>{consulta.profissional[0].especialidade}</StyledCell>
                                    <StyledCell>{consulta.paciente}</StyledCell>
                                    <StyledCell>{consulta.modalidade}</StyledCell>
                                </StyledRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}