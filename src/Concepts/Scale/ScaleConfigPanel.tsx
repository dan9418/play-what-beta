import * as React from "react";
import { SwitchSelector } from "../../InputPanel/Selectors/SwitchSelector/SwitchSelector";

type ScaleConfigPanelProps = {
    setValue: (property: string, value: any) => void,
    conceptConfig: any
}

export class ScaleConfigPanel extends React.Component<ScaleConfigPanelProps, null> {

    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div className='scale-config-panel'>
                <div className='config-panel-row-label'>Reverse</div>
                <div className='config-panel-row-contents'>
                    <SwitchSelector
                        value={this.props.conceptConfig.reverse}
                        setValue={(value) => { this.props.setValue('reverse', value); }} />
                </div>
                <div className='config-panel-row-label'>Melodic Inversion</div>
                <div className='config-panel-row-contents'>
                    <SwitchSelector
                        value={this.props.conceptConfig.melodicInversion}
                        setValue={(value) => { this.props.setValue('melodicInversion', value); }} />
                </div>
            </div>
        );
    }
}