class SettingsPanel extends React.Component {
	
	constructor(props) {
        super(props);
    }

    getConceptOptions = () => {
        switch(this.props.driverState.concept.id) {
            case CONCEPTS.Interval.id:
                return e(IntervalSelection, { config: CONFIG.Interval, driverState: this.props.driverState, updateDriverState: this.props.updateDriverState }, null);
            case CONCEPTS.Chord.id:
                return e(ChordSelection, { config: CONFIG.Chord, driverState: this.props.driverState, updateDriverState: this.props.updateDriverState }, null);
            case CONCEPTS.Scale.id:
                return e(ScaleSelection, { config: CONFIG.Scale, driverState: this.props.driverState, updateDriverState: this.props.updateDriverState }, null);
            case CONCEPTS.Mode.id:
                return e(ModeSelection, { config: CONFIG.Mode, driverState: this.props.driverState, updateDriverState: this.props.updateDriverState }, null);
            case CONCEPTS.RomanNumeral.id:
                return e(RomanNumeralSelection, { config: CONFIG.RomanNumeral, driverState: this.props.driverState, updateDriverState: this.props.updateDriverState }, null);
        }
    }

	render = () => {
        return e('div', { id: 'top-bar' },
            e('div', { id: 'top-bar-key'},
                e(HomeDegreeSelection, { config: CONFIG.HomeDegree, driverState: this.props.driverState, updateDriverState: this.props.updateDriverState }, null),
                e(AccidentalSelection, { config: CONFIG.Accidental, driverState: this.props.driverState, updateDriverState: this.props.updateDriverState }, null)
            ),
            e('div', { id: 'top-bar-concept'},
                e(ConceptSelection, { config: CONFIG.Concept, driverState: this.props.driverState, updateDriverState: this.props.updateDriverState }, null)
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