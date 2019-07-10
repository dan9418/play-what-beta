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
				<KeySelector
					changeKey={this.props.changeKey}
					selectedKey={this.props.selectedKey}
				/>
				<ConceptSelector
					changeConceptType={this.props.changeConceptType}
					setConcept={this.props.setConcept}
					selectedKey={this.props.selectedKey}
					selectedConceptType={this.props.selectedConceptType}
					selectedConcepts={this.props.selectedConcepts}
				/>
			</div>
		);
	};
}