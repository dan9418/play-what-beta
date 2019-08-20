import React = require("react");
import "./InputRow.css";
import { ButtonInput } from "../ButtonInput/ButtonInput";

type InputRowProps = {
    subrowInputs?: any[];
}

type InputRowState = {
    expanded: boolean;
}

export class InputRow extends React.Component<InputRowProps, InputRowState> {

    constructor(props) {
        super(props);

        this.state = {
            expanded: false 
        }
    }

    render = () => {
        return (
            <div className='input-row'>
                <div className='input-row-main'>
                    {this.props.children}
                    {this.props.subrowInputs && this.props.subrowInputs.length &&
                        <ButtonInput
                            className='input-row-toggle'
                            active={this.state.expanded}
                            character={this.state.expanded ? '-' : '+'}
                            action={() => { this.setState((oldState) => { return { expanded: !oldState.expanded } }) }}
                        />
                    }
                </div>
                {this.state.expanded &&
                    <div className='input-subrow'>
                        {this.props.subrowInputs && this.props.subrowInputs.length > 0 && this.props.subrowInputs}
                    </div>}
            </div>
        );
    }
}