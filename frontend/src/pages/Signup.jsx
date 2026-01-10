import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    
    try {
      const response = await fetch("http://localhost:5000/api/auth/createuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          name: credentials.name, 
          email: credentials.email, 
          password: credentials.password 
        })
      });

      const json = await response.json();
      console.log(json);

      if (json.success) {
        alert("Account Created Successfully! Ab aap Login kar sakte hain."); 
        navigate("/login"); 
      } else {
        alert("Error: " + (json.error || "Invalid Details"));
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server Error. Backend connect nahi ho raha.");
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center' }}>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            name="name" 
            onChange={onChange} 
            placeholder="Full Name" 
            required 
            style={{ width: '95%', padding: '10px', margin: '10px 0' }} 
        />
        <input 
            type="email" 
            name="email" 
            onChange={onChange} 
            placeholder="Enter Email" 
            required 
            style={{ width: '95%', padding: '10px', margin: '10px 0' }} 
        />
        <input 
            type="password" 
            name="password" 
            onChange={onChange} 
            placeholder="Password" 
            required 
            minLength={5} 
            style={{ width: '95%', padding: '10px', margin: '10px 0' }} 
        />
        <button type="submit" style={{ width: '100%', padding: '10px', background: '#61dafb', color: 'black', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>Register</button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '10px' }}>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  )
}

export default Signup;