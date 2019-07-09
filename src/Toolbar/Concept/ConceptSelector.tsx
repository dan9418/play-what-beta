import * as React from "react";
import * as ReactDOM from "react-dom";
import "../../Common/Common.css";
import { Interval } from "../../Theory/Concepts/Interval";
import { Chord } from "../../Theory/Concepts/Chord";
import { Scale } from "../../Theory/Concepts/Scale";
import { Mode } from "../../Theory/Concepts/Mode";
import { BoxSelector } from "../../Common/BoxSelector/BoxSelector";
import { PARAM_conceptType, ConceptTypeDef } from "../../Common/Parameters/Base/ConceptTypeConfig";
import { PARAM_interval } from "../../Common/Parameters/Concepts/IntervalConfig";
import { PARAM_chord } from "../../Common/Parameters/Concepts/ChordConfig";
import { PARAM_scale } from "../../Common/Parameters/Concepts/ScaleConfig";
import { PARAM_mode } from "../../Common/Parameters/Concepts/ModeConfig";
import { InputGroup } from "../../Common/InputGroup/InputGroup";
import { IParamDef } from "../../Common/Parameters/IParamConfig";

export class ConceptSelector extends React.Component<any> {

	constructor(props) {
		super(props);
		(this.state as any) = {
			conceptType: PARAM_conceptType.data[1],
			interval: this.props.conceptValue,
			chord: this.props.conceptValue,
			scale: this.props.conceptValue,
			mode: this.props.conceptValue
		};
	}

	getConceptSelector = () => {
		let WrappedComponent = class ConceptSelector extends React.Component<any> {
			constructor(props) {
				super(props);
			}
	
			setConceptDefinition = (conceptDef) => {
				this.props.setConcept(new this.props.Concept(conceptDef, this.props.conceptOptions));
			}
	
			setConceptOptions = (conceptOptions) => {
				this.props.setConcept(new this.props.Concept(this.props.conceptDef, conceptOptions));
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

	setConceptType = (conceptType: ConceptTypeDef) => {
		this.setState({
			conceptType: conceptType
		});
	}

	setConcept = (conceptData: IParamDef) => {
		let update = {};
		update[(this.state as any).conceptType.id] = conceptData;
		this.props.updateConcept(conceptData);
		this.setState(update);
	}

	getConceptTree = () => {
		let conceptClass = null;
		let conceptConfig = null;
		let ConceptSelector = this.getConceptSelector();
		switch ((this.state as any).conceptType.id) {
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
		if (!(this.state as any)[(this.state as any).conceptType.id].definition) (this.state as any).concept = new conceptClass(conceptConfig.data[0], null);
		return (
			<ConceptSelector
				Concept={conceptClass}
				conceptConfig={conceptConfig}
				setConcept={this.setConcept}
				selectedValue={(this.state as any)[(this.state as any).conceptType.id].definition}
			/>
		)
	}

	render = () => {
		return (
			<InputGroup name="Concept">
				<BoxSelector
					updateSelection={this.setConceptType}
					param={PARAM_conceptType}
					selectedValue={(this.state as any).conceptType}
				/>
				{this.getConceptTree()}
			</InputGroup>
		);
	};
}