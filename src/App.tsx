import * as React from "react";
import * as ReactDOM from "react-dom";
import "./App.css";
import { MainView } from "./Views/MainView/MainView";
import { HeaderView } from "./Views/HeaderView/HeaderView";

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