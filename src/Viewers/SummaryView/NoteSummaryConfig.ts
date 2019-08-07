export interface NoteSummaryConfig {
    showInactive: boolean;
}

export const PRESETS_NOTE_SUMMARY_CONFIG = [
    {
        id: 'default',
        name: 'Default',
        config: {
            showInactive: true
        }
    },
    {
        id: 'activeOnly',
        name: 'Active Only',
        config: {
            showInactive: false
        }
    }
]