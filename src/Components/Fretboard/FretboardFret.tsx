import React = require("react");
import { TheoryEngine } from "../../Common/TheoryEngine";
import { CompleteNote } from "../../Common/TheoryTypes";
import { NOTE_LABEL } from "../../Common/TheoryConstants";
import "./Fretboard.css";

interface FretboardFretProps {
    fretNumber: number;
    note: CompleteNote;
    noteLabel: NOTE_LABEL;
}

export function FretboardFret(props: FretboardFretProps) {
    let colorClass = (props.note.interval.id !== '') ? `degree-${props.note.interval.degree}` : '';
    let classes = ['fretboard-fret', 'wood'];
    let labelClasses = [colorClass, 'fretboard-fret-label']
    if (props.fretNumber === 0)
        classes.push('fretboard-fret-open');

    return (
        <div className={classes.join(' ')}>
            <div className={labelClasses.join(' ')}>{TheoryEngine.getNoteLabel(props.note, props.noteLabel)}</div>
        </div>
    );
}