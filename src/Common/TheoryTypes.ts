/***** Key Center *****/

export interface Degree {
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

export interface KeyCenter {
    degree: Degree;
    accidental: Accidental;
    octave: number;
}

/***** Concept *****/

export interface Interval {
    id: string;
    name: string;
    degree: number;
    semitones: number;
    octaveOffset?: number;
}

export interface IntervalOptions {
    chordInversion?: number,
    melodicInversion?: boolean
}

export interface Concept {
    intervals: Interval[];
    intervalOptions?: IntervalOptions
}

export interface ConceptDefinition {
    id: string;
    name: string;
    intervals: Interval[];
}

/***** Note Type *****/

export interface PhysicalNote {
    noteIndex: number;
    noteOctave: number;
    pitchClass: number;
    frequency: number;
}

export interface FunctionalNote {
    key: KeyCenter;
    interval: Interval;
    noteDegree: number;
    pitchClass: number;
    accidentalOffset: number;
    name: string;
}

export interface CompleteNote extends PhysicalNote, FunctionalNote { }

/***** General *****/

export interface ViewerProps {
    keyCenter?: KeyCenter;
    concept?: Concept;
}