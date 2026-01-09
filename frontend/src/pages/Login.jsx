import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Abhi ke liye Fake Token save kar rahe hain (Backend baad mein jodenge)
    localStorage.setItem('token', 'sample-token-123'); 
    
    // Token set hone ke baad Dashboard par bhej do
    navigate('/');
  }

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center' }}>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Enter Email" required style={{ width: '95%', padding: '10px', margin: '10px 0' }} />
        <input type="password" placeholder="Enter Password" required style={{ width: '95%', padding: '10px', margin: '10px 0' }} />
        <button type="submit" style={{ width: '100%', padding: '10px', background: '#282c34', color: 'white', border: 'none', cursor: 'pointer' }}>Login</button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '10px' }}>
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  )
}

export default Login;