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
                displaySettings: this.props.displaySettings
            }, null);
        });
    }

	render = () => {
		return e('div', {className: 'guitar'}, this.getStrings());
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
                displaySettings: this.props.displaySettings
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

    getName = (note) => {
        switch(this.props.displaySettings.label)
        {
            case LABELS.None:
                return '';
            case LABELS.Name:
                return (note !== null) ? note.name : '';
            case LABELS.Interval:
                return (note !== null) ? note.interval.id : '';
            case LABELS.RelativePosition:
                return this.props.physicalNote.relativePosition;
            case LABELS.AbsolutePosition:
                return this.props.physicalNote.absolutePosition
            case LABELS.RelativeDegree:
                return (note !== null) ? note.interval.relativeDegree : '';
            case LABELS.AbsoluteDegree:
                return (note !== null) ? note.absoluteDegree : '';
            case LABELS.Octave:
                return this.props.physicalNote.octave;
            default:
                return '';
        }
    }

    render = () => {
        let classes = ['guitar-fret'];
        if(this.props.open)
            classes.push('guitar-fret-open');
        let note = null;
        let name = '';
        for(let i = 0; i < this.props.functionalNotes.length; i++) {
            if(this.props.functionalNotes[i].relativePosition === this.props.physicalNote.relativePosition)
            {
                note = this.props.functionalNotes[i];
                classes.push(`degree-${note.interval.relativeDegree}`);
            }     
        }
        name = this.getName(note);

		return e('div', {className: classes.join(' ')}, name);
    };
}