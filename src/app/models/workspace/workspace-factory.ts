import { CodeWorkspace } from "./code-workspace";
import { DiagramWorkspace } from "./diagram-workspace"
import { EmptyWorkspace, Workspace, WorkspaceType } from "./workspace";

export function workspaceFactory(type: WorkspaceType): Workspace {
    if (type === WorkspaceType.DIAGRAM) return new DiagramWorkspace();
    if (type === WorkspaceType.CODE) return new CodeWorkspace();
    return new EmptyWorkspace();
}