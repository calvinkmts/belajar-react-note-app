import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import AddPage from "../pages/AddPage.jsx";
import Navigation from "./Navigation.jsx";
import DetailPage from "../pages/DetailPage.jsx";



function NoteApp() {
    return (
        <div className="note-app">
            <header>
                <div className="note-app__header">
                    <h1>Notes App</h1>
                    <Navigation />
                </div>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/add" element={<AddPage/>} />
                    <Route path="/:id" element={<DetailPage/>} />
                </Routes>
            </main>
        </div>
    )
}

export default NoteApp;