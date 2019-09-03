import * as React from "react";
import { TheoryEngine } from "../../Common/TheoryEngine";
import { FretboardFret } from "./FretboardFret";
import { Interval, Note } from "../../Common/TheoryTypes";
import "./Fretboard.css";
import { NOTE_LABEL } from "../../Common/TheoryConstants";

export interface FretboardStringConfig {
    tuning: number
    unfilteredIntervals?: Interval[];
}

interface FretboardStringProps {
    tuning: number;
    filterOctave: boolean;
    notes: Note[];
    fretLabel: NOTE_LABEL;
    fretLow: number;
    fretHigh: number;
};

function getFrets(props: FretboardStringProps) {
    let frets = [];
    for (let i = props.fretLow; i <= props.fretHigh; i++) {
        frets.push(<FretboardFret
            key={i}
            fretNumber={i}
            note={TheoryEngine.getNote(props.notes, props.tuning + i, props.filterOctave)}
            fretLabel={props.fretLabel}
        />);
    }
    return frets;
}

export function FretboardString(props: FretboardStringProps) {
    return (
        <div className='fretboard-string'>
            {getFrets(props)}
            <div className='fretboard-fret-string' />
        </div>
    );
}