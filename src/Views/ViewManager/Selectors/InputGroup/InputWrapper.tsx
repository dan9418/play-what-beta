import * as React from "react";
import "./InputGroup.css";

export class InputWrapper extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div className='input-wrapper'>
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