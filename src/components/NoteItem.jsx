import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";
import { showFormattedDate } from "../utils/utils";

function NoteItem({ id, title, body, createdAt, archived, deleteNote, archiveNote }) {
    return (
        <div className="note-item">
            <NoteItemContent title={title} date={showFormattedDate(createdAt)} body={body} />
            <NoteItemAction
                id={id}
                deleteNote={deleteNote}
                isArchived={archived}
                archiveNote={archiveNote} />
        </div>
    );
}

export default NoteItem;