import * as React from "react";
import * as ReactDOM from "react-dom";
import "../Common/Common.css";
import "./Toolbar.css";
import { KeySelector } from "./Key/KeySelector";
import { ConceptSelector } from "./Concept/ConceptSelector";

export class Toolbar extends React.Component<any> {

	constructor(props) {
		super(props);
	}

	render = () => {
		return (
			<div id="toolbar">
				<KeySelector changeKey={this.props.changeKey} selectedKey={this.props.selectedKey} />
				<ConceptSelector changeConcept={this.props.changeConcept} selectedKey={this.props.selectedKey} conceptValue={this.props.conceptValue} />
			</div>
		);
	};
}