import * as React from "react";
import "./PianoView.css";
import { ALL_PIANO_KEY_LABELS, PianoConfig } from "./PianoConfig";
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
                <DropdownSelector
                    data={ALL_PIANO_KEY_LABELS}
                    value={this.props.viewerConfig.noteLabel}
                    setValue={(value) => { this.props.setValue('noteLabel', value); }} />
                Low (
                        <NumericSelector
                    value={this.props.viewerConfig.keyLow}
                    setValue={(value) => { this.props.setValue('keyLow', value); }} />)
            High (
                        <NumericSelector
                    value={this.props.viewerConfig.keyHigh}
                    setValue={(value) => { this.props.setValue('keyHigh', value); }} />)
                        <SwitchSelector
                    value={this.props.viewerConfig.filterOctave}
                    setValue={(value) => { this.props.setValue('filterOctave', value); }} />
            </div>
        );
    }
}