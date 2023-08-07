import React from "react";
import NoteItem from "./NoteItem";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";

function NoteAppBody({ notes, addNote, deleteNote, archiveNote, searchKeyword }) {
    return (
        <div className="note-app__body">
            <NoteInput addNote={addNote} />
            <h2>Catatan Aktif</h2>
            <NoteList
                notes={notes}
                isArchived={false}
                deleteNote={deleteNote}
                archiveNote={archiveNote} 
                searchKeyword={searchKeyword} />
            <h2>Arsip</h2>
            <NoteList
                notes={notes}
                isArchived
                deleteNote={deleteNote}
                archiveNote={archiveNote}
                searchKeyword={searchKeyword} />
        </div>
    );
}

export default NoteAppBody;