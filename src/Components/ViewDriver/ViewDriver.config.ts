import { DEGREES, ACCIDENTALS } from "../../Common/Theory.config";
import { ViewDriverProps } from "./ViewDriver";
import { CONCEPT_TYPES, VIEWER_TYPES } from "../InputPanel/InputPanel.config";

/***** Defaults *****/

const DEFAULT_CONCEPT_TYPE_INDEX = 1;
const DEFAULT_VIEWER_TYPE_INDEX = 0;

export const DEFAULT_VIEW_DRIVER_PROPS: ViewDriverProps = {
    degree: DEGREES[0],
    accidental: ACCIDENTALS[2],
    octave: 4,
    conceptType: CONCEPT_TYPES[DEFAULT_CONCEPT_TYPE_INDEX],
    conceptIntervals: CONCEPT_TYPES[DEFAULT_CONCEPT_TYPE_INDEX].presets[0].config.intervals,
    conceptConfig: { chordInversion: 0, melodicInversion: false },
    viewerType: VIEWER_TYPES[DEFAULT_VIEWER_TYPE_INDEX],
    viewerConfig: VIEWER_TYPES[DEFAULT_VIEWER_TYPE_INDEX].presets[0].config
}