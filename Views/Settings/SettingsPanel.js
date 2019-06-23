class SettingsPanel extends React.Component {
	
	constructor(props) {
        super(props);
        this.state = this.props.defaultSettings;
    }

    updateSetting = (property, value) => {
        let update = {};
        update[property] = value;
        this.setState(update);
        this.props.updateSetting(property, value);
    }

    getConceptOptions = () => {
        switch(this.state.concept.id) {
            case CONCEPTS.Interval.id:
                return e(IntervalSelection, { updateSetting: this.updateSetting }, null);
            case CONCEPTS.Chord.id:
                return e(ChordSelection, { updateSetting: this.updateSetting }, null);
            case CONCEPTS.Scale.id:
                return e(ScaleSelection, { updateSetting: this.updateSetting }, null);
            case CONCEPTS.Mode.id:
                return e(ModeSelection, { updateSetting: this.updateSetting }, null);
            case CONCEPTS.RomanNumeral.id:
                return e(RomanNumeralSelection, { updateSetting: this.updateSetting }, null);
        }
    }

	render = () => {
        return e('div', { id: 'top-bar' },
            e('div', { id: 'top-bar-key'},
                e(HomeDegreeSelection, { updateSetting: this.updateSetting }, null),
                e(AccidentalSelection, { updateSetting: this.updateSetting }, null)
            ),
            e('div', { id: 'top-bar-concept'},
                e(ConceptSelection, { updateSetting: this.updateSetting }, null)
            ),
            e('div', { id: 'top-bar-concept-options'},
                this.getConceptOptions()
            ),
            /*e('div', { id: 'top-bar-label'},
                e(LabelSelection, { updateSetting: this.updateSetting }, null)
            ),*/
            e('div', { id: 'top-bar-pitch-classes' },
                e(NoteCollection, { functionalNotes: this.props.notes, displaySettings: null }, null)
            )
        );
    };
}