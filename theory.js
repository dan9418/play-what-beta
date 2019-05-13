/*
|
| Music Theory Toolkit
| Author: Dan Bednarczyk
| Date: 5/8/19
|
*/

'use strict';

const e = React.createElement;

class Note extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			position: props.position,
			degree: props.degree,
			octave: props.octave,
			accidental: 0,
			active: false
		};
	}

	getName = () => {
		let valueOfEquivalentDegreeInC = BASE_NOTES.find((note) => { return note.degreeInC ===this.state.degree; });
		this.state.accidental = this.state.position - (valueOfEquivalentDegreeInC.positionInC + this.state.octave * 12);
		return valueOfEquivalentDegreeInC.name + this.getAccidentalString();
	};

	getAccidentalString = () => {
		let accidental = this.state.accidental;
		switch(accidental) {
		  case 0:
			return ''
		  case 1:
			return '#';
		  case 2:
			return 'x';
		  case -1:
			return 'b';
		  case -2:
			return 'bb';
		  default:
			if(accidental < 0) {
				return -accidental + 'b';
			} else if (accidental > 0) {
				return accidental + '#';
			}
		}
	};

}

class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			accidental: 0,
			degree: 6,
			concept: CONCEPTS.Chords,
			chord: CHORDS.Maj_Tri.id,
			mode: MODES.Ionian.id
		};
	}

	// Event handlers

	changeDegree = () => {
		var element = document.getElementById("degree");
		var value = parseInt(element.value);
		this.setState({degree: value});
	};
	
	changeAccidental = () => {
		var element = document.getElementById("accidental");
		var value = parseInt(element.value);
		this.setState({accidental: value});
	};
	
	changeConcept = () => {
		var element = document.getElementById("concept");
		var value =parseInt(element.value);
		this.setState({concept: value});
	};
	
	changeChord = () => {
		var element = document.getElementById("chord");
		var value = element.value;
		this.setState({chord: value});
	};
	
	changeMode = () => {
		var element = document.getElementById("mode");
		var value = element.value;
		this.setState({mode: value});
	};

	// Helper functions

	getMode = () => {
		let mode = ALL_MODES.find((mode) => { return mode.id === this.state.mode });
		let homePosition = BASE_NOTES[this.state.degree - 1].positionInC;
		let notes = [];
		for(let i = 0; i < 7; i++) {
			let degree = (mode.degree - 1 + i) % 7;
			let relativeDegree = ((degree + this.state.degree - 1) % 7) + 1;
			let octave = Math.floor((degree + this.state.degree - 1) / 7);
			let position = homePosition + this.state.accidental + MAJOR_INTERVALS[degree].semitones;
			notes.push(new Note({position: position, degree: relativeDegree, octave: octave}));
		}
		return notes.map((note) => {return e('span', {className: 'note mode-note', key: note.getName()}, note.getName())});
	};

	getChord = () => {
		let chord = ALL_CHORDS.find((chord) => { return chord.id === this.state.chord });
		let homePosition = BASE_NOTES[this.state.degree - 1].positionInC;
		let notes = [];
		for(let i = 0; i < chord.intervals.length; i++) {
			let interval = chord.intervals[i];
			let degree = interval.degree - 1;
			let relativeDegree = ((degree + this.state.degree - 1) % 7) + 1;
			let octave = Math.floor((degree + this.state.degree - 1) / 7);
			let position = homePosition + this.state.accidental + interval.semitones;
			notes.push(new Note({position: position, degree: relativeDegree, octave: octave}));
		}
		return notes.map((note) => {return e('span', {className: 'note chord-note', key: note.getName()}, note.getName())});
	};
	
	getNotes = () => {
		if(this.state.concept === CONCEPTS.Chords)
			return this.getChord();
		else if(this.state.concept === CONCEPTS.Modes)
			return this.getMode();
	}

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
			)),
			e('br'),
			/*e('button', { onClick: () => this.changeKey() },
				'Go!'
			),*/
			this.getNotes()
		);
  	};
}

const domContainer = document.querySelector('#app');
ReactDOM.render(e(App), domContainer);