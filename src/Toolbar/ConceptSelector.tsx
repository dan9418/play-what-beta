import * as React from "react";
import * as ReactDOM from "react-dom";
import "../../Common/Common.css";
import { Interval } from "../Common/Parameters/Concepts/Interval";
import { Chord } from "../Common/Parameters/Concepts/Chord";
import { Scale } from "../Common/Parameters/Concepts/Scale";
import { Mode } from "../Common/Parameters/Concepts/Mode";
import { BoxSelector } from "./BoxSelector/BoxSelector";
import { PARAM_conceptType, ConceptTypeDef } from "../Common/Parameters/Base/ConceptTypeConfig";
import { PARAM_interval } from "../Common/Parameters/Concepts/IntervalConfig";
import { PARAM_chord } from "../Common/Parameters/Concepts/ChordConfig";
import { PARAM_scale } from "../Common/Parameters/Concepts/ScaleConfig";
import { PARAM_mode } from "../Common/Parameters/Concepts/ModeConfig";
import { InputGroup } from "./InputGroup/InputGroup";
import { IParamDef } from "../Common/Parameters/IParamConfig";

export class ConceptSelector extends React.Component<any, any> {

	constructor(props) {
		super(props);
	}

	getConceptSelector = () => {
		let WrappedComponent = class ConceptSelector extends React.Component<any> {
			constructor(props) {
				super(props);
			}
	
			setConceptDefinition = (conceptDef) => {
				this.props.setConcept(this.props.conceptConfig.id, new this.props.Concept(conceptDef, this.props.conceptOptions));
			}
	
			setConceptOptions = (conceptOptions) => {
				this.props.setConcept(this.props.conceptConfig.id, new this.props.Concept(this.props.conceptDef, conceptOptions));
			}
	
			render = () => {
				return (
					<InputGroup name="Concept Details">
						<BoxSelector
							key={this.props.conceptConfig.id}
							updateSelection={this.setConceptDefinition}
							param={this.props.conceptConfig}
							selectedValue={this.props.selectedValue}
						/>
					</InputGroup>
				)
			};
		}
		return WrappedComponent;
	}

	getConceptTree = () => {
		let conceptClass = null;
		let conceptConfig = null;
		let ConceptSelector = this.getConceptSelector();
		switch (this.props.selectedConceptType.id) {
			case PARAM_interval.id:
				conceptClass = Interval;
				conceptConfig = PARAM_interval;
				break;
			case PARAM_chord.id:
				conceptClass = Chord;
				conceptConfig = PARAM_chord;
				break;
			case PARAM_scale.id:
				conceptClass = Scale;
				conceptConfig = PARAM_scale;
				break;
			case PARAM_mode.id:
				conceptClass = Mode;
				conceptConfig = PARAM_mode;
				break;
		}
		return (
			<ConceptSelector
				Concept={conceptClass}
				conceptConfig={conceptConfig}
				setConcept={this.props.setConcept}
				selectedValue={this.props.selectedConcepts[this.props.selectedConceptType.id].definition}
			/>
		)
	}

	render = () => {
		//let selectedConceptType = PARAM_conceptType.data.find((x) => { return x.id === this.props.selectedConcept.id });

		return (
			<InputGroup name="Concept">
				<BoxSelector
					updateSelection={this.props.changeConceptType}
					param={PARAM_conceptType}
					selectedValue={this.props.selectedConceptType}
				/>
				{this.getConceptTree()}
			</InputGroup>
		);
	};
}