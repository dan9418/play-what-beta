import { Interval, KeyCenter, Concept, CompleteNote } from "./TheoryTypes";
import { INTERVAL, DEGREE, CALIBRATION_NOTE, NOTE_LABEL } from "./TheoryConstants";
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

    // Verify
    static parseIntervals = (key: KeyCenter, concept: Concept): CompleteNote[] => {

        // Copy intervals
        let parsedIntervals = [];
        for (let i = 0; i < concept.intervals.length; i++) {
            parsedIntervals.push(Object.assign({ octaveOffset: 0 }, concept.intervals[i]));
        }

        // Apply chord inversion, if specified
        if (concept.intervalOptions && concept.intervalOptions.chordInversion) {
            TheoryEngine.applyChordInversion(parsedIntervals, concept.intervalOptions.chordInversion);
        }

        let notes = [];
        for (let i = 0; i < parsedIntervals.length; i++) {
            if (concept.intervalOptions && concept.intervalOptions.melodicInversion && i > 0) {
                parsedIntervals[i].octaveOffset = parsedIntervals[i].octaveOffset - 1;
            }
            let note = TheoryEngine.getFunctionalNote(key, parsedIntervals[i], concept.intervalOptions && concept.intervalOptions.melodicInversion);
            notes.push(note);
        }

        return notes;
    }

    // Verify
    static getFunctionalNote = (key: KeyCenter, interval: Interval, melodicInversion: boolean = false): CompleteNote => {
        // Calculate functional properties
        let noteDegree = TheoryEngine.getNoteDegree(key, interval, melodicInversion);
        let pitchClass = TheoryEngine.getPitchClass(key, interval, melodicInversion);
        let accidentalOffset = TheoryEngine.getAccidentalOffset(noteDegree, pitchClass);
        let name = TheoryEngine.getNoteName(noteDegree, accidentalOffset);

        // Calculate physical properties
        let noteOctave = TheoryEngine.getFunctionalNoteOctave(key, interval, melodicInversion);
        let noteIndex = TheoryEngine.getNoteIndex(noteOctave, pitchClass);
        let frequency = TheoryEngine.getFrequency(noteIndex);

        return {
            // Inputs
            key: key,
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

    // Verify
    static getNonfunctionalNote = (noteIndex): CompleteNote => {
        return {
            // Physical properties
            noteIndex: noteIndex,
            noteOctave: TheoryEngine.getPhysicalNoteOctave(noteIndex),
            pitchClass: TheoryEngine.getRelativePotision(noteIndex),
            frequency: TheoryEngine.getFrequency(noteIndex),
            // Empty functional properties
            key: null,
            interval: INTERVAL.None,
            noteDegree: null,
            accidentalOffset: 0,
            name: '',
        }
    }


    // Verify
    static getNoteDegree = (key: KeyCenter, interval: Interval, melodicInversion: boolean): number => {
        return Utils.moduloSum(key.degree.value, interval.degree, 7, 1, melodicInversion);
    }

    // Verify
    static getPitchClass = (key: KeyCenter, interval: Interval, melodicInversion: boolean): number => {
        return Utils.moduloSum(Object.values(DEGREE)[key.degree.value - 1].index + key.accidental.offset, interval.semitones, 12, 0, melodicInversion);
    }

    // Verify - definitely wrong
    static getFunctionalNoteOctave = (key: KeyCenter, interval: Interval, melodicInversion: boolean): number => {
        return (interval.octaveOffset) ? key.octave + interval.octaveOffset : key.octave;
    }

    // Verify
    static getPhysicalNoteOctave = (noteIndex: number): number => {
        return 4 + Math.floor(noteIndex / 12);
    }

    // Verify
    static getNoteIndex = (noteOctave: number, pitchClass: number): number => {
        return (noteOctave - 4) * 12 + pitchClass;
    }

    // Verify
    static getAccidentalOffset = (noteDegree: number, pitchClass: number): number => {
        return pitchClass - Object.values(DEGREE)[noteDegree - 1].index;
    }

    // Verify
    static getNoteName = (noteDegree: number, accidentalOffset: number): string => {
        return Object.values(DEGREE)[noteDegree - 1].name + TheoryEngine.getAccidentalString(accidentalOffset);
    }

    // Verify
    static getRelativePotision = (noteIndex) => {
        if (noteIndex >= 0)
            return noteIndex % 12;
        else
            return 12 + (noteIndex % 12);
    }

    // Verify
    static getFrequency = (noteIndex) => {
        let f = 440;
        let distA4 = noteIndex - CALIBRATION_NOTE.noteIndex;
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
                return note.frequency;
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

    static filterNotes = (notes: CompleteNote[], filteredIntervals: Interval[]): CompleteNote[] => {
        let result = notes.filter((note) => {
            return 'undefined' !== typeof filteredIntervals.find((interval) => {
                return interval.id === note.interval.id;
            });
        });
        return result;
    }
}
