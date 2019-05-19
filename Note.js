class Note extends React.Component {
	
	constructor(props) {
		super(props);
		this.accidental = 0;
	}

	getName = () => {
		let valueOfEquivalentDegreeInC = BASE_NOTES.find((note) => { return note.degreeInC === this.props.relativeDegree; });
		this.accidental = this.props.position - (valueOfEquivalentDegreeInC.positionInC + this.props.octave * 12);
		return valueOfEquivalentDegreeInC.name + this.getAccidentalString();
	};

	getPosition = () => {
		return this.props.position;
	};

	getDegree = () => {
		return this.props.relativeDegree;
	};

	getAccidentalString = () => {
		switch(this.accidental) {
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
				if(this.accidental < 0) {
					return -this.accidental + 'b';
				} else if (this.accidental > 0) {
					return this.accidental + '#';
				}
		}
	};

}