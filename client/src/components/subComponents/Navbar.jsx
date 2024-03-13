import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
        <Link style={{color:"white",display:"flex",alignItems:"center",justifyContent:"center"}} to="/">
          <img style={{width:"35px",height:"35px"}} src="https://cdn.iconscout.com/icon/premium/png-512-thumb/fake-report-share-3930721-3260842.png?f=webp&w=512" alt="" />
        </Link>
        <Link style={{color:"white"}} to="/">FPDS</Link>
      </div>
      <div>
        <Link style={{color:"white"}} to="/manufacturer">Manufacturer</Link>
        <Link style={{color:"white"}} to="/admin">Admin</Link>
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
