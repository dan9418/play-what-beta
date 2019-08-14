import * as React from "react";
import "./BoxSelector.css";
import { SelectorProps } from "../SelectorConfig";

interface BoxSelectorProps extends SelectorProps {
    data: any[];
    displayProp?: string;
}

export class BoxSelector extends React.Component<BoxSelectorProps, null> {

    constructor(props) {
        super(props);
    }

    getOptions = () => {
        let options = [];
        for (let i = 0; i < this.props.data.length; i++) {
            let option = this.props.data[i];
            let displayProp = this.props.displayProp || 'name';
            let classes = ['box-selector-option'];
            if (option.id === this.props.value.id) {
                classes.push('active-setting');
            }
            options.push(
                <div
                    key={option.id}
                    className={classes.join(' ')}
                    onClick={() => { this.props.setValue(option) }}
                >{option[displayProp]}</div>
            );
        }
        return options;
    }

    render = () => {
        return (
            <div className='box-selector'>
                {this.getOptions()}
            </div>
        );
    };
}