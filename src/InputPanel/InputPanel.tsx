import * as React from "react";
import "./InputPanel.css";
import { Accidental, Interval, Key, ALL_DEGREES, ALL_ACCIDENTALS } from "../Common/Theory/TheoryDefinitions";
import { DropdownSelector } from "../Common/Inputs/Selectors/DropdownSelector/DropdownSelector";
import { NumericSelector } from "../Common/Inputs/Selectors/NumericSelector/NumericSelector";

type InputPanelProps = {
    keyDef: Key,
    octave: number,
    intervals: Interval[],
    setValue: (property: string, value: any) => void
}

export class InputPanel extends React.Component<InputPanelProps, any> {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    /* Render */

    render = () => {
        return (
            <div className='input-panel'>
                <div className='input-panel-header'>
                    <div className='input-panel-header-cell'>Degree</div>
                    <div className='input-panel-header-cell'>Accidental</div>
                    <div className='input-panel-header-cell'>Octave</div>
                </div>
                <div className='input-panel-content'>
                    <div className='input-panel-content-row'>
                        <div className='input-panel-content-row-cell'>
                            <DropdownSelector data={ALL_DEGREES} value={this.props.keyDef.degree} setValue={(value) => { this.props.setValue('degree', value); }} />
                        </div>
                        <div className='input-panel-content-row-cell'>
                            <DropdownSelector data={ALL_ACCIDENTALS} value={this.props.keyDef.accidental} setValue={(value) => { this.props.setValue('accidental', value); }} />
                        </div>
                        <div className='input-panel-content-row-cell'>
                            <NumericSelector value={this.props.octave} setValue={(value) => { this.props.setValue('octave', value); }} />
                        </div>
                    </div>
                </div>
                {/*<IntervalSelector keyDef={keyDef} value={this.state.intervals} setValue={(value) => { this.setValue('intervals', value); }} />*/}
            </div>
        );
    };
}