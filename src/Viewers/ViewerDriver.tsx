import * as React from "react";
import { Degree } from "../Key/DegreeConfig";
import { Accidental } from "../Key/AccidentalConfig";
import { TheoryEngine } from "../Theory/TheoryEngine";
import { Interval } from "../Concepts/Interval/IntervalConfig";

export type KeyProps = {
	degree: Degree,
	accidental: Accidental,
	octave: number
}

export type ConceptProps = {
	intervals: Interval[],
	config: any
}

export type ViewerProps = {
	component: any,
	config: any
}

export type ViewerDriverProps = {
	keyProps: KeyProps,
	conceptProps: ConceptProps,
	viewerProps: ViewerProps
}

export class ViewerDriver extends React.Component<ViewerDriverProps, null> {

	constructor(props) {
		super(props);
	}

	getKey = () => {
		return {
			degree: this.props.keyProps.degree,
			accidental: this.props.keyProps.accidental,
			octave: this.props.keyProps.octave
		}
	}

	getNotes = () => {
		let key = this.getKey();

		let intervals = this.props.conceptProps.intervals;
		let inversion = this.props.conceptProps.config.inversion.rotation;

		// Configure relative octaves
		for (let i = 0; i < intervals.length; i++) {
			if (i < inversion) {
				intervals[i].octaveOffset = 1;
			}
			if (this.props.conceptProps.config.melodicInversion && i > 0) {
				intervals[i].octaveOffset = -1;
			}
		}

		let notes = TheoryEngine.getNotesFromIntervals(key, intervals, this.props.conceptProps.config.melodicInversion);

		if (this.props.conceptProps.config.reverse)
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
		let Viewer = this.props.viewerProps.component;
		return (
			<Viewer
				notes={this.getNotes()}
				config={this.props.viewerProps.config}
			/>
		);
	};
}
