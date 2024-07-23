import { type Action, createReducer, on } from '@ngrx/store';
import { type ProjectWorkspaceState } from './state';
import * as actions from './actions';
import { type Component } from 'src/app/models/components';

const initialState: ProjectWorkspaceState = {
    viewportHeight: 0,
    viewportWidth: 0,
    selectedComponent: {
        ghost: false,
        component: null
    }
};

const appReducer = createReducer(
    initialState,

    // Component panel reducers
    on(
        actions.componentPanelSelectComponent,
        (state, { component }): ProjectWorkspaceState => setComponentPanelSelectedComponent(state, component)
    ),

    // Workspace reducers
    on(
        actions.workspaceCanvasHeight,
        (state, { height }): ProjectWorkspaceState => setCanvasHeight(state, height)
    ),
    on(
        actions.workspaceViewportWidth,
        (state, { width }): ProjectWorkspaceState => setWorkspaceViewportWidth(state, width)
    ),
    on(
        actions.workspaceSelectComponent,
        (state, { component }): ProjectWorkspaceState => setWorkspaceSelectedComponent(state, component)
    )
);

export function reducer(state: ProjectWorkspaceState | undefined, action: Action): ProjectWorkspaceState {
    return appReducer(state, action);
}

// #region reducer functions

// #region component panel reducer functions
function setComponentPanelSelectedComponent(state: ProjectWorkspaceState, component: Component): ProjectWorkspaceState {
    return {
        ...state,
        selectedComponent: {
            ghost: true,
            component
        }
    };
}
// #endregion

// #region workspace reducer functions
function setCanvasHeight(state: ProjectWorkspaceState, canvasHeight: number): ProjectWorkspaceState {
    return {
        ...state,
        canvasHeight
    };
}

function setCanvasWidth(state: ProjectWorkspaceState, canvasWidth: number): ProjectWorkspaceState {
    return {
        ...state,
        canvasWidth
    };
}

function setWorkspaceSelectedComponent(state: ProjectWorkspaceState, component: Component): ProjectWorkspaceState {
    return {
        ...state,
        selectedComponent: {
            ghost: false,
            component
        }
    };
}
// #endregion
// #endregion
