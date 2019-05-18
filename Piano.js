class WhiteKey extends React.Component {
	
	constructor(props) {
        super(props);
    }

	render = () => {
        let classes = ['piano-key', 'white-key'];
        if(this.props.active)
            classes.push('piano-key-active');
        let name = (this.props.name) ? this.props.name : '';
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
        if(this.props.active)
            classes.push('piano-key-active');
        let name = (this.props.name) ? this.props.name : '';
		return e('div', {className: containerClasses.join(' ')}, e('div', {className: classes.join(' ')}, name));
    };
}

class PianoKey extends React.Component {
	
	constructor(props) {
        super(props);
    }

    isActive = () => {
        for(condition in this.props.activeConditions) {
            if(!condition())
                return false;
        }
        return true;
    }

	render = () => {
        if(this.props.type === 'WHITE') {
            return e(WhiteKey, {key: `key-${this.props.index}`, active: this.isActive()}, null);
        }
        else if(this.props.type === 'BLACK') {
            return e(BlackKey, {key: `key-${this.props.index}`, active: this.isActive()}, null);
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
    
    getKeys = () => {
        return this.keys.map((key, index) => {
            let active = this.props.activeNotes.findIndex((note) => {return note.getPosition() === index}) >= 0;
            return e(PianoKey, {type: key.type, index: index, active: active}, null)
        });
    }

	render = () => {
		return e('div', {className: 'piano'}, this.getKeys());
    };
}