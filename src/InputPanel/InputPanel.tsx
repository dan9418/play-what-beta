import * as React from "react";
import "./InputPanel.css";
import { DropdownSelector } from "./Selectors/DropdownSelector/DropdownSelector";
import { NumericSelector } from "./Selectors/NumericSelector/NumericSelector";
import { ViewerProps } from "../App";
import { ALL_DEGREES } from "../Common/Theory/Key/DegreeConfig";
import { ALL_ACCIDENTALS } from "../Common/Theory/Key/AccidentalConfig";
import { ALL_CONCEPTS } from "../Common/Theory/Concepts/ConceptConfig";
import { ALL_VIEWERS } from "../Viewers/ViewerConfig";
import { InputRow } from "./InputRow/InputRow";

type InputPanelProps = {
    viewers: ViewerProps[],
    setValue: (index: number, property: string, value: any) => void,
    add: () => void
}

export class InputPanel extends React.Component<InputPanelProps, any> {

    constructor(props) {
        super(props);
    }

    /* Render */

    getRows = () => {
        let rows = []
        for (let i = 0; i < this.props.viewers.length; i++) {
            rows.push(
                <div key={i}>
                    <InputRow viewer={this.props.viewers[i]} setValue={(property: string, value: any) => { this.props.setValue(i, property, value); }} />
                </div>
            );
        }
        return rows;
    }

    render = () => {
        return (
            <div className='input-panel'>
                {this.getRows()}
                {/*<div className='input-panel-content-row add' onClick={this.props.add}>
                        + Add
                    </div>*/}
                {/*<IntervalSelector keyDef={keyDef} value={this.state.intervals} setValue={(value) => { this.setValue('intervals', value); }} />*/}
            </div>
        );
    };
}