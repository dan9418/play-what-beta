import * as React from "react";
import "./SwitchInput.css";
import { InputProps } from "../Input.config";

export class SwitchInput extends React.Component<InputProps, null> {

    constructor(props) {
        super(props);
    }

    render = () => {
        let classes = ['switch-input', this.props.value ? 'on' : 'off']
        return (
            <div className={classes.join(' ')}>
                <div className='switch-shell' onClick={() => this.props.setValue(!this.props.value)}>
                    <div className='switch-ball'></div>
                </div>
            </div>)
    };
}