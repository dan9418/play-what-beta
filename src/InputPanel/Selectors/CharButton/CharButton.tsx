import * as React from "react";
import "./CharButton.css";

type CharButtonProps = {
    character: string;
    active: boolean;
    action: any;
}

export class CharButton extends React.Component<CharButtonProps, null> {

    constructor(props) {
        super(props);
    }

    render = () => {
        let classes = ['char-button'];
        if (this.props.active) {
            classes.push('active')
        }
        return (
            <div className={classes.join(' ')} onClick={this.props.action}>
                {this.props.character}
            </div>
        );
    };
}