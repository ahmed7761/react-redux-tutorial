import React, { Component } from 'react'
import axios from "axios";

class Posts extends Component {
    constructor() {
        super();

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) =>{
                this.setState({
                    posts: response.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }


    render() {
        const {posts} = this.state
        return (
            <div>
                <h2>Post Comp</h2>
                { posts.length ? posts.map((post) => {
                    return <p key={post.id}>{post.title}</p>
                }) : 'null'}
            </div>
        )
    }
}

export default Posts
