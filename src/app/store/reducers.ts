import { type ActionReducerMap } from '@ngrx/store';
import { type State } from './states';

import { reducer as appReducer } from './app/reducer';
import { reducer as cacheReducer } from './cache/reducer';
import { reducer as projectWorkspaceReducer } from './project-workspace/reducer';

export const reducers: ActionReducerMap<State> = {
    app: appReducer,
    cache: cacheReducer,
    projectWorkspace: projectWorkspaceReducer
};
