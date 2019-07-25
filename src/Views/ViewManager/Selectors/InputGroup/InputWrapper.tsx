import * as React from "react";
import "./InputGroup.css";

export class InputWrapper extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }

    render = () => {
        let classes = ['input-wrapper', this.props.vertical ? 'y' : 'x'];
        return (
            <div className={classes.join(' ')}>
                <div className='input-wrapper-name'>
                    {this.props.name}
                </div>
                <div className='input-wrapper-child'>
                    {this.props.children}
                </div>
            </div>
        );
    };
}