class NoteDisplay extends React.Component {
	
	constructor(props) {
        super(props);
    }

	render = () => {
        let note = this.props.functionalNote;
        let classes = ['note', `degree-${note.interval.relativeDegree}`];

        return e('div', {className: classes.join(' ')}, note.name,
            e('div', {className: 'note-degree'}, note.interval.relativeDegree),
            e('div', {className: 'note-interval'}, note.relativePosition),
            e('div', {className: 'note-interval'}, note.interval.id)
        );
    };
}

class NoteCollection extends React.Component {
	
	constructor(props) {
        super(props);
    }

    getNoteDisplays() {
        let noteDisplays = [];
        for(let i = 0; i < this.props.functionalNotes.length; i++) {
            noteDisplays.push(e(NoteDisplay, {
                key: `note-display-${i}`,
                functionalNote: this.props.functionalNotes[i],
                displaySettings: this.props.displaySettings
            }, null));
        }
        return noteDisplays;
    }

	render = () => {
		return this.getNoteDisplays();
    };
}