class SettingsTab extends React.Component {
	
	constructor(props) {
        super(props);
    }

    update = (name, value) => {
        let update = {};
        update[name] = value;
        this.setState(update);
    }

    getSettings = () => {
        let settings = [];
        for(let i = 0; i < this.props.settings.length; i++) {
            settings.push(e(SettingsSelect, {
                key: 'settings-' + this.props.settings[i].id,
                id: this.props.settings[i].id,
                name: this.props.settings[i].name,
                options: this.props.settings[i].data,
                onChange: (event) => { this.props.updateSetting(this.props.settings[i].id, event.target.value); } },
                null));
        }
        return settings;
    }

	render = () => {
        return e('div', { id: this.props.id, className: 'settings-tab' },
            this.getSettings()
        );
    };
}