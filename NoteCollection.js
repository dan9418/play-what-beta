class NoteDisplay extends React.Component {
	
	constructor(props) {
        super(props);
    }

	render = () => {
        let classes = ['note'];
        if(this.props.displaySettings.label === 'DEGREE') {
            let degree = this.props.note.getDegree();
            name = degree;
            classes.push(`degree-${degree}`)
        }
		return e('span', {className: classes.join(' ')}, this.props.note.getName())
    };
}

class NoteCollection extends React.Component {
	
	constructor(props) {
        super(props);
    }

    getNoteDisplays() {
        let noteDisplays = [];
        for(let i = 0; i < this.props.notes.length; i++) {
            noteDisplays.push(e(NoteDisplay, {note: this.props.notes[i], key: `note-display-${i}`, displaySettings: this.props.displaySettings}, null));
        }
        return noteDisplays;
    }

	render = () => {
		return this.getNoteDisplays();
    };
}