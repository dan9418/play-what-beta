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

	getNoteCollection = (keyDef, intervals, displaySettings) => {
		return e(NoteCollection, {
			keyDef: keyDef,
			intervals: intervals,
			displaySettings: displaySettings
		}, null);
	}

	getPiano = (intervals, displaySettings) => {
		return e(Piano, {activeNotes: intervals, length: 25, displaySettings: displaySettings}, null);
	}

	getGuitar = (keyDef, intervals, displaySettings) => {
		return e(Guitar, {
			keyDef: keyDef,
			intervals: intervals,
			displaySettings: displaySettings
		}, null);
	}

	render = () => {
		// Configuration
		let key = new Key(this.state.absoluteDegree, this.state.accidental, 4);
		let intervals = this.getConcept().intervals;
		let displaySettings = {
			label: this.state.label,
			filterOctave: this.state.filterOctave
		}
		// Render
		return e('div', {id: 'appContainer'},
			e(InputBox, {onChange: this.onChange}, null),
			e('div', {id: 'notesContainer'}, this.getNoteCollection(key, intervals, displaySettings)),
			//e('div', {id: 'pianoContainer'}, this.getPiano(notes, displaySettings)),
			e('div', {id: 'guitarContainer'}, this.getGuitar(key, intervals, displaySettings))
		);
  	};
}

const domContainer = document.querySelector('#app');
ReactDOM.render(e(App), domContainer);