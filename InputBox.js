class InputBox extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			concept: CONCEPTS.Modes
		};
	}

	changeDegree = () => {
		var element = document.getElementById("degree");
		var value = parseInt(element.value);
		this.props.onChange({absoluteDegree: value});
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

	changeLabel = () => {
		var element = document.getElementById("label");
		var value = parseInt(element.value);
		this.props.onChange({label: value});
	};

	render = () => {
		return e('div', {id: 'inputContainer'},
			e('select', 
				{id: 'degree', defaultValue: NOTES.C.absoluteDegree, onChange: () => this.changeDegree()},
				e('option', {value: NOTES.A.absoluteDegree		}, NOTES.A.name				),
				e('option', {value: NOTES.B.absoluteDegree		}, NOTES.B.name				),
				e('option', {value: NOTES.C.absoluteDegree		}, NOTES.C.name				),
				e('option', {value: NOTES.D.absoluteDegree		}, NOTES.D.name				),
				e('option', {value: NOTES.E.absoluteDegree		}, NOTES.E.name				),
				e('option', {value: NOTES.F.absoluteDegree		}, NOTES.F.name				),
				e('option', {value: NOTES.G.absoluteDegree		}, NOTES.G.name				)
			),
			e('select', 
				{id: 'accidental', defaultValue: '0', onChange: () => this.changeAccidental()},
				e('option', {value: '1'						}, '#'						),
				e('option', {value: '0'						}, '♮'						),
				e('option', {value: '-1'					}, 'b'						)
			),
			e('br'),
			e('select', 
				{id: 'concept', defaultValue: CONCEPTS.Modes, onChange: () => this.changeConcept()},
				e('option', {value: CONCEPTS.Chords},		'Chords'					),
				e('option', {value: CONCEPTS.Modes},		'Modes'						)
			),
			(this.state.concept === CONCEPTS.Chords && e('select', 
				{id: 'chord', onChange: () => this.changeChord()},
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
				{id: 'mode', onChange: () => this.changeMode()},
				e('option', {value: MODES.Ionian.id			}, MODES.Ionian.name		),
				e('option', {value: MODES.Dorian.id			}, MODES.Dorian.name		),
				e('option', {value: MODES.Phrygian.id		}, MODES.Phrygian.name		),
				e('option', {value: MODES.Lydian.id			}, MODES.Lydian.name		),
				e('option', {value: MODES.Mixolydian.id		}, MODES.Mixolydian.name	),
				e('option', {value: MODES.Aeolian.id		}, MODES.Aeolian.name		),
				e('option', {value: MODES.Locrian.id		}, MODES.Locrian.name		)
			)),
			e('br'),
			e('select', 
				{id: 'label', defaultValue: LABELS.RelativeDegree, onChange: () => this.changeLabel()},
				e('option', {value: LABELS.None				},		'None'				),
				e('option', {value: LABELS.Name				},		'Name'				),
				e('option', {value: LABELS.Interval			},		'Interval'			),
				e('option', {value: LABELS.RelativePosition	},		'Relative Position'	),
				e('option', {value: LABELS.AbsolutePosition	},		'Absolute Position'	),
				e('option', {value: LABELS.RelativeDegree	},		'Relative Degree'	),
				e('option', {value: LABELS.AbsoluteDegree	},		'Absolute Degree'	),
				e('option', {value: LABELS.Octave			},		'Octave'			)
			),
		);
	};
}