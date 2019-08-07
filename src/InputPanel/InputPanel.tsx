import * as React from "react";
import "./InputPanel.css";
import { DropdownSelector } from "./Selectors/DropdownSelector/DropdownSelector";
import { NumericSelector } from "./Selectors/NumericSelector/NumericSelector";
import { ViewerProps } from "../App";
import { ALL_DEGREES } from "../Common/Theory/Key/DegreeConfig";
import { ALL_ACCIDENTALS } from "../Common/Theory/Key/AccidentalConfig";
import { ALL_CONCEPTS } from "../Common/Theory/Concepts/ConceptConfig";
import { ALL_VIEWERS } from "../Viewers/ViewerConfig";

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
                    <div className='cell key'>
                        <DropdownSelector data={ALL_DEGREES} value={this.props.viewers[i].degree} setValue={(value) => { this.props.setValue(i, 'degree', value); }} />
                        <DropdownSelector data={ALL_ACCIDENTALS} value={this.props.viewers[i].accidental} setValue={(value) => { this.props.setValue(i, 'accidental', value); }} />
                    </div>
                    <div className='cell octave'>
                        <NumericSelector value={this.props.viewers[i].octave} setValue={(value) => { this.props.setValue(i, 'octave', value); }} />
                    </div>
                    <div className='cell concept'>
                        <DropdownSelector data={ALL_CONCEPTS} value={this.props.viewers[i].conceptType} setValue={(value) => { this.props.setValue(i, 'conceptType', value); }} />
                        <DropdownSelector data={this.props.viewers[i].conceptType.presets} value={this.props.viewers[i].concept} setValue={(value) => { this.props.setValue(i, 'concept', value); }} />
                    </div>
                    <div className='cell viewer'>
                        <DropdownSelector data={ALL_VIEWERS} value={this.props.viewers[i].viewerType} setValue={(value) => { this.props.setValue(i, 'viewerType', value); }} />
                        <DropdownSelector data={this.props.viewers[i].viewerType.presets} value={this.props.viewers[i].viewer} setValue={(value) => { this.props.setValue(i, 'viewer', value); }} />
                    </div>
                    <div className='input-panel-content-row-concept'>

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
                    <div className='cell'>Key</div>
                    <div className='cell'>Octave</div>
                    <div className='cell'>Concept</div>
                    <div className='cell'>Viewer</div>
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