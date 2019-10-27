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

export const FRET_SIZE_RATIO = Math.pow((1 / 2), (1 / 12));

export interface FretboardStringConfig {
    tuning: number
    unfilteredIntervals?: Interval[];
}

function getFrets(config: FretboardProps, notes: Note[]) {
    let frets = [];
    // Get strings
    for (let i = 0; i < config.strings.length; i++) {
        // Get frets for string
        for (let j = config.fretLow; j <= config.fretHigh; j++) {
            frets.push(<Fret
                key={`s${i}f${j}`}
                fretNumber={j}
                showFretNumber={config.showFretNumbers && i === 0}
                showFretDots={config.showDots && i === config.strings.length - 1}
                note={TheoryEngine.getNote(notes, config.strings[i].tuning + j, config.filterOctave)}
                fretLabel={config.fretLabel}
            />)
        }
    }
    return frets;
}

function getFretRatios(numFrets) {
    let ratios = [];
    for (let i = 1; i <= numFrets; i++) {
        if (i <= 1) {
            ratios.push(1);
        }
        else {
            ratios.push(ratios[i - 2] * FRET_SIZE_RATIO);
        }
    }
    return ratios;
}

export function Fretboard(props: FretboardProps) {
    let config = Object.assign({}, DEFAULT_FRETBOARD_PROPS, props);
    let fretRatioStyle = getFretRatios(config.fretHigh - config.fretLow + 1).map((num) => { return num + 'fr' }).join(' ');
    return (
        <div className='fretboard'
            style={{
                gridTemplateColumns: fretRatioStyle,
                gridTemplateRows: `repeat(${config.strings.length}, 1fr)`
            }}
        >
            {getFrets(config, props.notes)}
        </div>
    );
}