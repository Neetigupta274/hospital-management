import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import file from '../../assets/logo.png'

export default function Navbar() {
  return (
    <div>
      <nav>
      <img src="https://www.mediwheel.in/uploads/hospital/1641416114nhelth.jpg" alt="" />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/details">Details</Link></li>
          <li><Link to="/admin">Admin</Link></li>  
        </ul>
      </nav>
    </div>
  )
}
