class ConceptDefSelector extends React.Component {
	
	constructor(props) {
		super(props);
		let update = {};
		update[this.props.conceptConfig.id + '-definition'] = this.props.conceptConfig.data[0];
		update[this.props.conceptConfig.id + '-options'] = this.props.conceptConfig.defaultOptions;
		this.state = update;
	}
	
	updateSelection = (propertyName, propertyValue) => {
		console.log(propertyName, propertyValue);
		let update = {};
		update[propertyName] = propertyValue;
		this.state = update;
	}

	render = () => {
    return e('div', { id: 'concept-def-selector-container' },
				e(BoxSelector, { updateSelection: this.updateSelection, id: this.props.conceptConfig.id  + '-definition', name: this.props.conceptConfig.name, data: this.props.conceptConfig.data, defaultId: this.props.conceptConfig.defaultId }, null),
				e(PropertySelector, { updateSelection: this.updateSelection, id: this.props.conceptConfig.id + '-options', name: this.props.conceptConfig.name + ' Options', data: this.props.conceptConfig.defaultOptions }, null),
				e(NoteDriver, {}, null)
				);
  };
}