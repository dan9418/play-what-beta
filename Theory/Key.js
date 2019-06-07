class Key {
    constructor(homeDegree, accidental) {
        this.homeDegree = homeDegree;
        this.accidental = accidental;
        this.homePosition = MAJOR_INTERVALS[homeDegree - 1].semitones + this.accidental;
    }
}