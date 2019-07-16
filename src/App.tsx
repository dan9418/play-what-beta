import * as React from "react";
import * as ReactDOM from "react-dom";
import "./Common/Common.css";
import { Key } from "./Theory/Base/Key"
import { Toolbar } from "./Toolbar/Toolbar";
import { ViewManager } from "./ViewManager/ViewManager";
import { DiatonicDegreeDefinitions } from "./Parameters/Key/DiatonicDegreeConfig";
import { AccidentalDefinitions } from "./Parameters/Key/AccidentalConfig";
import { TheoryEngine } from "./Common/TheoryEngine";


'use strict';

export const e = React.createElement;

const DEFAULT_KEY = new Key(1, 0);

const DEFAULT_CONCEPT_TYPE = {
	id: 'scale',
	name: 'Scales'
}

const DEFAULT_CONCEPT = {
	typeId: 'scale',
	intervals: []
};

export class App extends React.Component<any, any> {

	constructor(props) {
		super(props);
		this.state = {
			key_diatonicDegree: DiatonicDegreeDefinitions[0],
			key_accidental: AccidentalDefinitions[2],
			concept_type: DEFAULT_CONCEPT_TYPE,
			concept_interval: DEFAULT_CONCEPT,
			concept_chord: DEFAULT_CONCEPT,
			concept_scale: DEFAULT_CONCEPT,
			concept_mode: DEFAULT_CONCEPT
		};
	}

	setParameter = (property, value) => {
		let update = {};
		update[property] = value;
		this.setState(update);
	}

	getNotes = () => {
		let notes = [];
		let key = new Key(this.state.key_diatonicDegree.degree, this.state.key_accidental.offset);
		let intervals = this.state['concept_' + this.state.concept_type.id].intervals;
		for (let i = 0; i < intervals.length; i++) {
			let functionalNote = TheoryEngine.getFunctionalNote(key, intervals[i]);
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
					<Toolbar
						setParameter={this.setParameter}
						{...this.state}
						/>
					<ViewManager notes={this.getNotes()} />
				</div>		
			</div>
		);
	};
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App/>, domContainer);