import { type AppState } from './app/state';
import { type CacheState } from './cache/state';
import { type ProjectWorkspaceState } from './project-workspace/state';

export interface State {
    app: AppState;
    cache: CacheState;
    projectWorkspace: ProjectWorkspaceState;
}
