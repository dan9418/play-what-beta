class InputForm extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			degree: HOME_DEGREES.C.id,
			accidental: ACCIDENTALS.Natural.id,
			concept: CONCEPTS.Mode.id,
			chord: CHORDS.Maj_Tri.id,
			mode: MODES.Ionian.id,
			label: LABELS.Name.id,
			filterOctave: false
		};
		this.props.onChange(this.state);
	}

	handleChange = (concept, value) => {
		console.log(concept + ': ' + value, this.state);
		let obj = {};
  		obj[concept] = value;
		this.setState(obj);
		this.props.onChange(obj);
	}

	getSelect = (conceptId, dataSource) => {
		let options = [];
		for(let i = 0; i < dataSource.length; i++)
		{
			options.push(e('option', {
					key: conceptId + '-opt-' + i,
					value: dataSource[i].id
				}, dataSource[i].name)
			);
		}
		return e('select', {
			id: 'input-' + conceptId,
			value: this.state[conceptId],
			onChange: (event) => { this.handleChange(conceptId, event.target.value); }
		}, options);
	}

	getKeyInputs = () => {
		return [
			this.getSelect(CONCEPTS.Degree.id, ALL_HOME_DEGREES),
			this.getSelect(CONCEPTS.Accidental.id, ALL_ACCIDENTALS)
		];
	}

	getConceptInputs = () => {
		let inputs = [
			this.getSelect('concept', ALL_CONCEPTS)
		];
		switch(this.state.concept) {
			case CONCEPTS.Chord.id: {
				inputs.push(this.getSelect(CONCEPTS.Chord.id, ALL_CHORDS));
				break;
			}
			case CONCEPTS.Mode.id: {
				inputs.push(this.getSelect(CONCEPTS.Mode.id, ALL_MODES));
				break;
			}
		}
		return inputs;
	}

	getDisplayInputs = () => {
		let inputs = [
			this.getSelect(CONCEPTS.Label.id, ALL_LABELS),
			e('br'),
			e('input', {
				id: 'filterOctave',
				type: 'checkbox',
				onChange: (event) => { this.handleChange('filterOctave', event.checked); }
			}, null),
			'Filter Octave'
		];
		return inputs;
	}

	render = () => {
		return e('div', {id: 'inputContainer'},
			this.getKeyInputs(), e('br'),
			this.getConceptInputs(), e('br'),
			this.getDisplayInputs(), e('br'),
		);
	};
}