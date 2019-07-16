import { DiatonicDegreeParameter, DiatonicDegreeDefinitions } from "../Parameters/Key/DiatonicDegreeConfig";
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
    //key: Key;
    //interval: Interval;
    octave: number;
    // Derived
    relativePosition: number;
    absolutePosition: number; // TODO midiIndex?
    frequency: number;
    //diatonicDegree: DiatonicDegreeParameter;
    //accidental: AccidentalParameter;
    //name: string;
}

export class TheoryEngine {
    static getRelativePotision = (absolutePosition) => {
        if(absolutePosition >= 0)
            return absolutePosition % 12;
        else
            return 12 + (absolutePosition % 12);
    }

    static getFrequency = (absolutePosition) => {
        let f = 440;
        let distA4 = absolutePosition - DiatonicDegreeDefinitions[5].homePostition;
        if(distA4 < 0) {
            let dist = Math.abs(distA4);
            for(let i = 0; i < dist; i++) {
                f = f / Math.pow(2, 1/12);
            }
        }
        else {
            for(let i = 0; i < distA4; i++) {
                f = f * Math.pow(2, 1/12);
            }
        }
        return Math.round(f);
    }

    static getPhysicalNote = (absolutePosition): Note => {
        return {
            absolutePosition: absolutePosition,
            relativePosition: TheoryEngine.getRelativePotision(absolutePosition),
            octave: 4 + Math.floor(absolutePosition / 12),
            frequency: TheoryEngine.getFrequency(absolutePosition)
        }
    }
}