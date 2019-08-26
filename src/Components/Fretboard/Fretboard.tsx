import { KeyCenter, Concept, ViewerProps } from "../../Common/TheoryTypes";
import { FretboardStringConfig, FretboardString } from "./FretboardString";
import { DEGREE, ACCIDENTAL, NOTE_LABEL } from "../../Common/TheoryConstants";
import React = require("react");
import { TheoryEngine } from "../../Common/TheoryEngine";
import "./Fretboard.css";

export interface FretboardProps extends ViewerProps {
    noteLabel?: NOTE_LABEL,
    filterOctave?: boolean,
    showFretNumbers?: boolean,
    showDots?: boolean;
    strings?: FretboardStringConfig[];
    fretLow?: number;
    fretHigh?: number;
};

const DEFAULT_FRETBOARD_PROPS: FretboardProps = {
    keyCenter: {
        degree: DEGREE.C,
        accidental: ACCIDENTAL.Natural,
        octave: 4
    },
    concept: {
        intervals: [],
        intervalOptions: {}
    },
    noteLabel: NOTE_LABEL.Interval,
    filterOctave: true,
    showFretNumbers: true,
    showDots: true,
    fretLow: 0,
    fretHigh: 12,
    strings: [
        { openPosition: 16 },   // e
        { openPosition: 11 },   // B
        { openPosition: 7 },    // G
        { openPosition: 2 },    // D
        { openPosition: -3 },   // A
        { openPosition: -8 }    // E
    ]
}

const DOTTED_FRET_INDICES: number[] = [3, 5, 7, 9];

function getDotsForFret(fretNumber: number): string {
    if (fretNumber === 0)
        return '• •';
    else if (DOTTED_FRET_INDICES.includes(fretNumber))
        return '•';
    return '';
}

function getDots(config: FretboardProps) {
    let dots = [];
    for (let i = config.fretLow; i <= config.fretHigh; i++) {
        dots.push(<div className='fretboard-fret-dots' key={i}>
            {getDotsForFret(i % 12)}
        </div>);
    }
    return <div className='dots-container'>{dots}</div>;
}

function getFretNumbers(config: FretboardProps) {
    let numbers = [];
    for (let i = config.fretLow; i <= config.fretHigh; i++) {
        numbers.push(<div className='fret-number' key={i}>
            {i}
        </div>);
    }
    return <div className='fret-numbers-container'>{numbers}</div>;
}

function getFretboardStrings(config: FretboardProps) {
    let notes = TheoryEngine.parseIntervals(config.keyCenter, config.concept)
    return config.strings.map((string, index) => {
        return <FretboardString
            key={index}
            filterOctave={config.filterOctave}
            notes={string.filteredIntervals ? TheoryEngine.filterNotes(notes, string.filteredIntervals) : notes}
            noteLabel={config.noteLabel}
            openPosition={string.openPosition}
            fretLow={config.fretLow}
            fretHigh={config.fretHigh}
        />;
    });
}

export function Fretboard(props: FretboardProps) {
    let config = Object.assign({}, DEFAULT_FRETBOARD_PROPS, props);
    return (
        <div className='fretboard'>
            {config.showFretNumbers && getFretNumbers(config)}
            {getFretboardStrings(config)}
            {config.showDots && getDots(config)}
        </div>
    );
}