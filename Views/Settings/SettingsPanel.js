class SettingsPanel extends React.Component {
	
	constructor(props) {
        super(props);
    }

    getConceptOptions = () => {
        switch(this.props.driverState.concept.id) {
            case CONCEPTS.Interval.id:
                return e(IntervalSelection, { updateDriverState: this.props.updateDriverState }, null);
            case CONCEPTS.Chord.id:
                return e(ChordSelection, { updateDriverState: this.props.updateDriverState }, null);
            case CONCEPTS.Scale.id:
                return e(ScaleSelection, { updateDriverState: this.props.updateDriverState }, null);
            case CONCEPTS.Mode.id:
                return e(ModeSelection, { updateDriverState: this.props.updateDriverState }, null);
            case CONCEPTS.RomanNumeral.id:
                return e(RomanNumeralSelection, { updateDriverState: this.props.updateDriverState }, null);
        }
    }

	render = () => {
        return e('div', { id: 'top-bar' },
            e('div', { id: 'top-bar-key'},
                e(HomeDegreeSelection, { driverState: this.props.driverState, updateDriverState: this.props.updateDriverState }, null),
                e(AccidentalSelection, { driverState: this.props.driverState, updateDriverState: this.props.updateDriverState }, null)
            ),
            e('div', { id: 'top-bar-concept'},
                e(ConceptSelection, { updateDriverState: this.props.updateDriverState }, null)
            ),
            e('div', { id: 'top-bar-concept-options'},
                this.getConceptOptions()
            ),
            e('div', { id: 'top-bar-pitch-classes' },
                e(NoteCollection, { functionalNotes: this.props.notes }, null)
            )
        );
    };
}