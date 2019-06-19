class SettingsSelect extends React.Component {
	
	constructor(props) {
        super(props);
    }

    getOptions = () => {
		let options = [];
		for(let i = 0; i < this.props.options.length; i++) {
			options.push(e('option', {
                key: this.props.id + '-opt-' + i,
                className: 'settings-select-dropdown-option',
                value: this.props.options[i].id
            }, this.props.options[i].name));
		}
		return options;
	}

	render = () => {
		return e('div', { id: this.props.id, className: 'settings-select' },
            e('div', { className: 'settings-select-label' }, this.props.name),
            e('select', { className: 'settings-select-dropdown', onChange: this.props.onChange },
                this.getOptions()
            ),
        );
    };
}