import { Interval, INTERVAL } from "../Concepts/Interval/IntervalConfig";
import { Degree } from "../Key/DegreeConfig";
import { Accidental } from "../Key/AccidentalConfig";

export interface Key {
    degree: Degree;
    accidental: Accidental;
    octave: number;
}

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

export let ALL_NOTE_LABELS = [
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
		id: 'absolutePosition',
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