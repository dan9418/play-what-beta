import * as React from "react";
import "./DropdownSelector.css";
import { SelectorProps } from "../SelectorConfig";

interface DropdownSelectorProps extends SelectorProps {
    data: any[];
}

export class DropdownSelector extends React.Component<DropdownSelectorProps> {

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
            <div className='dropdown-selector'>
                <select
                    defaultValue={this.props.value.id}
                    onChange={(event) => { this.props.setValue(this.props.data[event.target.selectedIndex]); }}>
                    {this.getOptions()}
                </select>
            </div>)
    };
}