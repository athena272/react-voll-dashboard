import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import IConsulta from "../../types/IConsulta";
import formatDate from "../../utils";

type MyTableProps = {
    consultas: IConsulta[] | null
}

export default function MyTable({ consultas }: MyTableProps) {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="tabela-customizada">
                    <TableHead>
                        <TableRow>
                            <TableCell>Data</TableCell>
                            <TableCell>Horário</TableCell>
                            <TableCell>Profissional</TableCell>
                            <TableCell>Especialidade</TableCell>
                            <TableCell>Paciente</TableCell>
                            <TableCell>Modalidade</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            consultas?.map(consulta => (
                                <TableRow key={consulta.id}>
                                    <TableCell component="th" scope="row">{formatDate(consulta.data)}</TableCell>
                                    <TableCell>{consulta.horario}</TableCell>
                                    <TableCell>{consulta.profissional[0].nome}</TableCell>
                                    <TableCell>{consulta.profissional[0].especialidade}</TableCell>
                                    <TableCell>{consulta.paciente}</TableCell>
                                    <TableCell>{consulta.modalidade}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}