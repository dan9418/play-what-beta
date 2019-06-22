class SettingsSelect extends React.Component {
	
	constructor(props) {
        super(props);
    }

    getOptions = () => {
		let options = [];
		for(let i = 0; i < this.props.options.length; i++) {
            let classes = ['settings-select-option'];
            if(this.props.default.id === this.props.options[i].id)
                classes.push('active-setting');
			options.push(e('div', {
                key: this.props.id + '-opt-' + i,
                className: classes.join(' '),
                onClick: () => { this.props.updateSetting(this.props.id, this.props.options[i]) }
            }, this.props.options[i][this.props.displayProp]));
		}
		return options;
	}

	render = () => {
		return e('div', { id: this.props.id, className: 'settings-select' },
            e('div', { className: 'settings-select-label' }, this.props.name),
            this.getOptions()
        );
    };
}