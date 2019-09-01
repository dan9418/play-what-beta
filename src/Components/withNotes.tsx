import { Tonic, Accidental, Interval, CompleteNote } from "../Common/TheoryTypes";
import { TONIC, ACCIDENTAL } from "../Common/TheoryConstants";
import React = require("react");
import { TheoryEngine } from "../Common/TheoryEngine";

/* Viewer Config */

export interface ViewerProps {
    notes: CompleteNote[];
}

/* Key Center Config */

export interface KeyCenter {
    tonic?: Tonic;
    accidental?: Accidental;
    octave?: number;
}

export const DEFAULT_KEY_CENTER = {
    tonic: TONIC.C,
    accidental: ACCIDENTAL.Natural,
    octave: 4,
};

/* Concept Config */

export interface Concept {
    intervals?: Interval[];
    chordInversion?: number;
}

export const DEFAULT_CONCEPT = {
    intervals: [],
    chordInversion: 0,
};

export function withNotes(Viewer, concept: Concept, keyCenter: KeyCenter) {
    return function (props: any) {
        let conceptConfig = Object.assign({}, DEFAULT_CONCEPT, concept);
        let keyCenterConfig = Object.assign({}, DEFAULT_KEY_CENTER, keyCenter);
        let notes = TheoryEngine.parseIntervals(
            keyCenterConfig.tonic,
            keyCenterConfig.accidental,
            keyCenterConfig.octave,
            conceptConfig.intervals,
            conceptConfig.chordInversion
        );
        return <Viewer
            {...props}
            notes={notes}
        />;
    };
}