import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

function NoteItemContent({ id, title, date, body }) {
    return (
        <div className="note-item__content">
            <Link to={`/${id}`}><h3 className="note-item__title">{title}</h3></Link>
            <p className="note-item__date">{date}</p>
            <p className="note-item__body">{body}</p>
        </div>
    );
}

NoteItemContent.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

export default NoteItemContent;