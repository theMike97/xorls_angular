import { DiagramWorkspace } from "./diagram-workspace";

export enum WorkspaceType {
    DIAGRAM,
    CODE
}

export interface Workspace {
    /**
     * name: name of the file in the project
     */
    name: string;

    is(type: WorkspaceType): boolean;
}

export class EmptyWorkspace implements Workspace {
    public name: string;

    constructor() {}

    is(_type: WorkspaceType): boolean {
        return false;
    }

}