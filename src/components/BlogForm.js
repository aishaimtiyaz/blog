import React, { useState, useEffect } from 'react';
import { createPost, updatePost, getPost } from '../api';
import { useNavigate, useParams } from 'react-router-dom';

const BlogForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        if (id) {
            getPost(id).then(response => {
                setTitle(response.data.title);
                setContent(response.data.content);
                setAuthor(response.data.author);
            });
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const post = { title, content, author };

        if (id) {
            updatePost(id, post).then(() => navigate(`/post/${id}`));
        } else {
            createPost(post).then(() => navigate('/'));
        }
    };

    return (
        <div className="container">
            <h1>{id ? 'Edit Post' : 'Create Post'}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <div>
                    <label>Author:</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <button type="submit">{id ? 'Update' : 'Create'}</button>
            </form>
        </div>
    );
};

export default BlogForm;
