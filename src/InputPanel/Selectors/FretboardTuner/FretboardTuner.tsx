import * as React from "react";
import { NumericSelector } from "../NumericSelector/NumericSelector";
import { SelectorProps } from "../SelectorConfig";
import { GuitarStringConfig, GuitarConfig } from "../../../Viewers/GuitarView/GuitarConfig";
import { ViewerProps } from "../../../Viewers/Viewer/Viewer";
import "./FretboradTuner.css";
import { string } from "prop-types";

interface FretboardTunerProps extends SelectorProps, ViewerProps {
    viewerConfig: GuitarConfig;
    value: GuitarStringConfig[];
}

export class FretboardTuner extends React.Component<FretboardTunerProps, null> {

    constructor(props) {
        super(props);
    }

    getHeaderRow = () => {
        let items = [<th>#</th>, <th>Tuning</th>];
        for (let i = 0; i < this.props.conceptIntervals.length; i++) {
            let child = this.props.conceptIntervals[i];
            items.push(<th>{child.id}</th>);
        }
        return <tr>{...items}</tr>;
    }

    getStringTuner = (stringConfig: GuitarStringConfig, stringIndex: number) => {
        let items = [
            <td className='string-number'>{stringIndex + 1}</td>,
            <td><NumericSelector value={stringConfig.openPosition} setValue={null} /></td>
        ];
        for (let i = 0; i < this.props.conceptIntervals.length; i++) {
            let interval = this.props.conceptIntervals[i];
            items.push(
                <td>
                    {<input
                        type='checkbox'
                        checked={
                            stringConfig.filterIntervals.length === 0
                            || 'undefined' === typeof stringConfig.filterIntervals.find((filterInteval) => { return filterInteval.id === interval.id; })
                        }
                    />}
                </td>
            );
        }
        return <tr>{...items}</tr>;
    }

    getStringTuners = () => {
        let items = [];
        for (let i = 0; i < this.props.value.length; i++) {
            let child = this.props.viewerConfig.strings[i];
            items.push(this.getStringTuner(child, i));
        }
        return items;
    }

    render = () => {
        return (
            <div className='fretboard-tuner'>
                <table className='fretboard-tuner-table'>
                    <tbody>
                        {this.getHeaderRow()}
                        {this.getStringTuners()}
                    </tbody>
                </table>
            </div>
        );
    }
}