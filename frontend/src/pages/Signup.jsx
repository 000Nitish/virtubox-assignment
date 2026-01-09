import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center' }}>Signup</h2>
      <form>
        <input type="text" placeholder="Full Name" required style={{ width: '95%', padding: '10px', margin: '10px 0' }} />
        <input type="email" placeholder="Enter Email" required style={{ width: '95%', padding: '10px', margin: '10px 0' }} />
        <input type="password" placeholder="Password" required style={{ width: '95%', padding: '10px', margin: '10px 0' }} />
        <button type="submit" style={{ width: '100%', padding: '10px', background: '#61dafb', color: 'black', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>Register</button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '10px' }}>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  )
}

export default Signup;