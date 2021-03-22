import React, { useState, useEffect } from 'react';
import Axios from 'axios'

const FetchData = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res =>{
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err.message)
            })
    },[])

    return (
        <div>
            <ul>
                {posts.map(post => {
                    return <li key={post.id}>{post.title}</li>
                })}
            </ul>
        </div>
    );
};

export default FetchData;
