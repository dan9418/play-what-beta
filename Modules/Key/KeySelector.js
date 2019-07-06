class KeySelector extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
				diatonicDegree: DIATONIC_DEGREE_CONFIG.data[0],
				accidental: ACCIDENTAL_CONFIG.data[2],
			};
	}

	setDiatonicDegree = (diatonicDegree) => {
		this.setState({ diatonicDegree: diatonicDegree })
		let a = ACCIDENTAL_CONFIG.data.find((x) => x.offset === this.props.keyDef.accidental)
		this.props.updateKey(new Key(diatonicDegree, a));
	}

	setAccidental = (accidental) => {
		this.setState({ accidental: accidental })
		let d = DIATONIC_DEGREE_CONFIG.data.find((x) => x.diatonicDegree === this.props.keyDef.degree)
		this.props.updateKey(new Key(d, accidental));
	}

	render = () => {
    	return e('div', { id: 'key-selector-container' },
			e(BoxSelector, {
				updateSelection: (p, v) => { this.setDiatonicDegree(v); },
				id: DIATONIC_DEGREE_CONFIG.id,
				name: DIATONIC_DEGREE_CONFIG.name,
				data: DIATONIC_DEGREE_CONFIG.data,
				selected: this.state.diatonicDegree
			}, null),
			e(BoxSelector, {
				updateSelection: (p, v) => { this.setAccidental(v); },
				id: ACCIDENTAL_CONFIG.id,
				name: ACCIDENTAL_CONFIG.name,
				data: ACCIDENTAL_CONFIG.data,
				selected: this.state.accidental
			}, null)
   		);
	};
}