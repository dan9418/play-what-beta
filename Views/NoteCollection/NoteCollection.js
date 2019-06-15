class NoteDisplay extends React.Component {
	
	constructor(props) {
        super(props);
    }

    sound = () => {
        let duration = 500;
        let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        let oscillator = audioCtx.createOscillator();
        
        oscillator.type = 'sine';
        oscillator.frequency.value = this.physicalNote.frequency;
        oscillator.connect(audioCtx.destination);
        oscillator.start();
            
        setTimeout(() => { oscillator.stop(); }, duration);
    }

	render = () => {
        let note = this.props.functionalNote;
        let classes = ['note', `degree-${note.interval.degree}`];

        this.physicalNote = new PhysicalNote(
            ALL_HOME_DEGREES[this.props.functionalNote.key.homeDegree - 1].relativePosition + 
            this.props.functionalNote.interval.semitones
            );

        return e('div', {
            className: classes.join(' '),
            onClick: () => { this.sound(); }
        }, note.name,
            e('div', {className: 'note-degree'}, note.interval.degree),
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