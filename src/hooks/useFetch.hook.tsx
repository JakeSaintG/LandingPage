import { useEffect, useState } from "react";

export function useFetch(url: string) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);

        fetch(url, {signal: controller.signal})
            .then(() => setData) //May have an issue here: .then(setData)
            .catch(setError)
            .finally(() => setLoading(true));
        
        return () => {
            controller.abort();
        }
    }, [url])

    return {loading, data, error}
}