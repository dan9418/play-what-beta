/***** Key Center *****/

export interface Tonic {
    id: string;
    name: string;
    value: number;
    index: number;
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

/***** Note Type *****/

export interface PhysicalNote {
    noteIndex: number;
    noteOctave: number;
    frequency: number;
}

export interface FunctionalNote {
    interval: Interval;
    pitchClass: number;
    name: string;
}

export interface CompleteNote extends PhysicalNote, FunctionalNote { }