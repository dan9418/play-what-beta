import React = require("react");
import "./InputCell.css";

type InputCellProps = {
    name: string;
    vertical?: boolean;
    bold?: boolean;
}

export class InputCell extends React.Component<InputCellProps, null> {

    constructor(props) {
        super(props);
    }

    render = () => {
        let cellClasses = ['input-cell', this.props.vertical ? 'y' : 'x'];
        let labelClasses = ['input-cell-label', this.props.bold ? 'bold' : '']
        return (
            <div className={cellClasses.join(' ')}>
                <div className={labelClasses.join(' ')}>{this.props.name}</div>
                <div className='input-cell-contents'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}