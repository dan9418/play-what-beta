class Mode {
	
	constructor(id, degree, accidental) {
        let modeDef = ALL_MODES.find((mode) => { return mode.id === id });
        this.id = id;
        this.name = modeDef.name;
        this.degree = modeDef.degree;
        this.relativeDegree = degree;
        this.accidental = accidental;
	}

}