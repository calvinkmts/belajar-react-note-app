import React from "react";
import NoteItem from "./NoteItem";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";

function NoteAppBody({ notes }) {
    return (
        <div className="note-app__body">
            <NoteInput />
            <h2>Catatan Aktif</h2>
            <NoteList notes={notes} isArchived={false} />
            <h2>Arsip</h2>
            <NoteList notes={notes} isArchived />
        </div>
    );
}

export default NoteAppBody;