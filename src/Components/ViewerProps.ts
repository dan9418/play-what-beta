import { Tonic, Accidental, Interval } from "../Common/TheoryTypes";
import { NOTE_LABEL, TONIC, ACCIDENTAL } from "../Common/TheoryConstants";

export interface ViewerProps {
    tonic?: Tonic;
    accidental?: Accidental;
    octave?: number;
    intervals?: Interval[];
    chordInversion?: number;
    melodicInversion?: boolean;
    filterOctave?: boolean;
    noteLabel?: NOTE_LABEL;
}

export const DEFAULT_VIEWER_PROPS: ViewerProps = {
    tonic: TONIC.C,
    accidental: ACCIDENTAL.Natural,
    octave: 4,
    intervals: [],
    chordInversion: 0,
    melodicInversion: false,
    noteLabel: NOTE_LABEL.Interval,
    filterOctave: true
};