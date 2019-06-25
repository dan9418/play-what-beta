'use strict';

const e = React.createElement;

class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			notes: []
		}
	}

	updateNotes = (notes) => {
		this.setState({
			notes: notes
		});
	}

	render = () => {
		return e('div', { id: 'appContainer' },
					e(HarmonicDriver, { updateNotes: this.updateNotes }, null),
					e(ViewDriver, {notes: this.state.notes }, null)
				);
	  };
}

const domContainer = document.querySelector('#app');
ReactDOM.render(e(App), domContainer);