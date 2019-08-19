import * as React from "react";
import { TheoryEngine } from "../Common/TheoryEngine";
import "./MusicViewer.css"
import { ViewerManagerProps } from "../Common/AppConfig";

export class Viewer extends React.Component<ViewerManagerProps, null> {

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
		let chordInversion = this.props.conceptOptions.chordInversion;
		let melodicInversion = this.props.conceptOptions.melodicInversion;

		// Configure relative octaves
		for (let i = 0; i < intervals.length; i++) {
			if (i < chordInversion) {
				intervals[i].octaveOffset = 1;
			}
			if (melodicInversion && i > 0) {
				intervals[i].octaveOffset = -1;
			}
		}

		let notes = TheoryEngine.getNotesFromIntervals(key, intervals, melodicInversion);

		if (this.props.conceptOptions.reverse)
			notes.reverse();

		return notes;
	}

	render = () => {
		let Viewer = this.props.viewerType.component;
		return (
			<div className='viewer'>
				<Viewer
					notes={this.getNotes()}
					config={this.props.viewerProps}
				/>
			</div>
		);
	};
}
