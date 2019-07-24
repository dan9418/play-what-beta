import * as React from "react";
import { ParameterConfig } from "../../../../Parameters/MasterParameters";

type DropdownSelectorProps = {
    parameter: ParameterConfig;
    updateParameter: any;
}

export class DropdownSelector extends React.Component<DropdownSelectorProps> {

    constructor(props) {
        super(props);
    }

    getOptions = () => {
        let options = [];
        for (let i = 0; i < this.props.parameter.data.length; i++) {
            let param = this.props.parameter.data[i];
            options.push(<option key={param.id} value={param.id} className={'dropdown-option'}>{param.name}</option>);
        }
        return options;
    }

    render = () => {
        return (
            <div className='dropdown-selector'>
                <select
                    defaultValue={null}
                    onChange={(event) => { this.props.updateParameter(this.props.parameter.id, event.target.value) }}>
                    {this.getOptions()}
                </select>
            </div>)
    };
}