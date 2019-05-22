class Mode {

	constructor(id, relativeDegree, accidental) {
                this.modeDef = ALL_MODES.find((mode) => { return mode.id === id });
                this.relativeDegree = relativeDegree;
                this.accidental = accidental;
        }
        
        getNotes() {
		let homeNote = BASE_NOTES[this.relativeDegree - 1];
		let modeNote = BASE_NOTES[this.modeDef.degree - 1];
		let homeDegree = homeNote.degreeInC;
		let modeDegree = modeNote.degreeInC;
		let notes = new Array(MAJOR_INTERVALS.length);
		console.log('\n');
		for(let i = 0; i < MAJOR_INTERVALS.length; i++) {
			let interval = MAJOR_INTERVALS[i]; //only used for degree right now
			let semitones = 0;
			let degreeIndex = (homeDegree - 1 + i) % 7 + 1;
			for(let j = 0; j < i; j++) {
				let index = (modeDegree - 1 + j) % 7;
				semitones = semitones + MAJOR_STEPS[index].semitones;
			}
			let position = homeNote.positionInC + semitones + this.accidental;
			let octave = Math.floor((homeNote.positionInC + semitones)/ 12);
			
			notes[i] = new Note({position: position, interval: interval, relativeDegree: degreeIndex, octave: octave});
		}
		return notes;
        }

}