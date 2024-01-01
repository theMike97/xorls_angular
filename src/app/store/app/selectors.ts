import { createFeatureSelector, createSelector } from '@ngrx/store';
import { type AppState } from './state';
import { type Dialog } from 'src/app/models/dialog';
import { type ApplicationPreferences } from 'src/app/models/app-preferences';

const getAppState = createFeatureSelector<AppState>('app');

export const globalDialogInfo = createSelector(getAppState, (state): Dialog =>
    state.dialog
);

export const appPreferences = createSelector(getAppState, (state): ApplicationPreferences =>
    state.appPreferences
);
