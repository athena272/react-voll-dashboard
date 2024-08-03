import IConsulta from "../types/IConsulta";
import useFetch from "./useFetch";

export default function useDadosConsulta() {
    return useFetch<IConsulta[]>({ typeData: 'consultas' })

}