import { useState, useEffect } from 'react'
import BlogList from './BlogList';


const Home = () => {
    //let name = 'Apeke';
    const [blogs, setBlogs] = useState(null);
    const [IsPending, setIsPending] = useState(true);
    const [erroMsg, setErrorMsg] = useState(null);
   
    useEffect(() => {
            setTimeout(() => {
                fetch('http://localhost:8000/blogs')
                    .then(res => {
                        if(!res.ok)
                        {
                            throw Error('Could not fetch error from the data resource');
                        }
                        return res.json();
                    })
                    .then(data => {
                        setBlogs(data);
                        setIsPending(false);
                        setErrorMsg(null);
                    })
                    .catch(error => {
                        console.log(error.message);
                        setErrorMsg(error.message);
                    })
            },2000)
    }, [])

    return (  
        <div className="home">

            {IsPending && <p>Loading blogs please wait a while...</p>}
            { blogs && <BlogList blogs={ blogs } title= "All blogs" />} 
            { erroMsg && <p style={{ 
                color:'red',
                marginTop:'20px'
                }}> { erroMsg }</p>}

             {/* <BlogList blogs={ blogs.filter((blog) => blog.author === 'mario') } title= "Mario's blogs" /> */}
        </div>
    );
}
 
export default Home;