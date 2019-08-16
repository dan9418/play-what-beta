import * as React from "react";
import * as ReactDOM from "react-dom";
import "./Sample.css";
import "../Common/TheoryStyles.css"
import { ViewerManager } from "../AppComponents/ViewerManager/ViewerManager";

export class Sample extends React.Component<any, any> {

	constructor(props) {
		super(props);
	}

	render = () => {
		return (
			<ViewerManager />
		);
	};
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<Sample />, domContainer);