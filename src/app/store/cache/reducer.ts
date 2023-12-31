import { type Action, createReducer } from '@ngrx/store';
import { type CacheState } from './state';
import * as actions from './actions';

const initialState: CacheState = {

};

const appReducer = createReducer(
    initialState
);

export function reducer(state: CacheState | undefined, action: Action): CacheState {
    return appReducer(state, action);
}
