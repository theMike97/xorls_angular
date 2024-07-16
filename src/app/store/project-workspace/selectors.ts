import { createFeatureSelector, createSelector } from '@ngrx/store';
import { type ProjectWorkspaceState } from './state';
import { type SelectedComponent } from 'src/app/models/components';

const getProjectWorkspaceState = createFeatureSelector<ProjectWorkspaceState>('projectWorkspace');

export const workspaceViewportHeight = createSelector(getProjectWorkspaceState, (state): number =>
    state.viewportHeight
);

export const workspaceViewportWidth = createSelector(getProjectWorkspaceState, (state): number =>
    state.viewportWidth
);

export const workspaceSelectedComponent = createSelector(getProjectWorkspaceState, (state): SelectedComponent =>
    state.selectedComponent
);
