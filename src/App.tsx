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

const DEFAULT_CONCEPT_TYPE = {
	id: 'scale',
	name: 'Scales'
}

const DEFAULT_CONCEPT = {
	typeId: 'scale',
	getIntervals: () => { return []; }
};

export class App extends React.Component<any, any> {

	constructor(props) {
		super(props);
		this.state = {
			key: DEFAULT_KEY,
			conceptType: DEFAULT_CONCEPT_TYPE,
			concepts: {
				interval: DEFAULT_CONCEPT,
				chord: DEFAULT_CONCEPT,
				scale: DEFAULT_CONCEPT,
				mode: DEFAULT_CONCEPT
			}
		};
	}

	changeKey = (key) => {
		this.setState({ key: key });
	}

	changeConceptType = (conceptType) => {
		this.setState({ conceptType: conceptType });
	}

	setConcept = (conceptType, concept) => {
		this.setState((oldState) => {
			let newState = oldState;
			newState.concepts[conceptType] = concept;
			return newState;
		});
	}

	getNotes = () => {
		let notes = [];
		let intervals = this.state.concepts[this.state.conceptType.id].getIntervals();
		for (let i = 0; i < intervals.length; i++) {
			let functionalNote = new FunctionalNote(this.state.key, intervals[i]);
			notes.push(functionalNote);
		}
		return notes;
	}

	render = () => {
		return (
			<div id='app-container'>
				<div id='header'>
					<div className='left link-box'>
						<a href="" target="_blank">[Hire Me]</a>
					</div>
					<div className='center'>
						Play What?
					</div>
					<div className='right link-box'>
						<a href="" target="_blank">[GitHub]</a>
					</div>
				</div>
				<div id='main'>
					<Toolbar changeKey={this.changeKey} changeConceptType={this.changeConceptType} setConcept={this.setConcept} selectedKey={this.state.key} selectedConceptType={this.state.conceptType} selectedConcepts={this.state.concepts} />
					<ViewManager notes={this.getNotes()} />
				</div>		
			</div>
		);
	};
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App/>, domContainer);