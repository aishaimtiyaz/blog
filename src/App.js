import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import BlogForm from './components/BlogForm';
import './App.css'; // Import the CSS file

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<BlogList />} />
                    <Route path="/post/:id" element={<BlogPost />} />
                    <Route path="/create" element={<BlogForm />} />
                    <Route path="/edit/:id" element={<BlogForm />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
