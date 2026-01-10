import React, { useContext } from 'react';
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props; 

    return (
        <div style={{ width: '300px', margin: '10px' }}>
            <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', boxShadow: '2px 2px 5px rgba(0,0,0,0.1)', background: '#fff' }}>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h5 style={{ margin: '0 0 10px 0' }}>{note.title}</h5>
                    <div>
                        <i 
                            className="fa-solid fa-trash" 
                            onClick={() => { deleteNote(note._id) }}
                            style={{ cursor: 'pointer', color: 'red', marginRight: '10px' }}
                        >🗑️</i> 
                        
                        {}
                        <i 
                            className="fa-solid fa-pen-to-square" 
                            onClick={() => { updateNote(note) }} 
                            style={{ cursor: 'pointer', color: 'green' }}
                        >✏️</i>
                    </div>
                </div>
                
                <p style={{ color: '#666', fontSize: '14px' }}>{note.description}</p>
                <span style={{ fontSize: '12px', background: '#eee', padding: '2px 8px', borderRadius: '4px' }}>{note.tag}</span>

            </div>
        </div>
    )
}

export default NoteItem;