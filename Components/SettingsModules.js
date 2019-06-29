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
    }

    getOptions = () => {
        let options = [];
        for(let i = 0; i < this.props.config.data.length; i++) {
            let datum = this.props.config.data[i];
            options.push(e('option', { id: datum.id, key: datum.id, value: datum.id, className: 'select-option' }, datum.name));
        }
        return options;
    }

	render = () => {
        return e('div', { id: this.props.config.id + '-selection', className: 'dropdown-container' },
            e('select', {
                defaultValue: this.props.config.default.id,
                onChange: (event) => { this.props.updateViewDriverState(this.props.config.id, event.target.value) },
            }, this.getOptions())
        )
    };
}