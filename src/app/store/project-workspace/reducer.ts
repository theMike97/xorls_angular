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
        actions.workspaceViewportHeight,
        (state, { height }): ProjectWorkspaceState => setWorkspaceViewportHeight(state, height)
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
function setWorkspaceViewportHeight(state: ProjectWorkspaceState, viewportHeight: number): ProjectWorkspaceState {
    return {
        ...state,
        viewportHeight
    };
}

function setWorkspaceViewportWidth(state: ProjectWorkspaceState, viewportWidth: number): ProjectWorkspaceState {
    return {
        ...state,
        viewportWidth
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
