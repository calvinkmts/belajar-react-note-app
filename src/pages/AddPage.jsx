import React from "react";
import NoteInput from "../components/NoteInput.jsx";
import {addNote, getNotes} from "../utils/utils.js";
import {useNavigate} from "react-router-dom";

const AddPage = () => {

    const navigate = useNavigate();

    const onAddNoteHandler = (note) => {

        addNote(note);
        navigate("/");
    }

    return (
        <>
            <NoteInput addNote={onAddNoteHandler}/>
        </>
    );
}

export default AddPage;