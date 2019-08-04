import * as React from "react";
import "./SwitchSelector.css";

type SwitchSelectorProps = {
    updateParameter: any;
    parameter: any;
}

type SwitchSelectorState = {
    active: boolean
}

export class SwitchSelector extends React.Component<SwitchSelectorProps, SwitchSelectorState> {

    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }

    toggle = () => {
        this.setState((oldState) => {
            this.props.updateParameter(this.props.parameter.id, !oldState.active)
            return {
                active: !oldState.active
            }
        })
    }

    render = () => {
        return (
            <div className='switch-selector'>
                {/**<div className='switch-selector-label'>
                    {this.props.parameter.name}
                </div>*/}
                <label className='switch'>
                    <input type='checkbox' />
                    <span className='slider round' onClick={this.toggle}/>
                </label>
            </div>)
    };
}