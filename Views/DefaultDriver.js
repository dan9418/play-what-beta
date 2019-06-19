class DefaultDriver extends React.Component {
	
	constructor(props) {
        super(props);
        this.state = {
            homeDegree: HOME_DEGREES.C.id,
            concept: CONCEPTS.Scale.id,
            accidental: ACCIDENTALS.Natural.id,
            scale: SCALES.Chromatic.id,
            interval: INTERVALS.P5.id,
            chord: CHORDS.Maj_Tri.id,
            mode: MODES.Ionian.id,
            romanNumeral: ROMAN_NUMERALS.Major.id,
            label: LABELS.Interval.id
        };
    }

    updateSetting = (name, value) => {
        let update = {};
        update[name] = value;
        this.setState(update);
    }

    getKey = () => {
        let homeDegree = ALL_HOME_DEGREES.find((degree) => { return degree.id === this.state.homeDegree });
        let accidental = ALL_ACCIDENTALS.find((accidental) => { return accidental.id === this.state.accidental });
        return new Key(homeDegree, accidental)
    }

    getIntervals = () => {
		switch(this.state.concept) {
            case SETTINGS.Interval.id:
                let interval = ALL_INTERVALS.find((interval) => { return interval.id === this.state.interval });
				return [INTERVALS.PU, interval];
            case SETTINGS.Chord.id:
                let chord = ALL_CHORDS.find((chord) => { return chord.id === this.state.chord });
				return chord.intervals;
            case SETTINGS.Scale.id:
                let scale = ALL_SCALES.find((scale) => { return scale.id === this.state.scale });
				return scale.intervals;
            case SETTINGS.Mode.id:
                let mode = ALL_MODES.find((mode) => { return mode.id === this.state.mode });
				return mode.intervals;
            case SETTINGS.RomanNumeral.id:
                let romanNumeral = ALL_ROMAN_NUMERALS.find((romanNumeral) => { return romanNumeral.id === this.state.romanNumeral });
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

    getNoteCollection = (notes, displaySettings) => {
		return e(NoteCollection, {
			functionalNotes: notes,
			displaySettings: displaySettings
		}, null);
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
        let key = this.getKey();
        let intervals = this.getIntervals()
        let notes = this.getFunctionalNotes(key, intervals);

        let displaySettings = {
            label: this.state.label
        }

        return e('div', { id: 'default-driver' },
            //e('pre', { id: 'display-text' }, JSON.stringify(this.state)),
            e(SettingsPanel, { id: 'default-panel', updateSetting: this.updateSetting }, null),
            this.getNoteCollection(notes, displaySettings),
            this.getPiano(notes, displaySettings),
            this.getGuitar(notes, displaySettings)
        );
    };
}