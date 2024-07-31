import React, { useEffect, useState } from 'react';
import { getPost, deletePost } from '../api';
import { useParams, useNavigate, Link } from 'react-router-dom';

const BlogPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);

    useEffect(() => {
        getPost(id).then(response => setPost(response.data));
    }, [id]);

    const handleDelete = () => {
        deletePost(id).then(() => navigate('/'));
    };

    return (
        <div className="container">
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                    <p><strong>Author:</strong> {post.author}</p>
                    <button onClick={handleDelete}>Delete</button>
                    <Link to={`/edit/${post.id}`}>
                        <button>Edit</button>
                    </Link>
                    <Link to="/">
                        <button>Back to All Posts</button>
                    </Link>
                </>
            )}
        </div>
    );
};

export default BlogPost;
