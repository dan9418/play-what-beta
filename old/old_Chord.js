class Chord {
	
	constructor(id, absoluteDegree, accidental, octave) {
		this.chordDef = ALL_CHORDS.find((chord) => { return chord.id === id });
		this.rootNote = new Note({octave: 0, absoluteDegree: absoluteDegree, accidental: this.accidental, referenceNote: null});
                this.absoluteDegree = absoluteDegree;
		this.accidental = accidental;
		this.octave = 4;
        }
        
        getNotes() {
		let rootNote = BASE_NOTES[this.absoluteDegree - 1];
		let notes = [];
		for(let i = 0; i < this.chordDef.intervals.length; i++) {
			// Get associated interval
			let interval = this.chordDef.intervals[i];
			// Degree calculation
			let degreeSum = (this.absoluteDegree - 1) + (interval.relativeDegree - 1);
			let intervalDegree = (degreeSum % 7) + 1;
			// Octave calculation
			//let octaveOffset = Math.floor(degreeSum / 7);
			let octaveOffset = Math.floor((rootNote.relativePosition + interval.semitones + this.accidental)/ 12);
			// Position calculation
			let relativePosition = (rootNote.relativePosition + this.accidental) + interval.semitones;
			// Accidental calculation
			let naturalDegreePosition = BASE_NOTES[intervalDegree - 1].relativePosition;
			let accidental = relativePosition - Math.floor(degreeSum / 7) * 12 - naturalDegreePosition;
			let overflowNote = (relativePosition >= 12 && (relativePosition - accidental) < 12) ? 1 : (relativePosition < 12 && (relativePosition - accidental) >= 12) ? -1 : 0;
			// Add note
			notes.push(new Note({
				// Absolute parameters
				octave: this.octave + octaveOffset,
				octaveOverflow: overflowNote,
				absoluteDegree: intervalDegree,
				accidental: accidental,
				// Relative parameters
				reference: {
					note: rootNote,
					interval: interval
				}
			}));
		}
		return notes;
        }

}