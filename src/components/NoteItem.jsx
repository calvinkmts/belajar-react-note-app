import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";
import { showFormattedDate } from "../utils/utils";
import PropTypes from "prop-types";

function NoteItem({ id, title, body, createdAt, archived, deleteNote, archiveNote }) {
    return (
        <div className="note-item">
            <NoteItemContent id={id} title={title} date={showFormattedDate(createdAt)} body={body} />
            <NoteItemAction
                id={id}
                deleteNote={deleteNote}
                isArchived={archived}
                archiveNote={archiveNote} />
        </div>
    );
}

NoteItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.number.isRequired,
    archived: PropTypes.bool.isRequired,
    deleteNote: PropTypes.func.isRequired,
    archiveNote: PropTypes.func.isRequired
}

export default NoteItem;