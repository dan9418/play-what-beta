import { Note, Key, ALL_ACCIDENTALS, ALL_DEGREES } from "./TheoryDefinitions";
import { TheoryEngine } from "./TheoryEngine";

export class TheoryEngine2 {

    static moduloAddition = (a: number, b: number, limit: number, offset: number = 0): number  => {
        return ((a - offset) + (b - offset)) % limit + offset;
    }

    static getFunctionalNote = (key: Key, interval: any, octave: number): Note => {
            let spellingDegree = TheoryEngine2.moduloAddition(key.degree.value, interval.degree, 7, 1);

            let pitchClass = TheoryEngine2.moduloAddition(ALL_DEGREES[key.degree.value - 1].index, interval.semitones, 12);
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
}
