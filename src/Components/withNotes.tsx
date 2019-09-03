import { Tonic, Accidental, Interval, Note } from "../Common/TheoryTypes";
import { TONIC, ACCIDENTAL } from "../Common/TheoryConstants";
import * as React from "react";
import { TheoryEngine } from "../Common/TheoryEngine";
import { ErrorBoundary } from "../Common/ErrorBoundary";

/* Viewer Config */

export interface ViewerProps {
    notes: Note[];
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
        return (
            <ErrorBoundary>
                <Viewer {...props} notes={notes} />
            </ErrorBoundary>
        );
    };
}