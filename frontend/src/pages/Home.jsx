import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  // Step 1: Check karo user login hai ya nahi
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); // Agar token nahi hai, Login par bhej do
    }
  }, [navigate]);

  // Agar token nahi hai, toh Dashboard ka HTML mat dikhao (Null return karo)
  if (!localStorage.getItem('token')) {
    return null; 
  }

  // --- Neeche wahi purana Design code hai ---
  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1>Welcome to Dashboard</h1>
      
      {/* Add Note Section */}
      <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '10px', marginBottom: '30px', marginTop: '20px' }}>
        <h3>Add a New Note</h3>
        <form>
          <input type="text" placeholder="Title" style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
          <textarea placeholder="Description" rows="3" style={{ width: '100%', padding: '10px', marginBottom: '10px' }}></textarea>
          <button style={{ padding: '10px 20px', background: '#282c34', color: 'white', border: 'none', cursor: 'pointer' }}>Add Note</button>
        </form>
      </div>

      {/* Notes List Section */}
      <h3>Your Notes</h3>
      <div style={{ border: '1px solid #ddd', padding: '15px', width: '300px', borderRadius: '8px' }}>
        <h4>Sample Note</h4>
        <p>Yeh note tabhi dikhega jab aap login honge.</p>
      </div>
    </div>
  )
}

export default Home;