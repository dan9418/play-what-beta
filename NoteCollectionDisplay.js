class NoteDisplay extends React.Component {
	
	constructor(props) {
        super(props);
    }

	render = () => {
        let classes = ['note'];
        let relativeDegree = '';
        let relativeInterval = '';
        let relativePosition = '';
        let absolutePosition = '';
        if(this.props.displaySettings.label === 'DEGREE') {
            relativeDegree = this.props.note.getRelativeDegree();
            relativeInterval = this.props.note.getRelativeInterval().id;
            relativePosition = this.props.note.getRelativePosition();
            absolutePosition = this.props.note.getAbsolutePosition().id;
            classes.push(`degree-${relativeDegree}`)
        }
        return e('div', {className: classes.join(' ')}, this.props.note.getName(),
            e('div', {className: 'note-degree'}, relativeDegree),
            e('div', {className: 'note-interval'}, relativeInterval),
            e('div', {className: 'note-interval'}, relativePosition),
            e('div', {className: 'note-interval'}, absolutePosition)
        );
    };
}

class NoteCollectionDisplay extends React.Component {
	
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