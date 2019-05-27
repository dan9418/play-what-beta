class Fret extends React.Component {
	
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
            case LABELS.Octave:
                return this.props.note.getOctave();
            default:
                return '';
        }
    }

    render = () => {
        let classes = ['guitar-fret'];
        let active = this.props.note !== null;
        let name = '';
        if(active) {
            classes.push('guitar-fret-active');
            classes.push(`degree-${this.props.note.getRelativeDegree()}`);
            name = this.getName();
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
        for(let i = 0; i <= 12; i++) {
            let note = this.props.notes.find((note) => {
                return note.getAbsolutePosition() === (this.props.openPosition + i);
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