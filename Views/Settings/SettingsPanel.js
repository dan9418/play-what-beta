class SettingsPanel extends React.Component {
	
	constructor(props) {
        super(props);

        this.state = {};
    }

    update = (name, value) => {
        let update = {};
        update[name] = value;
        this.setState(update);
    }

	render = () => {
        return e('div', { id: 'settings-panel-' + this.props.id },
            e('pre', { id: 'display-text' }, JSON.stringify(this.state)),
            e(SettingsSelect, {
                id: 'concepts',
                options: ALL_CONCEPTS,
                onChange: (event) => { this.update('concepts', event.target.value);} },
                null),
            e(SettingsSelect, {
                id: 'labels',
                options: ALL_LABELS,
                onChange: (event) => { this.update('labels', event.target.value);} },
                null),
            e(SettingsSelect, {
                id: 'intervals',
                options: ALL_INTERVALS,
                onChange: (event) => { this.update('intervals', event.target.value);} },
                null),
            e(SettingsSelect, {
                id: 'homeDegrees',
                options: ALL_HOME_DEGREES,
                onChange: (event) => { this.update('homeDegrees', event.target.value);} },
                null),
            e(SettingsSelect, {
                id: 'accidentals',
                options: ALL_ACCIDENTALS,
                onChange: (event) => { this.update('accidentals', event.target.value);} },
                null),
            e(SettingsSelect, {
                id: 'chords',
                options: ALL_CHORDS,
                onChange: (event) => { this.update('chords', event.target.value);} },
                null),
            e(SettingsSelect, {
                id: 'scales',
                options: ALL_SCALES,
                onChange: (event) => { this.update('scales', event.target.value);} },
                null),
            e(SettingsSelect, {
                id: 'modes',
                options: ALL_MODES,
                onChange: (event) => { this.update('modes', event.target.value);} },
                null),
            e(SettingsSelect, {
                id: 'romanNumerals',
                options: ALL_ROMAN_NUMERALS,
                onChange: (event) => { this.update('romanNumerals', event.target.value);} },
                null)
        );
    };
}