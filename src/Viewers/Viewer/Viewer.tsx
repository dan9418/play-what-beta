import * as React from "react";
import { Degree } from "../../Key/DegreeConfig";
import { Accidental } from "../../Key/AccidentalConfig";
import { TheoryEngine } from "../../Theory/TheoryEngine";
import { Interval } from "../../Concepts/Interval/IntervalConfig";
import { ConceptDefinition } from "../../Concepts/ConceptConfig";
import { ViewerDefinition } from "../ViewerConfig";
import "./Viewer.css"

export type ViewerProps = {
	// Key
	degree: Degree,
	accidental: Accidental,
	octave: number
	// Concept
	conceptDefinition: ConceptDefinition,
	conceptIntervals: Interval[],
	conceptConfig: any,
	// Viewer
	viewerDefinition: ViewerDefinition,
	viewerConfig: any,
}

export class Viewer extends React.Component<ViewerProps, null> {

	constructor(props) {
		super(props);
	}

	getKey = () => {
		return {
			degree: this.props.degree,
			accidental: this.props.accidental,
			octave: this.props.octave
		}
	}

	getNotes = () => {
		let key = this.getKey();

		let intervals = [];
		for (let i = 0; i < this.props.conceptIntervals.length; i++) {
			intervals.push({ ...this.props.conceptIntervals[i] });
		}
		let inversion = this.props.conceptConfig.inversion.rotation;
		let melodicInversion = this.props.conceptConfig.melodicInversion;

		// Configure relative octaves
		for (let i = 0; i < intervals.length; i++) {
			if (i < inversion) {
				intervals[i].octaveOffset = 1;
			}
			if (melodicInversion && i > 0) {
				intervals[i].octaveOffset = -1;
			}
		}

		let notes = TheoryEngine.getNotesFromIntervals(key, intervals, melodicInversion);

		if (this.props.conceptConfig.reverse)
			notes.reverse();

		return notes;
	}

	/*arrayRotate = (arr, count) => {
		count -= arr.length * Math.floor(count / arr.length)
		arr.push.apply(arr, arr.splice(0, count))
		console.log(arr);
		return arr
	}*/

	render = () => {
		let Viewer = this.props.viewerDefinition.component;
		return (
			<div className='viewer'>
				<Viewer
					notes={this.getNotes()}
					config={this.props.viewerConfig}
				/>
			</div>
		);
	};
}
