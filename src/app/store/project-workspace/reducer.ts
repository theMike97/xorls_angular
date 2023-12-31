import { type Action, createReducer, on } from '@ngrx/store';
import { type ProjectWorkspaceState } from './state';
import * as actions from './actions';

const initialState: ProjectWorkspaceState = {
    viewportHeight: 0,
    viewportWidth: 0
};

const appReducer = createReducer(
    initialState,

    on(
        actions.workspaceViewportHeight,
        (state, { height }): ProjectWorkspaceState => setWorkspaceViewportHeight(state, height)
    ),
    on(
        actions.workspaceViewportWidth,
        (state, { width }): ProjectWorkspaceState => setWorkspaceViewportWidth(state, width)
    )
);

export function reducer(state: ProjectWorkspaceState | undefined, action: Action): ProjectWorkspaceState {
    return appReducer(state, action);
}

// #region reducer functions
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
// #endregion
