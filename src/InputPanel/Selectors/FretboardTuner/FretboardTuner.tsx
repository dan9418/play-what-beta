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

    setValue = (stringIndex: number, property: string, value: any) => {
        let mergedConfig = [...this.props.viewerConfig.strings];
        mergedConfig[stringIndex][property] = value;
        this.props.setValue(mergedConfig);
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
            <td><NumericSelector value={stringConfig.openPosition} setValue={(value) => { this.setValue(stringIndex, 'openPosition', value); }} /></td>
        ];
        for (let i = 0; i < this.props.conceptIntervals.length; i++) {
            let interval = this.props.conceptIntervals[i];
            items.push(
                <td>
                    {<input
                        type='checkbox'
                        checked={
                            !stringConfig.filteredIntervals
                            || 'undefined' !== typeof stringConfig.filteredIntervals.find((filterInteval) => { return filterInteval.id === interval.id; })
                        }
                        onClick={() => {
                            let newIntervals = stringConfig.filteredIntervals ? [...stringConfig.filteredIntervals] : [...this.props.conceptIntervals];
                            let exists = 'undefined' !== typeof newIntervals.find((filterInteval) => { return filterInteval.id === interval.id; });
                            if (exists) newIntervals = newIntervals.filter((x) => { return x.id !== interval.id; });
                            else newIntervals.push(interval);
                            this.setValue(stringIndex, 'filteredIntervals', newIntervals)
                        }}
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