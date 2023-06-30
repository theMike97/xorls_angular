export enum WorkspaceType {
    DIAGRAM,
    CODE
}

export interface Workspace {
    /**
     * name: name of the file in the project
     */
    name: string;
}

export class EmptyWorkspace implements Workspace {
    public name: string;

    constructor() {}

}