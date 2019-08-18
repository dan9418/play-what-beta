import React = require("react");
import "./InputCell.css";

type InputCellProps = {
    name: string;
    vertical?: boolean;
}

export class InputCell extends React.Component<InputCellProps, null> {

    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div className={this.props.vertical ? 'input-cell-y' : 'input-cell-x'}>
                <div className='input-cell-label'>{this.props.name}</div>
                <div className='input-cell-contents'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}