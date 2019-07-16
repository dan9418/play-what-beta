import { DiatonicDegreeParameter, DiatonicDegreeDefinitions } from "../Parameters/Key/DiatonicDegreeConfig";
import { AccidentalParameter } from "../Parameters/Key/AccidentalConfig";
import { Parameter } from "../Parameters/MasterParameters";
import { INTERVALS } from "../Parameters/Concept/IntervalDefinitions";
import { ScaleDefinitions } from "../Parameters/Concept/ScaleDefinitions";

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
    diatonicDegree: DiatonicDegreeParameter;
    accidental: AccidentalParameter;
    homePosition: number;
    name: string;
}

export interface PhysicalNote {
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
export interface FunctionalNote {
    key: any;
    interval: any;
    absoluteDegree: number;
    relativePosition: number;
    accidental: number;
    name: string;
}

export class TheoryEngine {
    static getRelativePotision = (absolutePosition) => {
        if (absolutePosition >= 0)
            return absolutePosition % 12;
        else
            return 12 + (absolutePosition % 12);
    }

    static getFrequency = (absolutePosition) => {
        let f = 440;
        let distA4 = absolutePosition - DiatonicDegreeDefinitions[5].homePostition;
        if (distA4 < 0) {
            let dist = Math.abs(distA4);
            for (let i = 0; i < dist; i++) {
                f = f / Math.pow(2, 1 / 12);
            }
        }
        else {
            for (let i = 0; i < distA4; i++) {
                f = f * Math.pow(2, 1 / 12);
            }
        }
        return Math.round(f);
    }

    static getAccidentalString = (accidental) => {
        switch (accidental) {
            case 0:
                return ''
            case 1:
                return '#';
            case 2:
                return 'x';
            case -1:
                return 'b';
            case -2:
                return 'bb';
            default:
                if (accidental < 0) {
                    return -accidental + 'b';
                } else if (accidental > 0) {
                    return accidental + '#';
                }
        }
    };

    static getKey = (diatonicDegree: DiatonicDegreeParameter, accidental: AccidentalParameter): Key => {
        return {
            diatonicDegree: diatonicDegree,
            accidental: accidental,
            homePosition: ScaleDefinitions[0].intervals[diatonicDegree.degree - 1].semitones + accidental.offset,
            name: diatonicDegree.name + TheoryEngine.getAccidentalString(accidental.offset)
        }
    }

    static getPhysicalNote = (absolutePosition): PhysicalNote => {
        return {
            absolutePosition: absolutePosition,
            relativePosition: TheoryEngine.getRelativePotision(absolutePosition),
            octave: 4 + Math.floor(absolutePosition / 12),
            frequency: TheoryEngine.getFrequency(absolutePosition)
        }
    }

    static getFunctionalNote = (key: Key, interval: Interval): FunctionalNote => {
        if (interval.id !== INTERVALS.TT.id) {
            let absoluteDegree = (key.diatonicDegree.degree - 1 + interval.degree - 1) % 7 + 1;
            let relativePosition = (key.homePosition + interval.semitones) % 12;
            let accidental = relativePosition - ScaleDefinitions[0].intervals[absoluteDegree - 1].semitones;
            if (relativePosition === 0 && accidental < 0) accidental += 12;
            if (relativePosition === -1 && accidental < 0) relativePosition += 12;
            let name = DiatonicDegreeDefinitions[absoluteDegree - 1].id + TheoryEngine.getAccidentalString(accidental);
            return {
                key: key,
                interval: interval,
                absoluteDegree: absoluteDegree,
                relativePosition: relativePosition,
                accidental: accidental,
                name: name
            }
        }
        else {
            let relativePosition = (ScaleDefinitions[0].intervals[key.diatonicDegree.degree - 1].semitones + 6 + key.accidental.offset) % 12;
            return {
                key: key,
                interval: interval,
                absoluteDegree: 0,
                relativePosition: relativePosition,
                accidental: 0,
                name: INTERVALS.TT.id
            }
        }
    }
}
