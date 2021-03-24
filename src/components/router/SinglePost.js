import React, {useState, useEffect } from 'react';
import axios from "axios";

const SinglePost = ({ match }) => {

    const [post, setPost] = useState({
        id: '',
        title: ''
    })

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
            .then(res => {
                setPost({
                    id: res.data.id,
                    title: res.data.title,
                })
            })
            .catch(err => {
                console.log(err.message)
            })
    },[])

    return (
        <div>
            <h2>Single Post Details</h2>
            <p>{post.id}</p>
            <p>{post.title}</p>
        </div>
    );
};

export default SinglePost;
