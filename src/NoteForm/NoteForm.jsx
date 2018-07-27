import React, {Component} from 'react';
import './NoteForm.css';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newNoteContent: '',
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.writerNote = this.writerNote.bind(this);

    }

    handleUserInput(e) {
        // console.log(this);
        this.setState({
            newNoteContent: e.target.value, // the value of the text input
        })

    }

    writerNote() {
        // call a method that the noteContent fot a note to
        // the value of the input

        this.props.addNote(this.state.newNoteContent);

        // set newNoteContent back to an empty string..
        this.setState({
            newNoteContent: '',
        })
    }

    // when the user input changes, set the newNoteContent
    // to the value of what's in the input box.
    render() {
        return (
            <div className="formWrapper">
                <input className="noteInput"
                       placeholder="Write a new note.."
                       value={this.state.newNoteContent}
                       onChange={this.handleUserInput}/>
                <button className="noteButton"
                        onClick={this.writerNote}>Add Note
                </button>
            </div>
        )
    }
}

export default NoteForm;