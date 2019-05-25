class Mode {

	constructor(id, absoluteDegree, accidental, octave) {
                this.modeDef = ALL_MODES.find((mode) => { return mode.id === id });
                this.absoluteDegree = absoluteDegree;
		this.accidental = accidental;
		this.octave = 0; // TODO
        }
        
        getNotes() {
		let rootNote = BASE_NOTES[this.absoluteDegree - 1];
		let modeNote = BASE_NOTES[this.modeDef.relativeDegree - 1];
		let notes = [];
		for(let i = 0; i < MAJOR_INTERVALS.length; i++) {
			// Degree calculation
			let relativeDegree =  i + 1;
			let absoluteDegree = (relativeDegree - 1 + rootNote.absoluteDegree - 1) % 7 + 1;
			// Position calculation
			let homeOffset = 0;
			for(let j = 0; j < i; j++) {
				let index = (modeNote.absoluteDegree - 1 + j) % 7;
				homeOffset += MAJOR_STEPS[index].semitones;
			}
			let relativePosition = (rootNote.relativePosition + this.accidental) + homeOffset;
			// Octave calculation
			let octaveOffset = Math.floor((rootNote.relativePosition + homeOffset)/ 12);
			// Get associated interval
			let interval = ALL_INTERVALS.find((i) => { return (i.semitones === homeOffset && i.relativeDegree === relativeDegree) });
			// Accidental calculation
			let naturalDegreePosition = BASE_NOTES[absoluteDegree - 1].relativePosition;
			let accidental = relativePosition - (octaveOffset * 12) - naturalDegreePosition;
			// Add note
			notes.push(new Note({
				// Absolute parameters
				octave: this.octave + octaveOffset,
				absoluteDegree: absoluteDegree,
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