import * as React from "react";
import { TheoryEngine } from "../../Common/TheoryEngine";
import { Note } from "../../Common/TheoryTypes";
import { NOTE_LABEL } from "../../Common/TheoryConstants";
import "./Fretboard.css";

interface FretboardFretProps {
    fretNumber: number;
    note: Note;
    fretLabel: NOTE_LABEL;
}

export function FretboardFret(props: FretboardFretProps) {
    let colorClass = (props.note.interval !== null) ? `degree-${props.note.interval.degree}` : '';
    let classes = ['fretboard-fret', 'wood'];
    let labelClasses = [colorClass, 'fretboard-fret-label']
    if (props.fretNumber === 0)
        classes.push('fretboard-fret-open');

    return (
        <div className={classes.join(' ')}>
            <div className={labelClasses.join(' ')}>{TheoryEngine.getNoteLabel(props.note, props.fretLabel)}</div>
        </div>
    );
}