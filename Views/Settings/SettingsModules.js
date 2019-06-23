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

	render = () => {
        return e('div', { id: this.config.id + '-selection', className: 'selection-container' },
            e(SettingsSelect, {
                config: this.config,
                updateSetting: (property, value) => { this.props.updateSetting(property, value) }
            }, null)
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