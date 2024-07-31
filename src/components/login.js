import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        console.log("inner login");
        e.preventDefault();
        try {
            console.log("inner inner login");
            

            const response = await axios.post('http://localhost/blog/backend/auth/login.php', { username, password });

            console.log(response.data.userId);
            if (response.data.userId) {
                setUser(response.data.userId);
                
                navigate('/dashboard');
            } else {
                setMessage(response.data.error);
            } 
        } catch (error) {
            
            setMessage('Login failed');
        }
    };

    return (
        <div className="container">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Login;
