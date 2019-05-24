class Chord {
	
	constructor(id, relativeDegree, accidental) {
                this.chordDef = ALL_CHORDS.find((chord) => { return chord.id === id });
                this.relativeDegree = relativeDegree;
                this.accidental = accidental;
        }
        
        getNotes() {
                let homePosition = BASE_NOTES[this.relativeDegree - 1].relativePosition;
		let notes = [];
		for(let i = 0; i < this.chordDef.intervals.length; i++) {
			let interval = this.chordDef.intervals[i];
			let degreeSum = (interval.degree - 1) + (this.relativeDegree - 1);
			let relativeDegree = (degreeSum % 7) + 1;
			let octave = Math.floor(degreeSum / 7);
			let position = homePosition + this.accidental + interval.semitones;
			notes.push(new Note({position: position, functionalDegree: interval.degree, interval: interval, relativeDegree: relativeDegree, octave: octave}));
		}
		return notes;
        }

}