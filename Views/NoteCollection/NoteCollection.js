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
        let classes = ['note'];

        if(note !== null) {
            classes.push(`degree-${note.interval.degree}`);
            this.physicalNote = new PhysicalNote(ALL_HOME_DEGREES[note.key.homeDegree - 1].relativePosition + note.interval.semitones);
        }
        else {
            classes.push(`degree-0`);
            note = { name: '', interval: { id: '' }};
            this.physicalNote = new PhysicalNote(this.props.position);
        }        

        return e('div', {
                className: classes.join(' '),
                onClick: () => { this.sound(); }
            },
            e('div', {className: 'note-row note-row-top'},
                e('div', {className: 'note-relative-position'}, this.props.position),
                e('div', {className: 'note-absolute-position'}, this.physicalNote.absolutePosition)
            ),
            e('div', {className: 'note-row note-row-mid'},
                e('div', {className: 'note-name'}, note.name),
                e('div', {className: 'note-octave'}, this.physicalNote.octave)
            ),
            e('div', {className: 'note-row note-row-bot'},
                e('div', {className: 'note-interval'}, note.interval.id),
                e('div', {className: 'note-frequency'}, this.physicalNote.frequency + ' Hz')
            )
        );
    };
}

class NoteCollection extends React.Component {
	
	constructor(props) {
        super(props);
    }

    getNoteDisplays() {
        let noteDisplays = [];
        for(let i = 0; i < 12; i++) {
            let note = this.props.functionalNotes.find((n) => { return n.relativePosition === i }) || null;
            noteDisplays.push(e(NoteDisplay, {
                key: `note-display-${i}`,
                position: i,
                functionalNote: note,
                displaySettings: this.props.displaySettings
            }, null));
        }
        return noteDisplays;
    }

	render = () => {
		return this.getNoteDisplays();
    };
}