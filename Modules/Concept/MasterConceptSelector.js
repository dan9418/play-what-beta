let EMPTY_CONCEPT = {
	getIntervals: () => { return []; }
};

class MasterConceptSelector extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
				conceptType: CONCEPT_TYPE_CONFIG.data[1],
				concept: EMPTY_CONCEPT
			};
	}

	setConceptType = (conceptType) => {
		this.setState({
			conceptType: conceptType
		});
	}
	
	setConcept = (conceptData) => {
		this.setState({
			concept: conceptData
		});
	}

	getConceptTree = () => {
		switch(this.state.conceptType.id) {
			case INTERVAL_CONFIG.id:
				return getConceptSelector(Interval, INTERVAL_CONFIG, this.setConcept);
			case CHORD_CONFIG.id:
				return getConceptSelector(Chord, CHORD_CONFIG, this.setConcept);
			case SCALE_CONFIG.id:
				return getConceptSelector(Scale, SCALE_CONFIG, this.setConcept);
			case MODE_CONFIG.id:
				return getConceptSelector(Mode, MODE_CONFIG, this.setConcept);
		}
	}

	getNotes = () => {
		let notes = [];
		let intervals = this.state.concept.getIntervals();
		for(let i = 0; i < intervals.length; i++) {
			let functionalNote = new FunctionalNote(this.props.keyDef, intervals[i]);
			notes.push(functionalNote);
		}
		return notes;
	}

	render = () => {
		let conceptTree = this.getConceptTree();

    	return e('div', { id: 'master-concept-selector-container' },
			e(BoxSelector, { updateSelection: (p, v) => { this.setConceptType(v); }, id: CONCEPT_TYPE_CONFIG.id, name: CONCEPT_TYPE_CONFIG.name, data: CONCEPT_TYPE_CONFIG.data, defaultId: this.state.conceptType.id }, null),
			e(conceptTree, {}, null),
			e(ViewManager, { notes: this.getNotes() }, null),
    	);
  };
}