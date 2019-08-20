import * as React from "react";
import "./NumericInput.css";
import { ButtonInput } from "../ButtonInput/ButtonInput";
import { InputProps } from "../Input.config";

interface NumericInputProps extends InputProps {
    max?: number;
    min?: number;
}

export class NumericInput extends React.Component<NumericInputProps, null> {

    constructor(props) {
        super(props);
    }

    canSubtract = (): boolean => {
        return (typeof this.props.min === 'undefined') || (this.props.value > this.props.min);
    }

    canAdd = (): boolean => {
        return (typeof this.props.max === 'undefined') || (this.props.value < this.props.max);
    }

    render = () => {
        return (
            <div className='numeric-input'>
                <ButtonInput
                    active={false}
                    disabled={!this.canSubtract()}
                    action={() => { if (this.canSubtract()) this.props.setValue(this.props.value - 1); }}
                    className='down'
                    character='-'
                />
                <ButtonInput
                    active={false}
                    action={null}
                    character={this.props.value}
                />
                <ButtonInput
                    active={false}
                    disabled={!this.canAdd()}
                    action={() => { if (this.canAdd()) this.props.setValue(this.props.value + 1); }}
                    className='up'
                    character='+'
                />
            </div>
        );
    };
}