/***** Key Center *****/

export interface Tonic {
    id: string;
    name: string;
    degreeInC: number;
    pitchClass: number;
}

export interface Accidental {
    id: string;
    name: string;
    offset: number;
}

/***** Concept *****/

export interface Interval {
    id: string;
    name: string;
    degree: number;
    semitones: number;
    octaveOffset?: number;
}

export interface ConceptPreset {
    id: string;
    name: string;
    intervals: Interval[];
}

/***** Note *****/

export interface Note {
    name: string;
    interval: Interval;
    noteIndex: number;
    noteOctave: number;
    pitchClass: number;
    frequency: number;
}