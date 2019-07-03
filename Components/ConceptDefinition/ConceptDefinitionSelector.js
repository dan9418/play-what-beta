class ConceptDefinitionSelector extends React.Component {
	
	constructor(props) {
		super(props);
		this.conceptConfig = this.getConfig();
		this.state = {
			conceptDefinition: this.conceptConfig.data[0],
		};
	}

	getConfig = () => {
		// TODO use array search?
		switch(this.props.conceptType.id) {
			case INTERVAL_CONFIG.id:
				return INTERVAL_CONFIG;
			case CHORD_CONFIG.id:
				return CHORD_CONFIG;
			case SCALE_CONFIG.id:
				return SCALE_CONFIG;
			case MODE_CONFIG.id:
				return MODE_CONFIG;
		}
	}
	
	updateSelection = (propertyName, propertyValue) => {
		let update = {};
		update[propertyName] = propertyValue;
		this.setState(update);
		// console.log(propertyName, propertyValue);
	}

	render = () => {
    	return e('div', { id: 'concept-definition-selector-container' },
				e(BoxSelector, { updateSelection: this.updateSelection, id: CONCEPT_DEFINITION_CONFIG.id, name: this.conceptConfig.name, data: this.conceptConfig.data, defaultId: this.conceptConfig.defaultId }, null),
				e(ConceptOptionsSelector, { conceptType: this.props.conceptType, conceptConfig: this.conceptConfig, conceptDefinition: this.state.conceptDefinition, keyDef: this.props.keyDef }, null)
			);
  };
}