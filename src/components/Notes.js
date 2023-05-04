import React, { useContext, useEffect, useRef, useState } from 'react';
import NoteContext from '../context/notes/NoteContext';
import AddNotes from './AddNotes';
import NotesItem from './NotesItem';
import { useNavigate } from 'react-router-dom';

const Notes = (props) => {
    const context = useContext(NoteContext);
    let navigate = useNavigate();
    const { notes, getNotes, editNotes } = context;
    useEffect(
        () => {
            if (localStorage.getItem('token')) {
                getNotes();
            }
            else {
                navigate("/login");
            }
            // eslint-disable-next-line
        }, []
    );
    const ref = useRef(null);
    const refClose = useRef(null);
    const [note, setNote] = useState({ id: "", eTitle: "", eDescription: "", eTag: "" });

    const updateNotes = (currentNotes) => {
        ref.current.click();
        setNote({ id: currentNotes._id, eTitle: currentNotes.title, eDescription: currentNotes.description, etag: currentNotes.tag });
    }

    const handleClick = (e) => {
        console.log("Updating the note....", note);
        editNotes(note.id, note.eTitle, note.eDescription, note.eTag);
        refClose.current.click();
        props.showAlert("Updated Successfully", "success");
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white'
    }

    return (
        <>
            <div className="container">
                <AddNotes heading="Add a Note" showAlert={props.showAlert} mode={props.mode} />
            </div>
            {/* -- Button trigger modal -- */}
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            {/* -- Modal -- */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content" style={myStyle}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" style={myStyle}>
                            <form className='my-3' style={myStyle}>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="eTitle" name="eTitle" value={note.eTitle} aria-describedby="emailHelp" onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="eDescription" name="eDescription" value={note.eDescription} onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" value={note.eTag} onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.eTitle.length < 5 || note.eDescription.length < 5} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container row my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>{props.heading}</h2>
                <div className="mx-2">
                    {notes.length === 0 && 'No notes to display.'}
                </div>
                {notes.map((note) => {
                    return <NotesItem key={note._id} updateNotes={updateNotes} mode={props.mode} showAlert={props.showAlert} note={note} />
                })}
            </div>
        </>
    )
}

export default Notes;