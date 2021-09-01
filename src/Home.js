import { useState } from 'react'
import BlogList from './BlogList';


const Home = () => {
    //let name = 'Apeke';
    const [blogs, setBlogs] = useState([
         { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
         { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
         { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);
   
     const handleBlogDelete = (blogId) => {
         const newBlogs = blogs.filter((blog) => blog.id !== blogId );
         setBlogs(newBlogs);
    }

    return (  
        <div className="home">
            <BlogList blogs={ blogs } title= "All blogs" handleBlogDelete = { handleBlogDelete }/>
             {/* <BlogList blogs={ blogs.filter((blog) => blog.author === 'mario') } title= "Mario's blogs" /> */}
        </div>
    );
}
 
export default Home;