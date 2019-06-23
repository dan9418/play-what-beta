class SettingsPanel extends React.Component {
	
	constructor(props) {
        super(props);
        this.state = {
            conceptId: this.props.defaultSettings['concept'].id
        }
    }

    getNoteCollection = (notes, displaySettings) => {
        return e(NoteCollection, {
            functionalNotes: notes,
            displaySettings: displaySettings
        }, null);
    }

    getConceptOptions = () => {
        switch(this.state.conceptId) {
            case CONCEPTS.Interval.id:
                return e(IntervalSelection, {
                    updateSetting: this.props.updateSetting
                }, null);
            case CONCEPTS.Chord.id:
                return e(ChordSelection, {
                    updateSetting: this.props.updateSetting
                }, null);
            case CONCEPTS.Scale.id:
                return e(ScaleSelection, {
                    updateSetting: this.props.updateSetting
                }, null);
            case CONCEPTS.Mode.id:
                return e(ModeSelection, {
                    updateSetting: this.props.updateSetting
                }, null);
            case CONCEPTS.RomanNumeral.id:
                return e(RomanNumeralSelection, {
                    updateSetting: this.props.updateSetting
                }, null);
        }
    }

	render = () => {
        return e('div', { id: 'top-bar' },
            e('div', { id: 'top-bar-key'},
                e(SettingsSelect, {
                    config: CONFIG.HomeDegree,
                    updateSetting: (property, value) => { this.props.updateSetting(property, value) }
                }, null),
                e(SettingsSelect, {
                    config: CONFIG.Accidental,
                    updateSetting: (property, value) => { this.props.updateSetting(property, value) }
                }, null)
            ),
            e('div', { id: 'top-bar-concept'},
                e(SettingsSelect, {
                    config: CONFIG.Concept,
                    updateSetting: (property, value) => { this.setState({ conceptId: value.id }); this.props.updateSetting(property, value) }
                }, null)
            ),
            e('div', { id: 'top-bar-concept-options'},
                this.getConceptOptions()
            ),
            e('div', { id: 'top-bar-label'},
                e(SettingsSelect, {
                    config: CONFIG.Label,
                    updateSetting: (property, value) => { this.props.updateSetting(property, value) }
                }, null)
            ),
            e('div', {}, this.getNoteCollection(this.props.notes, null))
        );
    };
}