import { DiatonicDegreeParameter } from "../Parameters/Key/DiatonicDegreeConfig";
import { AccidentalParameter } from "../Parameters/Key/AccidentalConfig";
import { Parameter } from "../Parameters/MasterParameters";

export interface Interval {
    id: string;
	name: string;
    degree: number;
	semitones: number;
}

export interface ConceptParameter extends Parameter {
	intervals: Interval[];
}

export interface Key {
    degree: DiatonicDegreeParameter;
    accidental: AccidentalParameter;
    name: string;
}

export interface Note {
    // Inputs
    key: Key;
    interval: Interval;
    octave: number;
    // Derived
    absolutePosition: number; // TODO midiIndex?
    frequency: number;
    diatonicDegree: DiatonicDegreeParameter;
    accidental: AccidentalParameter;
    name: string;
}
