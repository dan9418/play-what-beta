class Note extends React.Component {
	
	constructor(props) {
		super(props);
	}

	getName = () => {
		let homeNote = BASE_NOTES.find((note) => { return note.absoluteDegree === this.props.absoluteDegree; });
		let accidental = this.props.position - (homeNote.relativePosition + (this.props.octave * 12));
		return homeNote.name + this.getAccidentalString(accidental);
	};

	getInterval = () => {
		return this.props.interval;
	};

	getPosition = () => {
		return this.props.position;
	};

	getDegree = () => {
		return this.props.relativeDegree;
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