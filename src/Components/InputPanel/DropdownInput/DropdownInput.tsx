import * as React from "react";
import "./DropdownInput.css";
import { InputProps } from "../Input.config";

interface DropdownInputProps extends InputProps {
    data: any[];
}

export class DropdownInput extends React.Component<DropdownInputProps> {

    constructor(props) {
        super(props);
    }

    getOptions = () => {
        let options = [];
        for (let i = 0; i < this.props.data.length; i++) {
            let datum = this.props.data[i];
            options.push(<option key={datum.id} value={datum.id} className={'dropdown-option'}>{datum.name}</option>);
        }
        return options;
    }

    render = () => {
        return (
            <div className='dropdown-input'>
                <select
                    defaultValue={this.props.value && this.props.value.id}
                    onChange={(event) => { this.props.setValue(this.props.data[event.target.selectedIndex]); }}>
                    {this.getOptions()}
                </select>
            </div>)
    };
}