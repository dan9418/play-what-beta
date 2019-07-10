import { IParamConfig, IParamDef, IConceptDef, IConceptOptions } from "../IParamConfig";
import { PARAM_direction, Direction } from "../Base/DirectionConfig";

export interface IntervalDef extends IConceptDef {
    degree: number;
    semitones: number;
}

export interface IntervalOptions extends IConceptOptions {
    direction?: Direction;
}

export let INTERVALS = {
	PU: { id: 'PU', name: 'Perfect Unison', relativeDegree: 1, degree: 1, semitones: 0 },
	m2: { id: 'm2', name: 'Minor 2nd', relativeDegree: 2, degree: 2, semitones: 1 },
	M2: { id: 'M2', name: 'Major 2nd', relativeDegree: 2, degree: 2, semitones: 2 },
	m3: { id: 'm3', name: 'Minor 3rd', relativeDegree: 3, degree: 3, semitones: 3 },
	M3: { id: 'M3', name: 'Major 3rd', relativeDegree: 3, degree: 3, semitones: 4 },
	P4: { id: 'P4', name: 'Perfect 4th', relativeDegree: 4, degree: 4, semitones: 5 },
	A4: { id: 'A4', name: 'Augmented 4th', relativeDegree: 4, degree: 4, semitones: 6 },
	TT: { id: 'TT', name: 'Tritone', relativeDegree: 0, degree: 0, semitones: 6 },
	d5: { id: 'd5', name: 'Diminished 5th', relativeDegree: 5, degree: 5, semitones: 6 },
	P5: { id: 'P5', name: 'Perfect 5th', relativeDegree: 5, degree: 5, semitones: 7 },
	A5: { id: 'A5', name: 'Augmented 5th', relativeDegree: 5, degree: 5, semitones: 8 },
	m6: { id: 'm6', name: 'Minor 6th', relativeDegree: 6, degree: 6, semitones: 8 },
	M6: { id: 'M6', name: 'Major 6th', relativeDegree: 6, degree: 6, semitones: 9 },
	d7: { id: 'd7', name: 'Diminished 7th', relativeDegree: 7, degree: 7, semitones: 9 },
	m7: { id: 'm7', name: 'Minor 7th', relativeDegree: 7, degree: 7, semitones: 10 },
	M7: { id: 'M7', name: 'Major 7th', relativeDegree: 7, degree: 7, semitones: 11 },
	P8: { id: 'P8', name: 'Perfect Octave', relativeDegree: 1, degree: 8, semitones: 12 },
	m9: { id: 'm9', name: 'Minor 9th', relativeDegree: 2, degree: 9, semitones: 13 },
	M9: { id: 'M9', name: 'Major 9th', relativeDegree: 2, degree: 9, semitones: 14 },
	m10: { id: 'm10', name: 'Minor 10th', relativeDegree: 3, degree: 10, semitones: 15 },
	M10: { id: 'M10', name: 'Major 10th', relativeDegree: 3, degree: 10, semitones: 16 },
	P11: { id: 'P11', name: 'Perfect 11th', relativeDegree: 4, degree: 11, semitones: 17 },
	A11: { id: 'A11', name: 'Augmented 11h', relativeDegree: 4, degree: 11, semitones: 18 },
	dTT: { id: 'dTT', name: 'Double Tritone', relativeDegree: 0, degree: 0, semitones: 18 },
	d12: { id: 'd12', name: 'Diminished 12th', relativeDegree: 5, degree: 12, semitones: 18 },
	P12: { id: 'P12', name: 'Perfect 12th', relativeDegree: 5, degree: 12, semitones: 19 },
	A12: { id: 'A12', name: 'Augmented 12th', relativeDegree: 5, degree: 12, semitones: 20 },
	m13: { id: 'm13', name: 'Minor 13th', relativeDegree: 6, degree: 13, semitones: 20 },
	M13: { id: 'M13', name: 'Major 13th', relativeDegree: 6, degree: 13, semitones: 21 },
	d14: { id: 'd14', name: 'Diminished 14th', relativeDegree: 7, degree: 14, semitones: 21 },
	m14: { id: 'm14', name: 'Minor 14th', relativeDegree: 7, degree: 14, semitones: 22 },
	M14: { id: 'M14', name: 'Major 14th', relativeDegree: 7, degree: 14, semitones: 23 }
};

export let PARAM_interval: IParamConfig<IntervalDef> = {
    id: 'interval',
    name: 'Intervals',
    options: [
        PARAM_direction
    ],
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