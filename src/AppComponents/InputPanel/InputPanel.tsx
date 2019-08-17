import { ViewerManagerProps, ALL_DEGREES, ALL_ACCIDENTALS, VIEWER_DEFINITIONS, CONCEPT_DEFINITIONS, INTERVAL_OPTIONS } from "../../Common/AppConfig";
import React = require("react");
import "./InputPanel.css";
import { CharButton } from "../../InputComponents/CharButton/CharButton";

export class InputRow extends React.Component<any, any> {

    constructor(props) {
        super(props);

        this.state = {
            expanded: false
        }
    }

    // dup
    getRowInputs = (rowInputs: any[]) => {
        let inputs = [];
        for (let i = 0; i < rowInputs.length; i++) {
            let option = rowInputs[i];
            let InputComp = option.component;
            inputs.push(<div className={option.vertical ? 'config-panel-input-y' : 'config-panel-input-x'} key={i}>
                <div className='config-panel-input-label'>{option.label}</div>
                <div className='config-panel-input-contents'>
                    <InputComp
                        {...this.props}
                        value={this.props[option.propertyId]}
                        setValue={(value) => { this.props.setValue(option.propertyId, value); }}
                        {...option.props}
                    />
                </div>
            </div>);
        }
        return inputs;
    }

    render = () => {
        return (
            <div className='input-row'>
                <div className='input-row-main'>
                    {this.props.children}
                    {this.props.expandable &&
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
                        {this.props.subs && this.getRowInputs(this.props.subs)}
                    </div>}
            </div>
        );
    }
}

export interface InputPanelProps extends ViewerManagerProps {
    setValue: (property: string, value: any) => void,
    rows: any[]
}

export class InputPanel extends React.Component<InputPanelProps, any> {

    constructor(props) {
        super(props);
    }

    setNestedValue = (object: any, parentProperty: string, property: string, value: any) => {
        let mergedConfig = { ...object };
        mergedConfig[property] = value;
        this.props.setValue(parentProperty, mergedConfig);
    }

    getRowInputs = (rowInputs: any[]) => {
        let inputs = [];
        for (let i = 0; i < rowInputs.length; i++) {
            let option = rowInputs[i];
            let InputComponent = option.component;
            inputs.push(<div className={option.vertical ? 'config-panel-input-y' : 'config-panel-input-x'} key={i}>
                <div className='config-panel-input-label'>{option.label}</div>
                <div className='config-panel-input-contents'>
                    <InputComponent
                        value={this.props[option.propertyId]}
                        setValue={(value) => { this.props.setValue(option.propertyId, value); }}
                        {...option.props}
                    />
                </div>
            </div>);
        }
        return inputs;
    }

    getRows = () => {
        let rows = [];
        for (let i = 0; i < this.props.rows.length; i++) {
            let row = this.props.rows[i];
            rows.push(
                <>
                    <div className='input-panel-row-label'>
                        {row.label}
                    </div>
                    <InputRow expandable={row.expandable} subs={row.subs} {...this.props}>
                        {this.getRowInputs(row.inputs)}
                    </InputRow>
                </>
            );
        }
        return rows;
    }

    /* Render */

    render = () => {
        return (
            <div className='input-panel'>
                {this.getRows()}
            </div >);
    };
}