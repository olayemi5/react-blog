import { useState, useEffect } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [IsPending, setIsPending] = useState(true);
    const [erroMsg, setErrorMsg] = useState(null);
    
        useEffect(() => {
            setTimeout(() => {
                fetch(url)
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
                        console.log(error.message);
                        setIsPending(false);
                        setErrorMsg(error.message);
                    })
            },2000)
    }, [])

    return{data, IsPending, erroMsg};
}
 
export default useFetch;