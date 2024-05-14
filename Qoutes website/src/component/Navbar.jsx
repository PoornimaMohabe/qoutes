import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#333', padding: '10px' }}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
        <li style={{ display: 'inline', marginRight: '20px' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link>
        </li>
        <li style={{ display: 'inline', marginRight: '20px' }}>
          <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
        </li>
        <li style={{ display: 'inline', marginRight: '20px' }}>
          <Link to="/signup" style={{ color: 'white', textDecoration: 'none' }}>Signup</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
