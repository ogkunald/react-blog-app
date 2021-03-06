import React from 'react'
import { useHistory, useParams } from 'react-router'
import useFetch from './useFetch';

const BlogDetails = () => {
    // @ts-ignore
    const {id} = useParams();
    const {data:blog,isPending,error} = useFetch("http://localhost:9090/blogs/"+id);
    const history = useHistory();
    const handleClick  = () => {
        fetch("http://localhost:9090/blogs/delete/"+id,{

            method: "PUT"
        }).then(() => {
            history.push("/");
        })
    } 

    return (
        <div className="blog-details">
            {error && <div>{error}</div>}
            {isPending && <div>Loading</div>}
            {blog && 
            <article>
                <h2>{blog.title}</h2>
                <p>Written By {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleClick}>Delete</button>
            </article>}
        </div>
    )
}

export default BlogDetails
