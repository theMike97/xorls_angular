import { type Action, createReducer, on } from '@ngrx/store';
import { type AppState } from './state';
import * as actions from './actions';
import { DialogType } from 'src/app/models/dialog';
import { GridStyle } from 'src/app/models/grid-style';
import { type ApplicationPreferences } from 'src/app/models/app-preferences';

const initialState: AppState = {
    appPreferences: {
        generalSettings: {
        },
        diagramWorkspaceSettings: {
            gridStyle: GridStyle.DOTS
        },
        codeWorkspaceSettings: {
            indentSpaces: 4
        }
    },
    dialog: {
        type: DialogType.NONE,
        header: '',
        options: {
            primary: null,
            secondary: null,
            tertiary: null
        }
    }
};

const appReducer = createReducer(
    initialState,

    on(
        actions.openAppPreferencesDialog,
        (state): AppState => setAppPreferencesDialogInfo(state)
    ),
    on(
        actions.executeAppPreferencesOk,
        (state, { appPreferences }): AppState => appPreferencesApply(state, appPreferences)
    ),
    on(
        actions.executeAppPreferencesCancel,
        (state): AppState => appPreferencesDialogCancel(state)
    )
);

export function reducer(state: AppState | undefined, action: Action): AppState {
    return appReducer(state, action);
}

// #region reducer function
function setAppPreferencesDialogInfo(state: AppState): AppState {
    return {
        ...state,
        dialog: {
            type: DialogType.APP_PREFERENCES,
            header: 'Application Preferences',
            options: {
                primary: {
                    text: 'Ok'
                },
                secondary: {
                    text: 'Cancel'
                }
            }
        }
    };
}

function appPreferencesApply(state: AppState, appPreferences: ApplicationPreferences): AppState {
    return {
        ...state,
        appPreferences,
        dialog: initialState.dialog
    };
}

function appPreferencesDialogCancel(state: AppState): AppState {
    return {
        ...state,
        dialog: initialState.dialog
    };
}
// #endregion
