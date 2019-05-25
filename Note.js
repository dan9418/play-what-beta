class Note extends React.Component {
	
	constructor(props) {
		super(props);
		// Specification
		//octave
		//absoluteDegree
		//accidental
		// Reference note
		//referenceNote
		//referenceInterval
	}

	getName = () => {
		let homeNote = BASE_NOTES[this.props.absoluteDegree - 1];
		let accidentalName = this.getAccidentalString(this.props.accidental);
		return homeNote.name + accidentalName;
	};

	getRelativeInterval = () => {
		return this.props.reference.interval;
	};

	getRelativePosition = () => {
		let rootNote = this.props.reference.note;
		let homeNote = BASE_NOTES[this.props.absoluteDegree - 1];
		return rootNote.relativePosition + homeNote.relativePosition + this.props.accidental;
	};

	getAbsolutePosition = () => {
		return (this.props.octave * 12) + this.getRelativePosition();
	};

	getRelativeDegree = () => {
		return this.props.reference.interval.relativeDegree;
	};

	getAbsoluteDegree = () => {
		return this.props.absoluteDegree;
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