import { useState } from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {
  const host = "http://localhost:5000";
  // const host = "http://65.0.168.179:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  // Get All Notes
  const getNotes = async () => {
    // To do: API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  }

  // Add Notes
  const addNotes = async (title, description, tag) => {
    // To do: API call
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });
    const note = await response.json();
    console.log(note);
    setNotes(notes.concat(note));
  }

  // Edit Notes
  const editNotes = async (id, title, description, tag) => {
    // To do: API call
    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });
    const updatedNote = await response.json();
    console.log(updatedNote);

    let newNotes = JSON.parse(JSON.stringify(notes));
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    console.log(id, newNotes);
    setNotes(newNotes);
  }

  // Delete Notes
  const deleteNotes = async (id) => {
    // To do: API call
    const response = await fetch(`${host}/api/notes/deleteNotes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });

    const json = await response.json();
    console.log(json);
    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => { return note._id !== id });
    console.log(newNotes);
    setNotes(newNotes);
  }

  return (
    // <NoteContext.Provider value={{state:state, update:update}}>
    <NoteContext.Provider value={{ notes, addNotes, editNotes, deleteNotes, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;