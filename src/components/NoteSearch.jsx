import React from "react";
import PropTypes from "prop-types";

class NoteSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchKeyword: this.props.defaultKeyword || "",
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
                <input type="text" placeholder="Cari Notes..." onChange={this.onChangeSearchNoteHandler} value={this.state.searchKeyword}/>
            </div>
        );
    }
}

NoteSearch.propTypes = {
    defaultKeyword: PropTypes.string.isRequired,
    searchNote: PropTypes.func.isRequired
}

export default NoteSearch;