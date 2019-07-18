import * as React from "react";
import * as ReactDOM from "react-dom";
import "./Common/Common.css";
import { MainView } from "./MainView";
import { HeaderView } from "./HeaderView";

export class App extends React.Component<any, any> {

	constructor(props) {
		super(props);
	}

	render = () => {
		return (
			<>
				<HeaderView/>
				<MainView/>
			</>
		);
	};
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App/>, domContainer);