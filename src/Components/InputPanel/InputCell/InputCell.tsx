import React = require("react");
import "./InputCell.css";

export interface InputCellProps {
    label: string;
    styles?: {
        vertical?: boolean;
        bold?: boolean;
    }
}

export class InputCell extends React.Component<InputCellProps, null> {

    constructor(props) {
        super(props);
    }

    render = () => {
        let cellClasses = ['input-cell', this.props.styles && this.props.styles.vertical ? 'y' : 'x'];
        let labelClasses = ['input-cell-label', this.props.styles && this.props.styles.bold ? 'bold' : '']
        return (
            <div className={cellClasses.join(' ')}>
                <div className={labelClasses.join(' ')}>{this.props.label}</div>
                <div className='input-cell-contents'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}