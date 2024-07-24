import { Grid } from '../grid';
import { Workspace, WorkspaceType } from './workspace';

export class DiagramWorkspace extends Workspace {
    private readonly grid: Grid;
    private _context: CanvasRenderingContext2D;

    public constructor(name?: string) {
        super(name);
        this.grid = new Grid();
    }

    public is(type: WorkspaceType): boolean {
        return type === WorkspaceType.DIAGRAM;
    }

    public get context(): CanvasRenderingContext2D {
        return this._context;
    }

    public set context(context: CanvasRenderingContext2D) {
        this._context = context;
    }
}
