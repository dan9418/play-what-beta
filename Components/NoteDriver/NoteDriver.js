class NoteDriver extends React.Component {
	
	constructor(props) {
    super(props);
	}

	getIntervals = () => {
		return this.props.conceptDefinition.intervals || [];
		switch(this.props.conceptDefinition.id) {
				case CONFIG.Interval.id:
			return [INTERVALS.PU, this.props.conceptDefinition];
				case CONFIG.Chord.id:
			return this.props.conceptDefinition.intervals;
				case CONFIG.Scale.id:
			return this.props.conceptDefinition.intervals;
				case CONFIG.Mode.id:
			return this.props.conceptDefinition.intervals;
				case CONFIG.RomanNumeral.id:
			return [];
		  default:
			return [];
		}
  }
	
	getNotes = () => {
		let notes = [];
		let intervals = this.getIntervals();
		for(let i = 0; i < intervals.length; i++) {
			let functionalNote = new FunctionalNote(this.props.keyDef, intervals[i]);
			notes.push(functionalNote);
		}
		return notes;
	}
	
	render = () => {
		let notes = this.getNotes();

    return e('div', { id: 'note-driver-container' },
				e(ViewManager, { notes: notes }, null),
    );
  };
}