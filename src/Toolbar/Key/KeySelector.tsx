import * as React from "react";
import * as ReactDOM from "react-dom";
import "../../Common/Common.css";
import { Key } from "../../Theory/Base/Key";
import { BoxSelector } from "../../Common/BoxSelector/BoxSelector";
import { PARAM_diatonicDegree, DiatonicDegreeDef } from "../../Common/Parameters/Base/DiatonicDegreeConfig";
import { PARAM_accidental, AccidentalDef } from "../../Common/Parameters/Base/AccidentalConfig";
import { InputGroup } from "../../Common/InputGroup/InputGroup";

export class KeySelector extends React.Component<any> {

	constructor(props) {
		super(props);
		(this.state as any) = {
			diatonicDegree: PARAM_diatonicDegree.data[0],
			accidental: PARAM_accidental.data[2],
		};
	}

	setDiatonicDegree = (diatonicDegree: DiatonicDegreeDef) => {
		this.setState({ diatonicDegree: diatonicDegree })
		this.props.changeKey(new Key(diatonicDegree.degree, this.props.selectedKey.accidental));
	}

	setAccidental = (accidental: AccidentalDef) => {
		this.setState({ accidental: accidental })
		this.props.changeKey(new Key(this.props.selectedKey.degree, accidental.offset));
	}

	render = () => {
		return (
			<InputGroup name="Key">
				<BoxSelector
					updateSelection={this.setDiatonicDegree}
					param={PARAM_diatonicDegree}
					selectedValue={(this.state as any).diatonicDegree}
				/>
				<BoxSelector
					updateSelection={this.setAccidental}
					param={PARAM_accidental}
					selectedValue={(this.state as any).accidental}
				/>
			</InputGroup>
		);
	};
}