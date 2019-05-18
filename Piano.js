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
        /*this.keys = [
            {position: 0, type: 'WHITE'}, // C
            {position: 1, type: 'BLACK'},
            {position: 2, type: 'WHITE'}, // D
            {position: 3, type: 'BLACK'},
            {position: 4, type: 'WHITE'}, // E
            {position: 5, type: 'WHITE'}, // F
            {position: 6, type: 'BLACK'},
            {position: 7, type: 'WHITE'}, // G
            {position: 8, type: 'BLACK'},
            {position: 9, type: 'WHITE'}, // A
            {position: 10, type: 'BLACK'},
            {position: 11, type: 'WHITE'}, // B
            {position: 12, type: 'WHITE'}, // C
            {position: 13, type: 'BLACK'},
            {position: 14, type: 'WHITE'}, // D
            {position: 15, type: 'BLACK'},
            {position: 16, type: 'WHITE'}, // E
            {position: 17, type: 'WHITE'}, // F
            {position: 18, type: 'BLACK'},
            {position: 19, type: 'WHITE'}, // G
            {position: 20, type: 'BLACK'},
            {position: 21, type: 'WHITE'}, // A
            {position: 22, type: 'BLACK'},
            {position: 23, type: 'WHITE'} // B
        ];*/
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