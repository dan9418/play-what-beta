import * as React from "react";
import "./NumericSelector.css";
import { CharButton } from "../CharButton/CharButton";
import { InputProps } from "../../Common/AppConfig";

export class NumericSelector extends React.Component<InputProps, any> {

    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div className='numeric-selector'>
                <CharButton
                    active={false}
                    action={() => { this.props.setValue(this.props.value - 1); }}
                    className='down'
                    character='-'
                />
                <CharButton
                    active={false}
                    action={null}
                    character={this.props.value}
                />
                <CharButton
                    active={false}
                    action={() => { this.props.setValue(this.props.value + 1); }}
                    className='up'
                    character='+'
                />
            </div>
        );
    };
}