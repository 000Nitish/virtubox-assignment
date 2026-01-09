import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  let location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 30px', background: '#282c34', color: 'white' }}>
      <h2>VirtuTask</h2>
      <div>
        {!localStorage.getItem('token') ? (
          <>
            <Link to="/login" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>Login</Link>
            
            {/* Yahan se duplicate 'color: white' hata diya hai */}
            <Link to="/signup" style={{ textDecoration: 'none', background: '#61dafb', padding: '8px 15px', borderRadius: '5px', color: 'black' }}>Signup</Link>
          </>
        ) : (
          <button onClick={handleLogout} style={{ background: 'red', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer' }}>Logout</button>
        )}
      </div>
    </nav>
  )
}

export default Navbar;