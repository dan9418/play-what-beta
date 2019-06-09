class ViewManager extends React.Component {

    constructor(props) {
		super(props);
		this.state = {
			degree: HOME_DEGREES.C,
			accidental: ACCIDENTALS.Natural,
			concept: CONCEPTS.Mode,
                chord: CHORDS.Maj_Tri,
                mode:  MODES.Ionian,
			label: LABELS.Name,
			filterOctave: false
		};
    }
    
    // View helpers

	getNoteCollection = (functionalNotes, displaySettings) => {
		return e(NoteCollection, {
			functionalNotes: functionalNotes,
			displaySettings: displaySettings
		}, null);
	}

	getPiano = (functionalNotes, displaySettings) => {
		return e(Piano, {
			functionalNotes: functionalNotes,
			length: 25,
			displaySettings: displaySettings
		}, null);
	}

	getGuitar = (functionalNotes, displaySettings) => {
		return e(Guitar, {
			functionalNotes: functionalNotes,
			displaySettings: displaySettings
		}, null);
    }
    
    // Note calculation

	getFunctionalNotes = (key, intervals) => {
		let notes = [];
		for(let i = 0; i < intervals.length; i++) {
			let functionalNote = new FunctionalNote(key, intervals[i]);
			notes.push(functionalNote);
		}
		return notes;
    }
    
    // Render

    render = () => {
        let groups =  this.props.intervalGroups[0].intervals;
        let functionalNotes = this.getFunctionalNotes(this.props.keyDef, groups);
        return e('div', { id: 'viewContainer' },
                e('div', { id: 'notesContainer' }, this.getNoteCollection(functionalNotes, this.props.displaySettings)),
                e('div', { id: 'pianoContainer' }, this.getPiano(functionalNotes, this.props.displaySettings)),
                e('div', { id: 'guitarContainer' }, this.getGuitar(functionalNotes, this.props.displaySettings))
            );
    }
}