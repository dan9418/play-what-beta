import * as React from "react";
import * as ReactDOM from "react-dom";
import "./App.css";
import { InputPanel } from "./InputPanel/InputPanel";
import { TheoryEngine } from "./Common/Theory/TheoryEngine";
import { ViewerType, ALL_VIEWERS } from "./Viewers/ViewerConfig";
import { ConceptType, ALL_CONCEPTS } from "./Common/Theory/Concepts/ConceptConfig";
import { Accidental, ACCIDENTAL } from "./Common/Theory/Key/AccidentalConfig";
import { Degree, DEGREE } from "./Common/Theory/Key/DegreeConfig";
import { Preset, ConceptConfig } from "./Common/Theory/TheoryConfig";

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

type AppState = {
	viewers: ViewerProps[]
}

export class App extends React.Component<any, AppState> {

	constructor(props) {
		super(props);

		this.state = {
			viewers: [
				{
					viewerType: ALL_VIEWERS[0],
					viewer: ALL_VIEWERS[0].presets[0],
					viewerConfigPanel: ALL_VIEWERS[0].configComponent,
					degree: DEGREE.C,
					accidental: ACCIDENTAL.natural,
					octave: 4,
					conceptType: ALL_CONCEPTS[0],
					concept: ALL_CONCEPTS[0].presets[0]
				}
			]
		}
	}

	setValue = (index: number, property: string, value: any) => {
		/*let update = {};
		update[property] = value;
		this.setState(update);*/
		this.setState((oldState) => {
			let oldViewer = { ...oldState.viewers[index] };
			oldViewer[property] = value;
			if (property !== 'viewerType') {
				return {
					viewers: [...oldState.viewers.slice(0, index), oldViewer, ...oldState.viewers.slice(index + 1)]
				};
			}
			// temp ineffecient workaround
			else {
				oldViewer['viewer'] = ALL_VIEWERS.find((viewer) => { return viewer.id === value.id }).presets[0];
				return {
					viewers: [...oldState.viewers.slice(0, index), oldViewer, ...oldState.viewers.slice(index + 1)]
				};
			}
		})
	}

	add = () => {
		this.setState((oldState) => {
			return {
				viewers: [...oldState.viewers, oldState.viewers[oldState.viewers.length - 1]]
			};
		})
	}

	getKey = (index: number) => {
		return {
			degree: this.state.viewers[index].degree,
			accidental: this.state.viewers[index].accidental
		}
	}

	getNotes = (index: number) => {
		let key = this.getKey(index);
		return TheoryEngine.getNotesFromIntervals(key, this.state.viewers[index].concept.config.intervals, this.state.viewers[index].octave);
	}

	getViewers = () => {
		let viewers = []
		for (let i = 0; i < this.state.viewers.length; i++) {
			let Viewer = this.state.viewers[i].viewerType.component;
			viewers.push(
				<Viewer
					key={i}
					notes={this.getNotes(i)}
					config={this.state.viewers[i].viewer.config}
				/>);
		}
		return viewers;
	}

	render = () => {
		return (
			<div className='app-container'>
				<InputPanel
					viewers={this.state.viewers}
					setValue={this.setValue}
					add={this.add}
				/>
				{this.getViewers()}
			</div>
		);
	};
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);