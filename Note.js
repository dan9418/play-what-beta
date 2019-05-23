class Note extends React.Component {
	
	constructor(props) {
		super(props);
	}

	getName = () => {
		let relativeDegreeNote = BASE_NOTES.find((note) => { return note.degreeInC === this.props.relativeDegree; });
		let accidental = this.props.position - (relativeDegreeNote.positionInC + (this.props.octave * 12));
		return relativeDegreeNote.name + this.getAccidentalString(accidental);
	};

	getInterval = () => {
		return this.props.interval;
	};

	getPosition = () => {
		return this.props.position;
	};

	getDegree = () => {
		return this.props.functionalDegree;
	};

	getAccidentalString = (accidental) => {
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