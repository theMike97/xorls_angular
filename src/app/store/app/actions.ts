import { Action, createAction, props } from '@ngrx/store';
import { type ApplicationPreferences } from 'src/app/models/app-preferences';
import { DialogType } from 'src/app/models/dialog';

// #region app preferences dialog
export const openAppPreferencesDialog = createAction(`open a [${DialogType.APP_PREFERENCES}] dialog`);
export const takeAppPreferencesSnapshot = createAction(`take a snapshot of the current [${DialogType.APP_PREFERENCES}] state`);
export const executeAppPreferencesOk = createAction(`executes the ok option for [${DialogType.APP_PREFERENCES}]`, props<{ appPreferences: ApplicationPreferences }>());
export const executeAppPreferencesCancel = createAction(`executes the cancel dialog option for [${DialogType.APP_PREFERENCES}]`);
// #endregion
