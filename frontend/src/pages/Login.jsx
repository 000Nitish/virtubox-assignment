import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // API Call 
    try {
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });

        const json = await response.json();
        console.log(json); 

        if (json.success) {
            localStorage.setItem('token', json.authToken);
            navigate("/");
            window.location.reload(); 
        } else {
            alert("Invalid Credentials! Please try again.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Server Error. Backend shuru hai na?");
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center' }}>Login</h2>
      <form onSubmit={handleLogin}>
        <input 
            type="email" 
            name="email" 
            value={credentials.email} 
            onChange={onChange} 
            placeholder="Enter Email" 
            required 
            style={{ width: '95%', padding: '10px', margin: '10px 0' }} 
        />
        <input 
            type="password" 
            name="password" 
            value={credentials.password} 
            onChange={onChange} 
            placeholder="Enter Password" 
            required 
            style={{ width: '95%', padding: '10px', margin: '10px 0' }} 
        />
        <button type="submit" style={{ width: '100%', padding: '10px', background: '#282c34', color: 'white', border: 'none', cursor: 'pointer' }}>Login</button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '10px' }}>
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  )
}

export default Login;