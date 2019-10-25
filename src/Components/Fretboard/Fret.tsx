import * as React from "react";
import { TheoryEngine } from "../../Common/TheoryEngine";
import { Note } from "../../Common/TheoryTypes";
import { NOTE_LABEL } from "../../Common/TheoryConstants";
import "./Fretboard.css";

interface FretProps {
    fretNumber: number;
    note: Note;
    fretLabel: NOTE_LABEL;
}

export function Fret(props: FretProps) {
    let colorClass = (props.note.interval !== null) ? `degree-${props.note.interval.degree}` : '';
    let classes = ['fretboard-fret', 'wood'];
    let labelClasses = [colorClass, 'fretboard-fret-label']
    if (props.fretNumber === 0)
        classes.push('fretboard-fret-open');

    return (
        <div className={classes.join(' ')}>
            {<div className='fretboard-fret-string'></div>}
            <div className={labelClasses.join(' ')}><div>{TheoryEngine.getNoteLabel(props.note, props.fretLabel)}</div></div>
        </div>
    );
}