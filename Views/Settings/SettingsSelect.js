class SettingsSelect extends React.Component {
	
	constructor(props) {
        super(props);
        this.selectedId = this.props.config.default.id;
    }

    getOptions = () => {
		let options = [];
		for(let i = 0; i < this.props.config.data.length; i++) {
            let option = this.props.config.data[i];
            let displayProp = this.props.config.displayProp || 'name';
            let classes = ['settings-select-option', this.props.config.id + '-' + option.id];
            if(option.id === this.selectedId)
                classes.push('active-setting');
            options.push(e('div', {
                key: this.props.config.id + '-opt-' + i,
                className: classes.join(' '),
                onClick: () => { this.selectedId = option.id; this.props.updateSetting(this.props.config.id, option) }
            }, option[displayProp]));
		}
		return options;
	}

	render = () => {
		return e('div', { id: this.props.id, className: 'settings-select' },
            e('div', { className: 'settings-select-label' }, this.props.config.name),
            this.getOptions()
        );
    };
}