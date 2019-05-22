class NoteDisplay extends React.Component {
	
	constructor(props) {
        super(props);
    }

	render = () => {
		return e('span', {className: 'note'}, this.props.note.getName())
    };
}

class NoteCollection extends React.Component {
	
	constructor(props) {
        super(props);
    }

    getNoteDisplays() {
        let noteDisplays = [];
        for(let i = 0; i < this.props.notes.length; i++) {
            noteDisplays.push(e(NoteDisplay, {note: this.props.notes[i], key: `note-display-${i}`}, null));
        }
        return noteDisplays;
    }

	render = () => {
		return this.getNoteDisplays();
    };
}