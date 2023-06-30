import { Action, createReducer } from "@ngrx/store";
import { AppState } from "./state";
import * as actions from './actions';

const initialState: AppState = {

};

const appReducer = createReducer(
    initialState
)

export function reducer(state: AppState | undefined, action: Action): AppState {
    return appReducer(state, action);
}