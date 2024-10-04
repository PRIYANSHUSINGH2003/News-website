import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import './Header.css';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="header">
        <div className="logo">NewsWave</div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li onClick={toggleSidebar} className="categories">Categories</li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <div className="menu-icon" onClick={toggleSidebar}>
          ☰ {/* Hamburger icon for mobile view */}
        </div>
      </header>

      {/* Conditionally render Sidebar */}
      {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
    </>
  );
};

export default Header;
