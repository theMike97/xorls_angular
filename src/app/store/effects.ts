import { Effects as AppEffects } from "./app/effects";
import { Effects as CacheEffects } from "./cache/effects";
import { Effects as ProjectWorkspaceEffects } from "./project-workspace/effects";

export const effects: any[] = [
    AppEffects,
    CacheEffects,
    ProjectWorkspaceEffects
];