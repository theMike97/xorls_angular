import { DiagramWorkspace } from './diagram-workspace';

export enum WorkspaceType {
    DIAGRAM,
    CODE
}

export abstract class Workspace {
    /**
     * Name: name of the file in the project
     */
    name: string;
    width: number;
    height: number;

    constructor(name?: string) {
        this.name = (name) ? name : 'Untitled';
        this.width = 0;
        this.height = 0;
    }

    public setWidth(width: number): void {
        this.width = width;
    }

    public getWidth(): number {
        return this.width;
    }

    public setHeight(height: number): void {
        this.height = height;
    }

    public getHeight(): number {
        return this.height;
    }

    public abstract is(type: WorkspaceType): boolean;
}

export class EmptyWorkspace extends Workspace {
    constructor() {
        super();
        this.name = '';
        this.width = 0;
        this.height = 0;
    }

    is(_type: WorkspaceType): boolean {
        return false;
    }
}
