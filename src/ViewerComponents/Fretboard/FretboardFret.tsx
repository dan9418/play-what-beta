import * as React from "react";
import "./Fretboard.css";
import "../../Theory/TheoryStyles.css";
import { Note } from "../../Theory/TheoryConfig";
import { TheoryEngine } from "../../Theory/TheoryEngine";
import { FretboardConfig } from "./FretboardConfig";
import { TheoryEngine2 } from "../../Theory/TheoryEngine2";

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