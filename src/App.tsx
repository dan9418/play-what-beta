import * as React from "react";
import * as ReactDOM from "react-dom";
import "./Common/Common.css";
import { FunctionalNote } from "./Theory/Base/FunctionalNote";
import { Key } from "./Theory/Base/Key"
import { Toolbar } from "./Toolbar/Toolbar";
import { ViewManager } from "./ViewManager/ViewManager";


'use strict';

export const e = React.createElement;

const DEFAULT_KEY = new Key(1, 0);

const DEFAULT_CONCEPT = {
	typeId: 'scale',
	getIntervals: () => { return []; }
};

export class App extends React.Component<any, any> {

	constructor(props) {
		super(props);
		this.state = {
			key: DEFAULT_KEY,
			concept: DEFAULT_CONCEPT
		};
	}

	changeKey = (key) => {
		this.setState({ key: key });
	}

	changeConcept = (concept) => {
		this.setState({ concept: concept });
	}

	getNotes = () => {
		let notes = [];
		let intervals = this.state.concept.getIntervals();
		for (let i = 0; i < intervals.length; i++) {
			let functionalNote = new FunctionalNote(this.state.key, intervals[i]);
			notes.push(functionalNote);
		}
		return notes;
	}

	render = () => {
		return (
			<div id='app-container'>
				<div id='header'>Play What?</div>
				<Toolbar changeKey={this.changeKey} changeConcept={this.changeConcept} selectedKey={this.state.key} selectedConcept={this.state.concept} />
				<ViewManager notes={this.getNotes()} />
			</div>
		);
	};
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App/>, domContainer);