import React = require("react");
import "./InputRow.css";
import { CharButton } from "../../InputComponents/CharButton/CharButton";

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
                        <CharButton
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