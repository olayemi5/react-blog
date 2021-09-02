import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {
    const { id } = useParams();
    const { data, error, IsPending } = useFetch(`http://localhost:8000/blogs/${ id }`);
    const history = useHistory();

    const handleClick = () => {
        fetch(`http://localhost:8000/blogs/${ id }`, {
        method:'DELETE',
        }).then(() => { 
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            { error  && <h3 style={{color:'red'}}> { error }</h3> }
            { IsPending && <div>Loading takes a while please wait...</div>}
            { data && (
                <article>
                    <h2>{ data.title }</h2>
                    <p>Written by { data.author }</p>
                    <div>{ data.body } </div>
                    <div><button onClick={ handleClick }>Delete</button></div>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;