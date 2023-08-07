import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";
import { showFormattedDate } from "../utils/utils";

function NoteItem({ id, title, body, createdAt, archived }) {
    return (
        <div className="note-item">
            <NoteItemContent title={title} date={showFormattedDate(createdAt)} body={body} />
            <NoteItemAction />
        </div>
    );
}

export default NoteItem;