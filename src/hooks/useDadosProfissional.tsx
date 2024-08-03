import IProfissional from "../types/IProfissional";
import useFetch from "./useFetch";

export default function useDadosProfissional() {
    return useFetch<IProfissional[]>({ typeData: 'profissionais' })
}