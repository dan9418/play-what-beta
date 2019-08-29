import { FretboardStringConfig, FretboardString } from "./FretboardString";
import React = require("react");
import { TheoryEngine } from "../../Common/TheoryEngine";
import "./Fretboard.css";
import { DEFAULT_VIEWER_PROPS, ViewerProps } from "../ViewerProps";

export interface FretboardProps extends ViewerProps {
    showFretNumbers?: boolean,
    showDots?: boolean;
    strings?: FretboardStringConfig[];
    fretLow?: number;
    fretHigh?: number;
};

export const DEFAULT_FRETBOARD_PROPS: FretboardProps = {
    ...DEFAULT_VIEWER_PROPS,
    showFretNumbers: true,
    showDots: true,
    fretLow: 0,
    fretHigh: 12,
    strings: [
        { tuning: 16 },   // e
        { tuning: 11 },   // B
        { tuning: 7 },    // G
        { tuning: 2 },    // D
        { tuning: -3 },   // A
        { tuning: -8 }    // E
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
    let notes = TheoryEngine.parseIntervals(config.tonic, config.accidental, config.octave, config.intervals, config.chordInversion)
    return config.strings.map((string, index) => {
        return <FretboardString
            key={index}
            filterOctave={config.filterOctave}
            notes={string.unfilteredIntervals ? TheoryEngine.filterNotes(notes, string.unfilteredIntervals) : notes}
            noteLabel={config.noteLabel}
            tuning={string.tuning}
            fretLow={config.fretLow}
            fretHigh={config.fretHigh}
        />;
    });
}

export function Fretboard(props: FretboardProps) {
    let config = Object.assign({}, DEFAULT_VIEWER_PROPS, DEFAULT_FRETBOARD_PROPS, props);
    return (
        <div className='fretboard'>
            {config.showFretNumbers && getFretNumbers(config)}
            {getFretboardStrings(config)}
            {config.showDots && getDots(config)}
        </div>
    );
}