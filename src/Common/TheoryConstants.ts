import { Tonic, Accidental, Interval, PhysicalNote, ConceptDefinition } from "./TheoryTypes";

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
    P1: {
        id: 'P1',
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
    A2: {
        id: 'A2',
        name: 'Augmented 2nd',
        degree: 2,
        semitones: 3
    },
    d3: {
        id: 'd3',
        name: 'Diminished 3rd',
        degree: 3,
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
    A3: {
        id: 'A3',
        name: 'Augmented 3rd',
        degree: 3,
        semitones: 5
    },
    d4: {
        id: 'd4',
        name: 'Diminished 4th',
        degree: 4,
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
    d6: {
        id: 'd6',
        name: 'Diminished 6th',
        degree: 6,
        semitones: 7
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
    A6: {
        id: 'A6',
        name: 'Augmented 6th',
        degree: 6,
        semitones: 10
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

export const MAJOR_SCALE: Interval[] = [INTERVAL.P1, INTERVAL.M2, INTERVAL.M3, INTERVAL.P4, INTERVAL.P5, INTERVAL.M6, INTERVAL.M7];

export const CALIBRATION_NOTE: PhysicalNote = {
    frequency: 440,
    noteIndex: 9,
    pitchClass: 9,
    noteOctave: 4
}

/***** Key Center *****/

export const TONIC: { [id: string]: Tonic } = {
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
    P1: {
        id: INTERVAL.P1.id,
        name: INTERVAL.P1.name,
        intervals: [INTERVAL.P1, INTERVAL.P1]
    },
    m2: {
        id: INTERVAL.m2.id,
        name: INTERVAL.m2.name,
        intervals: [INTERVAL.P1, INTERVAL.m2]
    },
    M2: {
        id: INTERVAL.M2.id,
        name: INTERVAL.M2.name,
        intervals: [INTERVAL.P1, INTERVAL.M2]
    },
    A2: {
        id: INTERVAL.A2.id,
        name: INTERVAL.A2.name,
        intervals: [INTERVAL.P1, INTERVAL.A2]
    },
    d3: {
        id: INTERVAL.d3.id,
        name: INTERVAL.d3.name,
        intervals: [INTERVAL.P1, INTERVAL.d3]
    },
    m3: {
        id: INTERVAL.m3.id,
        name: INTERVAL.m3.name,
        intervals: [INTERVAL.P1, INTERVAL.m3]
    },
    M3: {
        id: INTERVAL.M3.id,
        name: INTERVAL.M3.name,
        intervals: [INTERVAL.P1, INTERVAL.M3]
    },
    P4: {
        id: INTERVAL.P4.id,
        name: INTERVAL.P4.name,
        intervals: [INTERVAL.P1, INTERVAL.P4]
    },
    A4: {
        id: INTERVAL.A4.id,
        name: INTERVAL.A4.name,
        intervals: [INTERVAL.P1, INTERVAL.A4]
    },
    d5: {
        id: INTERVAL.d5.id,
        name: INTERVAL.d5.name,
        intervals: [INTERVAL.P1, INTERVAL.d5]
    },
    P5: {
        id: INTERVAL.P5.id,
        name: INTERVAL.P5.name,
        intervals: [INTERVAL.P1, INTERVAL.P5]
    },
    A5: {
        id: INTERVAL.A5.id,
        name: INTERVAL.A5.name,
        intervals: [INTERVAL.P1, INTERVAL.A5]
    },
    d6: {
        id: INTERVAL.d6.id,
        name: INTERVAL.d6.name,
        intervals: [INTERVAL.P1, INTERVAL.d6]
    },
    m6: {
        id: INTERVAL.m6.id,
        name: INTERVAL.m6.name,
        intervals: [INTERVAL.P1, INTERVAL.m6]
    },
    M6: {
        id: INTERVAL.M6.id,
        name: INTERVAL.M6.name,
        intervals: [INTERVAL.P1, INTERVAL.M6]
    },
    d7: {
        id: INTERVAL.d7.id,
        name: INTERVAL.d7.name,
        intervals: [INTERVAL.P1, INTERVAL.d7]
    },
    m7: {
        id: INTERVAL.m7.id,
        name: INTERVAL.m7.name,
        intervals: [INTERVAL.P1, INTERVAL.m7]
    },
    M7: {
        id: INTERVAL.M7.id,
        name: INTERVAL.M7.name,
        intervals: [INTERVAL.P1, INTERVAL.M7]
    }
};

export const CHORD: { [id: string]: ConceptDefinition } = {
    // Major
    Maj: {
        id: 'maj',
        name: 'Major Triad',
        intervals: [INTERVAL.P1, INTERVAL.M3, INTERVAL.P5]
    },
    Maj6: {
        id: 'maj6',
        name: 'Major 6th',
        intervals: [INTERVAL.P1, INTERVAL.M3, INTERVAL.P5, INTERVAL.M6]
    },
    Maj7: {
        id: 'maj7',
        name: 'Major 7th',
        intervals: [INTERVAL.P1, INTERVAL.M3, INTERVAL.P5, INTERVAL.M7]
    },
    // Minor
    Min: {
        id: 'min',
        name: 'Minor Triad',
        intervals: [INTERVAL.P1, INTERVAL.m3, INTERVAL.P5]
    },
    Min6: {
        id: 'min6',
        name: 'Minor 6th',
        intervals: [INTERVAL.P1, INTERVAL.m3, INTERVAL.P5, INTERVAL.M6]
    },
    Min7: {
        id: 'min7',
        name: 'Minor 7th',
        intervals: [INTERVAL.P1, INTERVAL.m3, INTERVAL.P5, INTERVAL.m7]
    },
    MinMaj7: {
        id: 'minMaj7',
        name: 'Minor-Major 7th',
        intervals: [INTERVAL.P1, INTERVAL.m3, INTERVAL.P5, INTERVAL.M7]
    },
    // Dominant
    Dom7: {
        id: 'dom7',
        name: 'Dominant 7th',
        intervals: [INTERVAL.P1, INTERVAL.M3, INTERVAL.P5, INTERVAL.m7]
    },
    // Augmented
    Aug: {
        id: 'aug',
        name: 'Augmented Triad',
        intervals: [INTERVAL.P1, INTERVAL.M3, INTERVAL.A5]
    },
    Aug7: {
        id: 'aug7',
        name: 'Augmented Seventh',
        intervals: [INTERVAL.P1, INTERVAL.M3, INTERVAL.A5, INTERVAL.m7]
    },
    // Diminished
    Dim: {
        id: 'dim',
        name: 'Diminished Triad',
        intervals: [INTERVAL.P1, INTERVAL.m3, INTERVAL.d5]
    },
    Dim7: {
        id: 'dim7',
        name: 'Diminished 7th',
        intervals: [INTERVAL.P1, INTERVAL.m3, INTERVAL.d5, INTERVAL.d7]
    },
    HalfDim7: {
        id: 'halfDim7',
        name: 'Half-Diminished 7th',
        intervals: [INTERVAL.P1, INTERVAL.m3, INTERVAL.d5, INTERVAL.m7]
    },
    // Suspended
    Sus2: {
        id: 'sus2',
        name: 'Suspended 2nd',
        intervals: [INTERVAL.P1, INTERVAL.M2, INTERVAL.P5]
    },
    Sus4: {
        id: 'sus4',
        name: 'Suspended 4th',
        intervals: [INTERVAL.P1, INTERVAL.P4, INTERVAL.P5]
    },
};

export const SCALE: { [id: string]: ConceptDefinition } = {
    // Major
    Major: {
        id: 'major',
        name: 'Major',
        intervals: [INTERVAL.P1, INTERVAL.M2, INTERVAL.M3, INTERVAL.P4, INTERVAL.P5, INTERVAL.M6, INTERVAL.M7]
    },
    // Minor
    NatualMinor: {
        id: 'natualMinor',
        name: 'Natual Minor',
        intervals: [INTERVAL.P1, INTERVAL.M2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m6, INTERVAL.m7]
    },
    HarmonicMinor: {
        id: 'harmonicMinor',
        name: 'Harmonic Minor',
        intervals: [INTERVAL.P1, INTERVAL.M2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m6, INTERVAL.M7]
    },
    // Pentatonic
    MajorPentatonic: {
        id: 'majorPentatonic',
        name: 'Major Pentatonic',
        intervals: [INTERVAL.P1, INTERVAL.M2, INTERVAL.M3, INTERVAL.P5, INTERVAL.M6]
    },
    MinorPentatonic: {
        id: 'minorPentatonic',
        name: 'Minor Pentatonic',
        intervals: [INTERVAL.P1, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m7]
    },
    // Chomatic
    Chromatic: {
        id: 'chromatic',
        name: 'Chromatic',
        intervals: [INTERVAL.P1, INTERVAL.m2, INTERVAL.M2, INTERVAL.m3, INTERVAL.M3, INTERVAL.P4, INTERVAL.A4, INTERVAL.P5, INTERVAL.m6, INTERVAL.M6, INTERVAL.m7, INTERVAL.M7]
    }
};

export const MODE: { [id: string]: ConceptDefinition } = {
    Ionian: {
        id: 'ionian',
        name: 'Ionian',
        intervals: [INTERVAL.P1, INTERVAL.M2, INTERVAL.M3, INTERVAL.P4, INTERVAL.P5, INTERVAL.M6, INTERVAL.M7]
    },
    Dorian: {
        id: 'dorian',
        name: 'Dorian',
        intervals: [INTERVAL.P1, INTERVAL.M2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.M6, INTERVAL.m7]
    },
    Phrygian: {
        id: 'phrygian',
        name: 'Phrygian',
        intervals: [INTERVAL.P1, INTERVAL.m2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m6, INTERVAL.m7]
    },
    Lydian: {
        id: 'lydian',
        name: 'Lydian',
        intervals: [INTERVAL.P1, INTERVAL.M2, INTERVAL.M3, INTERVAL.A4, INTERVAL.P5, INTERVAL.M6, INTERVAL.M7]
    },
    Mixolydian: {
        id: 'mixolydian',
        name: 'Mixolydian',
        intervals: [INTERVAL.P1, INTERVAL.M2, INTERVAL.M3, INTERVAL.P4, INTERVAL.P5, INTERVAL.M6, INTERVAL.m7]
    },
    Aeolian: {
        id: 'aeolian',
        name: 'Aeolian',
        intervals: [INTERVAL.P1, INTERVAL.M2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m6, INTERVAL.m7]
    },
    Locrian: {
        id: 'locrian',
        name: 'Locrian',
        intervals: [INTERVAL.P1, INTERVAL.m2, INTERVAL.m3, INTERVAL.P4, INTERVAL.d5, INTERVAL.m6, INTERVAL.m7]
    }
};

export const ROMAN_NUMERAL: { [id: string]: ConceptDefinition } = {
    I: {
        id: 'I',
        name: 'I',
        intervals: [INTERVAL.P1, INTERVAL.M3, INTERVAL.P5]
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
        intervals: [INTERVAL.P4, INTERVAL.M6, Object.assign({ octaveOffset: 1 }, { ...INTERVAL.P1 })]
    },
    V: {
        id: 'V',
        name: 'V',
        intervals: [INTERVAL.P5, INTERVAL.M7, Object.assign({ octaveOffset: 1 }, { ...INTERVAL.M2 })]
    },
    vi: {
        id: 'vi',
        name: 'vi',
        intervals: [INTERVAL.M6, Object.assign({ octaveOffset: 1 }, { ...INTERVAL.P1 }), Object.assign({ octaveOffset: 1 }, { ...INTERVAL.M3 })]
    },
    vii: {
        id: 'vii',
        name: 'vii',
        intervals: [INTERVAL.M7, Object.assign({ octaveOffset: 1 }, { ...INTERVAL.M2 }), Object.assign({ octaveOffset: 1 }, { ...INTERVAL.P4 })]
    }
};