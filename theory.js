/*
|
| Music Theory Toolkit
| Author: Dan Bednarczyk
| Date: 5/8/19
|
*/

'use strict';

const e = React.createElement;

class Container extends React.Component {
  constructor(props) {
    super(props);
	this.state = {
		accidental: 0,
		baseNote: 6
	};
  }
  
  changeKey = () => {
		var baseNoteElement = document.getElementById("base_note");
		var baseNote = parseInt(baseNoteElement.value);
		var accidentalElement = document.getElementById("accidental");
		var accidental = parseInt(accidentalElement.value);

		this.setState({
			accidental: accidental,
			baseNote: baseNote
		});
	};
	
	getAccidentalString = (distance) => {
		switch(distance) {
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
			if(distance < 0) {
				return -distance + 'b';
			} else if (distance > 0) {
				return distance + '#';
			}
		}
	};

	notesToString = (notes) => {
		//console.log(notes);
		let str = '';
		for(let i = 0; i < notes.length; i++) {
			str = str + notes[i].name + '\t';
		}
		return str;
	};

	getNote = (position, degree, octave) => {
		//console.log(octave, degree, position);
		let baseNoteOfEquivalentDegreeInC = BASE_NOTES.find((note) => { return note.degreeInC === degree; });
		let accidental = position - (baseNoteOfEquivalentDegreeInC.positionInC + octave * 12);
		//if(Math.abs(accidental > 1)) console.log('Theoretical key');
		return {
			name: baseNoteOfEquivalentDegreeInC.name + this.getAccidentalString(accidental),
			accidental: accidental,
			position: position,
			octave: octave,
			degree: degree
		};
	};

	getModeNotes = (mode, homeDegree, accidental) => {
		let homePosition = BASE_NOTES[homeDegree - 1].positionInC;
		let notes = [];
		// Loop notes
		for(let i = 0; i < 7; i++) {
			let degree = (mode.degree - 1 + i) % 7;
			let relativeDegree = ((degree + homeDegree - 1) % 7) + 1;
			let octave = Math.floor((degree + homeDegree - 1) / 7);
			let position = homePosition + accidental + MAJOR_INTERVALS[degree].semitones;
			notes.push(this.getNote(position, relativeDegree, octave));
		}
		return notes;
	};

	getChordNotes = (chord, homeDegree, accidental) => {
		let homePosition = BASE_NOTES[homeDegree - 1].positionInC;
		let notes = [];
		// Loop intervals
		for(let i = 0; i < chord.intervals.length; i++) {
			let interval = chord.intervals[i];
			let degree = interval.degree - 1;
			let relativeDegree = ((degree + homeDegree - 1) % 7) + 1;
			let octave = Math.floor((degree + homeDegree - 1) / 7);
			let position = homePosition + accidental + interval.semitones;
			notes.push(this.getNote(position, relativeDegree, octave));
		}
		return notes;
	};
	
  getChords = () => {
	  let labels = [];
	  for(let x = 0; x < CHORDS.length; x++) {
			let chord = CHORDS[x];
			labels.push(e(Label, {header: chord.name, text: this.notesToString(this.getChordNotes(chord, this.state.baseNote, this.state.accidental))}));
		}
	  return labels;
  };
  
  getModes = () => {
	  let labels = [];
	  for(let x = 0; x < MODES.length; x++) {
			let mode = MODES[x];
			labels.push(e(Label, {header: mode.name, text: this.notesToString(this.getModeNotes(mode, this.state.baseNote, this.state.accidental))}));
		}
	  return labels;
  };

  render = () => {
	return e('div', {id: 'inputContainer'},
		e('select', 
			{id: 'base_note'},
			e('option', {value: '6'},'A'),
			e('option', {value: '7'},'B'),
			e('option', {value: '1'},'C'),
			e('option', {value: '2'},'D'),
			e('option', {value: '3'},'E'),
			e('option', {value: '4'},'F'),
			e('option', {value: '5'},'G')
		),
		e('select', 
			{id: 'accidental', defaultValue: '0'},
			e('option', {value: '1'},'#'),
			e('option', {value: '0'},'♮'),
			e('option', {value: '-1'},'b')
		),
		e('button', { onClick: () => this.changeKey() },
			'Go!'
		),
		e(Label, {header: '========== Chords =========='}),
		this.getChords(),
		e(Label, {header: '========== Modes =========='}),
		this.getModes()
    );
  };
}

class Label extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {
	return e('div', {className: 'label'},
		e('h2', {className: 'labelHeader'}, `${this.props.header}`),
		e('pre', {className: 'labelText'}, `${(this.props.text) ? this.props.text : ''}`)
    );
  };
}

const domContainer = document.querySelector('#container');
ReactDOM.render(e(Container), domContainer);