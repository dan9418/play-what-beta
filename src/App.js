'use strict';

const e = React.createElement;

class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			key: new Key(1, 0),
			concept: EMPTY_CONCEPT
		};
	}

	updateKey = (key) => {
		this.setState({ key: key });
	}

	updatConcept = (concept) => {
		this.setState({ concept: concept });
	}

	getNotes = () => {
		let notes = [];
		let intervals = this.state.concept.getIntervals();
		for (let i = 0; i < intervals.length; i++) {
			let functionalNote = new FunctionalNote(this.state.key, intervals[i]);
			notes.push(functionalNote);
		}
		return notes;
	}

	render = () => {
		return e('div', { id: 'app-container' },
				e(Toolbar, { updateKey: this.updateKey, updateConcept: this.updatConcept, keyDef: this.state.key }, null),
				e(ViewManager, { notes: this.getNotes() }, null),
			);
	  };
}

class Toolbar extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render = () => {
		return e('div', { id: 'toolbar' },
				e(KeySelector, { updateKey: this.props.updateKey, keyDef: this.props.keyDef }, null),
				e(MasterConceptSelector, { updateConcept: this.props.updateConcept, keyDef: this.props.keyDef }, null),
			);
	  };
}

const domContainer = document.querySelector('#app');
ReactDOM.render(e(App), domContainer);