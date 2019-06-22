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

	render = () => {
        return e('div', { id: 'top-bar' },
            this.getSettingManagers(KEY_TREE),
            this.getSettingManagers(CONCEPT_TREE),
            e('div', {}, this.getNoteCollection(this.props.notes, null))
        );
    };
}