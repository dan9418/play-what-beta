class Key {
    constructor(diatonicDegree, accidentalOffset) {
        this.degree = diatonicDegree;
        this.accidental = accidentalOffset;
        this.homePosition = SCALE_CONFIG.data[0].intervals[this.degree - 1].semitones + this.accidental;
    }
}