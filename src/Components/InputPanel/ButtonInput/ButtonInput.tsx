import * as React from "react";
import "./ButtonInput.css";

type ButtonInputProps = {
    character: string;
    active: boolean;
    disabled?: boolean;
    action: any;
    className?: string;
}

export class ButtonInput extends React.Component<ButtonInputProps, null> {

    constructor(props) {
        super(props);
    }

    render = () => {
        let classes = ['button-input', this.props.className || ''];
        if (this.props.active) {
            classes.push('active');
        }
        else if (!this.props.action) {
            classes.push('readonly');
        }
        if (this.props.disabled) {
            classes.push('disabled');
        }
        return (
            <div className={classes.join(' ')} onClick={this.props.action}>
                {this.props.character}
            </div>
        );
    };
}