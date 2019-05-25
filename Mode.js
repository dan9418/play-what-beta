class Mode {

	constructor(id, absoluteDegree, accidental, octave) {
                this.modeDef = ALL_MODES.find((mode) => { return mode.id === id });
                this.absoluteDegree = absoluteDegree;
		this.accidental = accidental;
		this.octave = 0; // TODO
        }
        
        getNotes() {
		let homeNote = BASE_NOTES[this.absoluteDegree - 1];
		let modeNote = BASE_NOTES[this.modeDef.relativeDegree - 1];
		let notes = [];
		for(let i = 0; i < MAJOR_INTERVALS.length; i++) {
			// Degree calculation
			let absoluteDegree = (homeNote.absoluteDegree - 1 + i) % 7 + 1;
			let relativeDegree = MAJOR_INTERVALS[i].relativeDegree;
			// Position calculation
			let homeOffset = 0;
			for(let j = 0; j < i; j++) {
				let index = (modeNote.absoluteDegree - 1 + j) % 7;
				homeOffset += MAJOR_STEPS[index].semitones;
			}
			let relativePosition = homeNote.relativePosition + homeOffset + this.accidental;
			// Octave calculation
			let octaveOffset = Math.floor((homeNote.relativePosition + homeOffset)/ 12);
			// Get associated interval
			let interval = ALL_INTERVALS.find((i) => {return (i.semitones === homeOffset && i.relativeDegree === relativeDegree)})
			// Add note
			notes.push(new Note({
				absoluteDegree: absoluteDegree,
				relativeDegree: relativeDegree,
				relativePosition: relativePosition,
				relativeInterval: interval,
				octave: this.octave + octaveOffset
			}));
		}
		return notes;
        }

}