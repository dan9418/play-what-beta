import * as React from "react";
import "./InputGroup.css";
import { InputWrapper } from "./InputWrapper";

export class InputGroup extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div className='input-group'>
                <div className='input-group-header'>
                    <div className='input-group-header-icon'>
                        {/*this.props.icon*/}
                    </div>
                    <div className='input-group-header-name'>
                        {this.props.name}
                    </div>
                </div>
                <div className='input-group-content'>
                    {this.props.children}
                </div>
            </div>
        );
    };
}