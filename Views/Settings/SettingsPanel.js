class SettingsPanel extends React.Component {
	
	constructor(props) {
        super(props);

        this.state = {
            intervals: 'choose',
            homeDegrees: 'choose'
		};
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
                id: 'intervals',
                options: ALL_INTERVALS,
                onChange: (event) => { this.update('intervals', event.target.value);} },
                null),
            e(SettingsSelect, {
                id: 'homeDegrees',
                options: ALL_HOME_DEGREES,
                onChange: (event) => { this.update('homeDegrees', event.target.value);} },
                null)
        );
    };
}