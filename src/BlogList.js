const BlogList = ({blogs, title, handleBlogDelete}) => {

    return ( 
        <div className="blogg-list">
            <h1>{title }</h1>
            {blogs.map((blog) => (
                <div className="blog-preview" key={ blog.id }>
                    <h2>{ blog.title }</h2>
                    <p>written by { blog.author }</p>
                    <button onClick={() => {
                        handleBlogDelete(blog.id)
                    }}>Delete blog</button>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;