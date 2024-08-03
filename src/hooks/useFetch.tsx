import { useEffect, useState } from "react";
import IConsulta from "../types/IConsulta";
import IProfissional from "../types/IProfissional";
import IAvalicao from "../types/IAvalicao";

type UseFetchProps = {
    typeData: 'profissionais' | 'consultas' | 'avaliacoes'
}

type Data = {
    profissionais: IProfissional[],
    consultas: IConsulta[],
    avaliacoes: IAvalicao[],
}

export default function useFetch<T>({ typeData }: UseFetchProps) {
    const [dados, setDados] = useState<T | null>(null)
    const [error, setError] = useState('')

    const fetchData = async () => {
        try {
            const response = await fetch('https://athena272.github.io/react-voll-dashboard/db.json')
            const data: Data = await response.json()
            console.log("🚀 ~ fetchData ~ data:", data)
            const dataFetched = data[typeData] as T
            setDados(dataFetched)
        }
        catch (err: any) {
            setError(err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { dados, error }
}