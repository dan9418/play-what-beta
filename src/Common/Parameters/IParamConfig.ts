import { IntervalDef } from "./Concepts/IntervalConfig";
import { number } from "prop-types";

// Generic params

export interface IParamDef {
    id: string;
    name: string;
}

export interface IParamConfig<TParamDef> {
    id: string;
    name: string;
    data: TParamDef[];
    options?: IParamConfig<IParamDef>[];
}

// Concepts

export interface IConceptDef extends IParamDef {}

export interface IConceptOptions {}

export interface IConcept {
    typeId: string;
    definition: IConceptDef;
    options: IConceptOptions;
    getIntervals(): IntervalDef[];
}

export interface IConceptConfig<TConceptDef> {
    id: string;
    name: string;
    data: TConceptDef[];
    options: IParamConfig<any>[];
}