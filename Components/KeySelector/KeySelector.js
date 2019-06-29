class KeySelector extends React.Component {
	
	constructor(props) {
    super(props);
    this.state = {
			diatonicDegree: DEFINITIONS.DiatonicDegrees[0],
			accidental: DEFINITIONS.Accidentals[1],
		};
	}
	
	updateSelection = (propertyName, propertyValue) => {
		console.log(propertyName, propertyValue);
	}

	render = () => {
    return e('div', { id: 'key-selector-container' },
			e('div', { id: 'top-bar-key'},
				e(BoxSelector, { updateSelection: this.updateSelection, id: 'diatonicDegree', name: 'Diatonic Degree', data: DEFINITIONS.DiatonicDegrees }, null),
				e(BoxSelector, { updateSelection: this.updateSelection, id: 'accidental', name: 'Accidental', data: DEFINITIONS.Accidentals }, null)
			)
    );
  };
}