'use strict';

const e = React.createElement;

const DEFAULT_KEY = new Key(1, 0);

const DEFAULT_CONCEPT = {
	getIntervals: () => { return []; }
};

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			key: DEFAULT_KEY,
			concept: DEFAULT_CONCEPT
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
		return (
			<div id='app-container'>
				<Toolbar updateKey={this.updateKey} updateConcept={this.updatConcept} keyDef={this.state.key} conceptValue={this.state.concept} />
				<ViewManager notes={this.getNotes()} />
			</div>
		);
	};
}

class Toolbar extends React.Component {

	constructor(props) {
		super(props);
	}

	render = () => {
		return (
			<div id="toolbar">
				<KeySelector updateKey={this.props.updateKey} keyDef={this.props.keyDef} />
				<MasterConceptSelector updateConcept={this.props.updateConcept} keyDef={this.props.keyDef} conceptValue={this.props.conceptValue} />
			</div>
		);
	};
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App/>, domContainer);