import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, isArchived }) {

    let filteredNotes = notes.filter(note => note.archived === isArchived)

    if (filteredNotes.length === 0) {
        return <p className="notes-list__empty-message">Tidak ada catatan</p>
    }

    return (
        <div className="note-list">
            {
                filteredNotes
                    .map((note) => (
                        <NoteItem
                            key={note.id}
                            {...note} />
                    ))
            }
        </div>
    )
}

export default NoteList;