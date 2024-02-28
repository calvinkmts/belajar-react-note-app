import React from 'react';
import NoteAppBody from "../components/NoteAppBody.jsx";
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