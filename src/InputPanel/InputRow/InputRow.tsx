import * as React from "react";
import "./InputRow.css";
import { DropdownSelector } from "../Selectors/DropdownSelector/DropdownSelector";
import { NumericSelector } from "../Selectors/NumericSelector/NumericSelector";
import { ViewerProps } from "../../App";
import { ALL_DEGREES } from "../../Common/Theory/Key/DegreeConfig";
import { ALL_ACCIDENTALS } from "../../Common/Theory/Key/AccidentalConfig";
import { ALL_CONCEPTS } from "../../Common/Theory/Concepts/ConceptConfig";
import { ALL_VIEWERS } from "../../Viewers/ViewerConfig";
import { BoxSelector } from "../Selectors/BoxSelector/BoxSelector";
import { IntervalSelector } from "../Selectors/IntervalSelector/IntervalSelector";
import { InputGroup } from "../InputGroup/InputGroup";
import { InputSubrow } from "../InputSubrow/InputSubrow";

type InputRowProps = {
    viewer: ViewerProps,
    setValue: (property: string, value: any) => void,
}

export class InputRow extends React.Component<InputRowProps, any> {

    constructor(props) {
        super(props);
    }

    /* Render */

    render = () => {
        let ViewerConfigPanel = this.props.viewer.viewerConfigPanel;

        return (
            <div className='input-row'>
                <InputSubrow>
                    <InputGroup label='Key'>
                        <BoxSelector
                            data={ALL_DEGREES}
                            value={this.props.viewer.degree}
                            setValue={(value) => { this.props.setValue('degree', value); }}
                        />
                        <BoxSelector
                            data={ALL_ACCIDENTALS.filter((a) => { return Math.abs(a.offset) <= 1 })}
                            value={this.props.viewer.accidental}
                            setValue={(value) => { this.props.setValue('accidental', value); }}
                        />
                    </InputGroup>
                    <InputGroup label='Octave'>
                        <NumericSelector
                            value={this.props.viewer.octave}
                            setValue={(value) => { this.props.setValue('octave', value); }}
                        />
                    </InputGroup>
                </InputSubrow>
                <InputSubrow details={
                    <IntervalSelector
                        value={this.props.viewer.concept}
                        setValue={(value) => { this.props.setValue('concept', value); }}
                        keyDef={{ degree: this.props.viewer.degree, accidental: this.props.viewer.accidental }}
                    />}
                >
                    <InputGroup label='Concept'>
                        <DropdownSelector data={ALL_CONCEPTS} value={this.props.viewer.conceptType} setValue={(value) => { this.props.setValue('conceptType', value); }} />
                        <DropdownSelector data={this.props.viewer.conceptType.presets} value={this.props.viewer.concept} setValue={(value) => { this.props.setValue('concept', value); }} />
                    </InputGroup>
                </InputSubrow>
                <InputSubrow details={
                    <ViewerConfigPanel
                        viewer={this.props.viewer.viewer}
                        setValue={(value) => { this.props.setValue('viewer', value); }}
                    />
                }>
                    <InputGroup label='Viewer'>
                        <DropdownSelector
                            data={ALL_VIEWERS}
                            value={this.props.viewer.viewerType}
                            setValue={(value) => { this.props.setValue('viewerType', value); }}
                        />
                        <DropdownSelector
                            data={this.props.viewer.viewerType.presets}
                            value={this.props.viewer.viewer}
                            setValue={(value) => { this.props.setValue('viewer', value); }}
                        />
                    </InputGroup>
                </InputSubrow>
            </div>);
    };
}