class Piano extends React.Component {
	
	constructor(props) {
        super(props);
        this.keys = [];
        for(let i = 0; i < this.props.length; i++) {
            let type = ([0, 2, 4, 5, 7, 9, 11].includes(i % 12)) ? 'WHITE' : 'BLACK';
            this.keys.push({absolutePosition: i, type: type});
        }
    }
    
    getKeys = () => {
        return this.keys.map((key, index) => {
            let physicalNote = new PhysicalNote(index);
            return e(PianoKey, {
                key: `key-${physicalNote.absolutePosition}`,
                type: key.type,
                physicalNote: physicalNote,
                functionalNotes: this.props.functionalNotes,
                displaySettings: this.props.displaySettings
            }, null)
        });
    }

	render = () => {
		return e('div', {className: 'piano'}, this.getKeys());
    };
}

class PianoKey extends React.Component {
	
	constructor(props) {
        super(props);
    }

    sound = () => {
        let duration = 500;
        let audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        let oscillator = audioCtx.createOscillator();
        
        oscillator.type = 'sine';
        oscillator.frequency.value = this.props.physicalNote.frequency;
        oscillator.connect(audioCtx.destination);
        oscillator.start();
            
        setTimeout(() => { oscillator.stop(); }, duration);
    }

    getName = (note) => {
        switch(this.props.displaySettings.label)
        {
            case LABELS.None.id:
                return '';
            case LABELS.Name.id:
                return (note !== null) ? note.name : '';
            case LABELS.Interval.id:
                return (note !== null) ? note.interval.id : '';
            case LABELS.RelativePosition.id:
                return this.props.physicalNote.relativePosition;
            case LABELS.AbsolutePosition.id:
                return this.props.physicalNote.absolutePosition
            case LABELS.RelativeDegree.id:
                return (note !== null) ? note.interval.relativeDegree : '';
            case LABELS.AbsoluteDegree.id:
                return (note !== null) ? note.absoluteDegree : '';
            case LABELS.Octave.id:
                return this.props.physicalNote.octave;
            case LABELS.Frequency.id:
                return this.props.physicalNote.frequency;
            default:
                return '';
        }
    }

    getFunctionalNote = () => {
        return this.props.functionalNotes.find((note) => {
            return note.relativePosition === this.props.physicalNote.relativePosition;
        }) || null;
    }

	render = () => {
        let note = this.getFunctionalNote();
        let name = this.getName(note);

        if(this.props.type === 'WHITE') {
            return e(WhiteKey, {
                key: `white-key-${this.props.physicalNote.absolutePosition}`,
                physicalNote: this.props.physicalNote,
                functionalNote: note,
                label: name,
                sound: this.sound
            }, null);
        }
        else if(this.props.type === 'BLACK') {
            return e(BlackKey, {
                key: `black-key-${this.props.physicalNote.absolutePosition}`,
                physicalNote: this.props.physicalNote,
                functionalNote: note,
                label: name.frequency,
                sound: this.sound
            }, null);
        }
    };
}

class WhiteKey extends React.Component {
	
	constructor(props) {
        super(props);
    }

	render = () => {
        let classes = ['piano-key', 'white-key'];
        if(this.props.functionalNote != null) {
            classes.push(`degree-${this.props.functionalNote.interval.degree}`)
        }
		return e('div', {
            className: classes.join(' '),
            onClick: () => { this.props.sound(); }
        }, this.props.label);
    };
}

class BlackKey extends React.Component {
	
	constructor(props) {
        super(props);
    }

	render = () => {
        let containerClasses = ['piano-key','black-key-container'];
        let classes = ['piano-key', 'black-key'];
        if(this.props.functionalNote != null) {
            classes.push(`degree-${this.props.functionalNote.interval.degree}`)
        }
		return e('div', {
                    className: containerClasses.join(' ')
                },
                e('div', {
                    className: classes.join(' '),
                    onClick: () => { this.props.sound(); }
                }, this.props.label));
    };
}