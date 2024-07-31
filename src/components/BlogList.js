import React, { useEffect, useState } from 'react';
import { getPosts } from '../api';
import { Link } from 'react-router-dom';

const BlogList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(response => setPosts(response.data));
    }, []);

    return (
        <div className="container">
            <h1>All Blog Posts</h1>
            <Link to="/create">
                <button>Create New Post</button>
            </Link>
            <ul className="blog-list">
                {posts.map(post => (
                    <li key={post.id} className="blog-list-item">
                        <Link to={`/post/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
           
            <Link to="/register">
                <button>Register</button>
            </Link>
            <Link to="/login">
                <button>Login</button>
            </Link>

        </div>
    );
};

export default BlogList;
