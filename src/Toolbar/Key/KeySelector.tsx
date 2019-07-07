import * as React from "react";
import * as ReactDOM from "react-dom";
import "../../Common/Common.css";
import { Key } from "../../Theory/Base/Key";
import { BoxSelector } from "../../Common/BoxSelector/BoxSelector";
import { DIATONIC_DEGREE_CONFIG, ACCIDENTAL_CONFIG } from "../../Theory/Base/KeyConfig";

export class KeySelector extends React.Component<any> {

	constructor(props) {
		super(props);
		(this.state as any) = {
			diatonicDegree: DIATONIC_DEGREE_CONFIG.data[0],
			accidental: ACCIDENTAL_CONFIG.data[2],
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
					id={DIATONIC_DEGREE_CONFIG.id}
					name={DIATONIC_DEGREE_CONFIG.name}
					data={DIATONIC_DEGREE_CONFIG.data}
					selected={(this.state as any).diatonicDegree}
				/>
				<BoxSelector
					updateSelection={(p, v) => { this.setAccidental(v); }}
					id={ACCIDENTAL_CONFIG.id}
					name={ACCIDENTAL_CONFIG.name}
					data={ACCIDENTAL_CONFIG.data}
					selected={(this.state as any).accidental}
				/>
			</div>
		);
	};
}