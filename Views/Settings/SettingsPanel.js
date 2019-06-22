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
                    default: this.props.defaultSettings[CONCEPTS.Interval.id],
                    updateSetting: this.props.updateSetting
                }, null);
            case CONCEPTS.Chord.id:
                return e(ChordSelection, {
                    default: this.props.defaultSettings[CONCEPTS.Chord.id],
                    updateSetting: this.props.updateSetting
                }, null);
            case CONCEPTS.Scale.id:
                return e(ScaleSelection, {
                    default: this.props.defaultSettings[CONCEPTS.Scale.id],
                    updateSetting: this.props.updateSetting
                }, null);
            case CONCEPTS.Mode.id:
                return e(ModeSelection, {
                    default: this.props.defaultSettings[CONCEPTS.Mode.id],
                    updateSetting: this.props.updateSetting
                }, null);
            case CONCEPTS.RomanNumeral.id:
                return e(RomanNumeralSelection, {
                    default: this.props.defaultSettings[CONCEPTS.RomanNumeral.id],
                    updateSetting: this.props.updateSetting
                }, null);
        }
    }

	render = () => {
        return e('div', { id: 'top-bar' },
            e('div', { id: 'top-bar-key'},
                e(SettingsSelect, {
                    id: CONFIG.HomeDegree.id,
                    name: CONFIG.HomeDegree.name,
                    options: CONFIG.HomeDegree.data,
                    displayProp: CONFIG.HomeDegree.displayProp || 'name',
                    default: this.props.defaultSettings[CONFIG.HomeDegree.id],
                    updateSetting: (property, value) => { this.props.updateSetting(property, value) }
                }, null),
                e(SettingsSelect, {
                    id: CONFIG.Accidental.id,
                    name: CONFIG.Accidental.name,
                    options: CONFIG.Accidental.data,
                    displayProp: CONFIG.Accidental.displayProp || 'name',
                    default: this.props.defaultSettings[CONFIG.Accidental.id],
                    updateSetting: (property, value) => { this.props.updateSetting(property, value) }
                }, null)
            ),
            e('div', { id: 'top-bar-concept'},
                e(SettingsSelect, {
                    id: CONFIG.Concept.id,
                    name: CONFIG.Concept.name,
                    options: CONFIG.Concept.data,
                    displayProp: CONFIG.Concept.displayProp || 'name',
                    default: this.props.defaultSettings[CONFIG.Concept.id],
                    updateSetting: (property, value) => { this.setState({ conceptId: value.id }); this.props.updateSetting(property, value) }
                }, null)
            ),
            e('div', { id: 'top-bar-concept-options'},
                this.getConceptOptions()
            ),
            e('div', { id: 'top-bar-label'},
                e(SettingsSelect, {
                    id: CONFIG.Label.id,
                    name: CONFIG.Label.name,
                    options: CONFIG.Label.data,
                    displayProp: CONFIG.Label.displayProp || 'name',
                    default: this.props.defaultSettings[CONFIG.Label.id],
                    updateSetting: (property, value) => { this.props.updateSetting(property, value) }
                }, null)
            ),
            e('div', {}, this.getNoteCollection(this.props.notes, null))
        );
    };
}