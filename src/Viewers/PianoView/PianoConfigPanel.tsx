import * as React from "react";
import "./PianoView.css";
import { PianoConfig, ALL_PIANO_KEY_LABELS } from "./PianoConfig";
import { InputSubrow } from "../../InputPanel/InputSubrow/InputSubrow";
import { InputGroup } from "../../InputPanel/InputGroup/InputGroup";
import { NumericSelector } from "../../InputPanel/Selectors/NumericSelector/NumericSelector";
import { DropdownSelector } from "../../InputPanel/Selectors/DropdownSelector/DropdownSelector";

type PianoConfigPanelProps = {
    setValue: (value: any) => void,
    viewer: any;
}

export class PianoConfigPanel extends React.Component<PianoConfigPanelProps, null> {

    constructor(props) {
        super(props);
    }

    /*changeHighKey = (hi) => {
    this.setState((oldState) => {
        return {
            keyHigh: hi
        };
    });
}*/

    /*changeLowKey = (lo) => {
        this.setState((oldState) => {
            return {
                keyLow: lo
            };
        });
    }*/

    /*changeKeyRange = (delta) => {
        this.setState((oldState) => {
            return {
                keyLow: oldState.keyLow + delta,
                keyHigh: oldState.keyHigh + delta
            };
        });
    }*/

    render = () => {
        return (
            <div className='piano-config-panel'>
                <InputSubrow>
                    <InputGroup label='Key Label'>
                        <DropdownSelector
                            data={ALL_PIANO_KEY_LABELS}
                            value={this.props.viewer.config.noteLabel}
                            setValue={(value) => {
                                let mergedViewer = {...this.props.viewer};
                                mergedViewer.config.noteLabel = value;
                                this.props.setValue(mergedViewer);
                                }} />
                    </InputGroup>
                </InputSubrow>
            </div>
        );
    }
}