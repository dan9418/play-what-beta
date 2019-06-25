class DefaultDriver extends React.Component {
	
	constructor(props) {
    super(props);
    this.state = {
        homeDegree: HOME_DEGREES.C,
        concept: CONCEPTS.Chord,
        accidental: ACCIDENTALS.Natural,
        scale: SCALES.Chromatic,
        interval: INTERVALS.P5,
        chord: CHORDS.Maj_Tri,
        mode: MODES.Ionian,
        romanNumeral: ROMAN_NUMERALS.Major
    };
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

	render = () => {
    let key = new Key(this.state.homeDegree, this.state.accidental)
    let intervals = this.getIntervals()
    let notes = this.getFunctionalNotes(key, intervals);

    return e('div', { id: 'default-driver' },
        e(SettingsPanel, { id: 'default-panel', updateDriverState: this.updateDriverState, driverState: this.state, notes: notes }, null),
        e('div', { id: 'visualizers' },
          e(Piano, { functionalNotes: notes, length: 25 }, null),
          e(Guitar, { functionalNotes: notes }, null)
        )
    );
  };
}