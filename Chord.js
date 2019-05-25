class Chord {
	
	constructor(id, absoluteDegree, accidental) {
                this.chordDef = ALL_CHORDS.find((chord) => { return chord.id === id });
                this.absoluteDegree = absoluteDegree;
                this.accidental = accidental;
        }
        
        getNotes() {
                let homePosition = BASE_NOTES[this.absoluteDegree - 1].relativePosition;
		let notes = [];
		for(let i = 0; i < this.chordDef.intervals.length; i++) {
			let interval = this.chordDef.intervals[i];
			let degreeSum = (this.absoluteDegree - 1) + (interval.relativeDegree - 1);
			let absoluteDegree = (degreeSum % 7) + 1;
			let octave = Math.floor(degreeSum / 7);
			let position = homePosition + this.accidental + interval.semitones;
			notes.push(new Note({position: position, relativeDegree: interval.relativeDegree, interval: interval, absoluteDegree: absoluteDegree, octave: octave}));
		}
		return notes;
        }

}