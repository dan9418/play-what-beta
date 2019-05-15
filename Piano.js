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

class Piano extends React.Component {
	
	constructor(props) {
        super(props);
        this.keys = [
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
        ];
    }
    
    getKeys = () => {
        return this.keys.map((key, index) => {
            let active = this.props.notes.findIndex((note) => {return note.getPosition() === index}) >= 0;
            if(key.type === 'WHITE') {
                return e(WhiteKey, {key: `key-${index}`, active: active}, null);
            }
            else if(key.type === 'BLACK') {
                return e(BlackKey, {key: `key-${index}`, active: active}, null);
            }
        });
    }

	render = () => {
		return e('div', {className: 'piano'},this.getKeys());
    };
}