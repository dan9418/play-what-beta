class Note2 extends React.Component {
	
	constructor(props) {
		super(props);
	}

	// Physical attributes

	getAbsolutePosition = () => {
		return this.props.absolutePosition;
	};

	getRelativePosition = () => {
		return (this.props.absolutePosition > 0) ? this.props.absolutePosition % 12 : (this.props.absolutePosition % 12 + 12) % 12;
	};

	getOctave = () => {
		return Math.floor(this.props.absolutePosition / 12) + 4;
	};

	// Functional attributes

	getName = () => {
		if(this.getAbsoluteDegree() >= 1)
			return this.getAbsoluteDegreeString(this.getAbsoluteDegree()) + this.getAccidentalString(this.getAccidental());
	}

	getAccidental = () => {
		if(this.getAbsoluteDegree() >= 1)
			return this.getRelativePosition() - MAJOR_INTERVALS[this.getAbsoluteDegree() - 1].semitones;
	}

	getRelativeDegree = () => {
		let relativePosition = this.getRelativePosition();
		let position = relativePosition - MAJOR_INTERVALS[this.props.keyDef.absoluteDegree - 1].semitones - this.props.keyDef.accidental;
		if(position < 0) {
			position += 12;
		}

		for(let i = 0; i < MAJOR_INTERVALS.length; i++) {
			if(MAJOR_INTERVALS[i].semitones === position)
				return (i + 1);
		}
		return '';
	};

	getAbsoluteDegree = () => {
		let relativePosition = this.getRelativePosition();
		let position = relativePosition - MAJOR_INTERVALS[this.props.keyDef.absoluteDegree - 1].semitones - this.props.keyDef.accidental;
		if(position < 0) {
			position += 12;
		}

		
		for(let i = 0; i < MAJOR_INTERVALS.length; i++) {
			if(MAJOR_INTERVALS[i].semitones === position)
				return (((this.props.keyDef.absoluteDegree - 1) + (i + 1)) - 1) % 7 + 1;
		}
		return '';
	};

	getRelativeRootNote = () => {
		return '';
	}

	getRelativeInterval = () => {
		return '';
	};

	getAbsoluteDegreeString = (degree) => {
		switch(degree) {
			case 1:
				return 'C'
			case 2:
				return 'D';
			case 3:
				return 'E';
			case 4:
				return 'F';
			case 5:
				return 'G';
			case 6:
				return 'A';
			case 7:
				return 'B';
		}
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

class Note extends React.Component {
	
	constructor(props) {
		super(props);
	}

	getName = () => {
		let homeNote = BASE_NOTES[this.props.absoluteDegree - 1];
		let accidentalName = this.getAccidentalString(this.props.accidental);
		return homeNote.name + accidentalName;
	};

	getAccidental = () => {
		return this.props.accidental;
	}

	getRelativeRootNote = () => {
		return this.props.reference.note;
	}

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