class ConceptOptionsSelector extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			conceptOptions: this.getConfig()
		};
	}

	getConfig = () => {
		// TODO use array search?
		switch(this.props.conceptType.id) {
			case INTERVAL_CONFIG.id:
				return INTERVAL_OPTIONS_CONFIG;
			case CHORD_CONFIG.id:
				return CHORD_OPTIONS_CONFIG;
			case SCALE_CONFIG.id:
				return SCALE_OPTIONS_CONFIG;
			case MODE_CONFIG:
				return MODE_OPTIONS_CONFIG;
		}
	}
	
	updateSelection = (propertyName, propertyValue) => {
		let update = {};
		update[propertyName] = propertyValue;
		this.setState(update);
		// console.log(propertyName, propertyValue);
	}

	render = () => {
		// TODO currently nothing is done with options config
    	return e('div', { id: 'concept-options-selector-container' },
				e(TheoryEngine, { conceptType: this.props.conceptType, conceptDefinition: this.props.conceptDefinition, conceptOptions: this.state.conceptOptions, keyDef: this.props.keyDef }, null)
			);
  };
}