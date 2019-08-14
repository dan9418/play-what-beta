import * as React from "react";
import "./ConfigPanel.css";
import { OptionInput } from "../../Concepts/ConceptConfig";

type ConfigPanelProps = {
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
            inputs.push(<div key={i}>
                <div className='config-panel-row-label'>{option.label}</div>
                <div className='config-panel-row-contents'>
                    <InputComp
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