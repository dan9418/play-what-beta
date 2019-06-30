class KeySelector extends React.Component {
	
	constructor(props) {
    super(props);
    this.state = {
			diatonicDegree: DEFINITIONS.DiatonicDegrees[0],
			accidental: DEFINITIONS.Accidentals[2],
		};
	}
	
	updateSelection = (propertyName, propertyValue) => {
		console.log(propertyName, propertyValue);
	}

	render = () => {
		let key = new Key(this.state.diatonicDegree, this.state.accidental)

    return e('div', { id: 'key-selector-container' },
			e('div', { id: 'top-bar-key'},
				e(BoxSelector, { updateSelection: this.updateSelection, id: 'diatonicDegree', name: 'Diatonic Degree', data: DEFINITIONS.DiatonicDegrees, defaultId: 'C' }, null),
				e(BoxSelector, { updateSelection: this.updateSelection, id: 'accidental', name: 'Accidental', data: DEFINITIONS.Accidentals, defaultId: 'natural' }, null)
			),
			e(ConceptSelector, { keyDef: key }, null)
    );
  };
}