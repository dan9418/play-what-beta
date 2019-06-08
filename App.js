/*
|
| Music Theory Toolkit
| Author: Dan Bednarczyk
| Date: 6/6/19
|
*/

'use strict';

const e = React.createElement;

class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			degree: HOME_DEGREES.C,
			accidental: ACCIDENTALS.Natural,
			concept: CONCEPTS.Mode,
			chord: CHORDS.Maj_Tri,
			mode:  MODES.Ionian,
			label: LABELS.Name,
			filterOctave: false
		};
	}

	// Event handlers

	onChange = (inputState) => {
		console.log(inputState);
		let newState = {};
		if(inputState.degree) {
			newState['degree'] = ALL_HOME_DEGREES.find((degree) => { return degree.id === inputState.degree });
		}
		if(inputState.accidental) {
			newState['accidental'] = ALL_ACCIDENTALS.find((accidental) => { return accidental.id === inputState.accidental });
		}
		if(inputState.concept) {
			newState['concept'] = ALL_CONCEPTS.find((concept) => { return concept.id === inputState.concept });
		}
		if(inputState.chord) {
			newState['chord'] = ALL_CHORDS.find((chord) => { return chord.id === inputState.chord });
		}
		if(inputState.mode) {
			newState['mode'] = ALL_MODES.find((mode) => { return mode.id === inputState.mode });
		}
		if(inputState.label) {
			newState['label'] = ALL_LABELS.find((label) => { return label.id === inputState.label });
		}
		if(inputState.filterOctave) {
			newState['filterOctave'] = filterOctave;
		}
		this.setState(newState);
	}

	// View helpers

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

	// Note calculation

	getConcept = (conceptId) => {
		switch(conceptId) {
			case CONCEPTS.Chord.id:
				return this.state.chord;
			case CONCEPTS.Mode.id:
				return this.state.mode;
		}
	}

	getFunctionalNotes = (key, intervals) => {
		let notes = [];
		for(let i = 0; i < intervals.length; i++) {
			let functionalNote = new FunctionalNote(key, intervals[i]);
			notes.push(functionalNote);
		}
		return notes;
	}

	// Render

	render = () => {
		// Get data
		let key = new Key(this.state.degree.absoluteDegree, this.state.accidental.offset);
		let concept = this.getConcept(this.state.concept.id);
		let functionalNotes = this.getFunctionalNotes(key, concept.intervals);
		//console.log(key, concept, functionalNotes);

		// Get display settings
		let displaySettings = {
			label: this.state.label.id,
			filterOctave: this.state.filterOctave
		}

		// Render
		return e('div', { id: 'appContainer' },
			e(InputBox, { onChange: this.onChange }, null),
			e('div', { id: 'notesContainer' }, this.getNoteCollection(functionalNotes, displaySettings)),
			e('div', { id: 'pianoContainer' }, this.getPiano(functionalNotes, displaySettings)),
			e('div', { id: 'guitarContainer' }, this.getGuitar(functionalNotes, displaySettings))
		);
  	};
}

const domContainer = document.querySelector('#app');
ReactDOM.render(e(App), domContainer);