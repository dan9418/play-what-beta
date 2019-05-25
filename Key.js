class Key {
	
	constructor(absoluteDegree, accidental, octave) {
        this.absoluteDegree = absoluteDegree;
        this.accidental = accidental;
        this.octave = octave;
        console.log(this);
    }

    getChord = (chordId) => {
        return new Chord(chordId, this.absoluteDegree, this.accidental, this.octave);
    }

    getMode = (modeId) => {
        return new Mode(modeId, this.absoluteDegree, this.accidental, this.octave);
    }
}

