import * as React from "react";
import "./NumericSelector.css";
import { CharButton } from "../CharButton/CharButton";
import { InputProps } from "../Input.config";

interface NumericSelectorProps extends InputProps {
    max?: number;
    min?: number;
}

export class NumericSelector extends React.Component<NumericSelectorProps, null> {

    constructor(props) {
        super(props);
    }

    canSubtract = (): boolean => {
        return typeof this.props.min !== 'undefined' && this.props.value > this.props.min;
    }

    canAdd = (): boolean => {
        return typeof this.props.max !== 'undefined' && this.props.value < this.props.max;
    }

    render = () => {
        return (
            <div className='numeric-selector'>
                <CharButton
                    active={false}
                    disabled={!this.canSubtract()}
                    action={() => { if (this.canSubtract()) this.props.setValue(this.props.value - 1); }}
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
                    disabled={!this.canAdd()}
                    action={() => { if (this.canAdd()) this.props.setValue(this.props.value + 1); }}
                    className='up'
                    character='+'
                />
            </div>
        );
    };
}