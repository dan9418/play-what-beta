import * as React from "react";
import * as ReactDOM from "react-dom";
import "./Sample.css";
import "../Common/TheoryStyles.css"
import { ViewDriver } from "../Components/ViewDriver/ViewDriver";

export class Sample extends React.Component<any, any> {

	constructor(props) {
		super(props);
	}

	render = () => {
		return (
			<ViewDriver />
		);
	};
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<Sample />, domContainer);