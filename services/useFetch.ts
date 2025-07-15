import {useState, useEffect} from 'react';

/* fetchFunction -
- our fetchFunction can be any function that fetches the response from an api call

- Here it is assumed as fetchMovies at th time of creation
*/
const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true) => {
    const [data,setData] = useState<T | null>(null)
    const [loading,setLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)

    const fetchData = async () => {
        try{
            setLoading(true)
            setError(null)

            const result = await fetchFunction();

            setData(result);
        } catch(err){
            // @ts-ignore
            setError(err instanceof Error? err: new Error('An unknown Error occured'));
        } finally{
            setLoading(false);
        }
    }

    const reset = () => {
        setData(null);
        setLoading(false);
        setError(null);
    }

    useEffect(() => {
        if(autoFetch) {
            fetchData()
        }
    }, []);

    return {data, loading, error, refetch: fetchData, reset};
}

export default useFetch;