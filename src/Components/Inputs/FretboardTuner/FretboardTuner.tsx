import * as React from "react";
import { NumericInput } from "../NumericInput/NumericInput";
import "./FretboradTuner.css";
import { FretboardConfig } from "../../Viewers/Fretboard/Fretboard";
import { FretboardStringConfig } from "../../Viewers/Fretboard/FretboardString";
import { ViewDriverState } from "../../ViewDriver/ViewDriver";
import { InputProps } from "../Input.config";
import { Interval } from "../../../Common/Theory.config";
import { DEFAULT_FRETBOARD_STRING_CONFIG } from "../../Viewers/Fretboard/Fretboard.config";

interface FretboardTunerProps extends InputProps, ViewDriverState {
    // Overidden for specificity
    viewerConfig: FretboardConfig;
    value: FretboardStringConfig[];
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

    toggleInterval = (interval: Interval, filteredIntervals: Interval[], stringIndex: number) => {
        let newIntervals: boolean | Interval[] = false;

        // If currently in "off" state, add all other intervals
        if (!filteredIntervals) {
            newIntervals = this.props.conceptIntervals.filter((x) => { return x.id !== interval.id; });
        }
        // If interval is already filtered, remove it
        else if (this.isIntervalFiltered(interval, filteredIntervals)) {
            newIntervals = filteredIntervals.filter((x) => { return x.id !== interval.id; });
        }
        // Otherwise, add it
        else {
            newIntervals = [...filteredIntervals];
            newIntervals.push(interval);
            // If all intervals are now filtered, set to "off" state for efficiency
            if (newIntervals.length === this.props.conceptIntervals.length)
                newIntervals = false;
        }
        this.setValue(stringIndex, 'filteredIntervals', newIntervals);
    }

    isIntervalFiltered = (interval: Interval, filteredIntervals: Interval[]): boolean => {
        // If in "off" state, no intervals are filtered. Otherwise, check for existence in array.
        return 'undefined' !== typeof filteredIntervals.find((filterInteval) => { return filterInteval.id === interval.id; });
    }

    getHeaderRow = () => {
        let items = [<th key='header-num'>#</th>, <th key='header-tuning'>Tuning</th>];
        for (let i = 0; i < this.props.conceptIntervals.length; i++) {
            let child = this.props.conceptIntervals[i];
            items.push(<th key={child.id}>{child.id}</th>);
        }
        return <tr>{...items}</tr>;
    }

    getStringTuner = (stringConfig: FretboardStringConfig, stringIndex: number) => {
        let items = [
            <td key='num' className='string-number'>{stringIndex + 1}</td>,
            <td key='tuner'><NumericInput value={stringConfig.openPosition} setValue={(value) => { this.setValue(stringIndex, 'openPosition', value); }} /></td>
        ];
        for (let i = 0; i < this.props.conceptIntervals.length; i++) {
            let interval = this.props.conceptIntervals[i];
            items.push(
                <td key={interval.id}>
                    {<input
                        type='checkbox'
                        checked={!stringConfig.filteredIntervals || this.isIntervalFiltered(interval, stringConfig.filteredIntervals)}
                        onChange={() => { this.toggleInterval(interval, stringConfig.filteredIntervals, stringIndex); }}
                    />}
                </td>
            );
        }
        return <tr key={stringIndex}>{...items}</tr>;
    }

    getStringTuners = () => {
        let items = [];
        for (let i = 0; i < this.props.viewerConfig.strings.length; i++) {
            let child = this.props.viewerConfig.strings[i];
            items.push(this.getStringTuner(child, i));
        }
        return items;
    }

    render = () => {
        return (
            <div className='fretboard-tuner'>
                <NumericInput
                    value={this.props.viewerConfig.strings.length}
                    setValue={(value) => this.props.setValue([...this.props.viewerConfig.strings.slice(0, value - 1), DEFAULT_FRETBOARD_STRING_CONFIG])}
                />
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