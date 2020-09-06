
import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [post, setPosts] = useState([]);

    useEffect(() => {
      const url='https://jsonplaceholder.typicode.com/posts'
       fetch(url)
      .then(res => res.json())
      .then(data => setPosts(data))
    }, [])
    return (
        <div style={{backgroundColor:'lightblue'}}>
             <h1>Social-Buddy: {post.length}</h1>
       {
         post.map(post => <Post post={post}></Post>)
       }
        </div>
    );
};

export default Home;