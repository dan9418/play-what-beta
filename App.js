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
			relativeDegree: 1,
			concept: CONCEPTS.Modes,
			chord: CHORDS.Maj_Tri.id,
			mode: MODES.Ionian.id
		};
	}

	getNotes = () => {
		if(this.state.concept === CONCEPTS.Chords) {
			let chord = new Chord(this.state.chord, this.state.relativeDegree, this.state.accidental);
			return chord.getNotes();
		}
		else if(this.state.concept === CONCEPTS.Modes) {
			let mode = new Mode(this.state.mode, this.state.relativeDegree, this.state.accidental);
			return mode.getNotes();
		}
	}

	getNoteCollection = (notes) => {
		return e(NoteCollection, {notes: notes}, null);
	}

	getPiano = (notes, displaySettings) => {
		return e(Piano, {activeNotes: notes, length: 24, displaySettings: displaySettings}, null);
	}

	getGuitar = (notes, displaySettings) => {
		return e(Guitar, {notes: notes, displaySettings: displaySettings}, null);
	}

	onChange = (inputState) => {
		this.setState(inputState);
	}

	render = () => {
		let notes = this.getNotes();
		let displaySettings = {
			label: 'DEGREE'
		}
		return e('div', {id: 'appContainer'},
			e(InputBox, {onChange: this.onChange}, null),
			e('div', {id: 'notesContainer'}, this.getNoteCollection(notes)),
			e('div', {id: 'pianoContainer'}, this.getPiano(notes, displaySettings)),
			e('div', {id: 'guitarContainer'}, this.getGuitar(notes, displaySettings))
		);
  	};
}

const domContainer = document.querySelector('#app');
ReactDOM.render(e(App), domContainer);