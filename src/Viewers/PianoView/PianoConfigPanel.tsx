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
                <div className='config-panel-header'>Keys</div>
                <div className='config-panel-row-label'>Label</div>
                <div className='config-panel-row-contents'>
                    <DropdownSelector
                        data={ALL_PIANO_KEY_LABELS}
                        value={this.props.viewerConfig.noteLabel}
                        setValue={(value) => { this.props.setValue('noteLabel', value); }} />
                </div>
                <div className='config-panel-row-label'>Low</div>
                <div className='config-panel-row-contents'>
                    <NumericSelector
                        value={this.props.viewerConfig.keyLow}
                        setValue={(value) => { this.props.setValue('keyLow', value); }} />
                </div>
                <div className='config-panel-row-label'>High</div>
                <div className='config-panel-row-contents'>
                    <NumericSelector
                        value={this.props.viewerConfig.keyHigh}
                        setValue={(value) => { this.props.setValue('keyHigh', value); }} />
                </div>
                <div className='config-panel-row-label'>Filter Octave</div>
                <div className='config-panel-row-contents'>
                    <SwitchSelector
                        value={this.props.viewerConfig.filterOctave}
                        setValue={(value) => { this.props.setValue('filterOctave', value); }} />
                </div>

            </div>
        );
    }
}