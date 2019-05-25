class Chord {
	
	constructor(id, absoluteDegree, accidental, octave) {
                this.chordDef = ALL_CHORDS.find((chord) => { return chord.id === id });
                this.absoluteDegree = absoluteDegree;
		this.accidental = accidental;
		this.octave = 0; // TODO
        }
        
        getNotes() {
                let homeNote = BASE_NOTES[this.absoluteDegree - 1];
		let notes = [];
		for(let i = 0; i < this.chordDef.intervals.length; i++) {
			// Get associated interval
			let interval = this.chordDef.intervals[i];
			// Degree calculation
			let degreeSum = (this.absoluteDegree - 1) + (interval.relativeDegree - 1);
			let absoluteDegree = (degreeSum % 7) + 1;
			// Octave calculation
			let octaveOffset = Math.floor(degreeSum / 7);
			// Position calculation
			let relativePosition = homeNote.relativePosition + this.accidental + interval.semitones;
			// Add note
			notes.push(new Note({
				absoluteDegree: absoluteDegree,
				relativeDegree: interval.relativeDegree,
				relativePosition: relativePosition,
				relativeInterval: interval,
				octave: this.octave + octaveOffset
			}));
		}
		return notes;
        }

}