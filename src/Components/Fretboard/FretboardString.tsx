import React = require("react");
import { TheoryEngine } from "../../Common/TheoryEngine";
import { FretboardFret } from "./FretboardFret";
import { Interval, CompleteNote } from "../../Common/TheoryTypes";
import "./Fretboard.css";

export interface FretboardStringConfig {
    openPosition: number
    filteredIntervals?: Interval[];
}

export interface FretboardStringProps {
    openPosition: number;
    filterOctave: boolean;
    notes: CompleteNote[];
    noteLabel: any;
    fretLow: number;
    fretHigh: number;
};

function getFrets(props: FretboardStringProps) {
    let frets = [];
    for (let i = props.fretLow; i <= props.fretHigh; i++) {
        frets.push(<FretboardFret
            key={i}
            fretNumber={i}
            note={TheoryEngine.getNote(props.notes, props.openPosition + i, props.filterOctave)}
            noteLabel={props.noteLabel}
        />);
    }
    return frets;
}

export function FretboardString(props: FretboardStringProps) {
    return <div className='fretboard-string'>
        {getFrets(props)}
        <div className='fretboard-fret-string' />
    </div>;
}