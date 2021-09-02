import { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [IsPending, setIsPending] = useState(true);
    const [erroMsg, setErrorMsg] = useState(null);
    
        useEffect(() => {
            const abortCont = new AbortController();

            setTimeout(() => {
                fetch(url, { signal:abortCont.signal})
                    .then(res => {
                        if(!res.ok)  
                        {
                            throw Error('Could not fetch error from the data resource');
                        }
                        return res.json();
                    })
                    .then(data => {
                        setData(data);
                        setIsPending(false);
                        setErrorMsg(null);
                    })
                    .catch(error => {
                       if(error.name === 'AbortError')
                            console.log('fetch aborted');
                        else{
                            setIsPending(false);
                            setErrorMsg(error.message);
                        }
                    })
            },200)

            return () => abortCont.abort();
    }, [url])

    return{data, IsPending, erroMsg};
}
 
export default useFetch;