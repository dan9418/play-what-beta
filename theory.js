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
    this.state = { test: false };
  }

  render() {
    if (this.state.test) {
      return 'You liked this.';
    }
	
	
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
		e('div', 
			{id: 'outputContainer'},
			e('h2', {id: 'keyHeader'},),
			e('pre', {id: 'text'})
		)
    );
  }
  
  changeKey = () => {
		var baseNoteElement = document.getElementById("base_note");
		var baseNote = parseInt(baseNoteElement.value);
		var accidentalElement = document.getElementById("accidental");
		var accidental = parseInt(accidentalElement.value);

		console.log(baseNote, accidental);

		var str = analyzeKey(baseNote, accidental);

		var text = document.getElementById("text");
		text.innerHTML = str;
		
		var keyHeader = document.getElementById("keyHeader");
		keyHeader.innerHTML = 'Key of ' + baseNoteElement.options[baseNoteElement.selectedIndex].text + accidentalElement.options[accidentalElement.selectedIndex].text;
	}
  
}

const domContainer = document.querySelector('#container');
ReactDOM.render(e(Container), domContainer);

// Define notes

let BASE_NOTES = [
	{ name: 'C', degreeInC: 1, positionInC: 0 },
	{ name: 'D', degreeInC: 2, positionInC: 2 },
	{ name: 'E', degreeInC: 3, positionInC: 4 },
	{ name: 'F', degreeInC: 4, positionInC: 5 },
	{ name: 'G', degreeInC: 5, positionInC: 7 },
	{ name: 'A', degreeInC: 6, positionInC: 9 },
	{ name: 'B', degreeInC: 7, positionInC: 11 }
];

// Define intervals

let PU = { name: 'Perfect Unison',	base: true,		degree: 1,	semitones: 0  };
let m2 = { name: 'Minor 2nd',		base: true,		degree: 2,	semitones: 1  };
let M2 = { name: 'Minor 2nd',		base: true,		degree: 2,	semitones: 2  };
let m3 = { name: 'Minor 3rd',		base: true,		degree: 3,	semitones: 3  };
let M3 = { name: 'Major 3rd',		base: true,		degree: 3,	semitones: 4  };
let P4 = { name: 'Perfect 4th',		base: true,		degree: 4,	semitones: 5  };
let A4 = { name: 'Augmented 4th',	base: false,	degree: 4,	semitones: 6  };
let TT = { name: 'Tritone',			base: true,		degree: 0,	semitones: 6  };
let d5 = { name: 'Diminished 5th',	base: false,	degree: 5,	semitones: 6  };
let P5 = { name: 'Perfect 5th',		base: true,		degree: 5,	semitones: 7  };
let A5 = { name: 'Augmented 5th',	base: false,	degree: 5,	semitones: 8  };
let m6 = { name: 'Minor 6th',		base: true,		degree: 6,	semitones: 8  };
let M6 = { name: 'Major 6th',		base: true,		degree: 6,	semitones: 9  };
let d7 = { name: 'Diminished 7th',	base: false,	degree: 7,	semitones: 9  };
let m7 = { name: 'Minor 7th',		base: true,		degree: 7,	semitones: 10 };
let M7 = { name: 'Major 7th',		base: true,		degree: 7,	semitones: 11 };
let P8 = { name: 'Perfect Octave',	base: true,		degree: 1,	semitones: 12 };

let BASE_INTERVALS = [PU, m2, M2, m3, M3, P4, A4, TT, d5, P5, A5, m6, M6, m7, M7, P8];

// Define diatonic pattern

let MAJOR_INTERVALS = [PU, M2, M3, P4, P5, M6, M7];
//let MINOR_INTERVALS = [PU, m2, m3, P4, P5, m6, m7];
//let MAJOR_STEPS = [M2, M2, m2, M2, M2, M2, m2];
//let MAJOR_SCALE_TONES = [0,2,4,5,7,9,11];

// Define chords

let CHORDS = [
	{ name: 'Major Triad',					intervals: [PU, M3, P5]},
	{ name: 'Major 6th',					intervals: [PU, M3, P5, M6]},
	{ name: 'Dominant "Major-Minor" 7th',	intervals: [PU, M3, P5, m7]},
	{ name: 'Major 7th',					intervals: [PU, M3, P5, M7]},
	{ name: 'Augmented Triad',				intervals: [PU, M3, A5]},
	{ name: 'Augmented Seventh',			intervals: [PU, M3, A5, m7]},
	{ name: 'Minor Triad',					intervals: [PU, m3, P5]},
	{ name: 'Minor 6th',					intervals: [PU, m3, P5, M6]},
	{ name: 'Minor 7th',					intervals: [PU, m3, P5, m7]},
	{ name: 'Minor-Major 7th',				intervals: [PU, m3, P5, M7]},
	{ name: 'Diminished Triad',				intervals: [PU, m3, d5]},
	{ name: 'Diminished 7th',				intervals: [PU, m3, d5, d7]},
	{ name: 'Half-Diminished 7th',			intervals: [PU, m3, d5, m7]}
];

// Define modes

let MODES = [
	{ name: 'Ionian (Major)', 				degree: 1 },
	{ name: 'Dorian', 						degree: 2 },
	{ name: 'Phrygian', 					degree: 3 },
	{ name: 'Lydian', 						degree: 4 },
	{ name: 'Mixolydian', 					degree: 5 },
	{ name: 'Aeolian (Natual Minor)', 		degree: 6 },
	{ name: 'Locrian', 						degree: 7 }
];

// Helper functions

let getAccidentalString = (distance) => {
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

let notesToString = (notes) => {
	//console.log(notes);
	let str = '';
	for(let i = 0; i < notes.length; i++) {
		str = str + notes[i].name + '\t';
	}
	return str;
};

// Computations

let getNote = (position, degree, octave) => {
	//console.log(octave, degree, position);
	let baseNoteOfEquivalentDegreeInC = BASE_NOTES.find((note) => { return note.degreeInC === degree; });
	let accidental = position - (baseNoteOfEquivalentDegreeInC.positionInC + octave * 12);
	//if(Math.abs(accidental > 1)) console.log('Theoretical key');
	return {
		name: baseNoteOfEquivalentDegreeInC.name + getAccidentalString(accidental),
		accidental: accidental,
		position: position,
		octave: octave,
		degree: degree
	};
};

let getModeNotes = (mode, homeDegree, accidental) => {
	let homePosition = BASE_NOTES[homeDegree - 1].positionInC;
	let notes = [];
	// Loop notes
	for(let i = 0; i < 7; i++) {
		let degree = (mode.degree - 1 + i) % 7;
		let relativeDegree = ((degree + homeDegree - 1) % 7) + 1;
		let octave = Math.floor((degree + homeDegree - 1) / 7);
		let position = homePosition + accidental + MAJOR_INTERVALS[degree].semitones;
		notes.push(getNote(position, relativeDegree, octave));
	}
	return notes;
};

let getChordNotes = (chord, homeDegree, accidental) => {
	let homePosition = BASE_NOTES[homeDegree - 1].positionInC;
	let notes = [];
	// Loop intervals
	for(let i = 0; i < chord.intervals.length; i++) {
		let interval = chord.intervals[i];
		let degree = interval.degree - 1;
		let relativeDegree = ((degree + homeDegree - 1) % 7) + 1;
		let octave = Math.floor((degree + homeDegree - 1) / 7);
		let position = homePosition + accidental + interval.semitones;
		notes.push(getNote(position, relativeDegree, octave));
	}
	return notes;
};

let analyzeKey = (degree, accidental) => {
	let homeNote = BASE_NOTES[degree - 1];
	let str = '';
	
	// Modes
	for(let x = 0; x < MODES.length; x++) {
		let mode = MODES[x];
		str += '\n' + mode.name + '\n';
		str += notesToString(getModeNotes(mode, degree, accidental)) + '\n';
	}

	// Chords
	for(let x = 0; x < CHORDS.length; x++) {
		let chord = CHORDS[x];
		str += '\n' + chord.name + '\n';
		str += notesToString(getChordNotes(chord, degree, accidental)) + '\n';
	}
	
	return str;
};


/*
// Full demo
// Loop C - B
for(let homeDegree = 1; homeDegree <= BASE_NOTES.length; homeDegree++) {
	// Loop b - #
	for(let accidental = -1; accidental <= 1; accidental++) {
		console.log(analyzeKey(homeDegree, accidental));
	}
}
*/