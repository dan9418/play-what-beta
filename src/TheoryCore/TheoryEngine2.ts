import { ScaleDefinitions } from "../Parameters/Concept/ScaleDefinitions";
import { TheoryEngine, Key, Note } from "./TheoryEngine";
import { AccidentalDefinitions } from "../Parameters/Key/AccidentalConfig";
import { DiatonicDegreeDefinitions } from "../Parameters/Key/DiatonicDegreeConfig";

export class TheoryEngine2 {

    static DIATONIC = [
        { degree: 1, name: 'C', index: 0 },
        { degree: 2, name: 'D', index: 2 },
        { degree: 3, name: 'E', index: 4 },
        { degree: 4, name: 'F', index: 5 },
        { degree: 5, name: 'G', index: 7 },
        { degree: 6, name: 'A', index: 9 },
        { degree: 7, name: 'B', index: 11 }
    ];

    static moduloAddition = (a: number, b: number, limit: number, offset: number = 0): number  => {
        return ((a - offset) + (b - offset)) % limit + offset;
    }

    static getFunctionalNote = (key: Key, interval: any, octave: number): Note => {
            let absoluteDegree = TheoryEngine2.moduloAddition(key.diatonicDegree.degree, interval.degree, 7, 1);

            let relativePosition = TheoryEngine2.moduloAddition(key.homePosition, interval.semitones, 12);
            let absolutePosition = (octave - 4) * 12 + relativePosition;

            let accidentalOffset = relativePosition - TheoryEngine2.DIATONIC[absoluteDegree - 1].index;
            let accidental = AccidentalDefinitions.find((a) => { return a.offset === accidentalOffset });

            let name = TheoryEngine2.DIATONIC[absoluteDegree - 1].name + (accidental ? accidental.name : accidentalOffset);

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
}
