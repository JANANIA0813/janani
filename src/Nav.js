import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';


function Nav() {
  const navStyle = {
    color: 'white',
    textDecoration: 'none'
  };

  return (
    <nav>
      <Link style={navStyle} to='/'>
      <h3> <img src="https://tse2.mm.bing.net/th?id=OIP.ZT8yItNrXwj4FRWXz5Lf8AHaD4&pid=Api&P=0&w=286&h=151"/></h3>
      </Link>
      <ul className="nav-links">
        <Link style={navStyle} to='/project'>
          <li>project</li>
        </Link>
        <Link style={navStyle} to='/profile'>
          <li>profile</li>
        </Link>
        <Link style={navStyle} to='/contact'>
          <li>contact</li>
        </Link>
        <Link style={navStyle} to='/blog'>
          <li>blog</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;