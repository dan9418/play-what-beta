class ConceptTypeSelector extends React.Component {
	
	constructor(props) {
    super(props);
    this.state = {
			conceptType: CONCEPT_TYPE_CONFIG.type.data[1],
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
				e(BoxSelector, { updateSelection: this.updateSelection, id: CONCEPT_TYPE_CONFIG.type.id, name: CONCEPT_TYPE_CONFIG.type.name, data: CONCEPT_TYPE_CONFIG.type.data, defaultId: this.state.conceptType.id }, null),
				e(ConceptDefSelector, { conceptType: conceptType, keyDef: this.props.keyDef }, null)
    );
  };
}