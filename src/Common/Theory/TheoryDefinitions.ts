import { PRESET_CHORDS, PRESET_INTERVALS, PRESET_SCALES, PRESET_MODES, INTERVAL } from "./TheoryPresets";

export interface Degree {
    id: string;
    name: string;
    value: number;
    index: number;
}

export const DEGREE = {
    C: {
        id: 'C',
        name: 'C',
        value: 1,
        index: 0
    },
    D: {
        id: 'D',
        name: 'D',
        value: 2,
        index: 2
    },
    E: {
        id: 'E',
        name: 'E',
        value: 3,
        index: 4
    },
    F: {
        id: 'F',
        name: 'F',
        value: 4,
        index: 5
    },
    G: {
        id: 'G',
        name: 'G',
        value: 5,
        index: 7
    },
    A: {
        id: 'A',
        name: 'A',
        value: 6,
        index: 9
    },
    B: {
        id: 'B',
        name: 'B',
        value: 7,
        index: 11
    }
};

export const ALL_DEGREES: Degree[] = [
    {
        id: 'C',
        name: 'C',
        value: 1,
        index: 0
    },
    {
        id: 'D',
        name: 'D',
        value: 2,
        index: 2
    },
    {
        id: 'E',
        name: 'E',
        value: 3,
        index: 4
    },
    {
        id: 'F',
        name: 'F',
        value: 4,
        index: 5
    },
    {
        id: 'G',
        name: 'G',
        value: 5,
        index: 7
    },
    {
        id: 'A',
        name: 'A',
        value: 6,
        index: 9
    },
    {
        id: 'B',
        name: 'B',
        value: 7,
        index: 11
    }
];

export interface Accidental {
    id: string;
    name: string;
    offset: number;
}


export const ACCIDENTAL = {
    doubleFlat: {
        id: 'doubleFlat',
        name: 'bb',
        offset: -2
    },
    flat: {
        id: 'flat',
        name: 'b',
        offset: -1
    },
    natural: {
        id: 'natural',
        name: '♮',
        offset: 0
    },
    sharp: {
        id: 'sharp',
        name: '#',
        offset: 1
    },
    doubleSharp: {
        id: 'doubleSharp',
        name: 'xx',
        offset: 2
    }
};

export const ALL_ACCIDENTALS: Accidental[] = [
    {
        id: 'doubleFlat',
        name: 'bb',
        offset: -2
    },
    {
        id: 'flat',
        name: 'b',
        offset: -1
    },
    {
        id: 'natural',
        name: '♮',
        offset: 0
    },
    {
        id: 'sharp',
        name: '#',
        offset: 1
    },
    {
        id: 'doubleSharp',
        name: 'xx',
        offset: 2
    }
];
export interface Key {
    degree: Degree;
    accidental: Accidental;
}

export interface Interval {
    id: string;
    name: string;
    degree: number;
    semitones: number;
}

export const ALL_INTERVALS: Interval[] = [
    { id: '', name: '', degree: 0, semitones: 0 },
    { id: 'PU', name: 'Perfect Unison', degree: 1, semitones: 0 },
    { id: 'm2', name: 'Minor 2nd', degree: 2, semitones: 1 },
    { id: 'M2', name: 'Major 2nd', degree: 2, semitones: 2 },
    { id: 'm3', name: 'Minor 3rd', degree: 3, semitones: 3 },
    { id: 'M3', name: 'Major 3rd', degree: 3, semitones: 4 },
    { id: 'P4', name: 'Perfect 4th', degree: 4, semitones: 5 },
    { id: 'A4', name: 'Augmented 4th', degree: 4, semitones: 6 },
    { id: 'TT', name: 'Tritone', degree: 0, semitones: 6 },
    { id: 'd5', name: 'Diminished 5th', degree: 5, semitones: 6 },
    { id: 'P5', name: 'Perfect 5th', degree: 5, semitones: 7 },
    { id: 'A5', name: 'Augmented 5th', degree: 5, semitones: 8 },
    { id: 'm6', name: 'Minor 6th', degree: 6, semitones: 8 },
    { id: 'M6', name: 'Major 6th', degree: 6, semitones: 9 },
    { id: 'd7', name: 'Diminished 7th', degree: 7, semitones: 9 },
    { id: 'm7', name: 'Minor 7th', degree: 7, semitones: 10 },
    { id: 'M7', name: 'Major 7th', degree: 7, semitones: 11 },
    { id: 'P8', name: 'Perfect Octave', degree: 8, semitones: 12 },
    { id: 'm9', name: 'Minor 9th', degree: 9, semitones: 13 },
    { id: 'M9', name: 'Major 9th', degree: 9, semitones: 14 },
    { id: 'm10', name: 'Minor 10th', degree: 10, semitones: 15 },
    { id: 'M10', name: 'Major 10th', degree: 10, semitones: 16 },
    { id: 'P11', name: 'Perfect 11th', degree: 11, semitones: 17 },
    { id: 'A11', name: 'Augmented 11h', degree: 11, semitones: 18 },
    { id: 'dTT', name: 'Double Tritone', degree: 0, semitones: 18 },
    { id: 'd12', name: 'Diminished 12th', degree: 12, semitones: 18 },
    { id: 'P12', name: 'Perfect 12th', degree: 12, semitones: 19 },
    { id: 'A12', name: 'Augmented 12th', degree: 12, semitones: 20 },
    { id: 'm13', name: 'Minor 13th', degree: 13, semitones: 20 },
    { id: 'M13', name: 'Major 13th', degree: 13, semitones: 21 },
    { id: 'd14', name: 'Diminished 14th', degree: 14, semitones: 21 },
    { id: 'm14', name: 'Minor 14th', degree: 14, semitones: 22 },
    { id: 'M14', name: 'Major 14th', degree: 14, semitones: 23 }
];

export interface Concept {
    id: string;
    name: string;
    intervals: Interval[];
}

export interface ConceptType {
    id: string;
    name: string;
    presets: Concept[];
}

export const ALL_CONCEPTS: ConceptType[] = [
    {
        id: 'interval',
        name: 'Intervals',
        presets: PRESET_INTERVALS
    },
    {
        id: 'chord',
        name: 'Chords',
        presets: PRESET_CHORDS
    },
    {
        id: 'scale',
        name: 'Scales',
        presets: PRESET_SCALES
    },
    {
        id: 'mode',
        name: 'Modes',
        presets: PRESET_MODES
    },
    /*{
        id: 'romanNumeral',
        name: 'Roman Numerals',
        presets: null
    }*/
];

export interface Note {
    octave: number;
    key: Key;
    interval: Interval;
    spellingDegree: number;
    pitchClass: number;
    absolutePosition: number;
    frequency: number;
    degree: Degree;
    accidental: Accidental;
    name: string;
}

export interface PhysicalNote {
    octave: number;
    pitchClass: number;
    absolutePosition: number;
    frequency: number;
}

export interface FunctionalNote {
    key: any;
    interval: any;
    spellingDegree: number;
    pitchClass: number;
    accidental: number;
    name: string;
}

export const MAJOR_SCALE = [INTERVAL.PU, INTERVAL.M2, INTERVAL.M3, INTERVAL.P4, INTERVAL.P5, INTERVAL.M6, INTERVAL.M7]