class Mode {

	constructor(id, absoluteDegree, accidental) {
                this.modeDef = ALL_MODES.find((mode) => { return mode.id === id });
                this.absoluteDegree = absoluteDegree;
                this.accidental = accidental;
        }
        
        getNotes() {
		let homeNote = BASE_NOTES[this.absoluteDegree - 1];
		let modeNote = BASE_NOTES[this.modeDef.relativeDegree - 1];
		let notes = [];
		console.log('\n');
		for(let i = 0; i < MAJOR_INTERVALS.length; i++) {
			let relativeDegree = MAJOR_INTERVALS[i].relativeDegree;
			let semitones = 0;
			let absoluteDegree = ( homeNote.absoluteDegree - 1 + i) % 7 + 1;
			for(let j = 0; j < i; j++) {
				let index = (modeNote.absoluteDegree - 1 + j) % 7;
				semitones = semitones + MAJOR_STEPS[index].semitones;
			}
			let position = homeNote.relativePosition + semitones + this.accidental;
			let interval = ALL_INTERVALS.find((i) => {return (i.semitones === semitones && i.relativeDegree === relativeDegree)})
			let octave = Math.floor((homeNote.relativePosition + semitones)/ 12);
			
			notes.push(new Note({position: position, interval: interval, relativeDegree: relativeDegree, absoluteDegree: absoluteDegree, octave: octave}));
		}
		return notes;
        }

}