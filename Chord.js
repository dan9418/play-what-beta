class Chord {
	
	constructor(id, degree, accidental) {
                this.chordDef = ALL_CHORDS.find((chord) => { return chord.id === id });
                this.degree = degree;
                this.accidental = accidental;
        }
        
        getNotes() {
                let homePosition = BASE_NOTES[this.degree - 1].positionInC;
		let notes = [];
		for(let i = 0; i < this.chordDef.intervals.length; i++) {
			let interval = this.chordDef.intervals[i];
			let degree = interval.degree - 1;
			let relativeDegree = ((degree + this.degree - 1) % 7) + 1;
			let octave = Math.floor((degree + this.degree - 1) / 7);
			let position = homePosition + this.accidental + interval.semitones;
			notes.push(new Note({position: position, relativeDegree: relativeDegree, octave: octave}));
		}
		return notes;
        }

}