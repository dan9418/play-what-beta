class InputBox extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			concept: CONCEPTS.Chords
		};
	}

	changeDegree = () => {
		var element = document.getElementById("degree");
		var value = parseInt(element.value);
		this.props.onChange({degree: value});
	};
	
	changeAccidental = () => {
		var element = document.getElementById("accidental");
		var value = parseInt(element.value);
		this.props.onChange({accidental: value});
	};
	
	changeConcept = () => {
		var element = document.getElementById("concept");
		var value = parseInt(element.value);
		this.setState({concept: value});
		this.props.onChange({concept: value});
	};
	
	changeChord = () => {
		var element = document.getElementById("chord");
		var value = element.value;
		this.props.onChange({chord: value});
	};
	
	changeMode = () => {
		var element = document.getElementById("mode");
		var value = element.value;
		this.props.onChange({mode: value});
	};

	render = () => {
		return e('div', {id: 'inputContainer'},
			e('select', 
				{id: 'degree', onClick: () => this.changeDegree()},
				e('option', {value: NOTES.A.degreeInC		}, NOTES.A.name				),
				e('option', {value: NOTES.B.degreeInC		}, NOTES.B.name				),
				e('option', {value: NOTES.C.degreeInC		}, NOTES.C.name				),
				e('option', {value: NOTES.D.degreeInC		}, NOTES.D.name				),
				e('option', {value: NOTES.E.degreeInC		}, NOTES.E.name				),
				e('option', {value: NOTES.F.degreeInC		}, NOTES.F.name				),
				e('option', {value: NOTES.G.degreeInC		}, NOTES.G.name				)
			),
			e('select', 
				{id: 'accidental', defaultValue: '0', onClick: () => this.changeAccidental()},
				e('option', {value: '1'						}, '#'						),
				e('option', {value: '0'						}, '♮'						),
				e('option', {value: '-1'					}, 'b'						)
			),
			e('br'),
			e('select', 
				{id: 'concept', onClick: () => this.changeConcept()},
				e('option', {value: CONCEPTS.Chords},		'Chords'					),
				e('option', {value: CONCEPTS.Modes},		'Modes'						)
			),
			(this.state.concept === CONCEPTS.Chords && e('select', 
				{id: 'chord', onClick: () => this.changeChord()},
				e('option', {value: CHORDS.Maj_Tri.id		}, CHORDS.Maj_Tri.name		),
				e('option', {value: CHORDS.Maj_6.id			}, CHORDS.Maj_6.name		),
				e('option', {value: CHORDS.Dom_7.id			}, CHORDS.Dom_7.name		),
				e('option', {value: CHORDS.Maj_7.id			}, CHORDS.Maj_7.name		),
				e('option', {value: CHORDS.Aug_Tri.id		}, CHORDS.Aug_Tri.name		),
				e('option', {value: CHORDS.Aug_7.id			}, CHORDS.Aug_7.name		),
				e('option', {value: CHORDS.Min_Tri.id		}, CHORDS.Min_Tri.name		),
				e('option', {value: CHORDS.Min_6.id			}, CHORDS.Min_6.name		),
				e('option', {value: CHORDS.Min_7.id			}, CHORDS.Min_7.name		),
				e('option', {value: CHORDS.Min_Maj_7.id		}, CHORDS.Min_Maj_7.name	),
				e('option', {value: CHORDS.Dim_Tri.id		}, CHORDS.Dim_Tri.name		),
				e('option', {value: CHORDS.Dim_7.id			}, CHORDS.Dim_7.name		),
				e('option', {value: CHORDS.Half_Dim_7.id	}, CHORDS.Half_Dim_7.name	)
			)),
			(this.state.concept === CONCEPTS.Modes && e('select', 
				{id: 'mode', onClick: () => this.changeMode()},
				e('option', {value: MODES.Ionian.id			}, MODES.Ionian.name		),
				e('option', {value: MODES.Dorian.id			}, MODES.Dorian.name		),
				e('option', {value: MODES.Phrygian.id		}, MODES.Phrygian.name		),
				e('option', {value: MODES.Lydian.id			}, MODES.Lydian.name		),
				e('option', {value: MODES.Mixolydian.id		}, MODES.Mixolydian.name	),
				e('option', {value: MODES.Aeolian.id		}, MODES.Aeolian.name		),
				e('option', {value: MODES.Locrian.id		}, MODES.Locrian.name		)
			))
		);
	};
}