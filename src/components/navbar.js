import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    background: '#282c34',
    color: '#fff'
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    marginLeft: '1rem',
    fontWeight: 'bold'
  };

  return (
    <nav style={navStyle}>
      <div style={{ fontSize: '1.5rem' }}>My Portfolio</div>
      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/projects" style={linkStyle}>Projects</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;