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
			concept: 'CHORDS',
			chord: 'MAJ_TRI',
			mode: 'IONIAN'
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
		var value = element.value;
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
		let mode = MODES.find((mode) => { return mode.id === this.state.mode });
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
		let chord = CHORDS.find((chord) => { return chord.id === this.state.chord });
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
		if(this.state.concept === 'CHORDS')
			return this.getChord();
		else if(this.state.concept === 'MODES')
			return this.getMode();
	}

	render = () => {
		return e('div', {id: 'inputContainer'},
			e('select', 
				{id: 'degree', onClick: () => this.changeDegree()},
				e('option', {value: '6'},'A'),
				e('option', {value: '7'},'B'),
				e('option', {value: '1'},'C'),
				e('option', {value: '2'},'D'),
				e('option', {value: '3'},'E'),
				e('option', {value: '4'},'F'),
				e('option', {value: '5'},'G')
			),
			e('select', 
				{id: 'accidental', defaultValue: '0', onClick: () => this.changeAccidental()},
				e('option', {value: '1'},'#'),
				e('option', {value: '0'},'♮'),
				e('option', {value: '-1'},'b')
			),
			e('br'),
			e('select', 
				{id: 'concept', onClick: () => this.changeConcept()},
				e('option', {value: 'CHORDS'},'Chords'),
				e('option', {value: 'MODES'},'Modes')
			),
			(this.state.concept === 'CHORDS' && e('select', 
				{id: 'chord', onClick: () => this.changeChord()},
				e('option', {value: 'MAJ_TRI'},'Major Triad'),
				e('option', {value: 'MAJ_6'},'Major 6th'),
				e('option', {value: 'DOM_7'},'Dominant 7th'),
				e('option', {value: 'MAJ_7'},'Major 7th'),
				e('option', {value: 'AUG_TRI'},'Augmented Triad'),
				e('option', {value: 'AUG_7'},'Augmented 7th'),
				e('option', {value: 'MIN_TRI'},'Minor Triad'),
				e('option', {value: 'MIN_6'},'Minor 6th'),
				e('option', {value: 'MIN_7'},'Minor 7th'),
				e('option', {value: 'MIN_MAJ_7'},'Minor-Major 7th'),
				e('option', {value: 'DIM_TRI'},'Diminished Triad'),
				e('option', {value: 'DIM_7'},'Diminished 7th'),
				e('option', {value: 'HALF_DIM_7'},'Half-Diminished 7th')
			)),
			(this.state.concept === 'MODES' && e('select', 
				{id: 'mode', onClick: () => this.changeMode()},
				e('option', {value: 'IONIAN'},'Ionian (Major)'),
				e('option', {value: 'DORIAN'},'Dorian'),
				e('option', {value: 'PHRYGIAN'},'Phrygian'),
				e('option', {value: 'LYDIAN'},'Lydian'),
				e('option', {value: 'MIXOLYDIAN'},'Mixolydian'),
				e('option', {value: 'AEOLIAN'},'Aeolian (Natural Minor)'),
				e('option', {value: 'LOCRIAN'},'Locrian')
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