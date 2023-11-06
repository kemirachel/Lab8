import { useState } from "react";
import axios from "axios";

{/*create application*/}


function Create(){

    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();

        console.log("Title "+title+
        "Cover: "+cover+
        "Author: "+author);

{/*I added a post method on the Express Server that will console log both the title, cover abd author.*/}
        const book = {
            title:title,
            cover:cover,
            author:author,
        };
        axios.post('http://localhost:4000/api/books', book)
        .then()
        .catch();

    }


{/*Modifed the Create component so that it includes a form that will upload data
to a server.*/}

    return(
        <div>
            <h2>Hello from my Create component</h2>
            <form onSubmit={handleSubmit}>


                <div className="from-group">
                    <label>Add Book Title</label>
                    <input type="text"
                    className="from-control"
                    value={title}
                    onChange={(e) => {setTitle(e.target.value)}}

                    />
                </div>

                <div className="from-group">
                    <label>Add Book Cover</label>
                    <input type="text"
                    className="from-control"
                    value={cover}
                    onChange={(e) => { setCover(e.target.value)}}
                    
                    />
                </div>

                <div className="from-group">
                    <label>Add Book Author</label>
                    <input type="text"
                    className="from-control"
                    value={author}
                    onChange={(e) => {setAuthor(e.target.value)}}
                    
                    />
                </div>
<div>

    {/*made a submit button*/}

                <input
                type="submit"
                value="Create book">
                </input>
                </div>

            </form>

        </div>
        );
    
    
    }
    export default Create;