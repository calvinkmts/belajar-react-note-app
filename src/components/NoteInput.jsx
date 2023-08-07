import React from "react";

class NoteInput extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            inputTitleCharacterLimit: 50,
            title: "",
            body: "",
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this)
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this)
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {

        let TitleLengthLeft = 50 - event.target.value.length;

        let isTitleLengthValid = TitleLengthLeft >= 0 ? true : false;

        if (isTitleLengthValid) {
            this.setState(() => {
                return {
                    title: event.target.value,
                    inputTitleCharacterLimit: TitleLengthLeft,
                }
            });
        }
        
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        })
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }


    render() {
        return (
            <div className="note-input">
                <h2>Buat catatan</h2>
                <form onSubmit={this.onSubmitEventHandler}>
                    <p className="note-input__title__char-limit">Sisa karakter: {this.state.inputTitleCharacterLimit}</p>
                    <input className="note-input__title" placeholder="Judul Note..." value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                    <textarea className="note-input__body" placeholder="Tuliskan Notemu..." value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default NoteInput;