import { Grid } from "../grid";
import { Workspace } from "./workspace";

export class DiagramWorkspace implements Workspace {
    public name: string;

    private grid: Grid;
    
    public constructor(name?: string) {
        if (name) this.name = name;
        else this.name = 'Untitled';
        this.grid = new Grid();
    }
}