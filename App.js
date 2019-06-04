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

	getNotesForConcept = (key) => {
		if(this.state.concept === CONCEPTS.Chords) {
			return key.getChord(this.state.chord).getNotes();
		}
		else if(this.state.concept === CONCEPTS.Modes) {
			return key.getMode(this.state.mode).getNotes();
		}
		else {
			return [];
		}
	}

	getConcept = () => {
		if(this.state.concept === CONCEPTS.Chords) {
			let id = this.state.chord;
			return ALL_CHORDS.find((chord) => { return chord.id === id});
		}
		else if(this.state.concept === CONCEPTS.Modes) {
			let id = this.state.mode;
			return ALL_MODES.find((mode) => { return mode.id === id});
		}
	}

	getNoteCollection = (notes, displaySettings) => {
		return e(NoteCollectionDisplay, {notes: notes, displaySettings: displaySettings}, null);
	}

	getPiano = (notes, displaySettings) => {
		return e(Piano, {activeNotes: notes, length: 25, displaySettings: displaySettings}, null);
	}

	getGuitar = (notes, displaySettings) => {
		return e(Guitar, {notes: notes, displaySettings: displaySettings}, null);
	}

	getGuitar2 = (keyDef, notes, displaySettings) => {
		return e(Guitar2, {keyDef: keyDef, notes: notes, displaySettings: displaySettings}, null);
	}

	render = () => {
		let key = new Key(this.state.absoluteDegree, this.state.accidental, 4);
		let notes = this.getNotesForConcept(key);
		let displaySettings = {
			label: this.state.label,
			filterOctave: this.state.filterOctave
		}
		return e('div', {id: 'appContainer'},
			e(InputBox, {onChange: this.onChange}, null),
			e('div', {id: 'notesContainer'}, this.getNoteCollection(notes, displaySettings)),
			e('div', {id: 'pianoContainer'}, this.getPiano(notes, displaySettings)),
			e('div', {id: 'guitarContainer'}, this.getGuitar(notes, displaySettings)),
			e('div', {id: 'guitar2Container'}, this.getGuitar2(key, this.getConcept().intervals, displaySettings))
		);
  	};
}

const domContainer = document.querySelector('#app');
ReactDOM.render(e(App), domContainer);