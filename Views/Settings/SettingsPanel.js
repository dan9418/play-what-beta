class SettingsPanel extends React.Component {
	
	constructor(props) {
        super(props);
        this.state = {};

        this.categories = [
            { id: 'concept', name: 'Concept', settings: [
                { id: 'concept', name: 'Concept', data: ALL_CONCEPTS },
                { id: 'interval', name: 'Interval', data: ALL_INTERVALS },
                { id: 'chord', name: 'Chord', data: ALL_CHORDS },
                { id: 'scale', name: 'Scale', data: ALL_SCALES },
                { id: 'mode', name: 'Mode', data: ALL_MODES },
                { id: 'romanNumeral', name: 'Roman Numeral', data: ALL_ROMAN_NUMERALS }
            ] },
            { id: 'key', name: 'Key', settings: [
                { id: 'homeDegree', name: 'Home Degree', data: ALL_HOME_DEGREES },
                { id: 'accidental', name: 'Accidental', data: ALL_ACCIDENTALS }
            ] },
            { id: 'display', name: 'Display', settings: [
                 { id: 'label', name: 'Label', data: ALL_LABELS }
            ] },
            { id: 'rhythm', name: 'Rhythm', settings: [] },
            { id: 'sound', name: 'Sound', settings: [] }  
        ]
    }

    updateSetting = (name, value) => {
        let update = {};
        update[name] = value;
        this.setState(update);
    }

    changeTab = (id) => {
        let nodeList = document.getElementsByClassName('settings-tab');
        let array = [ ...nodeList ];
        array.forEach(tab => {
            tab.style.setProperty('display', 'none');
        });
        document.getElementById(id).style.setProperty('display', 'inline-block');
    }

    getTabs = () => {
        let tabs = [];
        for(let i = 0; i < this.categories.length; i++) {
            let id = 'settings-tab-handle-' + this.categories[i].id;
            tabs.push(e('div', {
                className: 'settings-tab-handle',
                key: id,
                id: id,
                index: i,
                onClick: () => { this.changeTab('settings-tab-' + this.categories[i].id); } },
                this.categories[i].name));
        }
        return tabs;
    }

    getCategories = () => {
        let categories = [];
        for(let i = 0; i < this.categories.length; i++) {
            let id = 'settings-tab-' + this.categories[i].id;
            categories.push(e(SettingsTab, {
                key: id,
                id: id,
                updateSetting: this.updateSetting,
                settings: this.categories[i].settings },
                null));
        }
        return categories;
    }

	render = () => {
        return e('div', { id: 'settings-panel-' + this.props.id, className: 'settings-panel' },
            e('pre', { id: 'display-text' }, JSON.stringify(this.state)),
            this.getTabs(),
            this.getCategories()
        );
    };
}