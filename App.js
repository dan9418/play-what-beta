'use strict';

const e = React.createElement;

class App extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render = () => {
		return e('div', { id: 'app-container' },
				e(KeySelector, {}, null)
			);
	  };
}

const domContainer = document.querySelector('#app');
ReactDOM.render(e(App), domContainer);