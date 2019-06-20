class KeySelection extends React.Component {
	
	constructor(props) {
        super(props);
    }

	render = () => {
        return e('div', { id: 'settings-subpanel-' + this.props.id, className: 'settings-subpanel' },
            e(SettingsSelect, {
                    id: SETTINGS.HomeDegree.id,
                    name: SETTINGS.HomeDegree.name,
                    options: SETTINGS.HomeDegree.data,
                    default: this.props.defaultSettings[SETTINGS.HomeDegree.id],
                    updateSetting: this.props.updateSetting
                }, null),
            e(SettingsSelect, {
                id: SETTINGS.Accidental.id,
                name: SETTINGS.Accidental.name,
                options: SETTINGS.Accidental.data,
                default: this.props.defaultSettings[SETTINGS.Accidental.id],
                updateSetting: this.props.updateSetting
            }, null)
        );
    };
}

class DisplaySelection extends React.Component {
	
	constructor(props) {
        super(props);
    }

	render = () => {
        return e('div', { id: 'settings-subpanel-' + this.props.id, className: 'settings-subpanel' },
            e(SettingsSelect, {
                    id: SETTINGS.Label.id,
                    name: SETTINGS.Label.name,
                    options: SETTINGS.Label.data,
                    default: this.props.defaultSettings[SETTINGS.Label.id],
                    updateSetting: this.props.updateSetting
                }, null)
        );
    };
}

class ConceptSelection extends React.Component {
	
	constructor(props) {
        super(props);
        this.state = {
            conceptId: this.props.defaultSettings[SETTINGS.Concept.id].id
        }
    }

	render = () => {
        return e('div', { id: 'settings-subpanel-' + this.props.id, className: 'settings-subpanel' },
        //e('pre', { id: 'display-text' }, JSON.stringify(this.state)),    
        e(SettingsSelect, {
                    id: SETTINGS.Concept.id,
                    name: SETTINGS.Concept.name,
                    options: SETTINGS.Concept.data,
                    default: this.props.defaultSettings[SETTINGS.Concept.id],
                    updateSetting: (property, value) => { this.setState({ conceptId: value.id }); this.props.updateSetting(property, value) }
                }, null),
            (this.state.conceptId === SETTINGS.Interval.id && e(SettingsSelect, {
                id: SETTINGS.Interval.id,
                name: SETTINGS.Interval.name,
                options: SETTINGS.Interval.data,
                default: this.props.defaultSettings[SETTINGS.Interval.id],
                updateSetting: this.props.updateSetting
            }, null)),
            (this.state.conceptId === SETTINGS.Chord.id && e(SettingsSelect, {
                id: SETTINGS.Chord.id,
                name: SETTINGS.Chord.name,
                options: SETTINGS.Chord.data,
                default: this.props.defaultSettings[SETTINGS.Chord.id],
                updateSetting: this.props.updateSetting
            }, null)),
            (this.state.conceptId === SETTINGS.Scale.id && e(SettingsSelect, {
                id: SETTINGS.Scale.id,
                name: SETTINGS.Scale.name,
                options: SETTINGS.Scale.data,
                default: this.props.defaultSettings[SETTINGS.Scale.id],
                updateSetting: this.props.updateSetting
            }, null)),
            (this.state.conceptId === SETTINGS.Mode.id && e(SettingsSelect, {
                id: SETTINGS.Mode.id,
                name: SETTINGS.Mode.name,
                options: SETTINGS.Mode.data,
                default: this.props.defaultSettings[SETTINGS.Mode.id],
                updateSetting: this.props.updateSetting
            }, null)),
            (this.state.conceptId === SETTINGS.RomanNumeral.id && e(SettingsSelect, {
                id: SETTINGS.RomanNumeral.id,
                name: SETTINGS.RomanNumeral.name,
                options: SETTINGS.RomanNumeral.data,
                default: this.props.defaultSettings[SETTINGS.RomanNumeral.id],
                updateSetting: this.props.updateSetting
            }, null))
        );
    };
}

class SettingsPanel extends React.Component {
	
	constructor(props) {
        super(props);
    }

	render = () => {
        return e('div', { id: 'settings-panel-' + this.props.id, className: 'settings-panel' },
            e(KeySelection, { id: 'key', updateSetting: this.props.updateSetting, defaultSettings: this.props.defaultSettings }, null),
            e(ConceptSelection, { id: 'concept', updateSetting: this.props.updateSetting, defaultSettings: this.props.defaultSettings }, null),
            e(DisplaySelection, { id: 'display', updateSetting: this.props.updateSetting, defaultSettings: this.props.defaultSettings }, null)
        );
    };
}