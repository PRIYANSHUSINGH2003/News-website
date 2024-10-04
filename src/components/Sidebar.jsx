import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="close-btn" onClick={toggleSidebar}>✖</button>
            <h2>Categories</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/category/world">World</Link></li>
                <li><Link to="/category/technology">Technology</Link></li>
                <li><Link to="/category/sports">Sports</Link></li>
                <li><Link to="/category/entertainment">Entertainment</Link></li>
                <li><Link to="/category/business">Business</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
