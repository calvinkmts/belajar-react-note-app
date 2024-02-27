import React from "react";
import PropTypes from "prop-types";

function NoteItemAction({ id, deleteNote, isArchived, archiveNote }) {
    return (
        <div className="note-item__action">
            <button className="note-item__delete-button" onClick={() => deleteNote(id)}>Delete</button>
            <button className="note-item__archive-button" onClick={() => archiveNote(id)}>{ !isArchived ? "Arsipkan" : "Pindahkan" }</button>
        </div>
    );
}

NoteItemAction.propTypes = {
    id: PropTypes.number.isRequired,
    deleteNote: PropTypes.func.isRequired,
    isArchived: PropTypes.bool.isRequired,
    archiveNote: PropTypes.func.isRequired
}

export default NoteItemAction;