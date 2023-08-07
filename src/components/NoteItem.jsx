import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItem() {
    return (
        <div className="note-item">
            <NoteItemContent />
            <NoteItemAction />
        </div>
    );
}

export default NoteItem;