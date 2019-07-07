class BoxSelector extends React.Component {
	
	constructor(props) {
        super(props);
        this.state = {
            selectedId: this.props.defaultId
        };
    }

    getOptions = () => {
		let options = [];
		for(let i = 0; i < this.props.data.length; i++) {
            let option = this.props.data[i];
            let displayProp = this.props.displayProp || 'name';
            let classes = ['box-selector-option', this.props.id + '-' + option.id];
            if(this.props.selected && option.id === this.props.selected.id) classes.push('active-setting');
            options.push(
                e('div', {
                    key: this.props.id + '-opt-' + i,
                    className: classes.join(' '),
                    onClick: () => { this.setState({ selectedId: option.id }); this.props.updateSelection(this.props.id, option) }
                }, option[displayProp])
            );
		}
		return options;
	}

	render = () => {
		return e('div', { id: 'box-selector-' + this.props.id, className: 'box-selector' },
            e('div', { className: 'box-selector-label' }, this.props.name),
            this.getOptions()
        );
    };
}