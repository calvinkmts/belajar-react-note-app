import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, isArchived, deleteNote, archiveNote, searchKeyword }) {

    let filteredNotes = notes.filter(note => note.archived === isArchived && note.title.includes(searchKeyword))

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
                            deleteNote={deleteNote}
                            archiveNote={archiveNote}
                            {...note} />
                    ))
            }
        </div>
    )
}

export default NoteList;