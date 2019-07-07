import { INTERVALS } from "../../Common/Common";

export let INTERVAL_CONFIG = {
    id: 'interval',
    name: 'Intervals',
    defaultId: 'P5',
    data: [
        {
            id: 'PU',
            name: 'Perfect Unison',
            degree: 1,
            semitones: 0
        },
        {
            id: 'm2',
            name: 'Minor 2nd',
            degree: 2,
            semitones: 1
        },
        {
            id: 'M2',
            name: 'Major 2nd',
            degree: 2,
            semitones: 2
        },
        {
            id: 'm3',
            name: 'Minor 3rd',
            degree: 3,
            semitones: 3
        },
        {
            id: 'M3',
            name: 'Major 3rd',
            degree: 3,
            semitones: 4
        },
        {
            id: 'P4',
            name: 'Perfect 4th',
            degree: 4,
            semitones: 5
        },
        {
            id: 'A4',
            name: 'Augmented 4th',
            degree: 4,
            semitones: 6
        },
        {
            id: 'TT',
            name: 'Tritone',
            degree: 0,
            semitones: 6
        },
        {
            id: 'd5',
            name: 'Diminished 5th',
            degree: 5,
            semitones: 6
        },
        {
            id: 'P5',
            name: 'Perfect 5th',
            degree: 5,
            semitones: 7
        },
        {
            id: 'A5',
            name: 'Augmented 5th',
            degree: 5,
            semitones: 8
        },
        {
            id: 'm6',
            name: 'Minor 6th',
            degree: 6,
            semitones: 8
        },
        {
            id: 'M6',
            name: 'Major 6th',
            degree: 6,
            semitones: 9
        },
        {
            id: 'd7',
            name: 'Diminished 7th',
            degree: 7,
            semitones: 9
        },
        {
            id: 'm7',
            name: 'Minor 7th',
            degree: 7,
            semitones: 10
        },
        {
            id: 'M7',
            name: 'Major 7th',
            degree: 7,
            semitones: 11
        }
    ]
};

export let CHORD_CONFIG = {
    id: 'chord',
    name: 'Chords',
    defaultId: 'maj',
    data: [
        {
            id: 'maj',
            name: 'Major Triad',
            intervals: [INTERVALS.PU, INTERVALS.M3, INTERVALS.P5]
        },
        {
            id: 'sus2',
            name: 'Suspended 2nd',
            intervals: [INTERVALS.PU, INTERVALS.M2, INTERVALS.P5]
        },
        {
            id: 'sus4',
            name: 'Suspended 4th',
            intervals: [INTERVALS.PU, INTERVALS.P4, INTERVALS.P5]
        },
        {
            id: 'maj6',
            name: 'Major 6th',
            intervals: [INTERVALS.PU, INTERVALS.M3, INTERVALS.P5, INTERVALS.M6]
        },
        {
            id: 'dom7',
            name: 'Dominant "Major-Minor" 7th',
            intervals: [INTERVALS.PU, INTERVALS.M3, INTERVALS.P5, INTERVALS.m7]
        },
        {
            id: 'maj7',
            name: 'Major 7th',
            intervals: [INTERVALS.PU, INTERVALS.M3, INTERVALS.P5, INTERVALS.M7]
        },
        /*{
            id: 'maj9',
            name: 'Major 9',
            intervals: [INTERVALS.PU, INTERVALS.M3, INTERVALS.P5, INTERVALS.M7, INTERVALS.M9]
        },
        {
            id: 'maj11',
            name: 'Major 11',
            intervals: [INTERVALS.PU, INTERVALS.M3, INTERVALS.P5, INTERVALS.M7, INTERVALS.M9, INTERVALS.P11]
        },
        {
            id: 'maj13',
            name: 'Major 13',
            intervals: [INTERVALS.PU, INTERVALS.M3, INTERVALS.P5, INTERVALS.M7, INTERVALS.M9, INTERVALS.P11, INTERVALS.M13]
        },*/
        {
            id: 'aug',
            name: 'Augmented Triad',
            intervals: [INTERVALS.PU, INTERVALS.M3, INTERVALS.A5]
        },
        {
            id: 'aug7',
            name: 'Augmented Seventh',
            intervals: [INTERVALS.PU, INTERVALS.M3, INTERVALS.A5, INTERVALS.m7]
        },
        {
            id: 'min',
            name: 'Minor Triad',
            intervals: [INTERVALS.PU, INTERVALS.m3, INTERVALS.P5]
        },
        {
            id: 'min6',
            name: 'Minor 6th',
            intervals: [INTERVALS.PU, INTERVALS.m3, INTERVALS.P5, INTERVALS.M6]
        },
        {
            id: 'min7',
            name: 'Minor 7th',
            intervals: [INTERVALS.PU, INTERVALS.m3, INTERVALS.P5, INTERVALS.m7]
        },
        {
            id: 'minMaj7',
            name: 'Minor-Major 7th',
            intervals: [INTERVALS.PU, INTERVALS.m3, INTERVALS.P5, INTERVALS.M7]
        },
        {
            id: 'dim',
            name: 'Diminished Triad',
            intervals: [INTERVALS.PU, INTERVALS.m3, INTERVALS.d5]
        },
        {
            id: 'dim7',
            name: 'Diminished 7th',
            intervals: [INTERVALS.PU, INTERVALS.m3, INTERVALS.d5, INTERVALS.d7]
        },
        {
            id: 'halfDim7',
            name: 'Half-Diminished 7th',
            intervals: [INTERVALS.PU, INTERVALS.m3, INTERVALS.d5, INTERVALS.m7]
        }
    ]
};

export let SCALE_CONFIG = {
    id: 'scale',
    name: 'Scales',
    defaultId: 'chromatic',
    data: [
        {
            id: 'major',
            name: 'Major',
            intervals: [INTERVALS.PU, INTERVALS.M2, INTERVALS.M3, INTERVALS.P4, INTERVALS.P5, INTERVALS.M6, INTERVALS.M7]
        },
        {
            id: 'natualMinor',
            name: 'Natual Minor',
            intervals: [INTERVALS.PU, INTERVALS.M2, INTERVALS.m3, INTERVALS.P4, INTERVALS.P5, INTERVALS.m6, INTERVALS.m7]
        },
        {
            id: 'harmonicMinor',
            name: 'Harmonic Minor',
            intervals: [INTERVALS.PU, INTERVALS.M2, INTERVALS.m3, INTERVALS.P4, INTERVALS.P5, INTERVALS.m6, INTERVALS.M7]
        },
        {
            id: 'majorPentatonic',
            name: 'Major Pentatonic',
            intervals: [INTERVALS.PU, INTERVALS.M2, INTERVALS.M3, INTERVALS.P5, INTERVALS.M6]
        },
        {
            id: 'minorPentatonic',
            name: 'Minor Pentatonic',
            intervals: [INTERVALS.PU, INTERVALS.m3, INTERVALS.P4, INTERVALS.P5, INTERVALS.m7]
        },
        {
            id: 'chromatic',
            name: 'Chromatic',
            intervals: [INTERVALS.PU, INTERVALS.m2, INTERVALS.M2, INTERVALS.m3, INTERVALS.M3, INTERVALS.P4, INTERVALS.TT, INTERVALS.P5, INTERVALS.m6, INTERVALS.M6, INTERVALS.m7, INTERVALS.M7]
        }
    ]
};

export let MODE_CONFIG = {
    id: 'mode',
    name: 'Modes',
    defaultId: 'ionian',
    data: [
        {
            id: 'ionian',
            name: 'Ionian',
            diatonicDegree: 1,
            intervals: [INTERVALS.PU, INTERVALS.M2, INTERVALS.M3, INTERVALS.P4, INTERVALS.P5, INTERVALS.M6, INTERVALS.M7]
        },
        {
            id: 'dorian',
            name: 'Dorian',
            diatonicDegree: 2,
            intervals: [INTERVALS.PU, INTERVALS.M2, INTERVALS.m3, INTERVALS.P4, INTERVALS.P5, INTERVALS.M6, INTERVALS.m7]
        },
        {
            id: 'phrygian',
            name: 'Phrygian',
            diatonicDegree: 3,
            intervals: [INTERVALS.PU, INTERVALS.m2, INTERVALS.m3, INTERVALS.P4, INTERVALS.P5, INTERVALS.m6, INTERVALS.m7]
        },
        {
            id: 'lydian',
            name: 'Lydian',
            diatonicDegree: 4,
            intervals: [INTERVALS.PU, INTERVALS.M2, INTERVALS.M3, INTERVALS.A4, INTERVALS.P5, INTERVALS.M6, INTERVALS.M7]
        },
        {
            id: 'mixolydian',
            name: 'Mixolydian',
            diatonicDegree: 5,
            intervals: [INTERVALS.PU, INTERVALS.M2, INTERVALS.M3, INTERVALS.P4, INTERVALS.P5, INTERVALS.M6, INTERVALS.m7]
        },
        {
            id: 'aeolian',
            name: 'Aeolian',
            diatonicDegree: 6,
            intervals: [INTERVALS.PU, INTERVALS.M2, INTERVALS.m3, INTERVALS.P4, INTERVALS.P5, INTERVALS.m6, INTERVALS.m7]
        },
        {
            id: 'locrian',
            name: 'Locrian',
            diatonicDegree: 7,
            intervals: [INTERVALS.PU, INTERVALS.m2, INTERVALS.m3, INTERVALS.P4, INTERVALS.d5, INTERVALS.m6, INTERVALS.m7]
        }
    ]
};

/*export let ROMAN_NUMERAL_CONFIG = {
    id: 'romanNumeral',
    name: 'Roman Numerals',
    defaultId: 'none',
    data: []
}*/

export let CONCEPT_DEFINITION_CONFIG = {
    id: 'conceptDefinition',
    name: 'Concept Definition',
    defaultId: 'interval',
    data: [
       INTERVAL_CONFIG,
       CHORD_CONFIG,
       SCALE_CONFIG,
       MODE_CONFIG
    ]
};