class Fret extends React.Component {
	
	constructor(props) {
        super(props);
    }

    render = () => {
        let classes = ['guitar-fret'];
        let active = this.props.note !== null;
        let name = (this.props.name) ? this.props.name : '';
        if(active) {
            classes.push('guitar-fret-active');
            if(this.props.displaySettings.label === 'DEGREE') {
                let degree = this.props.note.getDegree();
                name = degree;
                classes.push(`degree-${degree}`)
            }
        }
        if(this.props.open)
            classes.push('guitar-fret-open');
        
		return e('div', {className: classes.join(' ')}, name);
    };
}

class String extends React.Component {
	
	constructor(props) {
        super(props);
    }

    getFrets = () => {
        let frets = [];
        for(let i = 0; i < 12; i++) {
            let note = this.props.notes.find((note) => {
                return note.getRelativePosition() % 12 === (this.props.openPosition + i) % 12
                    || (note.getRelativePosition() + 12 ) % 12 === (this.props.openPosition + i + 12) % 12 // low octave hack
            }) || null;
            frets.push(e(Fret, {absolutePosition: this.props.openPosition + i, key: `fret-${i}`, note: note, open: (i === 0), displaySettings: this.props.displaySettings}, null));
        }
        return frets;
    }

	render = () => {
        let classes = ['guitar-string'];
        if(this.props.active)
            classes.push('guitar-string-active');
		return e('div', {className: classes.join(' ')}, this.getFrets());
    };
}


class Guitar extends React.Component {
	
	constructor(props) {
        super(props);
        this.strings = [
            {absolutePosition: 16},  // e
            {absolutePosition: 11},  // B
            {absolutePosition: 7},  // G
            {absolutePosition: 2},  // D
            {absolutePosition: -3},  // A
            {absolutePosition: -8}  // E   
        ];
    }
    
    getStrings = () => {
        return this.strings.map((string, index) => {
            return e(String, {key: `key-${index}`, openPosition: string.absolutePosition, notes: this.props.notes, displaySettings: this.props.displaySettings}, null);
        });
    }

	render = () => {
		return e('div', {className: 'guitar'}, this.getStrings());
    };
}