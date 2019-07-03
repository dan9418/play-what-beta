class ConceptTypeSelector extends React.Component {
	
	constructor(props) {
    super(props);
    this.state = {
			conceptType: CONCEPT_TYPE_CONFIG.data[1],
		};
	}
	
	updateSelection = (propertyName, propertyValue) => {
		let update = {};
		update[propertyName] = propertyValue;
		this.setState(update);
		//console.log(propertyName, propertyValue);
	}

	render = () => {
		let conceptType = new ConceptType(this.state.conceptType);

    return e('div', { id: 'concept-selector-container' },
				e(BoxSelector, { updateSelection: this.updateSelection, id: CONCEPT_TYPE_CONFIG.id, name: CONCEPT_TYPE_CONFIG.name, data: CONCEPT_TYPE_CONFIG.data, defaultId: this.state.conceptType.id }, null),
				e(ConceptDefinitionSelector, { key: conceptType.id, conceptType: conceptType, keyDef: this.props.keyDef }, null)
    );
  };
}