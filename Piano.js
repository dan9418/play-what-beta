class WhiteKey extends React.Component {
	
	constructor(props) {
        super(props);
    }

    getName = () => {
        switch(this.props.displaySettings.label)
        {
            case LABELS.Name:
                return this.props.note.getName();
            case LABELS.Interval:
                return this.props.note.getRelativeInterval().id;
            case LABELS.RelativePosition:
                return this.props.note.getRelativePosition();
            case LABELS.AbsolutePosition:
                return this.props.note.getAbsolutePosition();
            case LABELS.RelativeDegree:
                return this.props.note.getRelativeDegree();
            case LABELS.AbsoluteDegree:
                return this.props.note.getAbsoluteDegree();
            default:
                return '';
        }
    }

	render = () => {
        let classes = ['piano-key', 'white-key'];
        let active = this.props.note !== null;
        let name = (this.props.name) ? this.props.name : '';
        if(active) {
            if(active) {
                classes.push(`degree-${this.props.note.getRelativeDegree()}`)
                name = this.getName();
            }
        }
		return e('div', {className: classes.join(' ')}, name);
    };
}

class BlackKey extends React.Component {
	
	constructor(props) {
        super(props);
    }

    getName = () => {
        switch(this.props.displaySettings.label)
        {
            case LABELS.Name:
                return this.props.note.getName();
            case LABELS.Interval:
                return this.props.note.getRelativeInterval().id;
            case LABELS.RelativePosition:
                return this.props.note.getRelativePosition();
            case LABELS.AbsolutePosition:
                return this.props.note.getAbsolutePosition();
            case LABELS.RelativeDegree:
                return this.props.note.getRelativeDegree();
            case LABELS.AbsoluteDegree:
                return this.props.note.getAbsoluteDegree();
            default:
                return '';
        }
    }

	render = () => {
        let containerClasses = ['piano-key','black-key-container'];
        let classes = ['piano-key', 'black-key'];
        let active = this.props.note !== null;
        let name = '';
        if(active) {
            classes.push(`degree-${this.props.note.getRelativeDegree()}`)
            name = this.getName();
        }
		return e('div', {className: containerClasses.join(' ')}, e('div', {className: classes.join(' ')}, name));
    };
}

class PianoKey extends React.Component {
	
	constructor(props) {
        super(props);
    }

	render = () => {
        if(this.props.type === 'WHITE') {
            return e(WhiteKey, {key: `key-${this.props.note.getAbsolutePosition()}`, note: this.props.note, displaySettings: this.props.displaySettings}, null);
        }
        else if(this.props.type === 'BLACK') {
            return e(BlackKey, {key: `key-${this.props.note.getAbsolutePosition()}`, note: this.props.note, displaySettings: this.props.displaySettings}, null);
        }
    };
}

class Piano extends React.Component {
	
	constructor(props) {
        super(props);
        this.keys = [];
        for(let i = 0; i < this.props.length; i++) {
            let type = ([0, 2, 4, 5, 7, 9, 11].includes(i % 12)) ? 'WHITE' : 'BLACK';
            this.keys.push({absolutePosition: i, type: type});
        }
    }

    getActiveNote = (absolutePosition) => {
        return this.props.activeNotes.find((note) => {
            return note.getRelativePosition() === absolutePosition ||
                note.getRelativePosition() - 12 === absolutePosition || // Octave hack
                note.getRelativePosition() + 12 === absolutePosition;
        });
    }
    
    getKeys = () => {
        return this.keys.map((key) => {
            let note = this.getActiveNote(key.absolutePosition) || {
                getName: () => { return ''; },
                getRelativeInterval: () => { return ''; },
                getRelativePosition: () => { return ''; },
                getAbsolutePosition: () => { return key.absolutePosition; },
                getRelativeDegree: () => { return ''; },
                getAbsoluteDegree: () => { return ''; }
            }; // temp hack
            return e(PianoKey, {key: `key-${key.absolutePosition}`, type: key.type, note: note, displaySettings: this.props.displaySettings}, null)
        });
    }

	render = () => {
		return e('div', {className: 'piano'}, this.getKeys());
    };
}