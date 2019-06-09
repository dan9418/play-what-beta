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

    getViewForGroups = (key, groups, displaySettings) => {
        let noteViews = [];
        let pianoViews = [];
        let guitarViews = [];
        for(let i = 0; i < groups.length; i++) {
            let group = groups[i];

            if(group.relativeDegree)
                key = new Key((key.homeDegree - 1 + group.relativeDegree - 1) % 7 + 1, key.accidental);

            let functionalNotes = this.getFunctionalNotes(key, group.intervals);
            noteViews.push(e('div', { id: 'notesContainer' }, e('div', { className: 'group-label' }, group.name), this.getNoteCollection(functionalNotes, this.props.displaySettings)));
            pianoViews.push(e('div', { id: 'pianoContainer' }, e('div', { className: 'group-label' }, group.name), this.getPiano(functionalNotes, this.props.displaySettings))),
            guitarViews.push(e('div', { id: 'guitarContainer' }, e('div', { className: 'group-label' }, group.name), this.getGuitar(functionalNotes, this.props.displaySettings)))
        }
        return e('div', { id: 'viewContainer' }, noteViews, pianoViews, guitarViews);
    }

    render = () => {
        return this.getViewForGroups(this.props.keyDef, this.props.intervalGroups, this.props.displaySettings);
    }
}