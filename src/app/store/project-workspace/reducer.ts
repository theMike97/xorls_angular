import { Action, createReducer } from "@ngrx/store";
import { ProjectWorkspaceState } from "./state";
import * as actions from './actions';

const initialState: ProjectWorkspaceState = {

};

const appReducer = createReducer(
    initialState
)

export function reducer(state: ProjectWorkspaceState | undefined, action: Action): ProjectWorkspaceState {
    return appReducer(state, action);
}