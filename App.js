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
		// TODO: This state doesn't really matter, but is required for first render
		this.state = {
			degree: HOME_DEGREES.C,
			accidental: ACCIDENTALS.Natural,
			concept: CONCEPTS.Mode,
				interval: INTERVALS.PU,
				chord: CHORDS.Maj_Tri,
				scale: SCALES.Major,
				mode:  MODES.Ionian,
				romanNumeral: ROMAN_NUMERALS.Major,
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
			if(inputState.romanNumeral) {
				newState['romanNumeral'] = ALL_ROMAN_NUMERALS.find((romanNumeral) => { return romanNumeral.id === inputState.romanNumeral });
			}
		if(inputState.label) {
			newState['label'] = ALL_LABELS.find((label) => { return label.id === inputState.label });
		}
		if(inputState.filterOctave) {
			newState['filterOctave'] = filterOctave;
		}
		this.setState(newState);
	}

	getConceptIntervalGroups = (conceptId) => {
		switch(conceptId) {
			case CONCEPTS.Interval.id:
				return [{ intervals: [INTERVALS.PU, this.state.interval] }];
			case CONCEPTS.Chord.id:
				return [{ intervals: this.state.chord.intervals }];
			case CONCEPTS.Scale.id:
				return [{ intervals: this.state.scale.intervals }];
			case CONCEPTS.Mode.id:
				return [{ intervals: this.state.mode.intervals }];
			case CONCEPTS.RomanNumeral.id:
				let groups = [];
				for(let i = 0; i < this.state.romanNumeral.chords.length; i++)
					groups.push({
						name: this.state.romanNumeral.chords[i].name,
						relativeDegree: this.state.romanNumeral.chords[i].relativeDegree,
						intervals: this.state.romanNumeral.chords[i].chord.intervals
					});
				return groups;
			default:
				return [{ intervals: [] }];
		}
	}

	render = () => {
		// Get data
		let keyDef = new Key(this.state.degree.absoluteDegree, this.state.accidental.offset);
		let intervalGroups = this.getConceptIntervalGroups(this.state.concept.id);
		//console.log(key, concept, functionalNotes);

		// Get display settings
		let displaySettings = {
			label: this.state.label.id,
			filterOctave: this.state.filterOctave
		}

		// Render
		return (true) ?

		e('div', { id: 'appContainer' },
			e(InputForm, { onChange: this.onChange }, null),
			e(ViewManager, { keyDef: keyDef, intervalGroups: intervalGroups, displaySettings: displaySettings }, null),
		) :
		
		e('div', { id: 'appContainer' },
			e(SettingsPanel, { id: 'main-panel' }, null)
		);

	  };
}

const domContainer = document.querySelector('#app');
ReactDOM.render(e(App), domContainer);