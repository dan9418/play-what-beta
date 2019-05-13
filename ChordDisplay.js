class ChordDisplay extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render = () => {
		let homePosition = BASE_NOTES[this.props.degree - 1].positionInC;
		let notes = [];
		for(let i = 0; i < this.props.chordDef.intervals.length; i++) {
			let interval = this.props.chordDef.intervals[i];
			let degree = interval.degree - 1;
			let relativeDegree = ((degree + this.props.degree - 1) % 7) + 1;
			let octave = Math.floor((degree + this.props.degree - 1) / 7);
			let position = homePosition + this.props.accidental + interval.semitones;
			notes.push(new Note({position: position, degree: relativeDegree, octave: octave}));
		}
		return notes.map((note) => {return e('span', {className: 'note chord-note', key: note.getName()}, note.getName())});
	};
}