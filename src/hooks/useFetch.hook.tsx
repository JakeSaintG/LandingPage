import { useEffect, useState } from "react";

export function useFetch(url: string) {
    let [loading, setLoading] = useState(true);
    let [data, setData] = useState();
    let [error, setError] = useState();

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);

        fetch(url, {signal: controller.signal})
            .then(() => setData) //May have an issue here: .then(setData)
            .catch(setError)
            .finally(() => setLoading(true));
        
        
        return () => {}
    }, [url])

    return {loading, data, error}
}