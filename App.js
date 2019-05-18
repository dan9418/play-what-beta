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
			degree: 6,
			concept: CONCEPTS.Chords,
			chord: CHORDS.Maj_Tri.id,
			mode: MODES.Ionian.id
		};
	}

	getNotes = () => {
		if(this.state.concept === CONCEPTS.Chords)
		{
			let chord = new Chord(this.state.chord, this.state.degree, this.state.accidental);
			let chordNotes = chord.getNotes();
			let components = chordNotes.map((note) => {return e('span', {className: 'note chord-note', key: note.getName()}, note.getName())});
			return components;
		}
		else if(this.state.concept === CONCEPTS.Modes)
		{
			let mode = new Mode(this.state.mode, this.state.degree, this.state.accidental);
			let modeNotes = mode.getNotes();
			return modeNotes.map((note) => {return e('span', {className: 'note mode-note', key: note.getName()}, note.getName())});
		}
	}

	getPiano = () => {
		if(this.state.concept === CONCEPTS.Chords)
		{
			let chord = new Chord(this.state.chord, this.state.degree, this.state.accidental);
			let chordNotes = chord.getNotes();
			return e(Piano, {activeNotes: chordNotes, length: 24}, null);
		}
		else if(this.state.concept === CONCEPTS.Modes)
		{
			let mode = new Mode(this.state.mode, this.state.degree, this.state.accidental);
			let modeNotes = mode.getNotes();
			return e(Piano, {activeNotes: modeNotes, length: 24}, null);
		}
	}

	getGuitar = () => {
		if(this.state.concept === CONCEPTS.Chords)
		{
			let chord = new Chord(this.state.chord, this.state.degree, this.state.accidental);
			let chordNotes = chord.getNotes();
			return e(Guitar, {notes: chordNotes}, null);
		}
		else if(this.state.concept === CONCEPTS.Modes)
		{
			let mode = new Mode(this.state.mode, this.state.degree, this.state.accidental);
			let modeNotes = mode.getNotes();
			return e(Guitar, {notes: modeNotes}, null);
		}
	}

	onChange = (inputState) => {
		this.setState(inputState);
	}

	render = () => {
		return e('div', {id: 'appContainer'},
			e(InputBox, {onChange: this.onChange}, null),
			e('div',{id: 'notesContainer'}, this.getNotes()),
			e('div',{id: 'pianoContainer'}, this.getPiano()),
			e('div',{id: 'guitarContainer'}, this.getGuitar()),
		);
  	};
}

const domContainer = document.querySelector('#app');
ReactDOM.render(e(App), domContainer);