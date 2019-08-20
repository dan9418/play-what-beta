import { KeyboardConfig } from "./Keyboard";
import { NOTE_LABELS } from "../../../Common/Theory.config";

export const DEFAULT_KEYBOARD_CONFIG: KeyboardConfig = {
    noteLabel: NOTE_LABELS[0],
    filterOctave: true,
    keyLow: 0,
    keyHigh: 24
}