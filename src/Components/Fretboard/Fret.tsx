import * as React from "react";
import { TheoryEngine } from "../../Common/TheoryEngine";
import { Note } from "../../Common/TheoryTypes";
import { NOTE_LABEL } from "../../Common/TheoryConstants";
import "./Fretboard.css";

const DOTTED_FRET_INDICES: boolean[] = [true, false, false, true, false, true, false, true, false, true, false, false];

interface FretProps {
    showFretNumber: boolean;
    showFretDots: boolean;
    fretNumber: number;
    note: Note;
    fretLabel: NOTE_LABEL;
}

export function Fret(props: FretProps) {
    let colorClass = (props.note.interval !== null) ? `degree-${props.note.interval.degree}` : '';
    let classes = ['fretboard-fret', 'wood'];
    let labelClasses = [colorClass, 'fretboard-fret-label']
    if (props.fretNumber === 0)
        classes.push('open');

    return (
        <div className={classes.join(' ')}>
            {props.showFretNumber && <div className='fret-number'>{props.fretNumber}</div>}
            <div className='fretboard-fret-string'></div>
            <div className={labelClasses.join(' ')}>{TheoryEngine.getNoteLabel(props.note, props.fretLabel)}</div>
            {props.showFretDots && <div className='fret-dots'>{getDotsForFret(props.fretNumber)}</div>}
        </div>
    );
}

function getDotsForFret(fretNumber: number): string {
    let mod = fretNumber % 12;
    if (mod === 0)
        return '• •';
    else if (DOTTED_FRET_INDICES[mod])
        return '•';
    return '';
}