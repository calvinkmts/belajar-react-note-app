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

    render() {
        return (
            <div className="note-app">
                <NoteAppHeader />
                <NoteAppBody notes={this.state.notes} addNote={this.onAddNoteHandler} />
            </div>
        )
    }
}

export default NoteApp;