class ConceptDefSelector extends React.Component {
	
	constructor(props) {
		super(props);
		let update = {
			conceptDefinition: this.props.conceptConfig.data[0],
			conceptOptions: this.props.conceptConfig.defaultOptions
		};
		this.state = update;
	}
	
	updateSelection = (propertyName, propertyValue) => {
		console.log(propertyName, propertyValue);
		let update = {};
		update[propertyName] = propertyValue;
		this.setState(update);
	}

	render = () => {
    return e('div', { id: 'concept-def-selector-container' },
				e(BoxSelector, { updateSelection: this.updateSelection, id: 'conceptDefinition', name: this.props.conceptConfig.name, data: this.props.conceptConfig.data, defaultId: this.props.conceptConfig.defaultId }, null),
				e(PropertySelector, { updateSelection: this.updateSelection, id: 'conceptOptions', name: this.props.conceptConfig.name + ' Options', data: this.props.conceptConfig.defaultOptions }, null),
				e(NoteDriver, { conceptDefinition: this.state.conceptDefinition, conceptOptions: this.state.conceptOptions, keyDef: this.props.keyDef }, null)
			);
  };
}