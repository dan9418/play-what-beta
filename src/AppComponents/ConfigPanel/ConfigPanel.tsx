import * as React from "react";
import "./ConfigPanel.css";
import { OptionInput, ViewerManagerProps } from "../../AppConfig";

interface ConfigPanelProps extends ViewerManagerProps {
    setValue: (property: string, value: any) => void,
    options: OptionInput[];
    config: any;
}

export class ConfigPanel extends React.Component<ConfigPanelProps, null> {

    constructor(props) {
        super(props);
    }

    getInputs = () => {
        let inputs = [];
        for (let i = 0; i < this.props.options.length; i++) {
            let option = this.props.options[i];
            let InputComp = option.component;
            inputs.push(<div className={option.vertical ? 'config-panel-input-y' : 'config-panel-input-x'} key={i}>
                <div className='config-panel-input-label'>{option.label}</div>
                <div className='config-panel-input-contents'>
                    <InputComp
                        {...this.props}
                        value={this.props.config[option.propertyId]}
                        setValue={(value) => { this.props.setValue(option.propertyId, value); }}
                        {...option.props}
                    />
                </div>
            </div>);
        }
        return inputs;
    }

    render = () => {
        return (
            <div className='config-panel'>
                {this.getInputs()}
            </div>
        );
    }
}