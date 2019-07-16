import { ConceptParameter } from "../../Common/TheoryEngine";

export let INTERVALS = {
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

export let IntervalDefinitions: ConceptParameter[] = [
    {
        id: 'PU',
        name: 'Perfect Unison',
        intervals: [INTERVALS.PU , INTERVALS.PU]
    },
    {
        id: 'm2',
        name: 'Minor 2nd',
        intervals: [INTERVALS.PU , INTERVALS.m2]
    },
    {
        id: 'M2',
        name: 'Major 2nd',
        intervals: [INTERVALS.PU , INTERVALS.M2]
    },
    {
        id: 'm3',
        name: 'Minor 3rd',
        intervals: [INTERVALS.PU , INTERVALS.m3]
    },
    {
        id: 'M3',
        name: 'Major 3rd',
        intervals: [INTERVALS.PU , INTERVALS.M3]
    },
    {
        id: 'P4',
        name: 'Perfect 4th',
        intervals: [INTERVALS.PU , INTERVALS.P4]
    },
    {
        id: 'A4',
        name: 'Augmented 4th',
        intervals: [INTERVALS.PU , INTERVALS.A4]
    },
    {
        id: 'TT',
        name: 'Tritone',
        intervals: [INTERVALS.PU , INTERVALS.TT]
    },
    {
        id: 'd5',
        name: 'Diminished 5th',
        intervals: [INTERVALS.PU , INTERVALS.d5]
    },
    {
        id: 'P5',
        name: 'Perfect 5th',
        intervals: [INTERVALS.PU , INTERVALS.P5]
    },
    {
        id: 'A5',
        name: 'Augmented 5th',
        intervals: [INTERVALS.PU , INTERVALS.A5]
    },
    {
        id: 'm6',
        name: 'Minor 6th',
        intervals: [INTERVALS.PU , INTERVALS.m6]
    },
    {
        id: 'M6',
        name: 'Major 6th',
        intervals: [INTERVALS.PU , INTERVALS.M6]
    },
    {
        id: 'd7',
        name: 'Diminished 7th',
        intervals: [INTERVALS.PU , INTERVALS.d7]
    },
    {
        id: 'm7',
        name: 'Minor 7th',
        intervals: [INTERVALS.PU , INTERVALS.m7]
    },
    {
        id: 'M7',
        name: 'Major 7th',
        intervals: [INTERVALS.PU , INTERVALS.M7]
    }
];