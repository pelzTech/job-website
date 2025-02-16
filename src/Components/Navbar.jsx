import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.css';



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/home">JobLinker</Link>
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/jobs">Jobs</Link></li>
        <li><Link to="/career-advice">Career Advice</Link></li>
        <li><Link to="/support">Support</Link></li>
      </ul>
      <button className="navbar-toggle" onClick={toggleMenu}>
         <i className="fas fa-bars"></i> 
      </button>

    </nav>
  );
};

export default Navbar;
