import React from "react";
import NoteList from "./NoteList";
import NoteSearch from "./NoteSearch.jsx";
import {archiveNote, deleteNote, getInitialData, getNotes} from "../utils/utils.js";
import PropTypes from "prop-types";

function NoteAppBody({ defaultKeyword, searchKeyword}) {

    const [notes, setNotes] = React.useState(getInitialData().filter(note => note.title.toLowerCase().includes(defaultKeyword)));

    const filterNotes = (keyword) => {
        return getNotes().filter(note => note.title.toLowerCase().includes(keyword));
    }

    const onDeleteNoteHandler = (id) => {
        deleteNote(id);
        setNotes(filterNotes(defaultKeyword));
    }

    const onArchiveNoteHandler = (id) => {
        archiveNote(id);
        setNotes(filterNotes(defaultKeyword));
    }

    const onSearchNoteHandler = (keyword) => {
        const filteredNotes = filterNotes(keyword);
        setNotes(filteredNotes);
        searchKeyword(keyword);
    }

    return (
        <div className="note-app__body">
            <NoteSearch defaultKeyword={defaultKeyword} searchNote={onSearchNoteHandler} />
            <h2>Catatan Aktif</h2>
            <NoteList
                notes={notes}
                isArchived={false}
                deleteNote={onDeleteNoteHandler}
                archiveNote={onArchiveNoteHandler}
                searchKeyword={searchKeyword} />
            <h2>Arsip</h2>
            <NoteList
                notes={notes}
                isArchived
                deleteNote={onDeleteNoteHandler}
                archiveNote={onArchiveNoteHandler}
                searchKeyword={searchKeyword} />
        </div>
    );
}

NoteAppBody.propTypes = {
    defaultKeyword: PropTypes.string.isRequired,
    searchKeyword: PropTypes.func.isRequired
}

export default NoteAppBody;