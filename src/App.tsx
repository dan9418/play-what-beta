import * as React from "react";
import * as ReactDOM from "react-dom";
import "./App.css";
import { MasterViewer } from "./MasterViewer/MasterViewer";
import { ACCIDENTAL, DEGREE, INTERVAL, ALL_DEGREES, ALL_ACCIDENTALS } from "./Common/Theory/TheoryDefinitions";
import { InputPanel } from "./InputPanel/InputPanel";

export class App extends React.Component<any, any> {

	constructor(props) {
		super(props);

		this.state = {
			degree: DEGREE.C,
			accidental: ACCIDENTAL.natural,
			octave: 4,
			intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.P5]
		}
	}

	setValue = (property: string, value: any) => {
		let update = {};
		update[property] = value;
		this.setState(update);
	}

	render = () => {
		let keyDef = {
			degree: this.state.degree,
			accidental: this.state.accidental
		};

		return (
			<>
				<InputPanel
					keyDef={keyDef}
					intervals={this.state.intervals}
					octave={this.state.octave}
					setValue={this.setValue}
				/>
				<MasterViewer
					keyDef={keyDef}
					intervals={this.state.intervals}
					octave={this.state.octave}
				/>
			</>
		);
	};
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);