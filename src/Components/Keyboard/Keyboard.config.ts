import { NOTE_LABELS, DEGREE, ACCIDENTAL } from "../../Common/Theory.config";
import { KeyboardProps } from "./Keyboard";

export const DEFAULT_KEYBOARD_PROPS: KeyboardProps = {
    keyCenter: {
        degree: DEGREE.C,
        accidental: ACCIDENTAL.Natural,
        octave: 4
    },
    concept: {
        intervals: [],
        intervalOptions: {}
    },
    noteLabel: NOTE_LABELS[0],
    filterOctave: true,
    keyLow: 0,
    keyHigh: 24
}