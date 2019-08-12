import * as React from "react";
import { InputRow } from "../../InputPanel/InputRow/InputRow";
import { InputGroup } from "../../InputPanel/InputGroup/InputGroup";
import { SwitchSelector } from "../../InputPanel/Selectors/SwitchSelector/SwitchSelector";
import { NoteSummaryConfig } from "./NoteSummaryConfig";

type SummaryConfigPanelProps = {
    setValue: (property: string, value: any) => void,
    viewerConfig: NoteSummaryConfig;
}

export class SummaryConfigPanel extends React.Component<SummaryConfigPanelProps, null> {

    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div className='summary-config-panel'>
                <InputRow title='Summary Config'>
                    <InputGroup label='Show Inactive'>
                        <SwitchSelector
                            value={this.props.viewerConfig.showInactive}
                            setValue={(value) => { this.props.setValue('showInactive', value); }} />
                    </InputGroup>
                </InputRow>
            </div>
        );
    }
}