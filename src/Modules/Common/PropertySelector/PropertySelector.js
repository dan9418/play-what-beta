class PropertySelector extends React.Component {
	
	constructor(props) {
        super(props);
        this.state = {
            selectedId: this.props.defaultId
        };
    }

    getOptions = () => {
		let options = [];
		for(let key in this.props.data) {
            let option = key;
            let displayProp = this.props.displayProp || 'name';
            let classes = ['property-selector-option', this.props.id + '-' + option.id];
            if(option.id === this.state.selectedId) classes.push('active-setting');
            options.push(
                e('div', {
                    key: this.props.id + '-opt-' + option.id,
                    className: classes.join(' '),
                    onClick: () => { this.setState({ selectedId: option.id }); this.props.updateSelection(this.props.id, option) }
                }, this.props.data[key])
            );
		}
		return options;
	}

	render = () => {
		return e('div', { id: 'property-selector-' + this.props.id, className: 'property-selector' },
            e('div', { className: 'property-selector-label' }, this.props.name),
            this.getOptions()
        );
    };
}