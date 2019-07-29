import { Parameter } from "../MasterParameters";
import { NoteSummary } from "../../Views/ViewManager/Viewers/SummaryView/NoteSummary";
import { Piano } from "../../Views/ViewManager/Viewers/PianoView/Piano";
import { Guitar } from "../../Views/ViewManager/Viewers/GuitarView/Guitar";

export interface ViewerParameter extends Parameter {
    component: any;
}

export let ViewerDefinitions: ViewerParameter[] = [
    {
        id: 'summary',
        name: 'Summmary',
        component: NoteSummary,
    },
    {
        id: 'piano',
        name: 'Piano',
        component: Piano,
    },
    {
        id: 'stringInstrument',
        name: 'String Insrument',
        component: Guitar,
    }
];