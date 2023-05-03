import React, { useContext } from 'react';
import NoteContext from '../context/notes/NoteContext';

const NotesItem = (props) => {
    const context = useContext(NoteContext);
    const { deleteNotes } = context;
    const { note, updateNotes } = props;
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white'
    }
    return (
        <div className="col-md-3">
            <div className="card my-3" style={myStyle}>
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <i className="fa-solid fa-trash mx-1" onClick={() => { deleteNotes(note._id); props.showAlert("Deleted Successfully", "success"); }}></i>
                        <i className="fa-solid fa-pen-to-square mx-1" onClick={() => { updateNotes(note); }}></i>
                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}

export default NotesItem;