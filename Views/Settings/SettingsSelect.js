class SettingsSelect extends React.Component {
	
	constructor(props) {
        super(props);
    }

    getOptions = () => {
		let options = [];
		for(let i = 0; i < this.props.config.data.length; i++) {
            let option = this.props.config.data[i];
            let displayProp = this.props.config.displayProp || 'name';
            let classes = ['settings-select-option'];
            if(this.props.config.default.id === option.id)
                classes.push('active-setting');
			    options.push(e('div', {
                    key: this.props.config.id + '-opt-' + i,
                    className: classes.join(' '),
                    onClick: () => { this.props.updateSetting(this.props.config.id, option) }
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