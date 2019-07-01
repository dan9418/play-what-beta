class Key {
    constructor(diatonicDegree, accidentalDef) {
        this.degree = diatonicDegree.diatonicDegree;
        this.accidental = accidentalDef.offset;
        this.homePosition = SCALES.Major.intervals[this.degree - 1].semitones + this.accidental;
    }
}