import { useEffect, useState } from "react";

export default function useFetch<T>() {
    const [dados, setDados] = useState<T | null>(null)
    const [error, setError] = useState('')

    const fetchData = async () => {
        try {
            const response = await fetch('https://athena272.github.io/react-voll-dashboard/db.json')
            console.log("🚀 ~ fetchData ~ response:", response)
            const data = await response.json()
            console.log("🚀 ~ fetchData ~ data:", data)
            const { profissionais } = data
            setDados(profissionais)
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