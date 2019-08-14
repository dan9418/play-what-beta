import * as React from "react";
import "./SwitchSelector.css";
import { SelectorProps } from "../SelectorConfig";

export class SwitchSelector extends React.Component<SelectorProps, null> {

    constructor(props) {
        super(props);
    }

    render = () => {
        let classes = ['switch-selector', this.props.value ? 'on' : 'off']
        return (
            <div className={classes.join(' ')}>
                <div className='switch-shell' onClick={() => this.props.setValue(!this.props.value)}>
                    <div className='switch-ball'></div>
                </div>
            </div>)
    };
}