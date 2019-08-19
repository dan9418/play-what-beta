import { Interval, DEGREE, Note, INTERVAL, Key, ALL_DEGREES, ALL_ACCIDENTALS } from "./AppConfig";

export class TheoryEngine {

    static getNotesFromIntervals = (key: Key, intervals: Interval[], melodicInversion: boolean) => {
        let notes = [];
        for (let i = 0; i < intervals.length; i++) {
            let note = TheoryEngine.getFunctionalNote(key, intervals[i], melodicInversion);
            notes.push(note);
        }
        return notes;
    }

    // Verify
    static getFunctionalNote = (key: Key, interval: Interval, melodicInversion: boolean = false): Note => {
        let octave = (interval.octaveOffset) ? key.octave + interval.octaveOffset: key.octave;

        let spellingDegree = TheoryEngine.moduloAddition(key.degree.value, interval.degree, 7, 1, melodicInversion);

        let pitchClass = TheoryEngine.moduloAddition(ALL_DEGREES[key.degree.value - 1].index + key.accidental.offset, interval.semitones, 12, 0, melodicInversion);
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

    // Verify
    static getNonfunctionalNote = (absolutePosition): Note => {
        return {
            octave: 4 + Math.floor(absolutePosition / 12),
            key: null,
            interval: INTERVAL.None,
            spellingDegree: null,
            pitchClass: TheoryEngine.getRelativePotision(absolutePosition),
            absolutePosition: absolutePosition,
            accidental: null,
            name: '',
            degree: null,
            frequency: TheoryEngine.getFrequency(absolutePosition)
        }
    }

    // Verify
    static moduloAddition = (a: number, b: number, limit: number, offset: number = 0, subtract: boolean): number => {
        let preResult = ((a - offset) + (b - offset)) % limit
        if (subtract) {
            preResult = limit - preResult;
            if (preResult === limit)
                preResult = 0;
        }
        return preResult + offset;
    }

    // Verify
    static getRelativePotision = (absolutePosition) => {
        if (absolutePosition >= 0)
            return absolutePosition % 12;
        else
            return 12 + (absolutePosition % 12);
    }

    // Verify
    static getFrequency = (absolutePosition) => {
        let f = 440;
        let distA4 = absolutePosition - DEGREE.A.index;
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

    // Verify
    static getAccidentalString = (offset) => {
        switch (offset) {
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
                return (offset < 0) ? -offset + 'b' : offset + '#';
        }
    };

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
