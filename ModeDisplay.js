class ModeDisplay extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render = () => {
		let homePosition = BASE_NOTES[this.props.degree - 1].positionInC;
		let notes = [];
		for(let i = 0; i < 7; i++) {
			let degree = (this.props.modeDef.degree - 1 + i) % 7;
			let relativeDegree = ((degree + this.props.degree - 1) % 7) + 1;
			let octave = Math.floor((degree + this.props.degree - 1) / 7);
			let position = homePosition + this.props.accidental + MAJOR_INTERVALS[degree].semitones;
			notes.push(new Note({position: position, degree: relativeDegree, octave: octave}));
		}
		return notes.map((note) => {return e('span', {className: 'note mode-note', key: note.getName()}, note.getName())});
	};
}