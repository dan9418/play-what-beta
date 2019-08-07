import * as React from "react";
import * as ReactDOM from "react-dom";
import "./App.css";
import { MasterViewer } from "./MasterViewer/MasterViewer";
import { ACCIDENTAL, DEGREE, ConceptType, Concept, ALL_CONCEPTS, Accidental, Degree } from "./Common/Theory/TheoryDefinitions";
import { InputPanel } from "./InputPanel/InputPanel";

export type ViewerProps = {
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
			let oldViewer = {...oldState.viewers[index]};
			oldViewer[property] = value;
			return {
				viewers: [...oldState.viewers.slice(0, index), oldViewer, ...oldState.viewers.slice(index + 1)]
			};
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

	getViewers = () => {
		let viewers = []
		for (let i = 0; i < this.state.viewers.length; i++) {
			viewers.push(
				<MasterViewer
					key={i}
					keyDef={this.getKey(i)}
					intervals={this.state.viewers[i].concept.intervals}
					octave={this.state.viewers[i].octave}
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
				{this.getViewers()}
			</>
		);
	};
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);