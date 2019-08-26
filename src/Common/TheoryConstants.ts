import { Degree, Accidental, Interval, PhysicalNote, ConceptDefinition } from "./TheoryTypes";

/***** General *****/

export enum NOTE_LABEL {
    None,
    Name,
    Interval,
    PitchClass,
    NoteIndex,
    RelativeDegree,
    Octave,
    Frequency
}

export const INTERVAL: { [id: string]: Interval } = {
    None: {
        id: '',
        name: '',
        degree: 0,
		semitones: 0
    },
    PU: {
        id: 'PU',
        name: 'Perfect Unison',
        degree: 1,
		semitones: 0
    },
    m2: {
        id: 'm2',
        name: 'Minor 2nd',
        degree: 2,
		semitones: 1
    },
    M2: {
        id: 'M2',
        name: 'Major 2nd',
        degree: 2,
		semitones: 2
    },
    m3: {
        id: 'm3',
        name: 'Minor 3rd',
        degree: 3,
		semitones: 3
    },
    M3: {
        id: 'M3',
        name: 'Major 3rd',
        degree: 3,
		semitones: 4
    },
    P4: {
        id: 'P4',
        name: 'Perfect 4th',
        degree: 4,
		semitones: 5
    },
    A4: {
        id: 'A4',
        name: 'Augmented 4th',
        degree: 4,
		semitones: 6
    },
    TT: {
        id: 'TT',
        name: 'Tritone',
        degree: 0,
		semitones: 6
    },
    d5: {
        id: 'd5',
        name: 'Diminished 5th',
        degree: 5,
		semitones: 6
    },
    P5: {
        id: 'P5',
        name: 'Perfect 5th',
        degree: 5,
		semitones: 7
    },
    A5: {
        id: 'A5',
        name: 'Augmented 5th',
        degree: 5,
		semitones: 8
    },
    m6: {
        id: 'm6',
        name: 'Minor 6th',
        degree: 6,
		semitones: 8
    },
    M6: {
        id: 'M6',
        name: 'Major 6th',
        degree: 6,
		semitones: 9
    },
    d7: {
        id: 'd7',
        name: 'Diminished 7th',
        degree: 7,
		semitones: 9
    },
    m7: {
        id: 'm7',
        name: 'Minor 7th',
        degree: 7,
		semitones: 10
    },
    M7: {
        id: 'M7',
        name: 'Major 7th',
        degree: 7,
		semitones: 11
    }
};

export const MAJOR_SCALE: Interval[] = [INTERVAL.PU, INTERVAL.M2, INTERVAL.M3, INTERVAL.P4, INTERVAL.P5, INTERVAL.M6, INTERVAL.M7];

export const CALIBRATION_NOTE: PhysicalNote = {
    frequency: 440,
    noteIndex: 9,
    pitchClass: 9,
    noteOctave: 4
}

/***** Key Center *****/

export const DEGREE: { [id: string]: Degree } = {
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

export const ACCIDENTAL: { [id: string]: Accidental } = {
    Flat: {
        id: 'flat',
        name: 'b',
        offset: -1
    },
    Natural: {
        id: 'natural',
        name: '♮',
        offset: 0
    },
    Sharp: {
        id: 'sharp',
        name: '#',
        offset: 1
    }
};

/***** Concepts *****/

export const INTERVAL_PAIR: { [id: string]: ConceptDefinition } = {
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
};

export const CHORD: { [id: string]: ConceptDefinition } = {
    // Major
    Maj: {
        id: 'maj',
        name: 'Major Triad',
        intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.P5]
    },
    Maj6: {
        id: 'maj6',
        name: 'Major 6th',
        intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.P5, INTERVAL.M6]
    },
    Maj7: {
        id: 'maj7',
        name: 'Major 7th',
        intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.P5, INTERVAL.M7]
    },
    // Minor
    Min: {
        id: 'min',
        name: 'Minor Triad',
        intervals: [INTERVAL.PU, INTERVAL.m3, INTERVAL.P5]
    },
    Min6: {
        id: 'min6',
        name: 'Minor 6th',
        intervals: [INTERVAL.PU, INTERVAL.m3, INTERVAL.P5, INTERVAL.M6]
    },
    Min7: {
        id: 'min7',
        name: 'Minor 7th',
        intervals: [INTERVAL.PU, INTERVAL.m3, INTERVAL.P5, INTERVAL.m7]
    },
    MinMaj7: {
        id: 'minMaj7',
        name: 'Minor-Major 7th',
        intervals: [INTERVAL.PU, INTERVAL.m3, INTERVAL.P5, INTERVAL.M7]
    },
    // Dominant
    Dom7: {
        id: 'dom7',
        name: 'Dominant 7th',
        intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.P5, INTERVAL.m7]
    },
    // Augmented
    Aug: {
        id: 'aug',
        name: 'Augmented Triad',
        intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.A5]
    },
    Aug7: {
        id: 'aug7',
        name: 'Augmented Seventh',
        intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.A5, INTERVAL.m7]
    },
    // Diminished
    Dim: {
        id: 'dim',
        name: 'Diminished Triad',
        intervals: [INTERVAL.PU, INTERVAL.m3, INTERVAL.d5]
    },
    Dim7: {
        id: 'dim7',
        name: 'Diminished 7th',
        intervals: [INTERVAL.PU, INTERVAL.m3, INTERVAL.d5, INTERVAL.d7]
    },
    HalfDim7: {
        id: 'halfDim7',
        name: 'Half-Diminished 7th',
        intervals: [INTERVAL.PU, INTERVAL.m3, INTERVAL.d5, INTERVAL.m7]
    },
    // Suspended
    Sus2: {
        id: 'sus2',
        name: 'Suspended 2nd',
        intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.P5]
    },
    Sus4: {
        id: 'sus4',
        name: 'Suspended 4th',
        intervals: [INTERVAL.PU, INTERVAL.P4, INTERVAL.P5]
    },
};

export const SCALE: { [id: string]: ConceptDefinition } = {
    // Major
    Major: {
        id: 'major',
        name: 'Major',
        intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.M3, INTERVAL.P4, INTERVAL.P5, INTERVAL.M6, INTERVAL.M7]
    },
    // Minor
    NatualMinor: {
        id: 'natualMinor',
        name: 'Natual Minor',
        intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m6, INTERVAL.m7]
    },
    HarmonicMinor: {
        id: 'harmonicMinor',
        name: 'Harmonic Minor',
        intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m6, INTERVAL.M7]
    },
    // Pentatonic
    MajorPentatonic: {
        id: 'majorPentatonic',
        name: 'Major Pentatonic',
        intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.M3, INTERVAL.P5, INTERVAL.M6]
    },
    MinorPentatonic: {
        id: 'minorPentatonic',
        name: 'Minor Pentatonic',
        intervals: [INTERVAL.PU, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m7]
    },
    // Chomatic
    Chromatic: {
        id: 'chromatic',
        name: 'Chromatic',
        intervals: [INTERVAL.PU, INTERVAL.m2, INTERVAL.M2, INTERVAL.m3, INTERVAL.M3, INTERVAL.P4, INTERVAL.TT, INTERVAL.P5, INTERVAL.m6, INTERVAL.M6, INTERVAL.m7, INTERVAL.M7]
    }
};

export const MODE: { [id: string]: ConceptDefinition } = {
    Ionian: {
        id: 'ionian',
        name: 'Ionian',
        intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.M3, INTERVAL.P4, INTERVAL.P5, INTERVAL.M6, INTERVAL.M7]
    },
    Dorian: {
        id: 'dorian',
        name: 'Dorian',
        intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.M6, INTERVAL.m7]
    },
    Phrygian: {
        id: 'phrygian',
        name: 'Phrygian',
        intervals: [INTERVAL.PU, INTERVAL.m2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m6, INTERVAL.m7]
    },
    Lydian: {
        id: 'lydian',
        name: 'Lydian',
        intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.M3, INTERVAL.A4, INTERVAL.P5, INTERVAL.M6, INTERVAL.M7]
    },
    Mixolydian: {
        id: 'mixolydian',
        name: 'Mixolydian',
        intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.M3, INTERVAL.P4, INTERVAL.P5, INTERVAL.M6, INTERVAL.m7]
    },
    Aeolian: {
        id: 'aeolian',
        name: 'Aeolian',
        intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m6, INTERVAL.m7]
    },
    Locrian: {
        id: 'locrian',
        name: 'Locrian',
        intervals: [INTERVAL.PU, INTERVAL.m2, INTERVAL.m3, INTERVAL.P4, INTERVAL.d5, INTERVAL.m6, INTERVAL.m7]
    }
};

export const ROMAN_NUMERAL: { [id: string]: ConceptDefinition } = {
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
};