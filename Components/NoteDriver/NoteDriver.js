class NoteDriver extends React.Component {
	
	constructor(props) {
    super(props);
	}

	getConceptInstance = () => {
		switch(this.props.conceptId) {
			case CONCEPT_CONFIG.interval.id:
				return new Interval(this.props.conceptDefinition, this.props.conceptOptions);
			case CONCEPT_CONFIG.chord.id:
				return new Chord(this.props.conceptDefinition, this.props.conceptOptions);
			case CONCEPT_CONFIG.scale.id:
				return new Scale(this.props.conceptDefinition, this.props.conceptOptions);
			case CONCEPT_CONFIG.mode.id:
				return new Mode(this.props.conceptDefinition, this.props.conceptOptions);
		}
	}
	
	getNotes = () => {
		let notes = [];
		let intervals = this.getConceptInstance().getIntervals();
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