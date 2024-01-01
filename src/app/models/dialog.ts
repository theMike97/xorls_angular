import { type Action, ActionCreator } from '@ngrx/store';

export enum DialogType {
    NONE = 'NONE',
    STANDARD = 'STANDARD',
    STANDARD_MODAL = 'STANDARD MODAL',
    PROGRESS_BAR = 'PROGESS BAR',
    PROGRESS_BAR_MODAL = 'PROGRESS BAR MODAL',
    APP_PREFERENCES = 'APP PREFERENCES'
}

export interface DialogOption {
    text: string;
    action?: Action;
}

export interface Dialog {
    type: DialogType;
    header: string;
    message?: string;
    options: {
        primary: DialogOption;
        secondary?: DialogOption;
        tertiary?: DialogOption;
    };
}
