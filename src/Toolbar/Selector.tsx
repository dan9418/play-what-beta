import * as React from "react";
import * as ReactDOM from "react-dom";
import "../../Common/Common.css";
import { Key } from "../Theory/Base/Key";
import { BoxSelector } from "./BoxSelector/BoxSelector";
import { PARAM_diatonicDegree, DiatonicDegreeDef } from "../Common/Parameters/Base/DiatonicDegreeConfig";
import { PARAM_accidental, AccidentalDef } from "../Common/Parameters/Base/AccidentalConfig";
import { InputGroup } from "./InputGroup/InputGroup";

export class Selector extends React.Component<any> {

	constructor(props) {
		super(props);
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
		let selectedDiatonicDegree = PARAM_diatonicDegree.data.find((x) => { return x.degree === this.props.selectedKey.degree });
		let selectedAccidental = PARAM_accidental.data.find((x) => { return x.offset === this.props.selectedKey.accidental });

		return (
			<InputGroup name="Key">
				<BoxSelector
					updateSelection={this.setDiatonicDegree}
					param={PARAM_diatonicDegree}
					selectedValue={selectedDiatonicDegree}
				/>
				<BoxSelector
					updateSelection={this.setAccidental}
					param={PARAM_accidental}
					selectedValue={selectedAccidental}
				/>
			</InputGroup>
		);
	};
}