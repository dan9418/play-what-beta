class WhiteKey extends React.Component {
	
	constructor(props) {
        super(props);
    }

	render = () => {
        let classes = ['piano-key', 'white-key'];
        let active = this.props.note !== null;
        let name = (this.props.name) ? this.props.name : '';
        if(active) {
            if(this.props.displaySettings.label === 'DEGREE') {
                let degree = this.props.note.getDegree();
                name = degree;
                classes.push(`degree-${degree}`)
            }
            else {
                classes.push('piano-key-active');
            }
        }
		return e('div', {className: classes.join(' ')}, name);
    };
}

class BlackKey extends React.Component {
	
	constructor(props) {
        super(props);
    }

	render = () => {
        let containerClasses = ['piano-key','black-key-container'];
        let classes = ['piano-key', 'black-key'];
        let active = this.props.note !== null;
        let name = (this.props.name) ? this.props.name : '';
        if(active) {
            if(this.props.displaySettings.label === 'DEGREE') {
                let degree = this.props.note.getDegree();
                name = degree;
                classes.push(`degree-${name}`)
            }
            else {
                classes.push('piano-key-active');
            }
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
        return this.props.activeNotes.find((note) => {return note.getRelativePosition() === absolutePosition});
    }
    
    getKeys = () => {
        return this.keys.map((key) => {
            let note = this.getActiveNote(key.absolutePosition) || {
                getAbsolutePosition: () => { return key.absolutePosition; },
                getDegree: () => { return '' }
            }; // temp hack
            return e(PianoKey, {key: `key-${key.absolutePosition}`, type: key.type, note: note, displaySettings: this.props.displaySettings}, null)
        });
    }

	render = () => {
		return e('div', {className: 'piano'}, this.getKeys());
    };
}