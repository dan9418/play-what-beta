class ConceptDefSelector extends React.Component {
	
	constructor(props) {
		super(props);
		let conceptDef = CONCEPT_DEF_CONFIG[this.props.conceptType.id];
		this.state = {
			conceptDefinition: conceptDef.data[0],
			conceptOptions: conceptDef.defaultOptions
		};
	}
	
	updateSelection = (propertyName, propertyValue) => {
		let update = {};
		update[propertyName] = propertyValue;
		this.setState(update);
		// console.log(propertyName, propertyValue);
	}

	render = () => {
		let conceptDef = new ConceptDef(CONCEPT_DEF_CONFIG[this.props.conceptType.id]);

    	return e('div', { id: 'concept-def-selector-container' },
				e(BoxSelector, { updateSelection: this.updateSelection, id: 'conceptDefinition', name: this.props.conceptType.name, data: conceptDef.data, defaultId: conceptDef.defaultId }, null),
				e(PropertySelector, { updateSelection: this.updateSelection, id: 'conceptOptions', name: this.props.conceptType.name + ' Options', data: conceptDef.defaultOptions }, null),
				//e(NoteDriver, { conceptDefinition: this.state.conceptDefinition, conceptOptions: this.state.conceptOptions, keyDef: this.props.keyDef }, null)
			);
  };
}