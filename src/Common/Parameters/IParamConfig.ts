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