class KeySelector extends React.Component {
	
	constructor(props) {
    super(props);
    this.state = {
			diatonicDegree: KEY_CONFIG.DiatonicDegree.data[0],
			accidental: KEY_CONFIG.Accidental.data[2],
		};
	}
	
	updateSelection = (propertyName, propertyValue) => {
		console.log(propertyName, propertyValue);
	}

	render = () => {
		let key = new Key(this.state.diatonicDegree, this.state.accidental)

    return e('div', { id: 'key-selector-container' },
			e('div', { id: 'top-bar-key'},
				e(BoxSelector, { updateSelection: this.updateSelection, id: KEY_CONFIG.DiatonicDegree.id, name: KEY_CONFIG.DiatonicDegree.name, data: KEY_CONFIG.DiatonicDegree.data, defaultId: this.state.diatonicDegree.id }, null),
				e(BoxSelector, { updateSelection: this.updateSelection, id: KEY_CONFIG.Accidental.id, name: KEY_CONFIG.Accidental.name, data: KEY_CONFIG.Accidental.data, defaultId: this.state.accidental.id }, null)
			),
			e(ConceptSelector, { keyDef: key }, null)
    );
  };
}