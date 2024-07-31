import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const handleRegister = async (e) => {
        e.preventDefault();
        console.log("inner handleRegister");
        try {
            const response = await axios.post('http://localhost/blog/backend/auth/register.php', { username, password });
            console.log(response);
            setMessage(response.data.message || response.data.error || 'Registration failed');
            console.log(response.data.message);

            if(response.data.message === 'User registered successfully')
            {
                navigate('/login');
            }
            
        } catch (error) {
            console.error('Error registering user:', error);
            setMessage('Registration failed');
        }
    };

    return (
        <div className="container">
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Register;
