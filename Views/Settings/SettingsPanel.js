class SettingManager extends React.Component {
	
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
}

class SettingsPanel extends React.Component {
	
	constructor(props) {
        super(props);
        this.state = {
            conceptId: this.props.defaultSettings[SELECT_CONCEPT.id]
        }
    }

    getSettingManagers = (settingsConfig) => {
        let settings = [];
        for(let i = 0; i < settingsConfig.length; i++) {
            let setting = settingsConfig[i];
            settings.push(e(SettingManager, {
                key: 'parent-setting-' + setting.id,
                setting: setting,
                defaultSettings: this.props.defaultSettings,
                updateSetting: this.props.updateSetting
            }, null));
        }
        return settings;
    };

    getNoteCollection = (notes, displaySettings) => {
        return e(NoteCollection, {
            functionalNotes: notes,
            displaySettings: displaySettings
        }, null);
    }

    getConceptOptions = () => {
        let children = [];
        if(SELECT_CONCEPT.children) {
            for(let i = 0; i < SELECT_CONCEPT.children.length; i++) {
                let child = SELECT_CONCEPT.children[i];
                if(this.state.conceptId === child.condition) {
                    children.push(e(SettingsSelect, {
                        key: 'settings-' + SELECT_CONCEPT.id + '-child-' + i,
                        id: child.id,
                        name: child.name,
                        options: child.data,
                        displayProp: child.displayProp || 'name',
                        default: this.props.defaultSettings[child.id],
                        updateSetting: (property, value) => { this.props.updateSetting(property, value) }
                    }, null));
                }
            }
        }
        return children;
    }

	render = () => {
        return e('div', { id: 'top-bar' },
            e('div', { id: 'top-bar-key'},
                e(SettingsSelect, {
                    id: SELECT_HOME_DEGREE.id,
                    name: SELECT_HOME_DEGREE.name,
                    options: SELECT_HOME_DEGREE.data,
                    displayProp: SELECT_HOME_DEGREE.displayProp || 'name',
                    default: this.props.defaultSettings[SELECT_HOME_DEGREE.id],
                    updateSetting: (property, value) => { this.props.updateSetting(property, value) }
                }, null),
                e(SettingsSelect, {
                    id: SELECT_ACCIDENTAL.id,
                    name: SELECT_ACCIDENTAL.name,
                    options: SELECT_ACCIDENTAL.data,
                    displayProp: SELECT_ACCIDENTAL.displayProp || 'name',
                    default: this.props.defaultSettings[SELECT_ACCIDENTAL.id],
                    updateSetting: (property, value) => { this.props.updateSetting(property, value) }
                }, null)
            ),
            e('div', { id: 'top-bar-concept'},
                e(SettingsSelect, {
                    id: SELECT_CONCEPT.id,
                    name: SELECT_CONCEPT.name,
                    options: SELECT_CONCEPT.data,
                    displayProp: SELECT_CONCEPT.displayProp || 'name',
                    default: this.props.defaultSettings[SELECT_CONCEPT.id],
                    updateSetting: (property, value) => { this.setState({ conceptId: value.id }); this.props.updateSetting(property, value) }
                }, null)
            ),
            e('div', { id: 'top-bar-concept-options'},
                this.getConceptOptions()
            ),
            e('div', { id: 'top-bar-label'},
                e(SettingsSelect, {
                    id: SELECT_LABEL.id,
                    name: SELECT_LABEL.name,
                    options: SELECT_LABEL.data,
                    displayProp: SELECT_LABEL.displayProp || 'name',
                    default: this.props.defaultSettings[SELECT_LABEL.id],
                    updateSetting: (property, value) => { this.props.updateSetting(property, value) }
                }, null)
            ),
            e('div', {}, this.getNoteCollection(this.props.notes, null))
        );
    };
}