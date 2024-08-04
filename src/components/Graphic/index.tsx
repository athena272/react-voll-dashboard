import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import IConsulta from "../../types/IConsulta";
import IProfissional from "../../types/IProfissional";
import useDadosGrafico from "../../hooks/useDadosGrafico";

type GraphicProps = {
    consultas: IConsulta[] | null,
    profissionais: IProfissional[] | null,
}

export default function Graphic({ consultas, profissionais }: GraphicProps) {
    const dados = useDadosGrafico({ consultas, profissionais });
    return (
        <ResponsiveContainer width="100%" height={350}>
            <BarChart
                layout="vertical"
                data={dados}
                margin={{ top: 25, right: 40, left: 40, bottom: 20 }}
            >
                <XAxis type="number"></XAxis>
                <YAxis type="category" dataKey="nome"></YAxis>
                <Bar dataKey="consultas" fill="#083860" barSize={30}></Bar>
            </BarChart>
        </ResponsiveContainer>
    )
}