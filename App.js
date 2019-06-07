/*
|
| Music Theory Toolkit
| Author: Dan Bednarczyk
| Date: 5/8/19
|
*/

'use strict';

const e = React.createElement;

class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			accidental: 0,
			absoluteDegree: 1,
			concept: CONCEPTS.Modes,
			chord: CHORDS.Maj_Tri.id,
			mode: MODES.Ionian.id,
			label: LABELS.RelativeDegree,
			filterOctave: false
		};
	}

	onChange = (inputState) => {
		this.setState(inputState);
	}

	getConcept = () => {
		if(this.state.concept === CONCEPTS.Chords) {
			let id = this.state.chord;
			return ALL_CHORDS.find((chord) => { return chord.id === id });
		}
		else if(this.state.concept === CONCEPTS.Modes) {
			let id = this.state.mode;
			return ALL_MODES.find((mode) => { return mode.id === id });
		}
	}

	getNoteCollection = (functionalNotes, displaySettings) => {
		return e(NoteCollection, {
			functionalNotes: functionalNotes,
			displaySettings: displaySettings
		}, null);
	}

	getPiano = (functionalNotes, displaySettings) => {
		return e(Piano, {
			functionalNotes: functionalNotes,
			length: 25,
			displaySettings: displaySettings
		}, null);
	}

	getGuitar = (functionalNotes, displaySettings) => {
		return e(Guitar, {
			functionalNotes: functionalNotes,
			displaySettings: displaySettings
		}, null);
	}

	getNotes = (key, intervals) => {
		let notes = [];
		for(let i = 0; i < intervals.length; i++) {
			let functionalNote = new FunctionalNote(key, intervals[i]);
			notes.push(functionalNote);
			console.log(functionalNote.name);
		}
		return notes;
	}

	render = () => {
		// Configuration
		//let key = new Key(this.state.absoluteDegree, this.state.accidental, 4);
		let key2 = new Key2(this.state.absoluteDegree, this.state.accidental);
		let intervals = this.getConcept().intervals;
		let functionalNotes = this.getNotes(key2, intervals);
		console.log(key2, intervals, functionalNotes);

		let displaySettings = {
			label: this.state.label,
			filterOctave: this.state.filterOctave
		}
		// Render
		return e('div', {id: 'appContainer'},
			e(InputBox, {onChange: this.onChange}, null),
			e('div', {id: 'notesContainer'}, this.getNoteCollection(functionalNotes, displaySettings)),
			e('div', {id: 'pianoContainer'}, this.getPiano(functionalNotes, displaySettings)),
			e('div', {id: 'guitarContainer'}, this.getGuitar(functionalNotes, displaySettings))
		);
  	};
}

const domContainer = document.querySelector('#app');
ReactDOM.render(e(App), domContainer);