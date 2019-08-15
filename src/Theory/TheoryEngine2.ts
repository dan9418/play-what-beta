import { Note, Key } from "./TheoryConfig";
import { TheoryEngine } from "./TheoryEngine";
import { ALL_DEGREES } from "../Key/DegreeConfig";
import { ALL_ACCIDENTALS } from "../Key/AccidentalConfig";
import { Interval } from "../Concepts/Interval/IntervalConfig";

export class TheoryEngine2 {

    static moduloAddition = (a: number, b: number, limit: number, offset: number = 0, subtract: boolean): number => {
        let preResult = ((a - offset) + (b - offset)) % limit
        if (subtract) {
            preResult = limit - preResult;
            if (preResult === limit)
                preResult = 0;
        }
        return preResult + offset;
    }

    static getFunctionalNote = (key: Key, interval: Interval, melodicInversion: boolean = false): Note => {
        let octave = (interval.octaveOffset) ? key.octave + interval.octaveOffset: key.octave;

        let spellingDegree = TheoryEngine2.moduloAddition(key.degree.value, interval.degree, 7, 1, melodicInversion);

        let pitchClass = TheoryEngine2.moduloAddition(ALL_DEGREES[key.degree.value - 1].index + key.accidental.offset, interval.semitones, 12, 0, melodicInversion);
        let absolutePosition = (octave - 4) * 12 + pitchClass;

        let accidentalOffset = pitchClass - ALL_DEGREES[spellingDegree - 1].index;
        let accidental = ALL_ACCIDENTALS.find((a) => { return a.offset === accidentalOffset });

        let name = ALL_DEGREES[spellingDegree - 1].name + (accidental ? accidental.name : accidentalOffset);

        let degree = ALL_DEGREES.find((dd) => { return dd.value === key.degree.value });

        return {
            octave: octave,
            key: key,
            interval: interval,
            spellingDegree: spellingDegree,
            pitchClass: pitchClass,
            absolutePosition: absolutePosition,
            accidental: accidental,
            name: name,
            degree: degree,
            frequency: TheoryEngine.getFrequency(absolutePosition)
        }

    }

    static getNoteLabel = (note: Note, labelId: string): string | number => {
        switch (labelId) {
            case 'none':
                return '';
            case 'name':
                return note.name;
            case 'interval':
                return note.interval.id;
            case 'pitchClass':
                return note.pitchClass;
            case 'absolutePosition':
                return note.absolutePosition;
            case 'relativeDegree':
                return note.interval.degree;
            case 'octave':
                return note.octave;
            case 'frequency':
                return note.frequency;
            default:
                return '';
        }
    }
}
