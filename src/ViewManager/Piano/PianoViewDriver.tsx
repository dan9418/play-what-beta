import * as React from "react";
import * as ReactDOM from "react-dom";
import "../../Common/Common.css";
import { Piano } from "./Piano";
import { LabelSelector } from "../Common/LabelSelector";
import { e } from "../../App";

export class PianoViewDriver extends React.Component<any> {
	
	constructor(props) {
        super(props);
        (this.state as any) = {
            label: 'interval'
        };
    }

    updateViewDriverState = (property, value) => {
        let update = {};
        update[property] = value;
        this.setState(update);
    }

	render = () => {
        return e('div', { id: 'piano-view-driver' },
                e(Piano, { functionalNotes: this.props.notes, length: 25, config: (this.state as any) }, null),
                e(LabelSelector, { updateViewDriverState: this.updateViewDriverState }, null)
            );
    };
}