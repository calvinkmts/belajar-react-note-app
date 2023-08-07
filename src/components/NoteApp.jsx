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
    }

    

    render() {
        return (
            <div className="note-app">
                <NoteAppHeader />
                <NoteAppBody notes={this.state.notes} />
            </div>
        )
    }
}

export default NoteApp;