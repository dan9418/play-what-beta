import * as React from "react";
import "./InputPanel.css";
import { ALL_DEGREES, ALL_ACCIDENTALS, ALL_CONCEPTS } from "../Common/Theory/TheoryDefinitions";
import { DropdownSelector } from "../Common/Inputs/Selectors/DropdownSelector/DropdownSelector";
import { NumericSelector } from "../Common/Inputs/Selectors/NumericSelector/NumericSelector";
import { ViewerProps } from "../App";

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
                <div key={i} className='input-panel-content-row'>
                    <div className='cell'>
                        <DropdownSelector data={ALL_DEGREES} value={this.props.viewers[i].degree} setValue={(value) => { this.props.setValue(i, 'degree', value); }} />
                    </div>
                    <div className='cell'>
                        <DropdownSelector data={ALL_ACCIDENTALS} value={this.props.viewers[i].accidental} setValue={(value) => { this.props.setValue(i, 'accidental', value); }} />
                    </div>
                    <div className='cell'>
                        <NumericSelector value={this.props.viewers[i].octave} setValue={(value) => { this.props.setValue(i, 'octave', value); }} />
                    </div>
                    <div className='cell'>
                        <DropdownSelector data={ALL_CONCEPTS} value={this.props.viewers[i].conceptType} setValue={(value) => { this.props.setValue(i, 'conceptType', value); }} />
                    </div>
                    <div className='cell'>
                        <DropdownSelector data={this.props.viewers[i].conceptType.presets} value={this.props.viewers[i].concept} setValue={(value) => { this.props.setValue(i, 'concept', value); }} />
                    </div>
                </div>
            );
        }
        return rows;
    }

    render = () => {
        return (
            <div className='input-panel'>
                <div className='input-panel-header'>
                    <div className='cell'>Degree</div>
                    <div className='cell'>Accidental</div>
                    <div className='cell'>Octave</div>
                    <div className='cell'>Concept</div>
                    <div className='cell'>Presets</div>
                </div>
                <div className='input-panel-content'>
                    {this.getRows()}
                    <div className='input-panel-content-row add' onClick={this.props.add}>
                        + Add
                    </div>
                </div>
                {/*<IntervalSelector keyDef={keyDef} value={this.state.intervals} setValue={(value) => { this.setValue('intervals', value); }} />*/}
            </div>
        );
    };
}