import * as React from "react";
import "./Selectors.css";

export class NumericSelector extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div className='numeric-selector'>
                <div className='numeric-selector down' onClick={() => { this.props.updateValue(this.props.value - 1); }}>-</div>
                <div className='numeric-selector value'>{this.props.value}</div>
                <div className='numeric-selector up' onClick={() => { this.props.updateValue(this.props.value + 1); }}>+</div>
            </div>
        );
    };
}