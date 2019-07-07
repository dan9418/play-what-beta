import * as React from "react";
import * as ReactDOM from "react-dom";
import "../../Common/Common.css";
import { Interval } from "../../Theory/Concepts/Interval";
import { Chord } from "../../Theory/Concepts/Chord";
import { Scale } from "../../Theory/Concepts/Scale";
import { Mode } from "../../Theory/Concepts/Mode";
import { BoxSelector } from "../../Common/BoxSelector/BoxSelector";
import { CONCEPT_TYPE_CONFIG } from "../../Theory/Concepts/ConceptTypeConfig";
import { MODE_CONFIG, SCALE_CONFIG, INTERVAL_CONFIG, CHORD_CONFIG } from "../../Theory/Concepts/ConceptDefinitionConfig";

export class ConceptSelector extends React.Component<any> {

	constructor(props) {
		super(props);
		(this.state as any) = {
			conceptType: CONCEPT_TYPE_CONFIG.data[1],
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
					<BoxSelector
						updateSelection={(p, v) => { this.setConceptDefinition(v) }}
						key={this.props.conceptConfig.id}
						id={this.props.conceptConfig.id + 'Def'}
						name={this.props.conceptConfig.name + ' Definition'}
						data={this.props.conceptConfig.data}
						selected={this.props.selected}
					/>
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
			case INTERVAL_CONFIG.id:
				conceptClass = Interval;
				conceptConfig = INTERVAL_CONFIG;
				break;
			case CHORD_CONFIG.id:
				conceptClass = Chord;
				conceptConfig = CHORD_CONFIG;
				break;
			case SCALE_CONFIG.id:
				conceptClass = Scale;
				conceptConfig = SCALE_CONFIG;
				break;
			case MODE_CONFIG.id:
				conceptClass = Mode;
				conceptConfig = MODE_CONFIG;
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
			<div id='master-concept-selector-container'>
				<BoxSelector
					updateSelection={(p, v) => { this.setConceptType(v); }}
					id={CONCEPT_TYPE_CONFIG.id}
					name={CONCEPT_TYPE_CONFIG.name}
					data={CONCEPT_TYPE_CONFIG.data}
					selected={(this.state as any).conceptType}
				/>
				{this.getConceptTree()}
			</div>
		);
	};
}