import IConsulta from "../types/IConsulta";
import IProfissional from "../types/IProfissional";

type IData = {
    nome: string,
    consultas: number
}

type UseDadosGraficoProps = {
    consultas: IConsulta[] | null,
    profissionais: IProfissional[] | null,
}

export default function useDadosGrafico({ consultas, profissionais }: UseDadosGraficoProps) {
    let dados: Array<IData> = [];

    if (profissionais && consultas) {
        dados = profissionais.map(profissional => ({
            nome: profissional.nome,
            consultas: consultas.filter(consulta => consulta.profissional.some(prof => prof.nome === profissional.nome)).length
        }))
    }

    return dados
}
