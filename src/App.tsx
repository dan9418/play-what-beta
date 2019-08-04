import * as React from "react";
import * as ReactDOM from "react-dom";
import "./App.css";
import { MasterViewer } from "./MasterViewer/MasterViewer";
import { ACCIDENTAL, DEGREE, INTERVAL } from "./Common/Theory/TheoryDefinitions";

export class App extends React.Component<any, any> {

	constructor(props) {
		super(props);
	}

	render = () => {
		return (
			<>
				<MasterViewer
					keyDef={ { degree: DEGREE.C, accidental: ACCIDENTAL.natural } }
					intervals={ [INTERVAL.PU, INTERVAL.M3, INTERVAL.P5] }
					octave={4}
				/>
			</>
		);
	};
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App/>, domContainer);