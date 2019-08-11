import * as React from "react";
import * as ReactDOM from "react-dom";
import "./App.css";
import { TheoryEngine } from "./Common/Theory/TheoryEngine";
import { ViewerType, ALL_VIEWERS } from "./Viewers/ViewerConfig";
import { ConceptType, ALL_CONCEPTS } from "./Common/Theory/Concepts/ConceptConfig";
import { Accidental, ACCIDENTAL } from "./Common/Theory/Key/AccidentalConfig";
import { Degree, DEGREE } from "./Common/Theory/Key/DegreeConfig";
import { Preset, ConceptConfig } from "./Common/Theory/TheoryConfig";
import { InputRow } from "./InputPanel/InputRow/InputRow";

export type ViewerProps = {
	viewerType: ViewerType,
	viewer: Preset<any>,
	viewerConfigPanel: any,
	degree: Degree,
	accidental: Accidental,
	octave: number,
	conceptType: ConceptType,
	concept: Preset<ConceptConfig>,
}

export class App extends React.Component<any, ViewerProps> {

	constructor(props) {
		super(props);

		const VIEWER_INDEX = 2;
		const CONCEPT_INDEX = 1;

		this.state = {
			viewerType: ALL_VIEWERS[VIEWER_INDEX],
			viewer: ALL_VIEWERS[VIEWER_INDEX].presets[0],
			viewerConfigPanel: ALL_VIEWERS[VIEWER_INDEX].configComponent,
			degree: DEGREE.C,
			accidental: ACCIDENTAL.natural,
			octave: 4,
			conceptType: ALL_CONCEPTS[CONCEPT_INDEX],
			concept: ALL_CONCEPTS[CONCEPT_INDEX].presets[0]
		}
	}

	setValue = (property: string, value: any) => {
		let update = {};
		update[property] = value;
		this.setState(update);
	}

	getKey = () => {
		return {
			degree: this.state.degree,
			accidental: this.state.accidental
		}
	}

	getNotes = () => {
		let key = this.getKey();
		return TheoryEngine.getNotesFromIntervals(key, this.state.concept.config.intervals, this.state.octave);
	}

	render = () => {
		let Viewer = this.state.viewerType.component;
		return (
			<div className='app-container'>
				<InputRow
					viewer={this.state}
					setValue={this.setValue}
				/>
				<Viewer
					notes={this.getNotes()}
					config={this.state.viewer.config}
				/>
			</div>
		);
	};
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);