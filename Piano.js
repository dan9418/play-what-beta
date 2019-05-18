class WhiteKey extends React.Component {
	
	constructor(props) {
        super(props);
    }

	render = () => {
        let classes = ['piano-key', 'white-key'];
        let active = this.props.note !== null;
        if(active)
            classes.push('piano-key-active');
        let name = (this.props.name) ? this.props.name : '';
        if(active && this.props.displaySettings.label === 'DEGREE')
            name = this.props.note.getDegree();
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
        if(this.props.active)
            classes.push('piano-key-active');
        let name = (this.props.name) ? this.props.name : '';
        if(active && this.props.displaySettings.label === 'DEGREE')
            name = this.props.note.getDegree();
		return e('div', {className: containerClasses.join(' ')}, e('div', {className: classes.join(' ')}, name));
    };
}

class PianoKey extends React.Component {
	
	constructor(props) {
        super(props);
    }

	render = () => {
        if(this.props.type === 'WHITE') {
            return e(WhiteKey, {key: `key-${this.props.position}`, note: this.props.note, displaySettings: this.props.displaySettings}, null);
        }
        else if(this.props.type === 'BLACK') {
            return e(BlackKey, {key: `key-${this.props.position}`, note: this.props.note, displaySettings: this.props.displaySettings}, null);
        }
    };
}

class Piano extends React.Component {
	
	constructor(props) {
        super(props);
        this.keys = [];
        for(let i = 0; i < this.props.length; i++) {
            let type = ([0, 2, 4, 5, 7, 9, 11].includes(i % 12)) ? 'WHITE' : 'BLACK';
            this.keys.push({position: i, type: type});
        }
    }

    getActiveNote = (position) => {
        return this.props.activeNotes.find((note) => {return note.getPosition() === position});
    }
    
    getKeys = () => {
        return this.keys.map((key) => {
            let note = this.getActiveNote(key.position) || null;
            return e(PianoKey, {key: `key-${key.position}`, type: key.type, position: key.position, note: note, displaySettings: this.props.displaySettings}, null)
        });
    }

	render = () => {
		return e('div', {className: 'piano'}, this.getKeys());
    };
}