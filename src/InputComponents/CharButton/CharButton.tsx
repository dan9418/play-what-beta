import * as React from "react";
import "./CharButton.css";

type CharButtonProps = {
    character: string;
    active: boolean;
    action: any;
    className?: string;
}

export class CharButton extends React.Component<CharButtonProps, null> {

    constructor(props) {
        super(props);
    }

    render = () => {
        let classes = ['char-button', this.props.className || ''];
        if (this.props.active) {
            classes.push('active')
        }
        else if (!this.props.action) {
            classes.push('readonly')
        }
        return (
            <div className={classes.join(' ')} onClick={this.props.action}>
                {this.props.character}
            </div>
        );
    };
}