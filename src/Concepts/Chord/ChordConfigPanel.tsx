import * as React from "react";
import { RadioSelector } from "../../InputPanel/Selectors/RadioSelector/RadioSelector";
import { BoxSelector } from "../../InputPanel/Selectors/BoxSelector/BoxSelector";

type ChordConfigPanelProps = {
    setValue: (property: string, value: any) => void,
    conceptConfig: any
}

export class ChordConfigPanel extends React.Component<ChordConfigPanelProps, null> {

    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div className='chord-config-panel'>
                <div className='config-panel-row-label'>Inversion</div>
                <div className='config-panel-row-contents'>
                    <BoxSelector
                        displayProp='rotation'
                        data={[
                            {
                                id: 'none',
                                name: 'None',
                                rotation: 0
                            },
                            {
                                id: 'first',
                                name: 'First',
                                rotation: 1
                            },
                            {
                                id: 'second',
                                name: 'Second',
                                rotation: 2
                            }
                        ]}
                        value={this.props.conceptConfig.inversion}
                        setValue={(value) => { this.props.setValue('inversion', value); }} />
                </div>
            </div>
        );
    }
}