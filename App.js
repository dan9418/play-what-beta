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
				interval: INTERVALS.PU,
				chord: CHORDS.Maj_Tri,
				scale: SCALES.Major,
				mode:  MODES.Ionian,
			label: LABELS.Name,
			filterOctave: false
		};
	}

	onChange = (inputState) => {
		//console.log(inputState);
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
			if(inputState.interval) {
				newState['interval'] = ALL_INTERVALS.find((interval) => { return interval.id === inputState.interval });
			}
			if(inputState.chord) {
				newState['chord'] = ALL_CHORDS.find((chord) => { return chord.id === inputState.chord });
			}
			if(inputState.scale) {
				newState['scale'] = ALL_SCALES.find((scale) => { return scale.id === inputState.scale });
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

	getConcept = (conceptId) => {
		switch(conceptId) {
			case CONCEPTS.Interval.id:
				return { intervals: [INTERVALS.PU, this.state.interval] };
			case CONCEPTS.Chord.id:
				return this.state.chord;
			case CONCEPTS.Scale.id:
				return this.state.scale;
			case CONCEPTS.Mode.id:
				return this.state.mode;
			default:
				return { intervals: [] };
		}
	}

	render = () => {
		// Get data
		let keyDef = new Key(this.state.degree.absoluteDegree, this.state.accidental.offset);
		let concept = this.getConcept(this.state.concept.id);
		//console.log(key, concept, functionalNotes);

		// Get display settings
		let displaySettings = {
			label: this.state.label.id,
			filterOctave: this.state.filterOctave
		}

		// Render
		return e('div', { id: 'appContainer' },
			e(InputForm, { onChange: this.onChange }, null),
			e(ViewManager, { keyDef: keyDef, concept: concept, displaySettings: displaySettings }, null),
		);
  	};
}

const domContainer = document.querySelector('#app');
ReactDOM.render(e(App), domContainer);