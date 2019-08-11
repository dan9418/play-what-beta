import * as React from "react";
import "./PianoView.css";
import { ALL_PIANO_KEY_LABELS, PianoConfig } from "./PianoConfig";
import { InputSubrow } from "../../InputPanel/InputSubrow/InputSubrow";
import { InputGroup } from "../../InputPanel/InputGroup/InputGroup";
import { NumericSelector } from "../../InputPanel/Selectors/NumericSelector/NumericSelector";
import { DropdownSelector } from "../../InputPanel/Selectors/DropdownSelector/DropdownSelector";
import { SwitchSelector } from "../../InputPanel/Selectors/SwitchSelector/SwitchSelector";

type PianoConfigPanelProps = {
    setValue: (property: string, value: any) => void,
    viewerConfig: PianoConfig;
}

export class PianoConfigPanel extends React.Component<PianoConfigPanelProps, null> {

    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div className='piano-config-panel'>
                <InputSubrow>
                    <InputGroup label='Key Label'>
                        <DropdownSelector
                            data={ALL_PIANO_KEY_LABELS}
                            value={this.props.viewerConfig.noteLabel}
                            setValue={(value) => { this.props.setValue('noteLabel', value); }} />
                    </InputGroup>
                    <InputGroup label='Key Range'>
                        Low (
                        <NumericSelector
                            value={this.props.viewerConfig.keyLow}
                            setValue={(value) => { this.props.setValue('keyLow', value); }} />)
                        High (
                        <NumericSelector
                            value={this.props.viewerConfig.keyHigh}
                            setValue={(value) => { this.props.setValue('keyHigh', value); }} />)
                    </InputGroup>
                    <InputGroup label='Filter Octave'>
                        <SwitchSelector
                            value={this.props.viewerConfig.filterOctave}
                            setValue={(value) => { this.props.setValue('filterOctave', value); }} />
                    </InputGroup>
                </InputSubrow>
            </div>
        );
    }
}