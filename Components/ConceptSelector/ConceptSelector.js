class ConceptSelector extends React.Component {
	
	constructor(props) {
    super(props);
    this.state = {
			conceptConfig: CONCEPT_CONFIG[0],
		};
	}
	
	updateSelection = (propertyName, propertyValue) => {
		console.log(propertyName, propertyValue);
		this.setState({
			conceptConfig: propertyValue
		});
	}

	render = () => {
    return e('div', { id: 'concept-selector-container' },
				e(BoxSelector, { updateSelection: this.updateSelection, id: 'concept', name: 'Concept', data: CONCEPT_CONFIG, defaultId: 'chord' }, null),
				e(ConceptDefSelector, { conceptConfig: this.state.conceptConfig, keyDef: this.props.keyDef }, null)
    );
  };
}