import * as React from "react";
import "./InputPanel.css";
import { DropdownSelector } from "./Selectors/DropdownSelector/DropdownSelector";
import { NumericSelector } from "./Selectors/NumericSelector/NumericSelector";
import { ViewerProps } from "../App";
import { ALL_DEGREES } from "../Common/Theory/Key/DegreeConfig";
import { ALL_ACCIDENTALS } from "../Common/Theory/Key/AccidentalConfig";
import { ALL_CONCEPTS } from "../Common/Theory/Concepts/ConceptConfig";
import { ALL_VIEWERS } from "../Viewers/ViewerConfig";
import { BoxSelector } from "./Selectors/BoxSelector/BoxSelector";

type InputRowProps = {
    viewer: ViewerProps,
    setValue: (property: string, value: any) => void,
}

export class InputRow extends React.Component<InputRowProps, any> {

    constructor(props) {
        super(props);
    }

    /* Render */

    render = () => {
        return (
            <div className='input-row'>
                <div className='input-subrow'>
                    <div className='row-item row-item-label'>Key</div>
                    <div className='row-item'><BoxSelector data={ALL_DEGREES} value={this.props.viewer.degree} setValue={(value) => { this.props.setValue('degree', value); }} /></div>
                    <div className='row-item'><BoxSelector data={ALL_ACCIDENTALS.filter((a) => { return Math.abs(a.offset) <= 1 })} value={this.props.viewer.accidental} setValue={(value) => { this.props.setValue('accidental', value); }} /></div>
                    <div className='row-item row-item-label'>Octave</div>
                    <div className='row-item'><NumericSelector value={this.props.viewer.octave} setValue={(value) => { this.props.setValue('octave', value); }} /></div>
                </div>
                <div className='input-subrow'>
                    <div className='row-item row-item-label'>Concept</div>
                    <div className='row-item'><DropdownSelector data={ALL_CONCEPTS} value={this.props.viewer.conceptType} setValue={(value) => { this.props.setValue('conceptType', value); }} /></div>
                    <div className='row-item'><DropdownSelector data={this.props.viewer.conceptType.presets} value={this.props.viewer.concept} setValue={(value) => { this.props.setValue('concept', value); }} /></div>
                </div>
                <div className='input-subrow'>
                    <div className='row-item row-item-label'>Viewer</div>
                    <div className='row-item'><DropdownSelector data={ALL_VIEWERS} value={this.props.viewer.viewerType} setValue={(value) => { this.props.setValue('viewerType', value); }} /></div>
                    <div className='row-item'><DropdownSelector data={this.props.viewer.viewerType.presets} value={this.props.viewer.viewer} setValue={(value) => { this.props.setValue('viewer', value); }} /></div>
                </div>
            </div>);
    };
}