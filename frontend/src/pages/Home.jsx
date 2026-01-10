import React, { useContext, useState, useEffect, useRef } from 'react';
import noteContext from "../context/notes/noteContext";
import NoteItem from '../components/NoteItem';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const context = useContext(noteContext);
  const { notes, addNote, getNotes, editNote } = context;
  const navigate = useNavigate();

  // State for Add Note
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  
  // State for Edit Note 
  const [showModal, setShowModal] = useState(false);
  const [etag, setEtag] = useState({id: "", etitle: "", edescription: "", etag: ""});

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getNotes();
    } else {
      navigate("/login");
    }
  }, []);

  // --- Add Note Functions ---
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  }

  // --- Edit Note Functions ---
  const updateNote = (currentNote) => {
    setShowModal(true); 
    setEtag({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag});
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    editNote(etag.id, etag.etitle, etag.edescription, etag.etag);
    setShowModal(false); 
    alert("Note Updated Successfully!");
  }

  const onEditChange = (e) => {
    setEtag({ ...etag, [e.target.name]: e.target.value });
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>

      {}
      {showModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
          backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
        }}>
          <div style={{ background: 'white', padding: '20px', borderRadius: '10px', width: '400px' }}>
            <h3>Edit Note</h3>
            <form>
              <input type="text" name="etitle" value={etag.etitle} onChange={onEditChange} placeholder="Title" style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />
              <textarea name="edescription" value={etag.edescription} onChange={onEditChange} placeholder="Description" rows="3" style={{ width: '100%', marginBottom: '10px', padding: '8px' }}></textarea>
              <input type="text" name="etag" value={etag.etag} onChange={onEditChange} placeholder="Tag" style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />
              
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <button onClick={() => setShowModal(false)} style={{ padding: '8px 15px', background: 'gray', color: 'white', border: 'none', cursor: 'pointer' }}>Cancel</button>
                <button onClick={handleUpdate} style={{ padding: '8px 15px', background: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>Update Note</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* --- Add Note Section --- */}
      <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '10px', marginBottom: '30px', marginTop: '20px' }}>
        <h2>Add a Note</h2>
        <form>
          <input type="text" name="title" value={note.title} onChange={onChange} placeholder="Title (min 3 chars)" minLength={5} required style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
          <textarea name="description" value={note.description} onChange={onChange} placeholder="Description (min 5 chars)" minLength={5} required rows="3" style={{ width: '100%', padding: '10px', marginBottom: '10px' }}></textarea>
          <input type="text" name="tag" value={note.tag} onChange={onChange} placeholder="Tag" style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
          <button disabled={note.title.length < 3 || note.description.length < 5} onClick={handleClick} style={{ padding: '10px 20px', background: '#282c34', color: 'white', border: 'none', cursor: 'pointer' }}>Add Note</button>
        </form>
      </div>

      {/* --- Display Notes Section --- */}
      <h2>Your Notes</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ width: '100%' }}>
            {notes.length === 0 && 'No notes to display'}
        </div>
        {notes.map((note) => {
          return <NoteItem key={note._id} updateNote={updateNote} note={note} />
        })}
      </div>
    </div>
  )
}

export default Home;