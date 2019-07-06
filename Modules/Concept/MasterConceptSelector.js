let EMPTY_CONCEPT = {
	getIntervals: () => { return []; }
};

class MasterConceptSelector extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			conceptType: CONCEPT_TYPE_CONFIG.data[1],
			interval: EMPTY_CONCEPT,
			chord: EMPTY_CONCEPT,
			scale: EMPTY_CONCEPT,
			mode: EMPTY_CONCEPT
		};
	}

	setConceptType = (conceptType) => {
		this.setState({
			conceptType: conceptType
		});
	}

	setConcept = (conceptData) => {
		let update = {};
		update[this.state.conceptType.id] = conceptData;
		this.setState(update);
	}

	getConceptTree = () => {
		let conceptClass = null;
		let conceptConfig = null;
		let conceptSelector = getConceptSelector();
		switch (this.state.conceptType.id) {
			case INTERVAL_CONFIG.id:
				conceptClass = Interval;
				conceptConfig = INTERVAL_CONFIG;
				break;
			case CHORD_CONFIG.id:
				conceptClass = Chord;
				conceptConfig = CHORD_CONFIG;
				break;
			case SCALE_CONFIG.id:
				conceptClass = Scale;
				conceptConfig = SCALE_CONFIG;
				break;
			case MODE_CONFIG.id:
				conceptClass = Mode;
				conceptConfig = MODE_CONFIG;
				break;
		}
		if(!this.state[this.state.conceptType.id].definition) this.state.concept = new conceptClass(conceptConfig.data[0], null);
		return e(conceptSelector, { conceptClass: conceptClass, conceptConfig: conceptConfig, setConcept: this.setConcept, selected: this.state[this.state.conceptType.id].definition })
	}

	getNotes = () => {
		let notes = [];
		let intervals = this.state[this.state.conceptType.id].getIntervals();
		for (let i = 0; i < intervals.length; i++) {
			let functionalNote = new FunctionalNote(this.props.keyDef, intervals[i]);
			notes.push(functionalNote);
		}
		return notes;
	}

	render = () => {
		return e('div', { id: 'master-concept-selector-container' },
			e(BoxSelector, { updateSelection: (p, v) => { this.setConceptType(v); }, id: CONCEPT_TYPE_CONFIG.id, name: CONCEPT_TYPE_CONFIG.name, data: CONCEPT_TYPE_CONFIG.data, selected: this.state.conceptType }, null),
			this.getConceptTree(),
			e(ViewManager, { notes: this.getNotes() }, null),
		);
	};
}