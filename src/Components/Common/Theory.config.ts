// Values

export const INTERVAL: {[id: string]: Interval} = {
    None: { id: '', name: '', degree: 0, semitones: 0 },
    PU: { id: 'PU', name: 'Perfect Unison', degree: 1, semitones: 0 },
    m2: { id: 'm2', name: 'Minor 2nd', degree: 2, semitones: 1 },
    M2: { id: 'M2', name: 'Major 2nd', degree: 2, semitones: 2 },
    m3: { id: 'm3', name: 'Minor 3rd', degree: 3, semitones: 3 },
    M3: { id: 'M3', name: 'Major 3rd', degree: 3, semitones: 4 },
    P4: { id: 'P4', name: 'Perfect 4th', degree: 4, semitones: 5 },
    A4: { id: 'A4', name: 'Augmented 4th', degree: 4, semitones: 6 },
    TT: { id: 'TT', name: 'Tritone', degree: 0, semitones: 6 },
    d5: { id: 'd5', name: 'Diminished 5th', degree: 5, semitones: 6 },
    P5: { id: 'P5', name: 'Perfect 5th', degree: 5, semitones: 7 },
    A5: { id: 'A5', name: 'Augmented 5th', degree: 5, semitones: 8 },
    m6: { id: 'm6', name: 'Minor 6th', degree: 6, semitones: 8 },
    M6: { id: 'M6', name: 'Major 6th', degree: 6, semitones: 9 },
    d7: { id: 'd7', name: 'Diminished 7th', degree: 7, semitones: 9 },
    m7: { id: 'm7', name: 'Minor 7th', degree: 7, semitones: 10 },
    M7: { id: 'M7', name: 'Major 7th', degree: 7, semitones: 11 }
};

export const MAJOR_SCALE = [INTERVAL.PU, INTERVAL.M2, INTERVAL.M3, INTERVAL.P4, INTERVAL.P5, INTERVAL.M6, INTERVAL.M7]

export const CALIBRATION_NOTE: PhysicalNote = {
    frequency: 440,
    noteIndex: 9,
    pitchClass: 9,
    noteOctave: 4
}

/***** Base Types *****/

export interface Interval {
    id: string;
    name: string;
    degree: number;
    semitones: number;
    octaveOffset?: number;
}

/***** Input Types *****/

export interface Degree {
    id: string;
    name: string;
    value: number;
    index: number;
}

export const DEGREES: Degree[] = [
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

export const ACCIDENTALS: Accidental[] = [
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

export interface Concept {
    intervals: Interval[];
}

export interface ConceptConfig {
    chordInversion: number,
    melodicInversion: boolean
}

export interface NoteLabel {
    id: string;
    name: string;
}

export let NOTE_LABELS: NoteLabel[] = [
    {
        id: 'none',
        name: 'None'
    },
    {
        id: 'name',
        name: 'Name'
    },
    {
        id: 'interval',
        name: 'Interval'
    },
    {
        id: 'pitchClass',
        name: 'Relative Position'
    },
    {
        id: 'noteIndex',
        name: 'Absolute Position'
    },
    {
        id: 'relativeDegree',
        name: 'Degree'
    },
    {
        id: 'octave',
        name: 'Octave'
    },
    {
        id: 'frequency',
        name: 'Frequency'
    }
];

/***** Composite Interfaces *****/

export interface KeyCenter {
    degree: Degree;
    accidental: Accidental;
    octave: number;
}

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

export interface CompleteNote extends PhysicalNote, FunctionalNote {}

/***** Defaults *****/

export const DEFAULT_CONCEPT_CONFIG: ConceptConfig = {
    chordInversion: 0,
    melodicInversion: false
};
