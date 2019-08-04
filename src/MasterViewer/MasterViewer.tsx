import * as React from "react";
import "./MasterViewer.css";
import { TheoryEngine } from "../Common/Theory/TheoryEngine";
import { Accidental, Interval, Key } from "../Common/Theory/TheoryDefinitions";
import { NoteSummarySet } from "../Common/Viewers/SummaryView/NoteSummarySet";

type MasterViewerProps = {
    keyDef: Key,
    accidental: Accidental,
    octave: number,
    intervals: Interval[]
}

export class MasterViewer extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {

        };
    }
    /* Processing */

    getNotes = () => {
        return TheoryEngine.getNotesFromIntervals(this.props.keyDef, this.props.intervals, this.props.octave);
    }

    /* Render */

    render = () => {
        let notes = this.getNotes()
        return (
            <div className='master-viewer'>
                {notes.map((note) => { return note.name + ' '; })}
                <NoteSummarySet notes={notes} />
            </div>
        );
    };
}