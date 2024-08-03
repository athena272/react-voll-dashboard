import IProfissional from "./IProfissional"

export default interface IAvalicao extends IProfissional {
    id: number,
    data: string,
    horario: string,
    nota: number,
    profissional: Array<IProfissional>,
}