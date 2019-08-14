import * as React from "react";
import "./NumericSelector.css";
import { SelectorProps } from "../SelectorConfig";

export class NumericSelector extends React.Component<SelectorProps, any> {

    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div className='numeric-selector'>
                <div className='numeric-selector down' onClick={() => { this.props.setValue(this.props.value - 1); }}>-</div>
                <div className='numeric-selector value'>{this.props.value}</div>
                <div className='numeric-selector up' onClick={() => { this.props.setValue(this.props.value + 1); }}>+</div>
            </div>
        );
    };
}