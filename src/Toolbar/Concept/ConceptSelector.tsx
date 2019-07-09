import * as React from "react";
import * as ReactDOM from "react-dom";
import "../../Common/Common.css";
import { Interval } from "../../Theory/Concepts/Interval";
import { Chord } from "../../Theory/Concepts/Chord";
import { Scale } from "../../Theory/Concepts/Scale";
import { Mode } from "../../Theory/Concepts/Mode";
import { BoxSelector } from "../../Common/BoxSelector/BoxSelector";
import { PARAM_conceptType } from "../../Common/Parameters/Base/ConceptTypeConfig";
import { PARAM_interval } from "../../Common/Parameters/Concepts/IntervalConfig";
import { PARAM_chord } from "../../Common/Parameters/Concepts/ChordConfig";
import { PARAM_scale } from "../../Common/Parameters/Concepts/ScaleConfig";
import { PARAM_mode } from "../../Common/Parameters/Concepts/ModeConfig";
import { InputGroup } from "../../Common/InputGroup/InputGroup";

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
				this.setState({ conceptDef: conceptDef })
				this.props.setConcept(new this.props.conceptClass(conceptDef, this.props.conceptOptions));
			}
	
			setConceptOptions = (conceptOptions) => {
				this.setState({ conceptOptions: conceptOptions })
				this.props.setConcept(new this.props.conceptClass(this.props.conceptDef, conceptOptions));
			}
	
			render = () => {
				return (
					<InputGroup name="Concept Details">
						<BoxSelector
							updateSelection={(p, v) => { this.setConceptDefinition(v) }}
							key={this.props.conceptConfig.id}
							id={this.props.conceptConfig.id + 'Def'}
							name={this.props.conceptConfig.name + ' Definition'}
							data={this.props.conceptConfig.data}
							selected={this.props.selected}
						/>
					</InputGroup>
				)
			};
		}
		return WrappedComponent;
	}

	setConceptType = (conceptType) => {
		this.setState({
			conceptType: conceptType
		});
	}

	setConcept = (conceptData) => {
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
				conceptClass={conceptClass}
				conceptConfig={conceptConfig}
				setConcept={this.setConcept}
				selected={(this.state as any)[(this.state as any).conceptType.id].definition}
			/>
		)
	}

	render = () => {
		return (
			<InputGroup name="Concept">
				<BoxSelector
					updateSelection={(p, v) => { this.setConceptType(v); }}
					id={PARAM_conceptType.id}
					name={PARAM_conceptType.name}
					data={PARAM_conceptType.data}
					selected={(this.state as any).conceptType}
				/>
				{this.getConceptTree()}
			</InputGroup>
		);
	};
}