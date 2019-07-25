import * as React from "react";
import "./SummaryView.css";
import "../../../TheoryCore/TheoryStyles.css";
import { TheoryEngine, Note } from "../../../TheoryCore/TheoryEngine";

export class NoteSummary extends React.Component<any> {
    physicalNote: any;
	
	constructor(props) {
        super(props);
    }

	render = () => {
        let note = this.props.note as Note;
        let classes = ['note', `degree-${note.interval.degree}`];

        return <div className={classes.join(' ')} onClick={() => TheoryEngine.playNotes([note])}>
            <div className='note-row note-row-top'>
                <div className='note-relative-position'>{note.relativePosition}</div>
                <div className='note-absolute-position'>{note.absolutePosition}</div>
            </div>
            <div className='note-row note-row-mid'>
                <div className='note-name'>{note.name}</div>
                <div className='note-octave'>{note.octave}</div>
            </div>
            <div className='note-row note-row-bot'>
                <div className='note-interval'>{note.interval.id}</div>
                <div className='note-frequency'>{note.frequency + ' Hz'}</div>
            </div>
        </div>;
    };
}