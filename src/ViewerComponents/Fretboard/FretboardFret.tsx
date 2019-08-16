import { Note, FretboardConfig } from "../../Common/AppConfig";

import React = require("react");

import { TheoryEngine } from "../../Common/TheoryEngine";

import { TheoryEngine2 } from "../../Common/TheoryEngine2";

type FretboardFretProps = {
    fretNumber: number;
    stringNumber: number;
    note: Note;
    config: FretboardConfig;
}

export class FretboardFret extends React.Component<FretboardFretProps, null> {

    constructor(props) {
        super(props);
    }

    render = () => {
        let colorClass = (this.props.note.interval.id !== '') ? `degree-${this.props.note.interval.degree}` : '';
        let classes = ['fretboard-fret', 'wood'];
        let labelClasses = [colorClass, 'fretboard-fret-label']
        if (this.props.fretNumber === 0)
            classes.push('fretboard-fret-open');

        return <div
            className={classes.join(' ')}
            onClick={() => { TheoryEngine.playNotes([this.props.note]); }}
        >
            <div className={labelClasses.join(' ')}>{TheoryEngine2.getNoteLabel(this.props.note, this.props.config.noteLabel.id)}</div>
        </div>;
    };
}