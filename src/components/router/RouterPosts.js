import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const RouterPosts = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err.message)
            })
    },[])

    return (
        <div className="posts">
            <h2>This is Router Post Comp</h2>
            {
                posts.map(post => {
                    return <div key={post.id}>
                        <h5>{post.title}</h5>
                        <Link to={`posts/${post.id}`}> Post {post.id} </Link>
                    </div>
                })
            }
        </div>
    );
};

export default RouterPosts;
