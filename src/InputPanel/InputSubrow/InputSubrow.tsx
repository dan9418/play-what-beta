import * as React from "react";
import "./InputSubrow.css";

type InputSubrowProps = {
    children: any;
    details?: any;
}

export class InputSubrow extends React.Component<InputSubrowProps, null> {

    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div className='input-subrow'>
                <div className='input-subrow-main'>
                    {this.props.children}
                </div>
                {this.props.details &&
                    <div className='input-subrow-details'>
                        {this.props.details}
                    </div>
                }
            </div>
        );
    };
}