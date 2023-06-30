import { AppState } from "./app/state";
import { CacheState } from "./cache/state";
import { ProjectWorkspaceState } from "./project-workspace/state";

export interface State {
    app: AppState;
    cache: CacheState;
    projectWorkspace: ProjectWorkspaceState;
}