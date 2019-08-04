import { INTERVAL } from "./TheoryDefinitions";

export let IntervalDefinitions = [
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

export let ChordDefinitions = [
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


export let ScaleDefinitions = [
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

export let ModeDefinitions = [
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
