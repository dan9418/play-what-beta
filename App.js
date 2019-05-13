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

	getDisplay = () => {
		if(this.state.concept === CONCEPTS.Chords)
		{
			let chord = ALL_CHORDS.find((chord) => { return chord.id === this.state.chord });
			return e(ChordDisplay, {chordDef: chord, degree: this.state.degree, accidental: this.state.accidental}, null);
		}
		else if(this.state.concept === CONCEPTS.Modes)
		{
			let mode = ALL_MODES.find((mode) => { return mode.id === this.state.mode });
			return e(ModeDisplay, {modeDef: mode, degree: this.state.degree, accidental: this.state.accidental}, null);
		}
	}

	onChange = (inputState) => {
		this.setState(inputState);
	}

	render = () => {
		return e('div', {id: 'appContainer'},
			e(InputBox, {onChange: this.onChange}, null),
			e('br'),
			this.getDisplay()
		);
  	};
}

const domContainer = document.querySelector('#app');
ReactDOM.render(e(App), domContainer);