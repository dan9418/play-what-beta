export interface Preset<T> {
    id: string;
    name: string;
    config: T;
}

export interface OptionInput {
    propertyId: string;
    label: string;
    vertical?: boolean;
    component: any;
    props: any;
    parentProps?: boolean
}