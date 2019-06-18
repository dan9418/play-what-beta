class SettingsPanel extends React.Component {
	
	constructor(props) {
        super(props);
        this.state = {};

        this.settings = [
            { id: 'concept', data: ALL_CONCEPTS },
            { id: 'label', data: ALL_LABELS },
            { id: 'interval', data: ALL_INTERVALS },
            { id: 'homeDegree', data: ALL_HOME_DEGREES },
            { id: 'accidental', data: ALL_ACCIDENTALS },
            { id: 'chord', data: ALL_CHORDS },
            { id: 'scale', data: ALL_SCALES },
            { id: 'mode', data: ALL_MODES },
            { id: 'romanNumeral', data: ALL_ROMAN_NUMERALS }
        ]
    }

    update = (name, value) => {
        let update = {};
        update[name] = value;
        this.setState(update);
    }

    getSettings = () => {
        let settings = [];
        for(let i = 0; i < this.settings.length; i++) {
            settings.push(e(SettingsSelect, {
                key: 'settings-' + this.settings[i].id,
                id: this.settings[i].id,
                options: this.settings[i].data,
                onChange: (event) => { this.update(this.settings[i].id, event.target.value);} },
                null));
        }
        return settings;
    }

	render = () => {
        return e('div', { id: 'settings-panel-' + this.props.id, className: 'settings-panel' },
            e('pre', { id: 'display-text' }, JSON.stringify(this.state)),
            this.getSettings()
        );
    };
}