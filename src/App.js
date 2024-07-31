import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import BlogForm from './components/BlogForm';
import Register from './components/register';
import Login from './components/login';
import './App.css';

const App = () => {
    const [user, setUser] = useState(null);

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login setUser={setUser} />} />
                    <Route path="/dashboard" element={<BlogList />} />
                    <Route path="/post/:id" element={<BlogPost />} />
                    <Route path="/create" element = {<BlogForm />} />
                    <Route path="/edit/:id" element={<BlogForm />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login setUser={setUser} />} />
                </Routes>
                {
                    console.log("After login user"+user)
                }
            </div>
        </Router>
    );
};

export default App;
