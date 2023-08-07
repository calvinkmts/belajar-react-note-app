import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, isArchived }) {
    return (
        <div className="note-list">
            {
                notes
                    .filter(note => note.archived === isArchived)
                    .map((note) => (
                        <NoteItem
                            {...note} />
                    ))
            }
        </div>
    )
}

export default NoteList;