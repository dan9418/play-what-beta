import * as React from "react";
import * as ReactDOM from "react-dom";
import "../Common/Common.css";
import { KeySelector } from "./Key/KeySelector";
import { ConceptSelector } from "./Concept/ConceptSelector";

export class Toolbar extends React.Component<any> {

	constructor(props) {
		super(props);
	}

	render = () => {
		return (
			<div id="toolbar">
				<KeySelector changeKey={this.props.changeKey} keyDef={this.props.keyDef} />
				<ConceptSelector updateConcept={this.props.updateConcept} keyDef={this.props.keyDef} conceptValue={this.props.conceptValue} />
			</div>
		);
	};
}