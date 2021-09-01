import { useState, useEffect } from 'react'
import BlogList from './BlogList';
import useFetch from './useFetch';


const Home = () => {
    //let name = 'Apeke';
   
    const {data, IsPending, erroMsg} = useFetch('http://localhost:8000/blogs');
   
    

    return (  
        <div className="home">

            {IsPending && <p>Loading blogs please wait a while...</p>}
            { data && <BlogList blogs={ data } title= "All blogs" />} 
            { erroMsg && <p style={{ 
                color:'red'
                }}> { erroMsg }</p>}

             {/* <BlogList blogs={ blogs.filter((blog) => blog.author === 'mario') } title= "Mario's blogs" /> */}
        </div>
    );
}
 
export default Home;