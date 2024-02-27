import React from "react";
import Navigation from "./Navigation.jsx";

function NoteAppHeader() {
    return (
        <div className="note-app__header">
            <h1>Notes</h1>
            <Navigation />
        </div>
    );
}

export default NoteAppHeader;