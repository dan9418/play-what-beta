class KeySelector extends React.Component {
	
	constructor(props) {
    super(props);
    this.state = {
			diatonicDegree: KEY_CONFIG.diatonicDegree.data[0],
			accidental: KEY_CONFIG.accidental.data[2],
		};
	}
	
	updateSelection = (propertyName, propertyValue) => {
		let update = {};
		update[propertyName] = propertyValue;
		this.setState(update);
		//console.log(propertyName, propertyValue);
	}

	render = () => {
		let key = new Key(this.state.diatonicDegree, this.state.accidental)

    return e('div', { id: 'key-selector-container' },
			e('div', { id: 'top-bar-key'},
				e(BoxSelector, { updateSelection: this.updateSelection, id: KEY_CONFIG.diatonicDegree.id, name: KEY_CONFIG.diatonicDegree.name, data: KEY_CONFIG.diatonicDegree.data, defaultId: this.state.diatonicDegree.id }, null),
				e(BoxSelector, { updateSelection: this.updateSelection, id: KEY_CONFIG.accidental.id, name: KEY_CONFIG.accidental.name, data: KEY_CONFIG.accidental.data, defaultId: this.state.accidental.id }, null)
			),
			e(ConceptTypeSelector, { keyDef: key }, null)
    );
  };
}