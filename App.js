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
			let chord = new Chord(this.state.chord, this.state.degree, this.state.accidental);
			return e(ChordDisplay, {chordDef: chord}, null);
		}
		else if(this.state.concept === CONCEPTS.Modes)
		{
			let mode = new Mode(this.state.mode, this.state.degree, this.state.accidental);
			return e(ModeDisplay, {modeDef: mode}, null);
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