import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isLoading, setLoader] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);
        const blog = {
            "title": title,
            "body": body,
            "author": author,
        };
        
        setTimeout(() => {
            fetch('http://localhost:8000/blogs', {
            method:'POST',
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify(blog)
            }).then(() => { 
                setLoader(false);
                history.push('/');
            })
        },200)
    }

    return ( 
        <div className='create'>
            <h2>Add a new blog</h2>
            <form onSubmit={ handleSubmit }>
                <label>Bolg title:</label>
                <input 
                    type="text"
                    value={ title } 
                    onChange={ (e) => setTitle(e.target.value) }
                    required/>
                <label>Bolg body:</label>
                <textarea 
                    value = { body }
                    onChange = { (e) => setBody(e.target.value) }
                    required
                    ></textarea>
                <label>Blog Author:</label>
                <select
                    value={ author }
                    onChange = { (e) => setAuthor(e.target.value) }
                    >
                    <option value="mario">mario</option>
                    <option value="yoshie">yoshie</option>
                </select>

                {/* //article preview           */}
                <article className="article-preview">
                        <h1 >Article Preview</h1>
                        <h2 className="preview-header">{ title }</h2>
                        <p className="preview-author">Written by { author }</p>
                        <div>{ body } </div>
                </article>

                { !isLoading && <button className="button-add">Add blog</button> }
                { isLoading && <button disabled className="button-add">Adding new blog...</button> }
            </form>
        </div>
     );
}
 
export default Create;