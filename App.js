'use strict';

const e = React.createElement;

class App extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render = () => {
		return e('div', { id: 'appContainer' },
					e(DefaultDriver, {}, null)
				);
	  };
}

const domContainer = document.querySelector('#app');
ReactDOM.render(e(App), domContainer);