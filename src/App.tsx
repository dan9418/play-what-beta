import * as React from "react";
import * as ReactDOM from "react-dom";
import "./App.css";
import { ACCIDENTAL, DEGREE, ConceptType, Concept, ALL_CONCEPTS, Accidental, Degree, ViewerType, ALL_VIEWERS, Viewer } from "./Common/Theory/TheoryDefinitions";
import { InputPanel } from "./InputPanel/InputPanel";
import { TheoryEngine } from "./Common/Theory/TheoryEngine";

export type ViewerProps = {
	viewerType: ViewerType,
	viewer: Viewer;
	degree: Degree,
	accidental: Accidental,
	octave: number,
	conceptType: ConceptType,
	concept: Concept,
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
					viewerType: ALL_VIEWERS[2],
					viewer: ALL_VIEWERS[2].presets[0],
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
		return TheoryEngine.getNotesFromIntervals(key, this.state.viewers[index].concept.intervals, this.state.viewers[index].octave);
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
			<>
				<InputPanel
					viewers={this.state.viewers}
					setValue={this.setValue}
					add={this.add}
				/>
				<div className='viewer-panel'>
					{this.getViewers()}
				</div>
			</>
		);
	};
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);