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
		this.props.updateKey(new Key(diatonicDegree.diatonicDegree, this.props.keyDef.accidental));
	}

	setAccidental = (accidental) => {
		this.setState({ accidental: accidental })
		this.props.updateKey(new Key(this.props.keyDef.degree, accidental.offset));
	}

	render = () => {
		return (
			<div id='key-selector-container'>
				<BoxSelector
					updateSelection={(p, v) => { this.setDiatonicDegree(v); }}
					id={DIATONIC_DEGREE_CONFIG.id}
					name={DIATONIC_DEGREE_CONFIG.name}
					data={DIATONIC_DEGREE_CONFIG.data}
					selected={this.state.diatonicDegree}
				/>
				<BoxSelector
					updateSelection={(p, v) => { this.setAccidental(v); }}
					id={ACCIDENTAL_CONFIG.id}
					name={ACCIDENTAL_CONFIG.name}
					data={ACCIDENTAL_CONFIG.data}
					selected={this.state.accidental}
				/>
			</div>
		);
	};
}