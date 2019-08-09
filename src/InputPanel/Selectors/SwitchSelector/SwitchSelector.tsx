import * as React from "react";
import "./SwitchSelector.css";

type SwitchSelectorProps = {
    setValue: (value: boolean) => void;
    value: boolean;
}

export class SwitchSelector extends React.Component<SwitchSelectorProps, null> {

    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div className='switch-selector'>
                <label className='switch'>
                    <input type='checkbox' />
                    <span className='slider round' onClick={() => this.props.setValue(!this.props.value)}/>
                </label>
            </div>)
    };
}