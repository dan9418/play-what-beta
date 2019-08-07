import * as React from "react";
import "./InputPanel.css";
import { Accidental, Interval, Key, ALL_DEGREES, ALL_ACCIDENTALS, ALL_CONCEPTS, ConceptType, Concept } from "../Common/Theory/TheoryDefinitions";
import { DropdownSelector } from "../Common/Inputs/Selectors/DropdownSelector/DropdownSelector";
import { NumericSelector } from "../Common/Inputs/Selectors/NumericSelector/NumericSelector";

type InputPanelProps = {
    keyDef: Key,
    octave: number,
    conceptType: ConceptType,
    concept: Concept,
    setValue: (property: string, value: any) => void
}

export class InputPanel extends React.Component<InputPanelProps, any> {

    constructor(props) {
        super(props);
    }

    /* Render */

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
                    <div className='input-panel-content-row'>
                        <div className='cell'>
                            <DropdownSelector data={ALL_DEGREES} value={this.props.keyDef.degree} setValue={(value) => { this.props.setValue('degree', value); }} />
                        </div>
                        <div className='cell'>
                            <DropdownSelector data={ALL_ACCIDENTALS} value={this.props.keyDef.accidental} setValue={(value) => { this.props.setValue('accidental', value); }} />
                        </div>
                        <div className='cell'>
                            <NumericSelector value={this.props.octave} setValue={(value) => { this.props.setValue('octave', value); }} />
                        </div>
                        <div className='cell'>
                            <DropdownSelector data={ALL_CONCEPTS} value={this.props.conceptType} setValue={(value) => { this.props.setValue('conceptType', value); }} />
                        </div>
                        <div className='cell'>
                            <DropdownSelector data={this.props.conceptType.presets} value={this.props.concept} setValue={(value) => { this.props.setValue('concept', value); }} />
                        </div>
                    </div>
                </div>
                {/*<IntervalSelector keyDef={keyDef} value={this.state.intervals} setValue={(value) => { this.setValue('intervals', value); }} />*/}
            </div>
        );
    };
}