import { createFeatureSelector, createSelector } from '@ngrx/store';
import { type ProjectWorkspaceState } from './state';
import { type SelectedComponent } from 'src/app/models/components';

const getProjectWorkspaceState = createFeatureSelector<ProjectWorkspaceState>('projectWorkspace');

export const workspaceViewportHeight = createSelector(getProjectWorkspaceState, (state): number =>
    state.viewport.height
);

export const workspaceViewportWidth = createSelector(getProjectWorkspaceState, (state): number =>
    state.viewport.width
);

export const workspaceCanvasHeight = createSelector(getProjectWorkspaceState, (state): number =>
    state.canvas.height
);

export const workspaceCanvasWidth = createSelector(getProjectWorkspaceState, (state): number =>
    state.canvas.width
);

export const workspaceCanvasContext = createSelector(getProjectWorkspaceState, (state): CanvasRenderingContext2D =>
    state.canvas.context
);

export const workspaceSelectedComponent = createSelector(getProjectWorkspaceState, (state): SelectedComponent =>
    state.selectedComponent
);
