import * as React from "react";
import * as ReactDOM from "react-dom";
import "./App.css";
import { MasterViewer } from "./MasterViewer/MasterViewer";
import { ACCIDENTAL, DEGREE, ConceptType, Concept, ALL_CONCEPTS, Accidental, Degree } from "./Common/Theory/TheoryDefinitions";
import { InputPanel } from "./InputPanel/InputPanel";

type AppState = {
	degree: Degree,
	accidental: Accidental,
    octave: number,
    conceptType: ConceptType,
    concept: Concept,
}

export class App extends React.Component<any, AppState> {

	constructor(props) {
		super(props);

		this.state = {
			degree: DEGREE.C,
			accidental: ACCIDENTAL.natural,
			octave: 4,
			conceptType: ALL_CONCEPTS[0],
			concept: ALL_CONCEPTS[0].presets[0]
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
					octave={this.state.octave}
					conceptType={this.state.conceptType}
					concept={this.state.concept}
					setValue={this.setValue}
				/>
				<MasterViewer
					keyDef={keyDef}
					intervals={this.state.concept.intervals}
					octave={this.state.octave}
				/>
			</>
		);
	};
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);