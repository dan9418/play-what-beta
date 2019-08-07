export const INTERVAL = {
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
    M7: { id: 'M7', name: 'Major 7th', degree: 7, semitones: 11 },
    P8: { id: 'P8', name: 'Perfect Octave', degree: 8, semitones: 12 },
    m9: { id: 'm9', name: 'Minor 9th', degree: 9, semitones: 13 },
    M9: { id: 'M9', name: 'Major 9th', degree: 9, semitones: 14 },
    m10: { id: 'm10', name: 'Minor 10th', degree: 10, semitones: 15 },
    M10: { id: 'M10', name: 'Major 10th', degree: 10, semitones: 16 },
    P11: { id: 'P11', name: 'Perfect 11th', degree: 11, semitones: 17 },
    A11: { id: 'A11', name: 'Augmented 11h', degree: 11, semitones: 18 },
    dTT: { id: 'dTT', name: 'Double Tritone', degree: 0, semitones: 18 },
    d12: { id: 'd12', name: 'Diminished 12th', degree: 12, semitones: 18 },
    P12: { id: 'P12', name: 'Perfect 12th', degree: 12, semitones: 19 },
    A12: { id: 'A12', name: 'Augmented 12th', degree: 12, semitones: 20 },
    m13: { id: 'm13', name: 'Minor 13th', degree: 13, semitones: 20 },
    M13: { id: 'M13', name: 'Major 13th', degree: 13, semitones: 21 },
    d14: { id: 'd14', name: 'Diminished 14th', degree: 14, semitones: 21 },
    m14: { id: 'm14', name: 'Minor 14th', degree: 14, semitones: 22 },
    M14: { id: 'M14', name: 'Major 14th', degree: 14, semitones: 23 }
};

export let PRESET_INTERVALS = [
    {
        id: 'PU',
        name: 'Perfect Unison',
        intervals: [INTERVAL.PU , INTERVAL.PU]
    },
    {
        id: 'm2',
        name: 'Minor 2nd',
        intervals: [INTERVAL.PU , INTERVAL.m2]
    },
    {
        id: 'M2',
        name: 'Major 2nd',
        intervals: [INTERVAL.PU , INTERVAL.M2]
    },
    {
        id: 'm3',
        name: 'Minor 3rd',
        intervals: [INTERVAL.PU , INTERVAL.m3]
    },
    {
        id: 'M3',
        name: 'Major 3rd',
        intervals: [INTERVAL.PU , INTERVAL.M3]
    },
    {
        id: 'P4',
        name: 'Perfect 4th',
        intervals: [INTERVAL.PU , INTERVAL.P4]
    },
    {
        id: 'A4',
        name: 'Augmented 4th',
        intervals: [INTERVAL.PU , INTERVAL.A4]
    },
    {
        id: 'TT',
        name: 'Tritone',
        intervals: [INTERVAL.PU , INTERVAL.TT]
    },
    {
        id: 'd5',
        name: 'Diminished 5th',
        intervals: [INTERVAL.PU , INTERVAL.d5]
    },
    {
        id: 'P5',
        name: 'Perfect 5th',
        intervals: [INTERVAL.PU , INTERVAL.P5]
    },
    {
        id: 'A5',
        name: 'Augmented 5th',
        intervals: [INTERVAL.PU , INTERVAL.A5]
    },
    {
        id: 'm6',
        name: 'Minor 6th',
        intervals: [INTERVAL.PU , INTERVAL.m6]
    },
    {
        id: 'M6',
        name: 'Major 6th',
        intervals: [INTERVAL.PU , INTERVAL.M6]
    },
    {
        id: 'd7',
        name: 'Diminished 7th',
        intervals: [INTERVAL.PU , INTERVAL.d7]
    },
    {
        id: 'm7',
        name: 'Minor 7th',
        intervals: [INTERVAL.PU , INTERVAL.m7]
    },
    {
        id: 'M7',
        name: 'Major 7th',
        intervals: [INTERVAL.PU , INTERVAL.M7]
    }
];

export let PRESET_CHORDS = [
    {
        id: 'maj',
        name: 'Major Triad',
        intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.P5]
    },
    {
        id: 'sus2',
        name: 'Suspended 2nd',
        intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.P5]
    },
    {
        id: 'sus4',
        name: 'Suspended 4th',
        intervals: [INTERVAL.PU, INTERVAL.P4, INTERVAL.P5]
    },
    {
        id: 'maj6',
        name: 'Major 6th',
        intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.P5, INTERVAL.M6]
    },
    {
        id: 'dom7',
        name: 'Dominant "Major-Minor" 7th',
        intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.P5, INTERVAL.m7]
    },
    {
        id: 'maj7',
        name: 'Major 7th',
        intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.P5, INTERVAL.M7]
    },
    /*{
        id: 'maj9',
        name: 'Major 9',
        intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.P5, INTERVAL.M7, INTERVAL.M9]
    },
    {
        id: 'maj11',
        name: 'Major 11',
        intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.P5, INTERVAL.M7, INTERVAL.M9, INTERVAL.P11]
    },
    {
        id: 'maj13',
        name: 'Major 13',
        intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.P5, INTERVAL.M7, INTERVAL.M9, INTERVAL.P11, INTERVAL.M13]
    },*/
    {
        id: 'aug',
        name: 'Augmented Triad',
        intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.A5]
    },
    {
        id: 'aug7',
        name: 'Augmented Seventh',
        intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.A5, INTERVAL.m7]
    },
    {
        id: 'min',
        name: 'Minor Triad',
        intervals: [INTERVAL.PU, INTERVAL.m3, INTERVAL.P5]
    },
    {
        id: 'min6',
        name: 'Minor 6th',
        intervals: [INTERVAL.PU, INTERVAL.m3, INTERVAL.P5, INTERVAL.M6]
    },
    {
        id: 'min7',
        name: 'Minor 7th',
        intervals: [INTERVAL.PU, INTERVAL.m3, INTERVAL.P5, INTERVAL.m7]
    },
    {
        id: 'minMaj7',
        name: 'Minor-Major 7th',
        intervals: [INTERVAL.PU, INTERVAL.m3, INTERVAL.P5, INTERVAL.M7]
    },
    {
        id: 'dim',
        name: 'Diminished Triad',
        intervals: [INTERVAL.PU, INTERVAL.m3, INTERVAL.d5]
    },
    {
        id: 'dim7',
        name: 'Diminished 7th',
        intervals: [INTERVAL.PU, INTERVAL.m3, INTERVAL.d5, INTERVAL.d7]
    },
    {
        id: 'halfDim7',
        name: 'Half-Diminished 7th',
        intervals: [INTERVAL.PU, INTERVAL.m3, INTERVAL.d5, INTERVAL.m7]
    }
];


export let PRESET_SCALES = [
    {
        id: 'major',
        name: 'Major',
        intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.M3, INTERVAL.P4, INTERVAL.P5, INTERVAL.M6, INTERVAL.M7]
    },
    {
        id: 'natualMinor',
        name: 'Natual Minor',
        intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m6, INTERVAL.m7]
    },
    {
        id: 'harmonicMinor',
        name: 'Harmonic Minor',
        intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m6, INTERVAL.M7]
    },
    {
        id: 'majorPentatonic',
        name: 'Major Pentatonic',
        intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.M3, INTERVAL.P5, INTERVAL.M6]
    },
    {
        id: 'minorPentatonic',
        name: 'Minor Pentatonic',
        intervals: [INTERVAL.PU, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m7]
    },
    {
        id: 'chromatic',
        name: 'Chromatic',
        intervals: [INTERVAL.PU, INTERVAL.m2, INTERVAL.M2, INTERVAL.m3, INTERVAL.M3, INTERVAL.P4, INTERVAL.TT, INTERVAL.P5, INTERVAL.m6, INTERVAL.M6, INTERVAL.m7, INTERVAL.M7]
    }
];

export let PRESET_MODES = [
    {
        id: 'ionian',
        name: 'Ionian',
        intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.M3, INTERVAL.P4, INTERVAL.P5, INTERVAL.M6, INTERVAL.M7]
    },
    {
        id: 'dorian',
        name: 'Dorian',
        intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.M6, INTERVAL.m7]
    },
    {
        id: 'phrygian',
        name: 'Phrygian',
        intervals: [INTERVAL.PU, INTERVAL.m2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m6, INTERVAL.m7]
    },
    {
        id: 'lydian',
        name: 'Lydian',
        intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.M3, INTERVAL.A4, INTERVAL.P5, INTERVAL.M6, INTERVAL.M7]
    },
    {
        id: 'mixolydian',
        name: 'Mixolydian',
        intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.M3, INTERVAL.P4, INTERVAL.P5, INTERVAL.M6, INTERVAL.m7]
    },
    {
        id: 'aeolian',
        name: 'Aeolian',
        intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m6, INTERVAL.m7]
    },
    {
        id: 'locrian',
        name: 'Locrian',
        intervals: [INTERVAL.PU, INTERVAL.m2, INTERVAL.m3, INTERVAL.P4, INTERVAL.d5, INTERVAL.m6, INTERVAL.m7]
    }
];
