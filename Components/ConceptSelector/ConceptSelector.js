class ConceptSelector extends React.Component {
	
	constructor(props) {
    super(props);
    this.state = {
			concept: DEFINITIONS.Concepts[0],
		};
	}
	
	updateSelection = (propertyName, propertyValue) => {
		console.log(propertyName, propertyValue);
	}

	render = () => {
    return e('div', { id: 'concept-selector-container' },
				e(BoxSelector, { updateSelection: this.updateSelection, id: 'concept', name: 'Concept', data: CONCEPT_CONFIG, defaultId: 'chord' }, null),
    );
  };
}