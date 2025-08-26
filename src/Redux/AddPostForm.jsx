import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { addNewPost, addPostLocal } from "./PostSlice";

function AddPostForm(){
    const dispath = useDispatch();
    const [title , setTitle] = useState("");
    const [body, setBody] = useState("");

    const onSubmit = ()=>{
        e.preventDefault();
        if(title & body){
            dispath(addPostLocal({title,body}));
            setTitle("");
            setBody("");
        }
    };

    return(
        <section>
            <h2>Add a new post</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor="postTitle">Title:</label>
                <input
                    type="text"
                    id="possible"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <label htmlFor="postBody">Content:</label>
                <textarea
                    id="postBody"
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                />
                <button type="submit">Save Post</button>
            </form>
        </section>
    );
}

export default AddPostForm;