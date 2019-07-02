class HomeDegreeSelection extends React.Component {
	
	constructor(props) {
        super(props);
    }

	render = () => {
        return e('div', { id: this.props.config.id + '-selection', className: 'selection-container' },
            e(SettingsSelect, {
                config: this.props.config,
                driverState: this.props.driverState,
                updateDriverState: this.props.updateDriverState
            }, null)
        )
    };
}

class AccidentalSelection extends React.Component {
	
	constructor(props) {
        super(props);
    }

	render = () => {
        return e('div', { id: this.props.config.id + '-selection', className: 'selection-container' },
            e(SettingsSelect, {
                config: this.props.config,
                driverState: this.props.driverState,
                updateDriverState: this.props.updateDriverState
            }, null)
        )
    };
}

class ConceptSelection extends React.Component {
	
	constructor(props) {
        super(props);
    }

	render = () => {
        return e('div', { id: this.props.config.id + '-selection', className: 'selection-container' },
            e(SettingsSelect, {
                config: this.props.config,
                driverState: this.props.driverState,
                updateDriverState: this.props.updateDriverState
            }, null)
        )
    };
}

class IntervalSelection extends React.Component {
	
	constructor(props) {
        super(props);
    }

	render = () => {
        return e('div', { id: this.props.config.id + '-selection', className: 'selection-container' },
            e(SettingsSelect, {
                config: this.props.config,
                driverState: this.props.driverState,
                updateDriverState: this.props.updateDriverState
            }, null)
        )
    };
}

class ChordSelection extends React.Component {
	
	constructor(props) {
        super(props);
    }

	render = () => {
        return e('div', { id: this.props.config.id + '-selection', className: 'selection-container' },
            e(SettingsSelect, {
                config: this.props.config,
                driverState: this.props.driverState,
                updateDriverState: this.props.updateDriverState
            }, null)
        )
    };
}

class ScaleSelection extends React.Component {
	
	constructor(props) {
        super(props);
    }

	render = () => {
        return e('div', { id: this.props.config.id + '-selection', className: 'selection-container' },
            e(SettingsSelect, {
                config: this.props.config,
                driverState: this.props.driverState,
                updateDriverState: this.props.updateDriverState
            }, null)
        )
    };
}

class ModeSelection extends React.Component {
	
	constructor(props) {
        super(props);
    }

	render = () => {
        return e('div', { id: this.props.config.id + '-selection', className: 'selection-container' },
            e(SettingsSelect, {
                config: this.props.config,
                driverState: this.props.driverState,
                updateDriverState: this.props.updateDriverState
            }, null)
        )
    };
}

class RomanNumeralSelection extends React.Component {
	
	constructor(props) {
        super(props);
    }

	render = () => {
        return e('div', { id: this.props.config.id + '-selection', className: 'selection-container' },
            e(SettingsSelect, {
                config: this.props.config,
                driverState: this.props.driverState,
                updateDriverState: this.props.updateDriverState
            }, null)
        )
    };
}



class LabelSelection extends React.Component {
	
	constructor(props) {
        super(props);
        this.config = LABEL_CONFIG.Labels;
    }

    getOptions = () => {
        let options = [];
        for(let i = 0; i < this.config.data.length; i++) {
            let datum = this.config.data[i];
            options.push(e('option', { id: datum.id, key: datum.id, value: datum.id, className: 'select-option' }, datum.name));
        }
        return options;
    }

	render = () => {
        return e('div', { id: this.config.id + '-selection', className: 'dropdown-container' },
            e('select', {
                defaultValue: null,
                onChange: (event) => { this.props.updateViewDriverState(this.config.id, event.target.value) },
            }, this.getOptions())
        )
    };
}