import * as React from "react";
import { InputSubrow } from "../../InputPanel/InputSubrow/InputSubrow";
import { InputGroup } from "../../InputPanel/InputGroup/InputGroup";
import { SwitchSelector } from "../../InputPanel/Selectors/SwitchSelector/SwitchSelector";

type SummaryConfigPanelProps = {
    setValue: (value: any) => void,
    viewer: any;
}

export class SummaryConfigPanel extends React.Component<SummaryConfigPanelProps, null> {

    constructor(props) {
        super(props);
    }

    setValue = (property: string, value: any) => {
        let mergedViewer = { ...this.props.viewer };
        mergedViewer.config[property] = value;
        this.props.setValue(mergedViewer);
    }

    render = () => {
        return (
            <div className='summary-config-panel'>
                <InputSubrow>
                    <InputGroup label='Show Inactive'>
                        <SwitchSelector
                            value={this.props.viewer.config.showInactive}
                            setValue={(value) => { this.setValue('showInactive', value); }} />
                    </InputGroup>
                </InputSubrow>
            </div>
        );
    }
}