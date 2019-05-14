class Chord {
	
	constructor(id, degree, accidental) {
        let chordDef = ALL_CHORDS.find((chord) => { return chord.id === id });
        this.id = id;
        this.name = chordDef.name;
        this.intervals = chordDef.intervals;
        this.degree = degree;
        this.accidental = accidental;
	}

}