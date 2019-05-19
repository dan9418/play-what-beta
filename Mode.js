class Mode {

	constructor(id, degree, accidental) {
                this.modeDef = ALL_MODES.find((mode) => { return mode.id === id });
                this.relativeDegree = degree;
                this.accidental = accidental;
        }
        
        getNotes() {
                let homePosition = BASE_NOTES[this.relativeDegree - 1].positionInC;
		let notes = [];
		for(let i = 0; i < 7; i++) {
			let degree = (this.modeDef.degree - 1 + i) % 7;
			let relativeDegree = ((degree + this.relativeDegree - 1) % 7) + 1;
			let octave = Math.floor((degree + this.relativeDegree - 1) / 7);
			let position = homePosition + this.accidental + MAJOR_INTERVALS[degree].semitones;
			notes.push(new Note({position: position, degree: interval.degree, relativeDegree: relativeDegree, octave: octave}));
		}
		return notes;
        }

}