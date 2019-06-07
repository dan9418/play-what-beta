class NoteDisplay extends React.Component {
	
	constructor(props) {
        super(props);
    }

	render = () => {
        let relativeDegree = this.props.note.getRelativeDegree();
        let relativePosition = this.props.note.getRelativePosition();
        //let absolutePosition = this.props.note.getAbsolutePosition();
        let relativeInterval = this.props.note.getRelativeInterval().id;
        
        let classes = ['note', `degree-${relativeDegree}`];

        return e('div', {className: classes.join(' ')}, this.props.note.getName(),
            e('div', {className: 'note-degree'}, relativeDegree),
            e('div', {className: 'note-interval'}, relativePosition),
            //e('div', {className: 'note-interval'}, absolutePosition),
            e('div', {className: 'note-interval'}, relativeInterval)
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