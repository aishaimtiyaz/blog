import axios from 'axios';

const API_URL = 'http://localhost/blog/backend/api/v1/blog.php';

const getPosts = () => axios.get(API_URL);
const getPost = (id) => axios.get(`${API_URL}?id=${id}`);
const createPost = (post) => axios.post(API_URL, post);
const updatePost = (id, post) => axios.put(`${API_URL}?id=${id}`, post);
const deletePost = (id) => axios.delete(`${API_URL}?id=${id}`);

export { getPosts, getPost, createPost, updatePost, deletePost };
