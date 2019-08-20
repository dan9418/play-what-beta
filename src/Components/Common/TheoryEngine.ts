import { KeyCenter, Interval, CompleteNote, INTERVAL, DEGREES, CALIBRATION_NOTE } from "./Theory.config";

export class TheoryEngine {

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
    static parseIntervals = (key: KeyCenter, intervals: Interval[], conceptConfig: any): CompleteNote[] => {

		let parsedIntervals = [];
		for (let i = 0; i < intervals.length; i++) {
			parsedIntervals.push({ ...intervals[i] });
		}
		let chordInversion = conceptConfig.chordInversion;
		let melodicInversion = conceptConfig.melodicInversion;

        let notes = [];
		for (let i = 0; i < parsedIntervals.length; i++) {
			if (i < chordInversion) {
				parsedIntervals[i].octaveOffset = 1;
			}
			if (melodicInversion && i > 0) {
				parsedIntervals[i].octaveOffset = -1;
            }
            let note = TheoryEngine.getFunctionalNote(key, intervals[i], melodicInversion);
            notes.push(note);
		}

		/*if (conceptConfig.reverse)
			notes.reverse();*/

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
        return TheoryEngine.moduloAddition(key.degree.value, interval.degree, 7, 1, melodicInversion);
    }

    // Verify
    static getPitchClass= (key: KeyCenter, interval: Interval, melodicInversion: boolean): number => {
        return TheoryEngine.moduloAddition(DEGREES[key.degree.value - 1].index + key.accidental.offset, interval.semitones, 12, 0, melodicInversion);
    }

    // Verify - definitely wrong
    static getFunctionalNoteOctave = (key: KeyCenter, interval: Interval, melodicInversion: boolean): number => {
        return (interval.octaveOffset) ? key.octave + interval.octaveOffset: key.octave;
    }

    // Verify
    static getPhysicalNoteOctave = (noteIndex: number): number => {
        return 4 + Math.floor(noteIndex / 12);
    }

    // Verify
    static getNoteIndex= (noteOctave: number, pitchClass: number): number => {
        return (noteOctave - 4) * 12 + pitchClass;
    }

    // Verify
    static getAccidentalOffset = (noteDegree: number, pitchClass: number): number => {
        return pitchClass - DEGREES[noteDegree - 1].index;
    }

    // Verify
    static getNoteName = (noteDegree: number, accidentalOffset: number): string => {
        return DEGREES[noteDegree - 1].name + TheoryEngine.getAccidentalString(accidentalOffset);
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
            case 'noteIndex':
                return note.noteIndex;
            case 'relativeDegree':
                return note.interval.degree;
            case 'octave':
                return note.noteOctave;
            case 'frequency':
                return note.frequency;
            default:
                return '';
        }
    }
}
