import * as React from "react";
import * as ReactDOM from "react-dom";
import "../Common/Common.css";
import "./Toolbar.css";
import { InputGroup } from "./InputGroup/InputGroup";
import { BoxSelector } from "./BoxSelector/BoxSelector";
import { MASTER_PARAMETERS } from "../Parameters/MasterParameters";

export class Toolbar extends React.Component<any> {

	constructor(props) {
		super(props);
	}

	getParameterSelectors = () => {
		let selectors = [];
		for(let i = 0; i < MASTER_PARAMETERS.length; i++) {
			let parameter = MASTER_PARAMETERS[i];
			let children = [];
			for(let j = 0; j < parameter.children.length; j++) {
				let child = parameter.children[j];
				// TODO support multiple conditions
				if(typeof(child.conditions) === 'undefined' || this.props[child.conditions[0].property].id === child.conditions[0].value) {
					let childId = parameter.id + '_' + child.id;
					children.push(
					<BoxSelector
						key={childId}
						updateSelection={(param) => { this.props.setParameter(childId, param); }}
						param={child}
						selectedValue={this.props[childId]}
					/>);
				}
			}
			selectors.push(
				<InputGroup key={parameter.name} name={parameter.name}>
					{children}
				</InputGroup>
			);
		}
		return selectors;
	}

	render = () => {
		return (
			<div id="toolbar">
				{this.getParameterSelectors()}
			</div>
		);
	};
}