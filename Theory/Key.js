class Key {
    constructor(diatonicDegree, accidentalDef) {
        this.degree = diatonicDegree.diatonicDegree;
        this.accidental = accidentalDef.offset;
        this.homePosition = MODES.Ionian.intervals[this.degree - 1].semitones + this.accidental;
    }
}