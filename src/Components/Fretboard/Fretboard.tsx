import * as React from "react";
import { TheoryEngine } from "../../Common/TheoryEngine";
import "./Fretboard.css";
import { ViewerProps } from "../withNotes";
import { NOTE_LABEL } from "../../Common/TheoryConstants";
import { Fret } from "./Fret";
import { Note, Interval } from "../../Common/TheoryTypes";

export interface FretboardProps extends ViewerProps {
    filterOctave?: boolean;
    fretLabel?: NOTE_LABEL;
    fretLow?: number;
    fretHigh?: number;
    showFretNumbers?: boolean;
    showDots?: boolean;
    strings?: FretboardStringConfig[];
};

export const DEFAULT_FRETBOARD_PROPS: FretboardProps = {
    notes: [],
    fretLabel: NOTE_LABEL.Name,
    filterOctave: true,
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

export interface FretboardStringConfig {
    tuning: number
    unfilteredIntervals?: Interval[];
}

const DOTTED_FRET_INDICES: boolean[] = [true, false, false, true, false, true, false, true, false, true, false, false];

function getDotsForFret(fretNumber: number): string {
    let mod = fretNumber % 12;
    if (mod === 0)
        return '• •';
    else if (DOTTED_FRET_INDICES[mod])
        return '•';
    return '';
}

function getFrets(config: FretboardProps, notes: Note[]) {
    let frets = [];
    // Get fret numbers
    if (config.showFretNumbers) {
        for (let i = config.fretLow; i <= config.fretHigh; i++) {
            frets.push(<div className='fret-number' key={`n${i}`}>
                <div>{i}</div>
            </div>);
        }
    }
    // Get strings
    for (let i = 0; i < config.strings.length; i++) {
        // Get frets for string
        for (let j = config.fretLow; j <= config.fretHigh; j++) {
            frets.push(<Fret
                key={`s${i}f${j}`}
                fretNumber={j}
                note={TheoryEngine.getNote(notes, config.strings[i].tuning + j, config.filterOctave)}
                fretLabel={config.fretLabel}
            />)
        }
    }
    // Get fret dots
    if (config.showFretNumbers) {
        for (let i = config.fretLow; i <= config.fretHigh; i++) {
            frets.push(<div className='fretboard-fret-dots' key={`d${i}`}>
                <div>{getDotsForFret(i)}</div>
            </div>);
        }
    }
    return frets;
}

function getFretRatios(numFrets) {
    let ratios = [];
    for (let i = 1; i <= numFrets; i++) {
        if (i <= 1) {
            ratios.push(10);
        }
        else {
            // 0.9438743 ~ (1/2)^1/12
            ratios.push(ratios[i - 2] * 0.9438743);
        }
    }
    console.log(ratios);
    console.log(ratios.map((num) => { return num + 'fr' }).join(' '));
    return ratios;
}

export function Fretboard(props: FretboardProps) {
    let config = Object.assign({}, DEFAULT_FRETBOARD_PROPS, props);
    return (
        <div className='fretboard'
            style={{
                gridTemplateColumns: getFretRatios(config.fretHigh - config.fretLow + 1).map((num) => { return num + 'fr' }).join(' '),
                gridTemplateRows: `repeat(${config.strings.length + 2}, 1fr)`
            }}
        >
            {getFrets(config, props.notes)}
        </div>
    );
}