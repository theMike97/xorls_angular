import { Workspace, WorkspaceType } from "./workspace";

export class CodeWorkspace extends Workspace {
    
    public constructor(name?: string) {
        super(name);
    }

    public is(type: WorkspaceType): boolean {
        return type === WorkspaceType.CODE;
    }
}