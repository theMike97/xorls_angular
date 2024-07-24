import { type Action, createReducer, on } from '@ngrx/store';
import { type ProjectWorkspaceState } from './state';
import * as actions from './actions';
import { type Component } from 'src/app/models/components';

const initialState: ProjectWorkspaceState = {
    name: undefined,
    viewport: {
        height: 0,
        width: 0
    },
    canvas: {
        height: 0,
        width: 0,
        context: null
    },
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
        actions.workspaceCanvasWidth,
        (state, { width }): ProjectWorkspaceState => setCanvasWidth(state, width)
    ),
    on(
        actions.workspaceCanvasHeight,
        (state, { height }): ProjectWorkspaceState => setCanvasHeight(state, height)
    ),
    on(
        actions.workspaceCanvasContext,
        (state, { context }): ProjectWorkspaceState => setCanvasContext(state, context)
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
function setWorkspaceViewportHeight(state: ProjectWorkspaceState, height: number): ProjectWorkspaceState {
    return {
        ...state,
        viewport: {
            ...state.viewport,
            height
        }
    }
}

function setWorkspaceViewportWidth(state: ProjectWorkspaceState, width: number): ProjectWorkspaceState {
    return {
        ...state,
        viewport: {
            ...state.viewport,
            width
        }
    }
}

function setCanvasHeight(state: ProjectWorkspaceState, height: number): ProjectWorkspaceState {
    return {
        ...state,
        canvas: {
            ...state.canvas,
            height
        }
    };
}

function setCanvasWidth(state: ProjectWorkspaceState, width: number): ProjectWorkspaceState {
    return {
        ...state,
        canvas: {
            ...state.canvas,
            width
        }
    };
}

function setCanvasContext(state: ProjectWorkspaceState, context: CanvasRenderingContext2D): ProjectWorkspaceState {
    return {
        ...state,
        canvas: {
            ...state.canvas,
            context // shows as {} in state: investigate
        }
    }
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
