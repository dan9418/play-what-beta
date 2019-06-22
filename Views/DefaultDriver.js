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
            romanNumeral: ROMAN_NUMERALS.Major,
            label: LABELS.Interval
        };
    }

    updateSetting = (name, value) => {
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
    
    getPiano = (notes, displaySettings) => {
      return e(Piano, {
              functionalNotes: notes,
              length: 25,
        displaySettings: displaySettings
      }, null);
    }
    
    getGuitar = (notes, displaySettings) => {
      return e(Guitar, {
        functionalNotes: notes,
        displaySettings: displaySettings
      }, null);
    }

	render = () => {
        let key = new Key(this.state.homeDegree, this.state.accidental)
        let intervals = this.getIntervals()
        let notes = this.getFunctionalNotes(key, intervals);

        let displaySettings = {
            label: this.state.label.id
        }

        return e('div', { id: 'default-driver' },
            //e('pre', { id: 'display-text' }, JSON.stringify(this.state)),
            e(SettingsPanel, { id: 'default-panel', updateSetting: this.updateSetting, defaultSettings: this.state, notes: notes }, null),
            e('div', { id: 'visualizers' },
              this.getPiano(notes, displaySettings),
              this.getGuitar(notes, displaySettings)
            )
        );
    };
}