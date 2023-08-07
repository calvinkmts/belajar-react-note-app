import React from "react";

function NoteItemAction({ id, deleteNote, isArchived, archiveNote }) {
    return (
        <div className="note-item__action">
            <button className="note-item__delete-button" onClick={() => deleteNote(id)}>Delete</button>
            <button className="note-item__archive-button" onClick={() => archiveNote(id)}>{ !isArchived ? "Arsipkan" : "Pindahkan" }</button>
        </div>
    );
}

export default NoteItemAction;