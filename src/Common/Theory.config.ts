// Values

export const INTERVAL: { [id: string]: Interval } = {
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

export interface CompleteNote extends PhysicalNote, FunctionalNote { }

/***** Defaults *****/

export const DEFAULT_CONCEPT_CONFIG: ConceptConfig = {
    chordInversion: 0,
    melodicInversion: false
};


/***** Concept Definitions *****/

export const Concepts = {
    Intervals: {
        PU: {
            id: 'PU',
            name: 'Perfect Unison',
            intervals: [INTERVAL.PU, INTERVAL.PU]
        },
        m2: {
            id: 'm2',
            name: 'Minor 2nd',
            intervals: [INTERVAL.PU, INTERVAL.m2]
        },
        M2: {
            id: 'M2',
            name: 'Major 2nd',
            intervals: [INTERVAL.PU, INTERVAL.M2]
        },
        m3: {
            id: 'm3',
            name: 'Minor 3rd',
            intervals: [INTERVAL.PU, INTERVAL.m3]
        },
        M3: {
            id: 'M3',
            name: 'Major 3rd',
            intervals: [INTERVAL.PU, INTERVAL.M3]
        },
        P4: {
            id: 'P4',
            name: 'Perfect 4th',
            intervals: [INTERVAL.PU, INTERVAL.P4]
        },
        A4: {
            id: 'A4',
            name: 'Augmented 4th',
            intervals: [INTERVAL.PU, INTERVAL.A4]
        },
        TT: {
            id: 'TT',
            name: 'Tritone',
            intervals: [INTERVAL.PU, INTERVAL.TT]
        },
        d5: {
            id: 'd5',
            name: 'Diminished 5th',
            intervals: [INTERVAL.PU, INTERVAL.d5]
        },
        P5: {
            id: 'P5',
            name: 'Perfect 5th',
            intervals: [INTERVAL.PU, INTERVAL.P5]
        },
        A5: {
            id: 'A5',
            name: 'Augmented 5th',
            intervals: [INTERVAL.PU, INTERVAL.A5]
        },
        m6: {
            id: 'm6',
            name: 'Minor 6th',
            intervals: [INTERVAL.PU, INTERVAL.m6]
        },
        M6: {
            id: 'M6',
            name: 'Major 6th',
            intervals: [INTERVAL.PU, INTERVAL.M6]
        },
        d7: {
            id: 'd7',
            name: 'Diminished 7th',
            intervals: [INTERVAL.PU, INTERVAL.d7]
        },
        m7: {
            id: 'm7',
            name: 'Minor 7th',
            intervals: [INTERVAL.PU, INTERVAL.m7]
        },
        M7: {
            id: 'M7',
            name: 'Major 7th',
            intervals: [INTERVAL.PU, INTERVAL.M7]
        }
    },
    Chords: {
        maj: {
            id: 'maj',
            name: 'Major Triad',
            intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.P5]
        },
        sus2: {
            id: 'sus2',
            name: 'Suspended 2nd',
            intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.P5]
        },
        sus4: {
            id: 'sus4',
            name: 'Suspended 4th',
            intervals: [INTERVAL.PU, INTERVAL.P4, INTERVAL.P5]
        },
        maj6: {
            id: 'maj6',
            name: 'Major 6th',
            intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.P5, INTERVAL.M6]
        },
        dom7: {
            id: 'dom7',
            name: 'Dominant "Major-Minor" 7th',
            intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.P5, INTERVAL.m7]
        },
        maj7: {
            id: 'maj7',
            name: 'Major 7th',
            intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.P5, INTERVAL.M7]
        },
        aug: {
            id: 'aug',
            name: 'Augmented Triad',
            intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.A5]
        },
        aug7: {
            id: 'aug7',
            name: 'Augmented Seventh',
            intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.A5, INTERVAL.m7]
        },
        min: {
            id: 'min',
            name: 'Minor Triad',
            intervals: [INTERVAL.PU, INTERVAL.m3, INTERVAL.P5]
        },
        min6: {
            id: 'min6',
            name: 'Minor 6th',
            intervals: [INTERVAL.PU, INTERVAL.m3, INTERVAL.P5, INTERVAL.M6]
        },
        min7: {
            id: 'min7',
            name: 'Minor 7th',
            intervals: [INTERVAL.PU, INTERVAL.m3, INTERVAL.P5, INTERVAL.m7]
        },
        minMaj7: {
            id: 'minMaj7',
            name: 'Minor-Major 7th',
            intervals: [INTERVAL.PU, INTERVAL.m3, INTERVAL.P5, INTERVAL.M7]
        },
        dim: {
            id: 'dim',
            name: 'Diminished Triad',
            intervals: [INTERVAL.PU, INTERVAL.m3, INTERVAL.d5]
        },
        dim7: {
            id: 'dim7',
            name: 'Diminished 7th',
            intervals: [INTERVAL.PU, INTERVAL.m3, INTERVAL.d5, INTERVAL.d7]
        },
        halfDim7: {
            id: 'halfDim7',
            name: 'Half-Diminished 7th',
            intervals: [INTERVAL.PU, INTERVAL.m3, INTERVAL.d5, INTERVAL.m7]
        }
    },
    Scales: {
        major: {
            id: 'major',
            name: 'Major',
            intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.M3, INTERVAL.P4, INTERVAL.P5, INTERVAL.M6, INTERVAL.M7]
        },
        natualMinor: {
            id: 'natualMinor',
            name: 'Natual Minor',
            intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m6, INTERVAL.m7]
        },
        harmonicMinor: {
            id: 'harmonicMinor',
            name: 'Harmonic Minor',
            intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m6, INTERVAL.M7]
        },
        majorPentatonic: {
            id: 'majorPentatonic',
            name: 'Major Pentatonic',
            intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.M3, INTERVAL.P5, INTERVAL.M6]
        },
        minorPentatonic: {
            id: 'minorPentatonic',
            name: 'Minor Pentatonic',
            intervals: [INTERVAL.PU, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m7]
        },
        chromatic: {
            id: 'chromatic',
            name: 'Chromatic',
            intervals: [INTERVAL.PU, INTERVAL.m2, INTERVAL.M2, INTERVAL.m3, INTERVAL.M3, INTERVAL.P4, INTERVAL.TT, INTERVAL.P5, INTERVAL.m6, INTERVAL.M6, INTERVAL.m7, INTERVAL.M7]
        }
    },
    Modes: {
        ionian: {
            id: 'ionian',
            name: 'Ionian',
            intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.M3, INTERVAL.P4, INTERVAL.P5, INTERVAL.M6, INTERVAL.M7]
        },
        dorian: {
            id: 'dorian',
            name: 'Dorian',
            intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.M6, INTERVAL.m7]
        },
        phrygian: {
            id: 'phrygian',
            name: 'Phrygian',
            intervals: [INTERVAL.PU, INTERVAL.m2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m6, INTERVAL.m7]
        },
        lydian: {
            id: 'lydian',
            name: 'Lydian',
            intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.M3, INTERVAL.A4, INTERVAL.P5, INTERVAL.M6, INTERVAL.M7]
        },
        mixolydian: {
            id: 'mixolydian',
            name: 'Mixolydian',
            intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.M3, INTERVAL.P4, INTERVAL.P5, INTERVAL.M6, INTERVAL.m7]
        },
        aeolian: {
            id: 'aeolian',
            name: 'Aeolian',
            intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m6, INTERVAL.m7]
        },
        locrian: {
            id: 'locrian',
            name: 'Locrian',
            intervals: [INTERVAL.PU, INTERVAL.m2, INTERVAL.m3, INTERVAL.P4, INTERVAL.d5, INTERVAL.m6, INTERVAL.m7]
        }
    },
    RomanNumerals: {
        I: {
            id: 'I',
            name: 'I',
            intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.P5]
        },
        ii: {
            id: 'ii',
            name: 'ii',
            intervals: [INTERVAL.M2, INTERVAL.P4, INTERVAL.M6]
        },
        iii: {
            id: 'iii',
            name: 'iii',
            intervals: [INTERVAL.M3, INTERVAL.P5, INTERVAL.M7]
        },
        IV: {
            id: 'IV',
            name: 'IV',
            intervals: [INTERVAL.P4, INTERVAL.M6, Object.assign({ octaveOffset: 1 }, { ...INTERVAL.PU })]
        },
        V: {
            id: 'V',
            name: 'V',
            intervals: [INTERVAL.P5, INTERVAL.M7, Object.assign({ octaveOffset: 1 }, { ...INTERVAL.M2 })]
        },
        vi: {
            id: 'vi',
            name: 'vi',
            intervals: [INTERVAL.M6, Object.assign({ octaveOffset: 1 }, { ...INTERVAL.PU }), Object.assign({ octaveOffset: 1 }, { ...INTERVAL.M3 })]
        },
        vii: {
            id: 'vii',
            name: 'vii',
            intervals: [INTERVAL.M7, Object.assign({ octaveOffset: 1 }, { ...INTERVAL.M2 }), Object.assign({ octaveOffset: 1 }, { ...INTERVAL.P4 })]
        }
    }
}