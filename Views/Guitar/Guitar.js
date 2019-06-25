class Guitar extends React.Component {
	
	constructor(props) {
        super(props);
        this.strings = [
            { openPosition:  16 },  // e
            { openPosition:  11 },  // B
            { openPosition:  7  },  // G
            { openPosition:  2  },  // D
            { openPosition: -3  },  // A
            { openPosition: -8  }   // E   
        ];
    }

    getStrings = () => {
        return this.strings.map((string, index) => {
            return e(String, {
                key: `key-${index}`,
                functionalNotes: this.props.functionalNotes,
                openPosition: string.openPosition,
                config: this.props.config
            }, null);
        });
    }

	render = () => {
        return e('div', {className: 'guitar'},
            this.getStrings()
        );
    };
}

class String extends React.Component {
	
	constructor(props) {
        super(props);
    }

    getFrets = () => {
        let frets = [];
        for(let i = 0; i <= 12; i++) {
            let physicalNote = new PhysicalNote(this.props.openPosition + i);
            frets.push(e(Fret, {
                key: `fret-${i}`,
                functionalNotes: this.props.functionalNotes,
                physicalNote: physicalNote,
                open: (i === 0),
                config: this.props.config
            }, null));
        }
        return frets;
    }

	render = () => {
        let classes = ['guitar-string'];
		return e('div', {className: classes.join(' ')}, this.getFrets());
    };
}

class Fret extends React.Component {
	
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
        switch(this.props.config.label)
        {
            case LABELS.None.id:
                return '';
            case LABELS.RelativePosition.id:
                return this.props.physicalNote.relativePosition;
            case LABELS.AbsolutePosition.id:
                return this.props.physicalNote.absolutePosition
            case LABELS.Octave.id:
                return this.props.physicalNote.octave;
            case LABELS.Frequency.id:
                return this.props.physicalNote.frequency;
            default: {
                if (note === null)
                    return '';
                switch(this.props.config.label)
                {
                    case LABELS.None.id:
                        return '';
                    case LABELS.Name.id:
                        return note.name;
                    case LABELS.Interval.id:
                        return note.interval.id;
                    case LABELS.RelativeDegree.id:
                        return note.interval.relativeDegree;
                    case LABELS.AbsoluteDegree.id:
                        return note.absoluteDegree;
                    default:
                        return '';
                }
            }
        }
    }

    getFunctionalNote = () => {
        return this.props.functionalNotes.find((note) => {
            return note.relativePosition === this.props.physicalNote.relativePosition;
        }) || null;
    }

    render = () => {
        let classes = ['guitar-fret'];
        if(this.props.open)
            classes.push('guitar-fret-open');
        let note = this.getFunctionalNote();
        if(note !== null)
            classes.push(`degree-${note.interval.degree}`);
        let name = this.getName(note);

		return e('div', {
            className: classes.join(' '),
            onClick: () => { this.sound(this.props.physicalNote.frequency, 500); }
        }, name);
    };
}