class KeySelector extends React.Component {
	
	constructor(props) {
    super(props);
    this.state = {
			diatonicDegree: DIATONIC_DEGREE_CONFIG.data[0],
			accidental: ACCIDENTAL_CONFIG.data[2],
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
				e(BoxSelector, { updateSelection: this.updateSelection, id: DIATONIC_DEGREE_CONFIG.id, name: DIATONIC_DEGREE_CONFIG.name, data: DIATONIC_DEGREE_CONFIG.data, defaultId: this.state.diatonicDegree.id }, null),
				e(BoxSelector, { updateSelection: this.updateSelection, id: ACCIDENTAL_CONFIG.id, name: ACCIDENTAL_CONFIG.name, data: ACCIDENTAL_CONFIG.data, defaultId: this.state.accidental.id }, null)
			),
			e(MasterConceptSelector, { keyDef: key }, null)
    );
  };
}