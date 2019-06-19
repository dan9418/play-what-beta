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
                    onChange: (event) => { this.props.updateSetting(SETTINGS.HomeDegree.id, event.target.value); }
                }, null),
            e(SettingsSelect, {
                id: SETTINGS.Accidental.id,
                name: SETTINGS.Accidental.name,
                options: SETTINGS.Accidental.data,
                default: this.props.defaultSettings[SETTINGS.Accidental.id],
                onChange: (event) => { this.props.updateSetting(SETTINGS.Accidental.id, event.target.value); }
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
                    onChange: (event) => { this.props.updateSetting(SETTINGS.Label.id, event.target.value); }
                }, null)
        );
    };
}

class ConceptSelection extends React.Component {
	
	constructor(props) {
        super(props);
        this.state = {
            conceptId: this.props.defaultSettings[SETTINGS.Concept.id]
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
                    onChange: (event) => { this.setState({conceptId: event.target.value}); this.props.updateSetting(SETTINGS.Concept.id, event.target.value); }
                }, null),
            (this.state.conceptId === SETTINGS.Interval.id && e(SettingsSelect, {
                id: SETTINGS.Interval.id,
                name: SETTINGS.Interval.name,
                options: SETTINGS.Interval.data,
                default: this.props.defaultSettings[SETTINGS.Interval.id],
                onChange: (event) => { this.props.updateSetting(SETTINGS.Interval.id, event.target.value); }
            }, null)),
            (this.state.conceptId === SETTINGS.Chord.id && e(SettingsSelect, {
                id: SETTINGS.Chord.id,
                name: SETTINGS.Chord.name,
                options: SETTINGS.Chord.data,
                default: this.props.defaultSettings[SETTINGS.Chord.id],
                onChange: (event) => { this.props.updateSetting(SETTINGS.Chord.id, event.target.value); }
            }, null)),
            (this.state.conceptId === SETTINGS.Scale.id && e(SettingsSelect, {
                id: SETTINGS.Scale.id,
                name: SETTINGS.Scale.name,
                options: SETTINGS.Scale.data,
                default: this.props.defaultSettings[SETTINGS.Scale.id],
                onChange: (event) => { this.props.updateSetting(SETTINGS.Scale.id, event.target.value); }
            }, null)),
            (this.state.conceptId === SETTINGS.Mode.id && e(SettingsSelect, {
                id: SETTINGS.Mode.id,
                name: SETTINGS.Mode.name,
                options: SETTINGS.Mode.data,
                default: this.props.defaultSettings[SETTINGS.Mode.id],
                onChange: (event) => { this.props.updateSetting(SETTINGS.Mode.id, event.target.value); }
            }, null)),
            (this.state.conceptId === SETTINGS.RomanNumeral.id && e(SettingsSelect, {
                id: SETTINGS.RomanNumeral.id,
                name: SETTINGS.RomanNumeral.name,
                options: SETTINGS.RomanNumeral.data,
                default: this.props.defaultSettings[SETTINGS.RomanNumeral.id],
                onChange: (event) => { this.props.updateSetting(SETTINGS.RomanNumeral.id, event.target.value); }
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