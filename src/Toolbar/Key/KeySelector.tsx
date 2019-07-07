import * as React from "react";
import * as ReactDOM from "react-dom";
import "../../Common/Common.css";
import { Key } from "../../Theory/Base/Key";
import { BoxSelector } from "../../Common/BoxSelector/BoxSelector";
import { PARAM_diatonicDegree } from "../../Common/Parameters/Base/DiatonicDegreeConfig";
import { PARAM_accidental } from "../../Common/Parameters/Base/AccidentalConfig";

export class KeySelector extends React.Component<any> {

	constructor(props) {
		super(props);
		(this.state as any) = {
			diatonicDegree: PARAM_diatonicDegree.data[0],
			accidental: PARAM_accidental.data[2],
		};
	}

	setDiatonicDegree = (diatonicDegree) => {
		this.setState({ diatonicDegree: diatonicDegree })
		this.props.changeKey(new Key(diatonicDegree.diatonicDegree, this.props.keyDef.accidental));
	}

	setAccidental = (accidental) => {
		this.setState({ accidental: accidental })
		this.props.changeKey(new Key(this.props.keyDef.degree, accidental.offset));
	}

	render = () => {
		return (
			<div id='key-selector-container'>
				<BoxSelector
					updateSelection={(p, v) => { this.setDiatonicDegree(v); }}
					id={PARAM_diatonicDegree.id}
					name={PARAM_diatonicDegree.name}
					data={PARAM_diatonicDegree.data}
					selected={(this.state as any).diatonicDegree}
				/>
				<BoxSelector
					updateSelection={(p, v) => { this.setAccidental(v); }}
					id={PARAM_accidental.id}
					name={PARAM_accidental.name}
					data={PARAM_accidental.data}
					selected={(this.state as any).accidental}
				/>
			</div>
		);
	};
}