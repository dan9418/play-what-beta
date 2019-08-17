import * as React from "react";
import "./BoxSelector.css";
import { CharButton } from "../CharButton/CharButton";
import { InputProps } from "../../Common/AppConfig";

interface BoxInputProps extends InputProps {
    data: any[];
    displayProp?: string;
}

export class BoxSelector extends React.Component<BoxInputProps, null> {

    constructor(props) {
        super(props);
    }

    getOptions = () => {
        let options = [];
        for (let i = 0; i < this.props.data.length; i++) {
            let option = this.props.data[i];
            let displayProp = this.props.displayProp || 'name';
            options.push(
                <CharButton
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
            <div className='box-selector'>
                {this.getOptions()}
            </div>
        );
    };
}