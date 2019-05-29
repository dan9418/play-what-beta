class Note extends React.Component {
	
	constructor(props) {
		super(props);
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
		let homeNote = BASE_NOTES[this.props.absoluteDegree - 1];
		let relativePosition = homeNote.relativePosition + this.props.accidental;
		return relativePosition - this.props.octaveOverflow * 12;
	};

	getAbsolutePosition = () => {
		return ((this.props.octave - 4) * 12) + this.getRelativePosition();
	};

	getRelativeDegree = () => {
		return this.props.reference.interval.relativeDegree;
	};

	getAbsoluteDegree = () => {
		return this.props.absoluteDegree;
	};

	getOctave = () => {
		return this.props.octave;
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