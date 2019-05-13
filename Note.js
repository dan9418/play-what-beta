class Note extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			position: props.position,
			degree: props.degree,
			octave: props.octave,
			accidental: 0,
			active: false
		};
	}

	getName = () => {
		let valueOfEquivalentDegreeInC = BASE_NOTES.find((note) => { return note.degreeInC ===this.state.degree; });
		this.state.accidental = this.state.position - (valueOfEquivalentDegreeInC.positionInC + this.state.octave * 12);
		return valueOfEquivalentDegreeInC.name + this.getAccidentalString();
	};

	getAccidentalString = () => {
		let accidental = this.state.accidental;
		switch(accidental) {
		  case 0:
			return ''
		  case 1:
			return '#';
		  case 2:
			return 'x';
		  case -1:
			return 'b';
		  case -2:
			return 'bb';
		  default:
			if(accidental < 0) {
				return -accidental + 'b';
			} else if (accidental > 0) {
				return accidental + '#';
			}
		}
	};

}