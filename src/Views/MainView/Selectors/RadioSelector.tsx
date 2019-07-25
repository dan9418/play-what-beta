import * as React from "react";
import { ParameterConfig } from "../../../Parameters/MasterParameters";

type RadioSelectorProps = {
    parameter: ParameterConfig;
    updateParameter: any;
}

export class RadioSelector extends React.Component<RadioSelectorProps> {

    constructor(props) {
        super(props);
    }

    getOptions = () => {
        let options = [];
        for (let i = 0; i < this.props.parameter.data.length; i++) {
            let param = this.props.parameter.data[i];
            options.push(<input key={param.id} name={param.id} value={param.id} className={'radio-option'}>{param.name}</input>);
        }
        return options;
    }

    render = () => {
        return (
            <div className='radio-selector'>
                {this.getOptions()}
            </div>)
    };
}