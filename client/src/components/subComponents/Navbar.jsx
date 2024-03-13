import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
        <Link to="/icon">ICON</Link>
        <Link to="/fpds">FPDS</Link>
      </div>
      <div>
        <Link to="/manufacturer">Manufacturer</Link>
        <Link to="/Admin">Admin</Link>
      </div>
      <div>
        <button>
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default Navbar;
