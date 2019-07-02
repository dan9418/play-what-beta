class ConceptInstanceSelector extends React.Component {
	
	constructor(props) {
		super(props);
		let conceptConfig = CONCEPT_CONFIG[this.props.conceptType.id];
		this.state = {
			conceptDefinition: conceptConfig.data[0],
			conceptOptions: conceptConfig.defaultOptions
		};
	}
	
	updateSelection = (propertyName, propertyValue) => {
		let update = {};
		update[propertyName] = propertyValue;
		this.setState(update);
		// console.log(propertyName, propertyValue);
	}

	render = () => {
		let conceptConfig = CONCEPT_CONFIG[this.props.conceptType.id];
		let conceptDefinition = conceptConfig.data[0];
		let conceptOptions = conceptConfig.defaultOptions;

    	return e('div', { id: 'concept-instance-selector-container' },
				e(BoxSelector, { updateSelection: this.updateSelection, id: 'conceptDefinition', name: this.props.conceptType.name, data: conceptConfig.data, defaultId: conceptConfig.defaultId }, null),
				e(PropertySelector, { updateSelection: this.updateSelection, id: 'conceptOptions', name: this.props.conceptType.name + ' Options', data: conceptConfig.defaultOptions }, null),
				e(NoteDriver, { conceptId: conceptConfig.id, conceptDefinition: this.state.conceptDefinition, conceptOptions: this.state.conceptOptions, keyDef: this.props.keyDef }, null)
			);
  };
}