import { DiatonicDegreeParameter, DiatonicDegreeDefinitions } from "../Parameters/Key/DiatonicDegreeConfig";
import { AccidentalParameter, AccidentalDefinitions } from "../Parameters/Key/AccidentalConfig";
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

export interface Note {
    // Inputs
    octave: number;
    key: Key;
    interval: Interval;
    // Derived
    absoluteDegree: number;
    relativePosition: number;
    absolutePosition: number; // TODO midiIndex?
    frequency: number;
    diatonicDegree: DiatonicDegreeParameter;
    accidental: AccidentalParameter;
    name: string;
}

export interface PhysicalNote {
    octave: number;
    relativePosition: number;
    absolutePosition: number;
    frequency: number;
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

    static getNonfunctionalNote = (absolutePosition): Note => {
        return {
            octave: 4 + Math.floor(absolutePosition / 12),
            key: null,
            interval: INTERVALS.None,
            absoluteDegree: null,
            relativePosition: TheoryEngine.getRelativePotision(absolutePosition),
            absolutePosition: absolutePosition,
            accidental: null,
            name: '',
            diatonicDegree: null,
            frequency: TheoryEngine.getFrequency(absolutePosition)
        }
    }

    static getFunctionalNote = (key: Key, interval: Interval): Note => {
        let octave = 4;
        if (interval.id !== INTERVALS.TT.id) {
            let absoluteDegree = (key.diatonicDegree.degree - 1 + interval.degree - 1) % 7 + 1;
            let relativePosition = (key.homePosition + interval.semitones) % 12;
            let absolutePosition = octave * 12 + relativePosition;
            let accidentalOffset = relativePosition - ScaleDefinitions[0].intervals[absoluteDegree - 1].semitones;
            if (relativePosition === 0 && accidentalOffset < 0) accidentalOffset += 12;
            if (relativePosition === -1 && accidentalOffset < 0) relativePosition += 12;
            let accidental = AccidentalDefinitions.find((a) => { return a.offset === accidentalOffset });
            let name = DiatonicDegreeDefinitions[absoluteDegree - 1].id + accidental.name;
            let diatonicDegree = DiatonicDegreeDefinitions.find((dd) => { return dd.degree === absoluteDegree });
            return {
                octave: octave,
                key: key,
                interval: interval,
                absoluteDegree: absoluteDegree,
                relativePosition: relativePosition,
                absolutePosition: absolutePosition,
                accidental: accidental,
                name: name,
                diatonicDegree: diatonicDegree,
                frequency: TheoryEngine.getFrequency(absolutePosition)
            }
        }
        else {
            let relativePosition = (ScaleDefinitions[0].intervals[key.diatonicDegree.degree - 1].semitones + 6 + key.accidental.offset) % 12;
            let absolutePosition = octave * 12 + relativePosition;
            return {
                octave: octave,
                key: key,
                interval: interval,
                absoluteDegree: 0,
                relativePosition: relativePosition,
                absolutePosition: absolutePosition,
                accidental: AccidentalDefinitions[2],
                name: INTERVALS.TT.id,
                diatonicDegree: null,
                frequency: TheoryEngine.getFrequency(absolutePosition)
            }
        }
    }
}
