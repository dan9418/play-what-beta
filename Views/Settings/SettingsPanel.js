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
            conceptId: this.props.defaultSettings[CONCEPT_TREE[0].id]
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
        if(CONCEPT_TREE[0].children) {
            for(let i = 0; i < CONCEPT_TREE[0].children.length; i++) {
                let child = CONCEPT_TREE[0].children[i];
                if(this.state.conceptId === child.condition) {
                    children.push(e(SettingsSelect, {
                        key: 'settings-' + CONCEPT_TREE[0].id + '-child-' + i,
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
                    id: KEY_TREE[0].id,
                    name: KEY_TREE[0].name,
                    options: KEY_TREE[0].data,
                    displayProp: KEY_TREE[0].displayProp || 'name',
                    default: this.props.defaultSettings[KEY_TREE[0].id],
                    updateSetting: (property, value) => { this.props.updateSetting(property, value) }
                }, null),
                e(SettingsSelect, {
                    id: KEY_TREE[1].id,
                    name: KEY_TREE[1].name,
                    options: KEY_TREE[1].data,
                    displayProp: KEY_TREE[1].displayProp || 'name',
                    default: this.props.defaultSettings[KEY_TREE[1].id],
                    updateSetting: (property, value) => { this.props.updateSetting(property, value) }
                }, null)
            ),
            e('div', { id: 'top-bar-concept'},
                e(SettingsSelect, {
                    id: CONCEPT_TREE[0].id,
                    name: CONCEPT_TREE[0].name,
                    options: CONCEPT_TREE[0].data,
                    displayProp: CONCEPT_TREE[0].displayProp || 'name',
                    default: this.props.defaultSettings[CONCEPT_TREE[0].id],
                    updateSetting: (property, value) => { this.setState({ conceptId: value.id }); this.props.updateSetting(property, value) }
                }, null)
            ),
            e('div', { id: 'top-bar-concept-options'},
                this.getConceptOptions()
            ),
            e('div', { id: 'top-bar-bottom'}, this.getSettingManagers(LABEL_TREE)),
            e('div', {}, this.getNoteCollection(this.props.notes, null))
        );
    };
}