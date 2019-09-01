import { Interval, CompleteNote, Tonic, Accidental } from "./TheoryTypes";
import { INTERVAL, TONIC, CALIBRATION_NOTE, NOTE_LABEL, CALIBRATION_CONSTANT } from "./TheoryConstants";
import { Utils } from "./Utils";

export class TheoryEngine {

    static applyChordInversion = (intervals: Interval[], inversion: number): void => {
        // Shift octaves
        for (let i = 0; i < inversion; i++) {
            intervals[i].octaveOffset = intervals[i].octaveOffset + 1;
        }
        // Shift order
        inversion -= intervals.length * Math.floor(inversion / intervals.length);
        intervals.push.apply(intervals, intervals.splice(0, inversion));
    }

    static parseIntervals = (tonic: Tonic, accidental: Accidental, octave: number, intervals: Interval[], chordInversion = 0): CompleteNote[] => {

        // Copy intervals
        let parsedIntervals = [];
        for (let i = 0; i < intervals.length; i++) {
            parsedIntervals.push(Object.assign({ octaveOffset: 0 }, intervals[i]));
        }

        // Apply chord inversion, if specified
        if (chordInversion) {
            let inversion = chordInversion % intervals.length;
            TheoryEngine.applyChordInversion(parsedIntervals, inversion);
        }

        let notes = [];
        for (let i = 0; i < parsedIntervals.length; i++) {
            let note = TheoryEngine.getFunctionalNote(tonic, accidental, octave, parsedIntervals[i]);
            notes.push(note);
        }

        return notes;
    }

    static getFunctionalNote = (tonic: Tonic, accidental: Accidental, tonicOctave: number, interval: Interval): CompleteNote => {
        // Calculate functional properties
        let noteDegree = TheoryEngine.getNoteDegree(tonic, interval);
        let pitchClass = TheoryEngine.getPitchClass(tonic, accidental, interval);
        let accidentalOffset = TheoryEngine.getAccidentalOffset(noteDegree, pitchClass, accidental);
        let name = TheoryEngine.getNoteName(noteDegree, accidentalOffset);

        // Calculate physical properties
        let noteOctave = TheoryEngine.getFunctionalNoteOctave(tonic, accidental, tonicOctave, interval);
        let noteIndex = TheoryEngine.getNoteIndex(noteOctave, pitchClass);
        let frequency = TheoryEngine.getFrequency(noteIndex);

        return {
            // Inputs
            interval: interval,
            // Functional properties
            noteDegree: noteDegree,
            pitchClass: pitchClass,
            accidentalOffset: accidentalOffset,
            name: name,
            // Physical properties
            noteOctave: noteOctave,
            noteIndex: noteIndex,
            frequency: frequency
        }

    }

    static getNonfunctionalNote = (noteIndex): CompleteNote => {
        return {
            // Physical properties
            noteIndex: noteIndex,
            noteOctave: TheoryEngine.getPhysicalNoteOctave(noteIndex),
            pitchClass: TheoryEngine.getRelativePotision(noteIndex),
            frequency: TheoryEngine.getFrequency(noteIndex),
            // Empty functional properties
            interval: null,
            noteDegree: null,
            accidentalOffset: 0,
            name: '',
        }
    }

    static getNoteDegree = (tonic: Tonic, interval: Interval): number => {
        return Utils.moduloSum(tonic.value, interval.degree, 7, 1);
    }

    static getPitchClass = (tonic: Tonic, accidental: Accidental, interval: Interval): number => {
        return Utils.moduloSum(Object.values(TONIC)[tonic.value - 1].index + accidental.offset, interval.semitones, 12, 0);
    }

    static getFunctionalNoteOctave = (tonic: Tonic, accidental: Accidental, tonicOctave: number, interval: Interval): number => {
        return tonicOctave + Math.floor((tonic.index + accidental.offset + interval.semitones) / 12) + interval.octaveOffset;
    }

    static getPhysicalNoteOctave = (noteIndex: number): number => {
        return 4 + Math.floor(noteIndex / 12);
    }

    static getNoteIndex = (noteOctave: number, pitchClass: number): number => {
        return (noteOctave - 4) * 12 + pitchClass;
    }

    static getAccidentalOffset = (noteDegree: number, pitchClass: number, accidental: Accidental): number => {
        let offset = pitchClass - Object.values(TONIC)[noteDegree - 1].index;
        if (offset < 0 && accidental.offset > 0) offset = offset + 12;
        else if (offset > 0 && accidental.offset < 0) offset = offset - 12;
        return offset;
    }

    static getNoteName = (noteDegree: number, accidentalOffset: number): string => {
        return Object.values(TONIC)[noteDegree - 1].name + TheoryEngine.getAccidentalString(accidentalOffset);
    }

    static getRelativePotision = (noteIndex) => {
        if (noteIndex >= 0)
            return noteIndex % 12;
        else
            return 12 + (noteIndex % 12);
    }

    static getFrequency = (noteIndex) => {
        return CALIBRATION_NOTE.frequency * Math.pow(CALIBRATION_CONSTANT, noteIndex - CALIBRATION_NOTE.noteIndex);
    }

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

    static getNoteLabel = (note: CompleteNote, labelId: NOTE_LABEL): string | number => {
        switch (labelId) {
            case NOTE_LABEL.None:
                return '';
            case NOTE_LABEL.Name:
                return note.name;
            case NOTE_LABEL.Interval:
                return note.interval.id;
            case NOTE_LABEL.PitchClass:
                return note.pitchClass;
            case NOTE_LABEL.NoteIndex:
                return note.noteIndex;
            case NOTE_LABEL.RelativeDegree:
                return note.interval.degree;
            case NOTE_LABEL.Octave:
                return note.noteOctave;
            case NOTE_LABEL.Frequency:
                return Math.round(note.frequency);
            default:
                return '';
        }
    }

    static isNoteValid = (note: CompleteNote, noteIndex: number, filterOctave: boolean): boolean => {
        if (filterOctave) {
            return note.noteIndex === noteIndex;
        }
        else {
            return (noteIndex >= 0) ?
                note.pitchClass === (noteIndex % 12) :
                note.pitchClass === (noteIndex % 12 + 12);
        }
    }

    static getNote = (notes: CompleteNote[], noteIndex, filterOctave: boolean): CompleteNote => {
        let note = notes.find((note) => {
            return TheoryEngine.isNoteValid(note, noteIndex, filterOctave)
        }) || null;
        if (note === null)
            note = TheoryEngine.getNonfunctionalNote(noteIndex);
        return note;
    }

    static filterNotes = (notes: CompleteNote[], unfilteredIntervals: Interval[]): CompleteNote[] => {
        let result = notes.filter((note) => {
            return 'undefined' !== typeof unfilteredIntervals.find((interval) => {
                return interval.id === note.interval.id;
            });
        });
        return result;
    }
}
