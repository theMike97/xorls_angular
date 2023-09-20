import { Grid } from "../grid";
import { Workspace, WorkspaceType } from "./workspace";

export class DiagramWorkspace extends Workspace {
    private grid: Grid;
    
    public constructor(name?: string) {
        super(name);
        this.grid = new Grid();
    }

    public is(type: WorkspaceType): boolean {
        return type === WorkspaceType.DIAGRAM;
    }

}