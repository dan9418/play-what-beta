class IntervalSelection extends React.Component {
	
	constructor(props) {
        super(props);
        this.selection = CONFIG.Interval;
        this.state = {
            conceptId: this.props.default
        }
    }

	render = () => {
        return e('div', { id: this.selection.id + '-selection'},
            e(SettingsSelect, {
                id: this.selection.id,
                name: this.selection.name,
                options: this.selection.data,
                displayProp: this.selection.displayProp || 'name',
                default: this.props.default,
                updateSetting: (property, value) => { this.props.updateSetting(property, value) }
            }, null)
        )
    };
}

class ChordSelection extends React.Component {
	
	constructor(props) {
        super(props);
        this.selection = CONFIG.Chord;
        this.state = {
            conceptId: this.props.default
        }
    }

	render = () => {
        return e('div', { id: this.selection.id + '-selection'},
            e(SettingsSelect, {
                id: this.selection.id,
                name: this.selection.name,
                options: this.selection.data,
                displayProp: this.selection.displayProp || 'name',
                default: this.props.default,
                updateSetting: (property, value) => { this.props.updateSetting(property, value) }
            }, null)
        )
    };
}

class ScaleSelection extends React.Component {
	
	constructor(props) {
        super(props);
        this.selection = CONFIG.Scale;
        this.state = {
            conceptId: this.props.default
        }
    }

	render = () => {
        return e('div', { id: this.selection.id + '-selection'},
            e(SettingsSelect, {
                id: this.selection.id,
                name: this.selection.name,
                options: this.selection.data,
                displayProp: this.selection.displayProp || 'name',
                default: this.props.default,
                updateSetting: (property, value) => { this.props.updateSetting(property, value) }
            }, null)
        )
    };
}

class ModeSelection extends React.Component {
	
	constructor(props) {
        super(props);
        this.selection = CONFIG.Mode;
        this.state = {
            conceptId: this.props.default
        }
    }

	render = () => {
        return e('div', { id: this.selection.id + '-selection'},
            e(SettingsSelect, {
                id: this.selection.id,
                name: this.selection.name,
                options: this.selection.data,
                displayProp: this.selection.displayProp || 'name',
                default: this.props.default,
                updateSetting: (property, value) => { this.props.updateSetting(property, value) }
            }, null)
        )
    };
}

class RomanNumeralSelection extends React.Component {
	
	constructor(props) {
        super(props);
        this.selection = CONFIG.RomanNumeral;
        this.state = {
            conceptId: this.props.default
        }
    }

	render = () => {
        return e('div', { id: this.selection.id + '-selection'},
            e(SettingsSelect, {
                id: this.selection.id,
                name: this.selection.name,
                options: this.selection.data,
                displayProp: this.selection.displayProp || 'name',
                default: this.props.default,
                updateSetting: (property, value) => { this.props.updateSetting(property, value) }
            }, null)
        )
    };
}