import { Key, Note, MAJOR_SCALE } from "./TheoryDefinitions";
import { TheoryEngine2 } from "./TheoryEngine2";
import { Interval, INTERVAL } from "../Concepts/IntervalConfig";
import { DEGREE, Degree, ALL_DEGREES } from "./DegreeConfig";
import { Accidental, ALL_ACCIDENTALS, ACCIDENTAL } from "./AccidentalConfig";

export class TheoryEngine {

    static getNotesFromIntervals = (key: Key, intervals: Interval[], octave: number) => {
		let notes = [];
		for (let i = 0; i < intervals.length; i++) {
			let note = TheoryEngine2.getFunctionalNote(key, intervals[i], octave);
			notes.push(note);
		}
		return notes;
	}

    static getRelativePotision = (absolutePosition) => {
        if (absolutePosition >= 0)
            return absolutePosition % 12;
        else
            return 12 + (absolutePosition % 12);
    }

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

    static playNotes = (notes) => {
        let duration = 500;
        let audioContext = new ((window as any).AudioContext || (window as any).webkitAudioContext)();

        for(let i=0; i < notes.length; i++) {
            let oscillator = audioContext.createOscillator();
            oscillator.type = 'sine';
            oscillator.frequency.value = notes[i].frequency;
            oscillator.connect(audioContext.destination);
            oscillator.start();
            setTimeout(() => { oscillator.stop(); }, duration);
          }

    }

    static getKey = (degree: Degree, accidental: Accidental): Key => {
        return {
            degree: degree,
            accidental: accidental
            //homePosition: ScaleDefinitions[0].intervals[degree.degree - 1].semitones + accidental.offset,
            //name: degree.name + TheoryEngine.getAccidentalString(accidental.offset)
        }
    }

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

    static getFunctionalNote = (key: Key, interval: Interval, octave: number): Note => {
        if (interval.id !== INTERVAL.TT.id) {
            let spellingDegree = (key.degree.value - 1 + interval.degree - 1) % 7 + 1;
            let pitchClass = (key.degree.value + interval.semitones) % 12;
            let absolutePosition = (octave - 4) * 12 + pitchClass;
            let accidentalOffset = pitchClass - MAJOR_SCALE[spellingDegree - 1].semitones;
            if (pitchClass === 0 && accidentalOffset < 0) accidentalOffset += 12;
            if (pitchClass === -1 && accidentalOffset < 0) pitchClass += 12;
            let accidental = ALL_ACCIDENTALS.find((a) => { return a.offset === accidentalOffset }); //optimize
            let name = ALL_DEGREES[spellingDegree - 1].id + accidental.name;
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
        else {
            let pitchClass = (MAJOR_SCALE[key.degree.value - 1].semitones + 6 + key.accidental.offset) % 12;
            let absolutePosition = octave * 12 + pitchClass;
            return {
                octave: octave,
                key: key,
                interval: interval,
                spellingDegree: 0,
                pitchClass: pitchClass,
                absolutePosition: absolutePosition,
                accidental: ACCIDENTAL.natural,
                name: INTERVAL.TT.id,
                degree: null,
                frequency: TheoryEngine.getFrequency(absolutePosition)
            }
        }
    }
}
