import React, { useState } from 'react'
import { useHistory } from 'react-router';

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title,body,author};
        setIsPending(true);
        fetch('http://localhost:9090/blogs/add/',{ 
            method: "POST",
            headers: {"Content-type":"application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("New Blog added");
            setIsPending(false);
            history.push("/");
        })
        
    }
    return (
        <div className = "create">
            <h2>Add a new blog</h2>
            <form onSubmit ={handleSubmit}>
                <label>Blog Title</label>
                <input 
                    type="text" 
                    required
                    value = {title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body</label>
                <textarea
                    required
                    value = {body}
                    onChange = {(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author</label>
                <select
                    value = {author}
                    onChange = {(e)=> setAuthor(e.target.value)}
                >   
                    <option selected value = "none">Select From list below</option>
                    <option selected value = "mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog</button>}
                
            </form>
        </div>
    );
}

export default Create
