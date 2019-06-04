class NoteDisplay extends React.Component {
	
	constructor(props) {
        super(props);
    }

	render = () => {
        let note = new Note({
            absolutePosition: MAJOR_INTERVALS[this.props.keyDef.absoluteDegree - 1].semitones + this.props.interval.semitones + this.props.keyDef.accidental,
            keyDef: this.props.keyDef
        });

        let relativeDegree = this.props.interval.relativeDegree;
        let relativePosition = this.props.interval.semitones;
        let relativeInterval = this.props.interval.id;
        
        let classes = ['note', `degree-${relativeDegree}`];

        return e('div', {className: classes.join(' ')}, note.getName(),
            e('div', {className: 'note-degree'}, relativeDegree),
            e('div', {className: 'note-interval'}, relativePosition),
            e('div', {className: 'note-interval'}, relativeInterval)
        );
    };
}

class NoteCollection extends React.Component {
	
	constructor(props) {
        super(props);
    }

    getNoteDisplays() {
        let noteDisplays = [];
        for(let i = 0; i < this.props.intervals.length; i++) {
            noteDisplays.push(e(NoteDisplay, {
                key: `note-display-${i}`,
                keyDef: this.props.keyDef,
                interval: this.props.intervals[i],
                displaySettings: this.props.displaySettings
            }, null));
        }
        return noteDisplays;
    }

	render = () => {
		return this.getNoteDisplays();
    };
}