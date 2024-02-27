import React from 'react';
import NoteAppHeader from "../components/NoteAppHeader.jsx";
import NoteAppBody from "../components/NoteAppBody.jsx";
import {getInitialData} from "../utils/utils.js";
import {useSearchParams} from "react-router-dom";

const HomePage = () => {

    const [searchKeyword, setSearchKeyword] = useSearchParams();

    const keyword = searchKeyword.get("keyword");

    const onSearchNoteHandler = (keyword) => {
        setSearchKeyword({keyword});
    }

    return (
        <div className="note-app">
            <NoteAppBody defaultKeyword={keyword || ""} searchKeyword={onSearchNoteHandler}/>
        </div>
    );

}

export default HomePage;