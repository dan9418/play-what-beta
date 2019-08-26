import { FretboardStringConfig } from "./FretboardString";
import { FretboardConfig } from "./Fretboard";
import { NOTE_LABELS } from "../../Common/Theory.config";

export const DEFAULT_FRETBOARD_STRING_CONFIG: FretboardStringConfig = {
    openPosition: 0
}

export const DEFAULT_FRETBOARD_CONFIG: FretboardConfig = {
    noteLabel: NOTE_LABELS[0],
    showDots: true,
    filterOctave: true,
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