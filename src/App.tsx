import * as React from "react";
import * as ReactDOM from "react-dom";
import "./App.css";
import { HeaderView } from "./Views/HeaderView/HeaderView";
import { ViewManager } from "./Views/MainView/ViewManager";

export class App extends React.Component<any, any> {

	constructor(props) {
		super(props);
	}

	render = () => {
		return (
			<>
				<HeaderView/>
				<ViewManager/>
			</>
		);
	};
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App/>, domContainer);