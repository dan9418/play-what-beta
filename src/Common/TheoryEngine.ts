import { Interval, CompleteNote, INTERVAL, Key, ALL_DEGREES, ALL_ACCIDENTALS, CALIBRATION_NOTE } from "./AppConfig";

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
    static getFunctionalNote = (key: Key, interval: Interval, melodicInversion: boolean = false): CompleteNote => {
        let octave = (interval.octaveOffset) ? key.octave + interval.octaveOffset: key.octave;

        let spellingDegree = TheoryEngine.moduloAddition(key.degree.value, interval.degree, 7, 1, melodicInversion);

        let pitchClass = TheoryEngine.moduloAddition(ALL_DEGREES[key.degree.value - 1].index + key.accidental.offset, interval.semitones, 12, 0, melodicInversion);
        let absolutePosition = (octave - 4) * 12 + pitchClass;

        let accidentalOffset = pitchClass - ALL_DEGREES[spellingDegree - 1].index;

        let name = ALL_DEGREES[spellingDegree - 1].name + TheoryEngine.getAccidentalString(accidentalOffset);

        let frequency = TheoryEngine.getFrequency(absolutePosition);

        return {
            octave: octave,
            key: key,
            interval: interval,
            spellingDegree: spellingDegree,
            pitchClass: pitchClass,
            absolutePosition: absolutePosition,
            accidentalOffset: accidentalOffset,
            name: name,
            frequency: frequency
        }

    }

    // Verify
    static getNonfunctionalNote = (absolutePosition): CompleteNote => {
        return {
            octave: 4 + Math.floor(absolutePosition / 12),
            key: null,
            interval: INTERVAL.None,
            spellingDegree: null,
            pitchClass: TheoryEngine.getRelativePotision(absolutePosition),
            absolutePosition: absolutePosition,
            accidentalOffset: null,
            name: '',
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
        let distA4 = absolutePosition - CALIBRATION_NOTE.absolutePosition;
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

    static getNoteLabel = (note: CompleteNote, labelId: string): string | number => {
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
