import React from "react";
import NoteAppHeader from "./NoteAppHeader";
import NoteAppBody from "./NoteAppBody";
import NoteInput from "./NoteInput";
import { getInitialData } from "../utils/utils";



class NoteApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
        }

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
        this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: +new Date(),
                        archived: false,
                    }
                ]
            }
        });
    }

    onDeleteNoteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onArchiveNoteHandler(id) {
        const notes = this.state.notes.map(note =>
            note.id === id ? { ...note, archived: !note.archived } : note
        );
        this.setState({ notes });
    }

    render() {
        return (
            <div className="note-app">
                <NoteAppHeader />
                <NoteAppBody notes={this.state.notes}
                    addNote={this.onAddNoteHandler}
                    deleteNote={this.onDeleteNoteHandler}
                    archiveNote={this.onArchiveNoteHandler} />
            </div>
        )
    }
}

export default NoteApp;