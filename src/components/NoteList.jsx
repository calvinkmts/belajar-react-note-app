import React from "react";
import NoteItem from "./NoteItem";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

function NoteList({notes, isArchived, deleteNote, archiveNote}) {

    let filteredNotes = notes.filter(note => note.archived === isArchived);

    if (filteredNotes.length === 0) {
        return <p className="notes-list__empty-message">Tidak ada catatan</p>
    }

    return (
        <div className="notes-list">
            {
                filteredNotes
                    .map((note) => (
                        <NoteItem
                            id={note.id}
                            key={note.id}
                            deleteNote={deleteNote}
                            archiveNote={archiveNote}
                            {...note} />
                    ))
            }
        </div>
    )
}

NoteList.propTypes = {
    notes: PropTypes.array.isRequired,
    isArchived: PropTypes.bool.isRequired,
    deleteNote: PropTypes.func.isRequired,
    archiveNote: PropTypes.func.isRequired
}

export default NoteList;