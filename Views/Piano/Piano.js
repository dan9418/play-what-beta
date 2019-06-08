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
            default:
                return '';
        }
    }

	render = () => {
        let note = null;
        for(let i = 0; i < this.props.functionalNotes.length; i++) {
            if(this.props.functionalNotes[i].relativePosition === this.props.physicalNote.relativePosition)
            {
                note = this.props.functionalNotes[i];
                break;
            }     
        }
        let name = this.getName(note);

        if(this.props.type === 'WHITE') {
            return e(WhiteKey, {
                key: `white-key-${this.props.physicalNote.absolutePosition}`,
                functionalNote: note,
                label: name
            }, null);
        }
        else if(this.props.type === 'BLACK') {
            return e(BlackKey, {
                key: `black-key-${this.props.physicalNote.absolutePosition}`,
                functionalNote: note,
                label: name
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
            classes.push(`degree-${this.props.functionalNote.interval.relativeDegree}`)
        }
		return e('div', {className: classes.join(' ')}, this.props.label);
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
            classes.push(`degree-${this.props.functionalNote.interval.relativeDegree}`)
        }
		return e('div', {className: containerClasses.join(' ')}, e('div', {className: classes.join(' ')}, this.props.label));
    };
}