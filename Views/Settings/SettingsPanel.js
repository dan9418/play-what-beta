/*class SettingManager extends React.Component {
	
	constructor(props) {
        super(props);
        this.state = {
            conceptId: this.props.defaultSettings[this.props.setting.id].id
        }
    }

    getChildren = () => {
        let children = [];
        if(this.props.setting.children) {
            for(let i = 0; i < this.props.setting.children.length; i++) {
                let child = this.props.setting.children[i];
                if(this.state.conceptId === child.condition) {
                    children.push(e(SettingManager, {
                        key: 'settings-' + this.props.setting.id + '-child-' + i,
                        setting: child,
                        defaultSettings: this.props.defaultSettings,
                        updateSetting: this.props.updateSetting
                    }, null));
                }
            }
        }
        return children;
    };

	render = () => {
        return (e('div', { className: 'setting-manager' },
            e(SettingsSelect, {
                key: 'settings-' + this.props.setting.id,
                id: this.props.setting.id,
                name: this.props.setting.name,
                options: this.props.setting.data,
                displayProp: this.props.setting.displayProp || 'name',
                default: this.props.defaultSettings[this.props.setting.id],
                updateSetting: (property, value) => { this.setState({ conceptId: value.id }); this.props.updateSetting(property, value) }
            }, null),
            this.getChildren()
        ));
    };
}*/

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

class SettingsPanel extends React.Component {
	
	constructor(props) {
        super(props);
        this.state = {
            conceptId: this.props.defaultSettings['concept'].id
        }
    }

    getNoteCollection = (notes, displaySettings) => {
        return e(NoteCollection, {
            functionalNotes: notes,
            displaySettings: displaySettings
        }, null);
    }

    getConceptOptions = () => {
        switch(this.state.conceptId) {
            case CONCEPTS.Interval.id:
                return e(IntervalSelection, {
                    default: this.props.defaultSettings[CONCEPTS.Interval.id],
                    updateSetting: this.props.updateSetting
                }, null);
            case CONCEPTS.Chord.id:
                return e(ChordSelection, {
                    default: this.props.defaultSettings[CONCEPTS.Chord.id],
                    updateSetting: this.props.updateSetting
                }, null);
            case CONCEPTS.Scale.id:
                return e(ScaleSelection, {
                    default: this.props.defaultSettings[CONCEPTS.Scale.id],
                    updateSetting: this.props.updateSetting
                }, null);
            case CONCEPTS.Mode.id:
                return e(ModeSelection, {
                    default: this.props.defaultSettings[CONCEPTS.Mode.id],
                    updateSetting: this.props.updateSetting
                }, null);
            case CONCEPTS.RomanNumeral.id:
                return e(RomanNumeralSelection, {
                    default: this.props.defaultSettings[CONCEPTS.RomanNumeral.id],
                    updateSetting: this.props.updateSetting
                }, null);
        }
    }

	render = () => {
        return e('div', { id: 'top-bar' },
            e('div', { id: 'top-bar-key'},
                e(SettingsSelect, {
                    id: CONFIG.HomeDegree.id,
                    name: CONFIG.HomeDegree.name,
                    options: CONFIG.HomeDegree.data,
                    displayProp: CONFIG.HomeDegree.displayProp || 'name',
                    default: this.props.defaultSettings[CONFIG.HomeDegree.id],
                    updateSetting: (property, value) => { this.props.updateSetting(property, value) }
                }, null),
                e(SettingsSelect, {
                    id: CONFIG.Accidental.id,
                    name: CONFIG.Accidental.name,
                    options: CONFIG.Accidental.data,
                    displayProp: CONFIG.Accidental.displayProp || 'name',
                    default: this.props.defaultSettings[CONFIG.Accidental.id],
                    updateSetting: (property, value) => { this.props.updateSetting(property, value) }
                }, null)
            ),
            e('div', { id: 'top-bar-concept'},
                e(SettingsSelect, {
                    id: CONFIG.Concept.id,
                    name: CONFIG.Concept.name,
                    options: CONFIG.Concept.data,
                    displayProp: CONFIG.Concept.displayProp || 'name',
                    default: this.props.defaultSettings[CONFIG.Concept.id],
                    updateSetting: (property, value) => { this.setState({ conceptId: value.id }); this.props.updateSetting(property, value) }
                }, null)
            ),
            e('div', { id: 'top-bar-concept-options'},
                this.getConceptOptions()
            ),
            e('div', { id: 'top-bar-label'},
                e(SettingsSelect, {
                    id: CONFIG.Label.id,
                    name: CONFIG.Label.name,
                    options: CONFIG.Label.data,
                    displayProp: CONFIG.Label.displayProp || 'name',
                    default: this.props.defaultSettings[CONFIG.Label.id],
                    updateSetting: (property, value) => { this.props.updateSetting(property, value) }
                }, null)
            ),
            e('div', {}, this.getNoteCollection(this.props.notes, null))
        );
    };
}