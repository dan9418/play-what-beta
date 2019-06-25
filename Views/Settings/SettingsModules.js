class HomeDegreeSelection extends React.Component {
	
	constructor(props) {
        super(props);
        this.config = CONFIG.HomeDegree;
    }

	render = () => {
        return e('div', { id: this.config.id + '-selection', className: 'selection-container' },
            e(SettingsSelect, {
                config: this.config,
                driverState: this.props.driverState,
                updateDriverState: this.props.updateDriverState
            }, null)
        )
    };
}

class AccidentalSelection extends React.Component {
	
	constructor(props) {
        super(props);
        this.config = CONFIG.Accidental;
    }

	render = () => {
        return e('div', { id: this.config.id + '-selection', className: 'selection-container' },
            e(SettingsSelect, {
                config: this.config,
                driverState: this.props.driverState,
                updateDriverState: this.props.updateDriverState
            }, null)
        )
    };
}

class ConceptSelection extends React.Component {
	
	constructor(props) {
        super(props);
        this.config = CONFIG.Concept;
    }

	render = () => {
        return e('div', { id: this.config.id + '-selection', className: 'selection-container' },
            e(SettingsSelect, {
                config: this.config,
                driverState: this.props.driverState,
                updateDriverState: this.props.updateDriverState
            }, null)
        )
    };
}

class IntervalSelection extends React.Component {
	
	constructor(props) {
        super(props);
        this.config = CONFIG.Interval;
    }

	render = () => {
        return e('div', { id: this.config.id + '-selection', className: 'selection-container' },
            e(SettingsSelect, {
                config: this.config,
                driverState: this.props.driverState,
                updateDriverState: this.props.updateDriverState
            }, null)
        )
    };
}

class ChordSelection extends React.Component {
	
	constructor(props) {
        super(props);
        this.config = CONFIG.Chord;
    }

	render = () => {
        return e('div', { id: this.config.id + '-selection', className: 'selection-container' },
            e(SettingsSelect, {
                config: this.config,
                driverState: this.props.driverState,
                updateDriverState: this.props.updateDriverState
            }, null)
        )
    };
}

class ScaleSelection extends React.Component {
	
	constructor(props) {
        super(props);
        this.config = CONFIG.Scale;
    }

	render = () => {
        return e('div', { id: this.config.id + '-selection', className: 'selection-container' },
            e(SettingsSelect, {
                config: this.config,
                driverState: this.props.driverState,
                updateDriverState: this.props.updateDriverState
            }, null)
        )
    };
}

class ModeSelection extends React.Component {
	
	constructor(props) {
        super(props);
        this.config = CONFIG.Mode;
    }

	render = () => {
        return e('div', { id: this.config.id + '-selection', className: 'selection-container' },
            e(SettingsSelect, {
                config: this.config,
                driverState: this.props.driverState,
                updateDriverState: this.props.updateDriverState
            }, null)
        )
    };
}

class RomanNumeralSelection extends React.Component {
	
	constructor(props) {
        super(props);
        this.config = CONFIG.RomanNumeral;
    }

	render = () => {
        return e('div', { id: this.config.id + '-selection', className: 'selection-container' },
            e(SettingsSelect, {
                config: this.config,
                driverState: this.props.driverState,
                updateDriverState: this.props.updateDriverState
            }, null)
        )
    };
}



class LabelSelection extends React.Component {
	
	constructor(props) {
        super(props);
        this.config = CONFIG.Label;
    }

    getOptions = () => {
        let options = [];
        for(let i = 0; i < this.config.data.length; i++) {
            let data = this.config.data[i];
            options.push(e('option', { id: data.id, key: data.id, value: data.id, className: 'select-option' }, data.name));
        }
        return options;
    }

	render = () => {
        return e('div', { id: this.config.id + '-selection', className: 'dropdown-container' },
            e('select', {
                defaultValue: this.config.default.id,
                onChange: (event) => { this.props.updateDriverState(this.config.id, event.target.value) },
            }, this.getOptions())
        )
    };
}