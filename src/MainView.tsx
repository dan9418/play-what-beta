import * as React from "react";
import "./Common/Common.css";
import { Toolbar } from "./Toolbar/Toolbar";
import { ViewManager } from "./ViewManager/ViewManager";
import { DiatonicDegreeDefinitions } from "./Parameters/Key/DiatonicDegreeConfig";
import { AccidentalDefinitions } from "./Parameters/Key/AccidentalConfig";
import { TheoryEngine } from "./Common/TheoryEngine";

const DEFAULT_CONCEPT_TYPE = {
	id: 'scale',
	name: 'Scales'
}

const DEFAULT_CONCEPT = {
	typeId: 'scale',
	intervals: []
};

export class MainView extends React.Component<any, any> {

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
		let key = TheoryEngine.getKey(this.state.key_diatonicDegree, this.state.key_accidental);
		let intervals = this.state['concept_' + this.state.concept_type.id].intervals;
		return TheoryEngine.getNotesFromIntervals(key, intervals);
	}

	render = () => {
		return (
				<div id='main'>
					<Toolbar
						setParameter={this.setParameter}
						{...this.state}
						/>
					<ViewManager notes={this.getNotes()} />
				</div>		
		);
	};
}