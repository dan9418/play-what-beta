import { Interval, INTERVAL } from "../Concepts/IntervalConfig";
import { Degree } from "./DegreeConfig";
import { Accidental } from "./AccidentalConfig";

export interface Preset<T> {
    id: string;
    name: string;
    config: T;
}

export interface ConceptConfig {
    intervals: Interval[];
}

export interface Key {
    degree: Degree;
    accidental: Accidental;
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