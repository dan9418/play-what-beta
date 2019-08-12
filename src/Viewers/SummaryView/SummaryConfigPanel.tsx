import * as React from "react";
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
                <div className='input-row-label'>Show Inactive Pitches</div>
                <SwitchSelector
                    value={this.props.viewerConfig.showInactive}
                    setValue={(value) => { this.props.setValue('showInactive', value); }} />
            </div>
        );
    }
}