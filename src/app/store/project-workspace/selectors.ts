import { createFeatureSelector, createSelector } from '@ngrx/store';
import { type ProjectWorkspaceState } from './state';
import { type SelectedComponent } from 'src/app/models/components';

const getProjectWorkspaceState = createFeatureSelector<ProjectWorkspaceState>('projectWorkspace');

export const workspaceCanvasHeight = createSelector(getProjectWorkspaceState, (state): number =>
    state.canvasHeight
);

export const workspaceCanvasWidth = createSelector(getProjectWorkspaceState, (state): number =>
    state.canvasWidth
);

export const workspaceSelectedComponent = createSelector(getProjectWorkspaceState, (state): SelectedComponent =>
    state.selectedComponent
);
