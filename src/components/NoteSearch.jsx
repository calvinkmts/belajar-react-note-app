import React from "react";

class NoteSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchKeyword: "",
        }

        this.onChangeSearchNoteHandler = this.onChangeSearchNoteHandler.bind(this);
    }

    onChangeSearchNoteHandler(event) {
        this.setState(() => {
            return {
                searchKeyword: event.target.value,
            }
        });
        this.props.searchNote(event.target.value);
    }

    render() {
        return (
            <div className="note-search">
                <input type="text" placeholder="Cari Notes..." onChange={this.onChangeSearchNoteHandler} />
            </div>
        );
    }
}

export default NoteSearch;