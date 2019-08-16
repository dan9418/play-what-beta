import * as React from "react";
import { TheoryEngine } from "../../Common/TheoryEngine";
import "./MusicViewer.css"
import { ViewerProps } from "../../AppConfig";

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
		for (let i = 0; i < this.props.intervals.length; i++) {
			intervals.push({ ...this.props.intervals[i] });
		}
		let inversion = this.props.intervalOptions.inversion.rotation;
		let melodicInversion = this.props.intervalOptions.melodicInversion;

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

		if (this.props.intervalOptions.reverse)
			notes.reverse();

		return notes;
	}

	render = () => {
		let Viewer = this.props.viewerComponent;
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
