class Fret extends React.Component {
	
	constructor(props) {
        super(props);
        // displaySettings: object
        // activeSettings: object
        // activeConditions: function[]
    }

	render = () => {
        let classes = ['guitar-fret'];
        if(this.props.active)
            classes.push('guitar-fret-active');
        if(this.props.open)
            classes.push('guitar-fret-open');
        let name = (this.props.name) ? this.props.name : '';
		return e('div', {className: classes.join(' ')}, this.props.position);
    };
}

class String extends React.Component {
	
	constructor(props) {
        super(props);
    }

    getFrets = () => {
        let frets = [];
        for(let i = 0; i < 12; i++) {
            let active = this.props.notes.findIndex((note) => {return note.getPosition() === this.props.position + i}) >= 0;
            frets.push(e(Fret, {position: this.props.position + i, key: `fret-${i}`, active: active, open: (i === 0)}, null));
        }
        return frets;
    }

	render = () => {
        let classes = ['guitar-string'];
        if(this.props.active)
            classes.push('guitar-string-active');
        //let name = (this.props.name) ? this.props.name : '';
		return e('div', {className: classes.join(' ')}, this.getFrets());
    };
}


class Guitar extends React.Component {
	
	constructor(props) {
        super(props);
        this.strings = [
            {position: 16},  // e
            {position: 11},  // B
            {position: 7},  // G
            {position: 2},  // D
            {position: -3},  // A
            {position: -8}  // E   
        ];
    }
    
    getStrings = () => {
        return this.strings.map((string, index) => {
            return e(String, {key: `key-${index}`, position: string.position, notes: this.props.notes}, null);
        });
    }

	render = () => {
		return e('div', {className: 'guitar'}, this.getStrings());
    };
}