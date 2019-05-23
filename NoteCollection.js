class NoteDisplay extends React.Component {
	
	constructor(props) {
        super(props);
    }

	render = () => {
        let classes = ['note'];
        let degree = '';
        let interval = '';
        if(this.props.displaySettings.label === 'DEGREE') {
            degree = this.props.note.getDegree();
            interval = this.props.note.getInterval().id;
            classes.push(`degree-${degree}`)
        }
        return e('div', {className: classes.join(' ')}, this.props.note.getName(),
            e('div', {className: 'note-degree'}, degree),
            e('div', {className: 'note-interval'}, interval)
        );
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