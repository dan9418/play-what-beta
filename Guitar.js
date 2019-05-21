class Fret extends React.Component {
	
	constructor(props) {
        super(props);
        // displaySettings: object
        // activeSettings: object
        // activeConditions: function[]
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
                return note.getPosition() % 12 === (this.props.position + i) % 12
                    || (note.getPosition() + 12 )% 12 === (this.props.position + i + 12) % 12 // low octave hack
            }) || null;
            frets.push(e(Fret, {position: this.props.position + i, key: `fret-${i}`, note: note, open: (i === 0), displaySettings: this.props.displaySettings}, null));
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
            return e(String, {key: `key-${index}`, position: string.position, notes: this.props.notes, displaySettings: this.props.displaySettings}, null);
        });
    }

	render = () => {
		return e('div', {className: 'guitar'}, this.getStrings());
    };
}