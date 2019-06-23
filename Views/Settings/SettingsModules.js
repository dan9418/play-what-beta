class HomeDegreeSelection extends React.Component {
	
	constructor(props) {
        super(props);
        this.config = CONFIG.HomeDegree;
        this.state = {
            homeDegreeId: this.config.default
        }
    }

	render = () => {
        return e('div', { id: this.config.id + '-selection', className: 'selection-container' },
            e(SettingsSelect, {
                config: this.config,
                updateSetting: (property, value) => { this.props.updateSetting(property, value) }
            }, null)
        )
    };
}

class AccidentalSelection extends React.Component {
	
	constructor(props) {
        super(props);
        this.config = CONFIG.Accidental;
        this.state = {
            accidentalId: this.config.default
        }
    }

	render = () => {
        return e('div', { id: this.config.id + '-selection', className: 'selection-container' },
            e(SettingsSelect, {
                config: this.config,
                updateSetting: (property, value) => { this.props.updateSetting(property, value) }
            }, null)
        )
    };
}

class ConceptSelection extends React.Component {
	
	constructor(props) {
        super(props);
        this.config = CONFIG.Concept;
        this.state = {
            conceptId: this.config.default
        }
    }

	render = () => {
        return e('div', { id: this.config.id + '-selection', className: 'selection-container' },
            e(SettingsSelect, {
                config: this.config,
                updateSetting: (property, value) => { this.props.updateSetting(property, value) }
            }, null)
        )
    };
}

class LabelSelection extends React.Component {
	
	constructor(props) {
        super(props);
        this.config = CONFIG.Label;
        this.state = {
            labelId: this.config.default
        }
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
                onChange: (event) => { this.props.updateSetting(this.config.id, event.target.value) },
            }, this.getOptions())
        )
    };
}

class IntervalSelection extends React.Component {
	
	constructor(props) {
        super(props);
        this.config = CONFIG.Interval;
        this.state = {
            intervalId: this.config.default
        }
    }

	render = () => {
        return e('div', { id: this.config.id + '-selection', className: 'selection-container' },
            e(SettingsSelect, {
                config: this.config,
                updateSetting: (property, value) => { this.props.updateSetting(property, value) }
            }, null)
        )
    };
}

class ChordSelection extends React.Component {
	
	constructor(props) {
        super(props);
        this.config = CONFIG.Chord;
        this.state = {
            chordId: this.config.default
        }
    }

	render = () => {
        return e('div', { id: this.config.id + '-selection', className: 'selection-container' },
            e(SettingsSelect, {
                config: this.config,
                updateSetting: (property, value) => { this.props.updateSetting(property, value) }
            }, null)
        )
    };
}

class ScaleSelection extends React.Component {
	
	constructor(props) {
        super(props);
        this.config = CONFIG.Scale;
        this.state = {
            scaleId: this.config.default
        }
    }

	render = () => {
        return e('div', { id: this.config.id + '-selection', className: 'selection-container' },
            e(SettingsSelect, {
                config: this.config,
                updateSetting: (property, value) => { this.props.updateSetting(property, value) }
            }, null)
        )
    };
}

class ModeSelection extends React.Component {
	
	constructor(props) {
        super(props);
        this.config = CONFIG.Mode;
        this.state = {
            modeId: this.config.default
        }
    }

	render = () => {
        return e('div', { id: this.config.id + '-selection', className: 'selection-container' },
            e(SettingsSelect, {
                config: this.config,
                updateSetting: (property, value) => { this.props.updateSetting(property, value) }
            }, null)
        )
    };
}

class RomanNumeralSelection extends React.Component {
	
	constructor(props) {
        super(props);
        this.config = CONFIG.RomanNumeral;
        this.state = {
            romanNumeralId: this.config.default
        }
    }

	render = () => {
        return e('div', { id: this.config.id + '-selection', className: 'selection-container' },
            e(SettingsSelect, {
                config: this.config,
                updateSetting: (property, value) => { this.props.updateSetting(property, value) }
            }, null)
        )
    };
}