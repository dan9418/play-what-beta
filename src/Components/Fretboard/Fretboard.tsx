import React = require("react");
import { FretboardString, FretboardStringConfig } from "./FretboardString";
import "./Fretboard.css";
import { NoteLabel, Concept, KeyCenter, DEGREE, ACCIDENTAL } from "../../Common/Theory.config";
import { TheoryEngine } from "../../Common/TheoryEngine";

export interface FretboardProps {
    keyCenter?: KeyCenter,
    concept?: Concept,
    noteLabel?: NoteLabel,
    filterOctave?: boolean,
    showDots?: boolean;
    strings?: FretboardStringConfig[];
    fretLow?: number;
    fretHigh?: number;
};

const DEFAULT_FRETBOARD_PROPS = {
    keyCenter: {
        degree: DEGREE.C,
        accidental: ACCIDENTAL.Natural,
        octave: 4
    },
    concept: {
        intervals: [],
        intervalOptions: {}
    },
    noteLabel: NoteLabel.Interval,
    filterOctave: true,
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
    return dots;
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
            {getFretboardStrings(config)}
            <div className='dots-container'>
                {config.showDots && getDots(config)}
            </div>
        </div>
    );
}