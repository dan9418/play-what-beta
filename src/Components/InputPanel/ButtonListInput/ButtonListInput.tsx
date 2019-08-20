import * as React from "react";
import "./ButtonListInput.css";
import { ButtonInput } from "../ButtonInput/ButtonInput";
import { InputProps } from "../Input.config";

interface ButtonListInputProps extends InputProps {
    data: any[];
    displayProp?: string;
}

export class ButtonListInput extends React.Component<ButtonListInputProps, null> {

    constructor(props) {
        super(props);
    }

    getOptions = () => {
        let options = [];
        for (let i = 0; i < this.props.data.length; i++) {
            let option = this.props.data[i];
            let displayProp = this.props.displayProp || 'name';
            options.push(
                <ButtonInput
                    key={option.id}
                    character={option[displayProp]}
                    active={(this.props.value && option.id === this.props.value.id)}
                    action={() => { this.props.setValue(option) }}
                />
            );
        }
        return options;
    }

    render = () => {
        return (
            <div className='button-list-input'>
                {this.getOptions()}
            </div>
        );
    };
}