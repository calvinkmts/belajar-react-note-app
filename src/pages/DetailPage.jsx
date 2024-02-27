import React from "react";
import {useParams} from "react-router-dom";
import {getNoteById} from "../utils/utils.js";

const DetailPage = () => {

    const {id} = useParams();

    const note = getNoteById(id);

    return (
        <div>
            <div className="note-input">
                <h2>Detail Page</h2>
                <form>
                    <input className="note-input__title" placeholder="Judul Note..." value={note.title} readOnly={true}
                    />
                    <textarea className="note-input__body" placeholder="Tuliskan Notemu..." readOnly={true}
                              value={note.body}></textarea>
                </form>
            </div>
        </div>
    );
}

export default DetailPage;