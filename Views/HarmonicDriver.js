class HarmonicDriver extends React.Component {
	
	constructor(props) {
    super(props);
    this.state = {
			homeDegree: HOME_DEGREES.D,
			concept: CONCEPTS.Chord,
			accidental: ACCIDENTALS.Natural,
			scale: SCALES.Chromatic,
			interval: INTERVALS.P5,
			chord: CHORDS.Maj_Tri,
			mode: MODES.Ionian,
			romanNumeral: ROMAN_NUMERALS.Major
		};
		this.updateNotes();
  }

  updateDriverState = (name, value) => {
		let update = {};
    update[name] = value;
		this.setState(update);
	}

	getIntervals = () => {
		switch(this.state.concept.id) {
				case CONFIG.Interval.id:
			return [INTERVALS.PU, this.state.interval];
				case CONFIG.Chord.id:
			return this.state.chord.intervals;
				case CONFIG.Scale.id:
			return this.state.scale.intervals;
				case CONFIG.Mode.id:
			return this.state.mode.intervals;
				case CONFIG.RomanNumeral.id:
			return [];
		  default:
			return [];
		}
  }
	
	getFunctionalNotes = (key, intervals) => {
		let notes = [];
		for(let i = 0; i < intervals.length; i++) {
			let functionalNote = new FunctionalNote(key, intervals[i]);
			notes.push(functionalNote);
		}
		return notes;
	}

	updateNotes = () => {
		let key = new Key(this.state.homeDegree, this.state.accidental)
		let intervals = this.getIntervals()
		let notes = this.getFunctionalNotes(key, intervals);
		this.notes = notes;
	}

	render = () => {
    this.updateNotes();

    return e('div', { id: 'default-driver' },
        e(SettingsPanel, { id: 'default-panel', updateDriverState: this.updateDriverState, driverState: this.state, notes: this.notes }, null),
        e(ViewManager, {notes: this.notes }, null)
    );
  };
}