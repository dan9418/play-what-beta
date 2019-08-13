import * as React from "react";
import { Degree } from "../Key/DegreeConfig";
import { Accidental } from "../Key/AccidentalConfig";
import { TheoryEngine } from "../Theory/TheoryEngine";
import { Interval } from "../Concepts/IntervalConfig";

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
		return TheoryEngine.getNotesFromIntervals(key, this.props.conceptProps.intervals);
	}

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
